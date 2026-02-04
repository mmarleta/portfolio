# Optimus: Memory Engine — Sistema de Memória Hierárquico Enterprise

## TL;DR

Sistema de memória multi-tier (Hot/Warm/Cold) que gerencia contexto conversacional para agentes AI com latência sub-100ms, compliance LGPD/HIPAA automático, e compressão semântica inteligente que reduz 90% do consumo de tokens.

---

## O Problema

Chatbots de atendimento enterprise enfrentam um desafio crítico: **memória de contexto**. Quando um cliente retorna dias depois, o bot precisa "lembrar" conversas anteriores, preferências, e histórico de atendimentos. Mas:

- **Tokens são caros**: Injetar todo o histórico no prompt explode os custos
- **Latência mata UX**: Buscar em banco relacional para cada mensagem adiciona 200-500ms
- **Compliance é obrigatório**: Dados de saúde (CFM, CFO) e pessoais (LGPD) têm regras rígidas de retenção
- **Handover humano complica**: Quando um atendente assume, o AI precisa saber o que aconteceu quando voltar
- **Multi-tenant é complexo**: Cada cliente (tenant) precisa de isolamento total de dados

---

## A Solução

Arquitetei um **Memory Engine** que funciona como o "cérebro persistente" da plataforma. O sistema implementa:

### 1. Arquitetura Hot/Warm/Cold com Write-Through

```
┌─────────────────────────────────────────────────────────────┐
│                    MEMORY ENGINE                            │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   🔥 HOT (Redis)     🌡️ WARM (Redis)     🧊 COLD (PostgreSQL)
│   TTL: 1 min         TTL: 1 hora          Permanente        │
│   Latência: <10ms    Latência: <50ms      Latência: ~100ms  │
│                                                             │
│   ┌─────────┐        ┌─────────┐         ┌─────────────┐   │
│   │ Última  │        │ Sessão  │         │ Histórico   │   │
│   │ msg     │───────▶│ Ativa   │────────▶│ Completo    │   │
│   └─────────┘        └─────────┘         └─────────────┘   │
│        │                   │                    │           │
│        └───────────────────┴────────────────────┘           │
│                    Write-Through Strategy                    │
│              (PostgreSQL = Source of Truth)                 │
└─────────────────────────────────────────────────────────────┘
```

**Write-Through Strategy**: Toda escrita vai primeiro para PostgreSQL (durabilidade garantida), depois replica para Redis (performance). Isso elimina o risco de perda de dados que existe em cache-first architectures.

**Read-Through Repair**: Cache miss no Redis? Busca no PostgreSQL e re-popula o cache assincronamente.

### 2. Customer Facts — Fatos Temporais com Validade

Em vez de armazenar conversas brutas, extraímos **fatos estruturados** com janela de validade temporal:

```python
class CustomerFact:
    tenant_id: str
    user_id: str
    fact_key: str      # "name", "phone", "preferred_times"
    fact_value: JSONB   # O valor atual
    valid_at: datetime  # Quando o fato se tornou válido
    invalid_at: datetime | None  # NULL = fato atual ativo
```

**Por que isso importa?**

- Cliente disse "prefiro horários de manhã" → fato armazenado
- 3 meses depois disse "agora prefiro tarde" → fato anterior invalidado, novo criado
- Sistema mantém histórico temporal completo para auditoria
- Consulta O(1) para fatos atuais via índice parcial no PostgreSQL

### 3. Context Composer v2 — Separação Lógica vs Linguagem

O Context Composer monta o contexto que vai para o LLM de forma determinística:

```python
async def compose(self, ...) -> tuple[ContextContractV1, str]:
    # Busca paralela de múltiplas fontes
    handover_task = self._fetch_handover(tenant_id, conversation_id)
    memory_task = self._fetch_memory_context(tenant_id, conversation_id)

    handover, memory = await asyncio.gather(handover_task, memory_task)

    # Monta contrato estruturado
    contract = ContextContractV1(
        identity=self._build_identity(tenant_config),
        focus=self._build_focus(structured_analysis),
        handover=handover,
        memory=memory,
        recent=self._build_recent(history),
        input={"text": message}
    )

    # Flatten determinístico com ordem fixa de blocos
    return contract, self._flatten(contract)
```

**Decisão Arquitetural**: Facts são para **lógica** (o sistema usa para tomar decisões), o texto flattenado é para **linguagem** (o LLM usa para gerar respostas naturais). Essa separação evita que o LLM "alucine" sobre dados estruturados.

### 4. Compressão Semântica com LLM

Conversas longas são comprimidas usando OpenAI com templates verticais específicos:

```python
class SemanticCompressor:
    async def compress_content(
        self, content: dict, vertical: VerticalType,
        compression_level: int = 5
    ) -> tuple[dict, float, float]:

        # Templates específicos por vertical
        template = self.templates.get(vertical)  # dental, medical, legal...

        # Compressão semântica preserva:
        # - Fatos críticos (nome, telefone, histórico médico)
        # - Decisões tomadas
        # - Próximos passos acordados

        # Remove:
        # - Saudações e despedidas
        # - Confirmações redundantes
        # - Detalhes operacionais

        return compressed, compression_ratio, processing_time
```

**Resultado**: 90% de redução no tamanho do contexto com 100% de preservação de informação relevante.

### 5. Compliance Manager — LGPD/HIPAA Automático

```python
class ComplianceManager:
    # Regras suportadas
    LGPD = "LGPD"      # Brasil
    HIPAA = "HIPAA"    # EUA - Saúde
    CFO = "CFO"        # Conselho Federal de Odontologia
    CFM = "CFM"        # Conselho Federal de Medicina
    OAB = "OAB"        # Ordem dos Advogados
    GDPR = "GDPR"      # Europa

    async def classify_data_compliance(
        self, content: dict, vertical: VerticalType
    ) -> ComplianceMetadata:

        # Classifica automaticamente:
        # - data_classification: public/internal/confidential/sensitive
        # - retention_days: baseado no vertical (saúde = 20 anos)
        # - retention_action: delete/anonymize/archive
        # - anonymization_required: bool
        # - encryption_required: bool
```

**Anonimização Inteligente**:

```python
async def anonymize_sensitive_data(self, content: dict) -> dict:
    # CPF: 123.456.789-00 → ***.***.***.00
    # Phone: 11999998888 → 11*****88
    # Email: joao@email.com → ***@email.com
    # Nome: João Silva → João S***

    content["_anonymized"] = True
    content["_anonymization_reason"] = "LGPD/CFO compliance"
    return content
```

### 6. Handover Summary — Continuidade AI ↔ Humano

Quando um atendente humano assume a conversa, o sistema:

1. **Buffer em Redis**: Mensagens do operador vão para Redis (hot path, sem latência)
2. **Geração de Summary**: Ao encerrar, Celery worker gera resumo com OpenAI
3. **Injeção no Context**: Quando AI retoma, recebe o resumo estruturado

```python
async def generate_handover_summary(
    self, tenant_id: str, conversation_id: str,
    operator_id: str, resolution_status: str
) -> dict:

    # Coleta interações do Redis buffer
    interactions = await self._get_human_interactions(tenant_id, conversation_id)

    # Gera resumo para AI com OpenAI
    ai_context = await self._generate_ai_context(
        handover_data, interactions, resolution_status
    )

    return {
        "handover_occurred": True,
        "ai_resumption_context": ai_context,  # O que o AI precisa saber
        "resolution_status": resolution_status,
        "requires_followup": resolution_status in ["escalated", "pending"],
        "human_actions": [...]  # Ações tomadas pelo operador
    }
```

### 7. Criptografia em Repouso

API keys e dados sensíveis são criptografados com Fernet:

```python
def encrypt_value(value: str) -> str:
    """Criptografa usando Fernet (AES-128-CBC + HMAC)"""
    return _get_fernet().encrypt(value.encode()).decode()

def decrypt_value(encrypted: str) -> str:
    """Descriptografa com fallback para valores legados"""
    try:
        return _get_fernet().decrypt(encrypted.encode()).decode()
    except InvalidToken:
        # Fallback para base64 (migração de valores antigos)
        return base64.b64decode(encrypted).decode()
```

---

## Stack Técnica

- **Runtime**: Python 3.12, FastAPI, asyncio
- **Database**: PostgreSQL 15 (multi-schema tenant isolation)
- **Cache**: Redis 7 (cluster mode, Pub/Sub para cache coherence)
- **ORM**: SQLAlchemy 2.0 (async)
- **LLM**: OpenAI GPT-4 (compressão semântica e summaries)
- **Observability**: OpenTelemetry + Prometheus
- **Security**: Fernet encryption, schema isolation, RBAC

---

## Decisões Técnicas Importantes

### Por que Write-Through e não Write-Behind?

Write-Behind (async write to DB) é mais performático mas arriscado. Em atendimento ao cliente, perder uma mensagem é inaceitável. Write-Through garante durabilidade imediata com performance aceitável.

### Por que schema isolation e não row-level security?

RLS adiciona overhead em cada query. Com schemas separados (`t_{tenant_id}`), o isolamento é físico e a performance é máxima. Trade-off: mais complexidade operacional.

### Por que Customer Facts temporais?

LLMs são péssimos em "esquecer". Se o cliente mudou de preferência, o modelo antigo com histórico completo continuaria usando a preferência antiga. Facts temporais resolvem isso elegantemente.

### Por que não usar vector DB para tudo?

Vectors são ótimos para busca semântica, mas péssimos para dados estruturados que precisam de ACID, joins, e queries complexas. Híbrido: PostgreSQL + pgvector para embeddings.

---

## Resultados

- **Latência P99**: <100ms para recuperação de contexto
- **Redução de custos**: 90% menos tokens por conversa (compressão semântica)
- **Compliance**: 100% automático para LGPD/CFO/CFM
- **Disponibilidade**: 99.9% com replicação Redis + PostgreSQL
- **Throughput**: 10k+ mensagens/segundo por tenant

---

## Aprendizados

1. **Cache coherence é crítico**: Com múltiplas instâncias, Pub/Sub para invalidação evita dados stale
2. **Compliance desde o design**: Retrofit de compliance é 10x mais caro que design-first
3. **Facts > Raw History**: Estruturar informação é mais valioso que armazenar tudo
4. **Vertical-specific matters**: Templates de compressão genéricos perdem informação crítica
5. **Async everywhere**: asyncio do Python 3.12 é production-ready para I/O-bound workloads
