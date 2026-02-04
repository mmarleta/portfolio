<template>
  <div class="min-h-screen bg-gray-950 text-gray-100">
    <!-- Hero Section -->
    <section class="relative py-20 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-emerald-950/50 via-gray-950 to-gray-950"></div>
      <div class="absolute top-20 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl"></div>
      <div class="absolute bottom-10 right-10 w-96 h-96 bg-emerald-600/5 rounded-full blur-3xl"></div>
      
      <div class="container mx-auto px-6 relative z-10">
        <NuxtLink to="/" class="inline-flex items-center text-emerald-400 hover:text-emerald-300 mb-8 transition-colors">
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
          Voltar ao Portfolio
        </NuxtLink>
        
        <div class="flex items-center gap-4 mb-6">
          <span class="px-4 py-2 bg-emerald-500/20 text-emerald-400 rounded-full text-sm font-medium border border-emerald-500/30">
            Optimus Platform
          </span>
          <span class="px-4 py-2 bg-gray-800 text-gray-300 rounded-full text-sm">
            Business Intelligence
          </span>
        </div>
        
        <h1 class="text-5xl md:text-6xl font-bold mb-6">
          <span class="bg-gradient-to-r from-emerald-400 via-emerald-300 to-teal-400 bg-clip-text text-transparent">
            Rules Engine
          </span>
        </h1>
        
        <p class="text-xl text-gray-400 max-w-3xl mb-8">
          Motor de regras Python-native que elimina o overhead interpretado do JSONLogic.
          Avaliação em sub-millisegundo, regras criadas em runtime por tenant,
          type safety completo.
        </p>

        <div class="flex flex-wrap gap-3">
          <span class="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300">Python Lambda</span>
          <span class="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300">Sub-millisecond</span>
          <span class="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300">Multi-tenant</span>
          <span class="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300">Event-driven</span>
          <span class="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300">Type Safe</span>
          <span class="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300">Cache Coherence</span>
        </div>
      </div>
    </section>

    <!-- O Problema do JSONLogic -->
    <section class="py-16 border-t border-gray-800">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold mb-8 text-red-400">O Problema: Por que JSONLogic não escala</h2>
        
        <div class="grid md:grid-cols-2 gap-8 mb-12">
          <!-- JSONLogic Problems -->
          <div class="bg-red-950/20 rounded-xl p-6 border border-red-900/30">
            <h3 class="text-xl font-bold mb-4 text-red-400">❌ JSONLogic - A Armadilha</h3>
            
            <div class="bg-gray-900 rounded-lg p-4 mb-4">
              <pre class="text-sm text-gray-300 overflow-x-auto"><code>// Regra "simples" em JSONLogic
{
  "and": [
    {"&lt;": [{"var": "last_visit_days"}, 180]},
    {"==": [{"var": "has_insurance"}, true]},
    {"or": [
      {"&gt;": [{"var": "pending_treatments"}, 0]},
      {"in": [{"var": "vertical"}, ["dental", "medical"]]}
    ]}
  ]
}</code></pre>
            </div>
            
            <ul class="space-y-3 text-gray-400">
              <li class="flex items-start gap-2">
                <span class="text-red-400 mt-1">⚠️</span>
                <span><strong class="text-red-300">Interpretado recursivamente</strong> - cada operador é uma chamada de função aninhada</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-red-400 mt-1">⚠️</span>
                <span><strong class="text-red-300">Operadores limitados</strong> - só suporta &lt;, &gt;, ==, in, and, or</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-red-400 mt-1">⚠️</span>
                <span><strong class="text-red-300">Sem type checking</strong> - erros só aparecem em runtime</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-red-400 mt-1">⚠️</span>
                <span><strong class="text-red-300">Debug impossível</strong> - stack traces incompreensíveis</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-red-400 mt-1">⚠️</span>
                <span><strong class="text-red-300">~50-200ms</strong> para avaliar 100 regras complexas</span>
              </li>
            </ul>
          </div>

          <!-- Python Native -->
          <div class="bg-emerald-950/20 rounded-xl p-6 border border-emerald-900/30">
            <h3 class="text-xl font-bold mb-4 text-emerald-400">✅ Python-Native - A Solução</h3>
            
            <div class="bg-gray-900 rounded-lg p-4 mb-4">
              <pre class="text-sm text-gray-300 overflow-x-auto"><code># Mesma regra em Python-native
lambda facts: (
    facts.get('last_visit_days', 999) &lt; 180 and
    facts.get('has_insurance') is True and
    (facts.get('pending_treatments', 0) &gt; 0 or
     facts.get('vertical') in ('dental', 'medical'))
)</code></pre>
            </div>
            
            <ul class="space-y-3 text-gray-400">
              <li class="flex items-start gap-2">
                <span class="text-emerald-400 mt-1">✓</span>
                <span><strong class="text-emerald-300">Compilado uma vez</strong> - bytecode Python nativo</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-emerald-400 mt-1">✓</span>
                <span><strong class="text-emerald-300">Full Python power</strong> - regex, datetime, math, tudo</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-emerald-400 mt-1">✓</span>
                <span><strong class="text-emerald-300">Type hints + mypy</strong> - erros antes do deploy</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-emerald-400 mt-1">✓</span>
                <span><strong class="text-emerald-300">Debug normal</strong> - pdb, breakpoints, stack traces</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-emerald-400 mt-1">✓</span>
                <span><strong class="text-emerald-300">&lt;0.5ms</strong> para avaliar 100 regras - 1000x mais rápido</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Benchmark -->
        <div class="bg-gray-900/50 rounded-xl p-8 border border-gray-800">
          <h3 class="text-xl font-bold mb-6 text-emerald-400">📊 Benchmark Real: JSONLogic vs Python-Native</h3>
          
          <div class="grid md:grid-cols-4 gap-6">
            <div class="text-center p-4 bg-gray-800/50 rounded-lg">
              <div class="text-4xl font-bold text-red-400 mb-2">~150ms</div>
              <div class="text-sm text-gray-400">JSONLogic (100 regras)</div>
            </div>
            <div class="text-center p-4 bg-gray-800/50 rounded-lg">
              <div class="text-4xl font-bold text-emerald-400 mb-2">&lt;0.5ms</div>
              <div class="text-sm text-gray-400">Python-Native (100 regras)</div>
            </div>
            <div class="text-center p-4 bg-gray-800/50 rounded-lg">
              <div class="text-4xl font-bold text-emerald-400 mb-2">300x</div>
              <div class="text-sm text-gray-400">Mais rápido (cold)</div>
            </div>
            <div class="text-center p-4 bg-gray-800/50 rounded-lg">
              <div class="text-4xl font-bold text-emerald-400 mb-2">1000x</div>
              <div class="text-sm text-gray-400">Mais rápido (cached)</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Arquitetura do Rules Engine -->
    <section class="py-16 border-t border-gray-800">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold mb-8">Arquitetura: Rules Engine + Coordinator</h2>
        
        <div class="bg-gray-900/50 rounded-xl p-8 border border-gray-800 mb-8">
          <pre class="text-sm text-emerald-400 overflow-x-auto"><code>┌─────────────────────────────────────────────────────────────────────────┐
│                        Request Flow (sub-ms target)                      │
└─────────────────────────────────────────────────────────────────────────┘

   Client Request
         │
         ▼
┌─────────────────┐     ┌──────────────────────┐     ┌─────────────────┐
│    Backend      │────▶│  Rules Coordinator   │────▶│  Rules Engine   │
│  Orchestrator   │     │  (Cache + Fallback)  │     │   (Port 8040)   │
└─────────────────┘     └──────────────────────┘     └─────────────────┘
                               │                              │
                               │                              │
                        ┌──────▼──────┐                ┌──────▼──────┐
                        │ Redis Cache │                │ PostgreSQL  │
                        │  (15 min)   │                │  (Rules DB) │
                        └─────────────┘                └─────────────┘

┌─────────────────────────────────────────────────────────────────────────┐
│                    Fallback Hierarchy (never fails)                      │
├─────────────────────────────────────────────────────────────────────────┤
│  1. Rules Engine API → Primary (target &lt;50ms)                           │
│  2. Redis Cache      → Secondary (target &lt;5ms)                          │
│  3. Basic Fallback   → Always available (keyword-based)                  │
└─────────────────────────────────────────────────────────────────────────┘</code></pre>
        </div>

        <!-- Fluxo detalhado -->
        <div class="grid md:grid-cols-3 gap-6">
          <div class="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
            <div class="text-3xl mb-4">🎯</div>
            <h3 class="text-lg font-bold mb-3 text-emerald-400">Rules Engine</h3>
            <p class="text-gray-400 text-sm mb-4">
              Microsserviço dedicado que compila e executa regras Python-native.
              Cada tenant tem suas próprias regras isoladas.
            </p>
            <ul class="text-sm text-gray-400 space-y-2">
              <li>• Compilação de lambdas Python</li>
              <li>• Sandboxing de execução</li>
              <li>• Métricas por regra</li>
              <li>• Multi-vertical support</li>
            </ul>
          </div>

          <div class="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
            <div class="text-3xl mb-4">🔄</div>
            <h3 class="text-lg font-bold mb-3 text-emerald-400">Rules Coordinator</h3>
            <p class="text-gray-400 text-sm mb-4">
              Proxy inteligente no Backend Orchestrator com cache, 
              circuit breaker e fallback multi-tier.
            </p>
            <ul class="text-sm text-gray-400 space-y-2">
              <li>• Cache de avaliações (15min TTL)</li>
              <li>• Memory context enrichment</li>
              <li>• Circuit breaker protection</li>
              <li>• Graceful degradation</li>
            </ul>
          </div>

          <div class="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
            <div class="text-3xl mb-4">🧠</div>
            <h3 class="text-lg font-bold mb-3 text-emerald-400">Context Enrichment</h3>
            <p class="text-gray-400 text-sm mb-4">
              Integração com Memory Engine para enriquecer fatos
              com contexto histórico do cliente.
            </p>
            <ul class="text-sm text-gray-400 space-y-2">
              <li>• Frequência de interação</li>
              <li>• Nível de urgência detectado</li>
              <li>• Indicadores de dor/emergência</li>
              <li>• Padrões inteligentes</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Runtime Rule Creation -->
    <section class="py-16 border-t border-gray-800 bg-gray-900/30">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold mb-8">Runtime Rule Creation: Cada Negócio é Único</h2>
        
        <p class="text-gray-400 mb-8 max-w-3xl">
          O grande diferencial do Rules Engine é permitir que cada tenant crie suas 
          próprias regras <strong class="text-emerald-400">em tempo real</strong>, sem deploy,
          sem downtime, sem código.
        </p>

        <div class="grid md:grid-cols-2 gap-8 mb-12">
          <!-- API para criar regras -->
          <div class="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
            <h3 class="text-lg font-bold mb-4 text-emerald-400">API de Criação de Regras</h3>
            <div class="bg-gray-800 rounded-lg p-4">
              <pre class="text-sm text-gray-300 overflow-x-auto"><code>POST /api/rules/
{
  "name": "Protocolo Emergência Dental",
  "vertical": "dental",
  "event_types": ["message_received"],
  "condition_code": """
    lambda facts: (
      any(word in facts.get('message_content', '').lower()
          for word in ['dor', 'sangue', 'inchado']) and
      facts.get('customer_urgency_level') == 'high'
    )
  """,
  "actions": [{
    "type": "emergency_protocol",
    "params": {
      "escalate_to_human": true,
      "priority": "urgent",
      "notification_channel": "whatsapp"
    }
  }],
  "priority": 1,
  "timeout_seconds": 30
}</code></pre>
            </div>
          </div>

          <!-- Exemplos por vertical -->
          <div class="space-y-4">
            <div class="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
              <h4 class="font-bold text-emerald-400 mb-2">🦷 Regra Dental</h4>
              <p class="text-sm text-gray-400">
                Lembrete de limpeza baseado em última visita + status do seguro.
                Se passou 6 meses e tem cobertura → agenda preventiva.
              </p>
            </div>

            <div class="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
              <h4 class="font-bold text-emerald-400 mb-2">🛒 Regra E-commerce</h4>
              <p class="text-sm text-gray-400">
                Carrinho abandonado há 2h + valor > R$200 + cliente recorrente →
                oferta de 10% desconto + frete grátis.
              </p>
            </div>

            <div class="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
              <h4 class="font-bold text-emerald-400 mb-2">⚖️ Regra Legal</h4>
              <p class="text-sm text-gray-400">
                Prazo processual em 48h + cliente não respondeu última mensagem →
                alerta urgente + escalação para advogado responsável.
              </p>
            </div>
          </div>
        </div>

        <!-- Isolamento Multi-tenant -->
        <div class="bg-emerald-950/20 rounded-xl p-8 border border-emerald-900/30">
          <h3 class="text-xl font-bold mb-6 text-emerald-400">🔒 Isolamento Multi-tenant Completo</h3>
          
          <div class="grid md:grid-cols-3 gap-6">
            <div class="text-center">
              <div class="text-4xl mb-3">🏥</div>
              <div class="font-bold text-white mb-2">Clínica ABC</div>
              <div class="text-sm text-gray-400">
                47 regras ativas<br>
                Vertical: dental<br>
                Foco: agendamento
              </div>
            </div>
            <div class="text-center">
              <div class="text-4xl mb-3">🛍️</div>
              <div class="font-bold text-white mb-2">Loja XYZ</div>
              <div class="text-sm text-gray-400">
                89 regras ativas<br>
                Vertical: e-commerce<br>
                Foco: conversão
              </div>
            </div>
            <div class="text-center">
              <div class="text-4xl mb-3">⚖️</div>
              <div class="font-bold text-white mb-2">Advocacia 123</div>
              <div class="text-sm text-gray-400">
                23 regras ativas<br>
                Vertical: legal<br>
                Foco: prazos
              </div>
            </div>
          </div>
          
          <p class="text-gray-400 text-sm mt-6 text-center">
            Cada tenant tem regras completamente isoladas. Nenhuma regra da Clínica ABC
            afeta a Loja XYZ. Zero vazamento de lógica de negócio entre clientes.
          </p>
        </div>
      </div>
    </section>

    <!-- Código Real -->
    <section class="py-16 border-t border-gray-800">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold mb-8">Deep Dive: Como Funciona</h2>
        
        <!-- Rules Coordinator -->
        <div class="mb-12">
          <h3 class="text-xl font-bold mb-4 text-emerald-400">Rules Coordinator: Cache + Fallback Inteligente</h3>
          <div class="bg-gray-900 rounded-xl p-6 border border-gray-800">
            <pre class="text-sm text-gray-300 overflow-x-auto"><code>class RulesCoordinator:
    """
    🎯 Coordenador Central de Regras
    
    Responsabilidades:
    1. Proxy inteligente para Rules Engine com &lt;50ms target
    2. Cache Redis para performance otimizada
    3. Integração com Memory Coordinator para contexto enriquecido
    4. Fallback quando Rules Engine falha
    5. Circuit breaker para proteção contra falhas
    """

    async def evaluate_rules_for_conversation(
        self,
        tenant_id: str,
        conversation_data: dict,
        message_content: str,
        memory_context: dict | None = None,
    ) -> dict:
        
        # 1. 🧠 Enriquecer dados com Memory Coordinator
        enriched_facts = await self._enrich_with_memory_context(
            tenant_id, conversation_data, message_content, memory_context
        )

        # 2. 🎯 Tentar Rules Engine (primary)
        try:
            async with circuit_breaker_context("rules_engine_evaluate"):
                response = await self.rules_client.post(
                    "/api/evaluation/evaluate",
                    json={
                        "tenant_id": tenant_id,
                        "event_type": "message_received",
                        "facts": enriched_facts,
                    }
                )
                
                if response.status_code == 200:
                    result = response.json()
                    # Cache para reuso futuro
                    await self._cache_evaluation_result(tenant_id, enriched_facts, result)
                    return result

        except Exception as e:
            logger.warning(f"Rules Engine failed: {e}")

        # 3. 🔄 Fallback para Redis cache
        cache_result = await self._evaluate_via_redis_cache(tenant_id, enriched_facts)
        if cache_result:
            return cache_result

        # 4. 🚨 Basic fallback (keyword-based, nunca falha)
        return await self._evaluate_basic_fallback(tenant_id, enriched_facts)</code></pre>
          </div>
        </div>

        <!-- Memory Context Enrichment -->
        <div class="mb-12">
          <h3 class="text-xl font-bold mb-4 text-emerald-400">Context Enrichment: Regras com Contexto Histórico</h3>
          <div class="bg-gray-900 rounded-xl p-6 border border-gray-800">
            <pre class="text-sm text-gray-300 overflow-x-auto"><code>def _extract_intelligent_patterns(self, memory_context: dict) -> dict:
    """
    Extrai padrões inteligentes do contexto de memória
    para regras mais sofisticadas
    """
    patterns = {
        "interaction_frequency": "new",      # new | regular | frequent
        "customer_urgency_level": "normal",  # normal | high
        "preferred_communication_style": "formal",
        "likely_appointment_need": False,
        "pain_indicators": False,
        "satisfaction_level": "neutral",
    }

    context_content = memory_context.get("context", "").lower()
    memory_items = memory_context.get("memory_items", [])

    # Detecta urgência (dor, emergência, sangramento)
    if any(word in context_content for word in ["dor", "urgente", "emergência", "pain"]):
        patterns["customer_urgency_level"] = "high"
        patterns["pain_indicators"] = True

    # Detecta necessidade de agendamento
    if any(word in context_content for word in ["agendar", "consulta", "appointment"]):
        patterns["likely_appointment_need"] = True

    # Analisa frequência de interação
    if len(memory_items) > 5:
        patterns["interaction_frequency"] = "frequent"
    elif len(memory_items) > 2:
        patterns["interaction_frequency"] = "regular"

    return patterns

# Resultado: regras podem usar facts enriquecidos
# facts = {
#     "message_content": "Estou com dor no dente",
#     "customer_urgency_level": "high",
#     "pain_indicators": True,
#     "interaction_frequency": "regular",
#     "has_previous_appointments": True
# }</code></pre>
          </div>
        </div>

        <!-- Event Types -->
        <div>
          <h3 class="text-xl font-bold mb-4 text-emerald-400">Event-Driven: Triggers Automáticos</h3>
          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div class="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
              <div class="text-emerald-400 font-mono text-sm mb-2">message_received</div>
              <p class="text-gray-400 text-xs">Nova mensagem do cliente</p>
            </div>
            <div class="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
              <div class="text-emerald-400 font-mono text-sm mb-2">conversation_started</div>
              <p class="text-gray-400 text-xs">Início de conversa</p>
            </div>
            <div class="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
              <div class="text-emerald-400 font-mono text-sm mb-2">handover_completed</div>
              <p class="text-gray-400 text-xs">Atendente finalizou</p>
            </div>
            <div class="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
              <div class="text-emerald-400 font-mono text-sm mb-2">appointment_scheduled</div>
              <p class="text-gray-400 text-xs">Agendamento confirmado</p>
            </div>
            <div class="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
              <div class="text-emerald-400 font-mono text-sm mb-2">cart_abandoned</div>
              <p class="text-gray-400 text-xs">Carrinho abandonado</p>
            </div>
            <div class="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
              <div class="text-emerald-400 font-mono text-sm mb-2">deadline_approaching</div>
              <p class="text-gray-400 text-xs">Prazo se aproximando</p>
            </div>
            <div class="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
              <div class="text-emerald-400 font-mono text-sm mb-2">sentiment_negative</div>
              <p class="text-gray-400 text-xs">Cliente insatisfeito</p>
            </div>
            <div class="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
              <div class="text-emerald-400 font-mono text-sm mb-2">time_based</div>
              <p class="text-gray-400 text-xs">Trigger por horário</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Resultados -->
    <section class="py-16 border-t border-gray-800 bg-gray-900/30">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold mb-8">Resultados: Regras que Escalam</h2>
        
        <div class="grid md:grid-cols-4 gap-6 mb-12">
          <div class="bg-gray-800/50 rounded-xl p-6 text-center border border-gray-700">
            <div class="text-4xl font-bold text-emerald-400 mb-2">&lt;50ms</div>
            <div class="text-gray-400 text-sm">Latência P95</div>
            <div class="text-gray-500 text-xs mt-1">Target de performance</div>
          </div>
          <div class="bg-gray-800/50 rounded-xl p-6 text-center border border-gray-700">
            <div class="text-4xl font-bold text-emerald-400 mb-2">1000x</div>
            <div class="text-gray-400 text-sm">vs JSONLogic</div>
            <div class="text-gray-500 text-xs mt-1">Com cache aquecido</div>
          </div>
          <div class="bg-gray-800/50 rounded-xl p-6 text-center border border-gray-700">
            <div class="text-4xl font-bold text-emerald-400 mb-2">3000+</div>
            <div class="text-gray-400 text-sm">Regras em Produção</div>
            <div class="text-gray-500 text-xs mt-1">Dental + E-commerce + Medical</div>
          </div>
          <div class="bg-gray-800/50 rounded-xl p-6 text-center border border-gray-700">
            <div class="text-4xl font-bold text-emerald-400 mb-2">100%</div>
            <div class="text-gray-400 text-sm">Uptime Avaliação</div>
            <div class="text-gray-500 text-xs mt-1">Fallback nunca falha</div>
          </div>
        </div>

        <!-- Decisões técnicas -->
        <div class="bg-gray-900/50 rounded-xl p-8 border border-gray-800">
          <h3 class="text-xl font-bold mb-6 text-emerald-400">💡 Decisões Técnicas Chave</h3>
          
          <div class="space-y-6">
            <div class="flex gap-4">
              <div class="text-emerald-400 text-2xl">1</div>
              <div>
                <h4 class="font-bold text-white mb-2">Python Lambda vs DSL Customizada</h4>
                <p class="text-gray-400 text-sm">
                  Consideramos criar uma DSL (Domain-Specific Language) para regras, mas decidimos 
                  usar Python lambda diretamente. Razão: desenvolvedores já conhecem Python, 
                  debugging normal, type hints funcionam, ecosystem inteiro disponível.
                  O sandboxing é feito via AST parsing + restricted builtins.
                </p>
              </div>
            </div>

            <div class="flex gap-4">
              <div class="text-emerald-400 text-2xl">2</div>
              <div>
                <h4 class="font-bold text-white mb-2">Cache de 15 minutos (não infinito)</h4>
                <p class="text-gray-400 text-sm">
                  Regras são cacheadas por 15 minutos, não infinitamente. Isso permite que 
                  alterações em regras (via API) sejam refletidas em tempo razoável sem 
                  necessidade de invalidação manual. O tradeoff entre performance e freshness
                  foi calibrado em produção.
                </p>
              </div>
            </div>

            <div class="flex gap-4">
              <div class="text-emerald-400 text-2xl">3</div>
              <div>
                <h4 class="font-bold text-white mb-2">Fallback Keyword-Based (Sempre Funciona)</h4>
                <p class="text-gray-400 text-sm">
                  O último nível de fallback usa análise simples de keywords. Não é sofisticado,
                  mas garante que o sistema NUNCA falha em avaliar uma mensagem. "Dor" → urgência,
                  "agendar" → appointment. Simples, mas funcional como último recurso.
                </p>
              </div>
            </div>

            <div class="flex gap-4">
              <div class="text-emerald-400 text-2xl">4</div>
              <div>
                <h4 class="font-bold text-white mb-2">Microsserviço Separado (não library)</h4>
                <p class="text-gray-400 text-sm">
                  Rules Engine é um microsserviço independente, não uma library importada.
                  Isso permite escalar horizontalmente, deploy independente, e isolamento
                  de falhas. Se o Rules Engine crashar, o Coordinator usa cache/fallback.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Stack Técnico -->
    <section class="py-16 border-t border-gray-800">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold mb-8">Stack Técnico</h2>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div class="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
            <div class="text-emerald-400 font-bold mb-2">Runtime</div>
            <p class="text-gray-400 text-sm">Python 3.11+ (bytecode optimized)</p>
          </div>
          <div class="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
            <div class="text-emerald-400 font-bold mb-2">Framework</div>
            <p class="text-gray-400 text-sm">FastAPI + Pydantic</p>
          </div>
          <div class="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
            <div class="text-emerald-400 font-bold mb-2">Cache</div>
            <p class="text-gray-400 text-sm">Redis (cache + pub/sub)</p>
          </div>
          <div class="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
            <div class="text-emerald-400 font-bold mb-2">Storage</div>
            <p class="text-gray-400 text-sm">PostgreSQL (rules metadata)</p>
          </div>
          <div class="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
            <div class="text-emerald-400 font-bold mb-2">Isolation</div>
            <p class="text-gray-400 text-sm">Per-tenant rule namespaces</p>
          </div>
          <div class="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
            <div class="text-emerald-400 font-bold mb-2">Circuit Breaker</div>
            <p class="text-gray-400 text-sm">5 failures → 60s recovery</p>
          </div>
          <div class="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
            <div class="text-emerald-400 font-bold mb-2">HTTP Client</div>
            <p class="text-gray-400 text-sm">HTTPX async pooling</p>
          </div>
          <div class="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
            <div class="text-emerald-400 font-bold mb-2">Metrics</div>
            <p class="text-gray-400 text-sm">Prometheus + per-rule tracking</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-16 border-t border-gray-800">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-3xl font-bold mb-4">Quer discutir mais sobre Rules Engines?</h2>
        <p class="text-gray-400 mb-8">
          JSONLogic vs Python-native, DSLs customizadas, ou como fazer regras escalarem - 
          adoro falar sobre esses temas.
        </p>
        <NuxtLink 
          to="/contato" 
          class="inline-flex items-center px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-medium rounded-lg transition-colors"
        >
          Entrar em Contato
          <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'Rules Engine - Python-Native 1000x mais rápido que JSONLogic | Marcelo Marleta',
  meta: [
    { 
      name: 'description', 
      content: 'Motor de regras Python-native que elimina JSONLogic. Avaliação sub-millisecond, regras em runtime por tenant, type safety completo.' 
    }
  ]
})
</script>
