<template>
  <div class="min-h-screen bg-gray-950 text-gray-100">
    <!-- Header -->
    <header class="border-b border-gray-800 bg-gray-950/80 backdrop-blur-sm sticky top-0 z-50">
      <nav class="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <NuxtLink to="/" class="text-xl font-bold text-emerald-400 hover:text-emerald-300 transition-colors">
          ← Voltar
        </NuxtLink>
      </nav>
    </header>

    <main class="max-w-4xl mx-auto px-6 py-16">
      <!-- Hero -->
      <div class="mb-16">
        <span class="inline-block px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded-full text-sm mb-4">
          Sistema de Memória
        </span>
        <h1 class="text-4xl md:text-5xl font-bold mb-6">
          Memory Engine
        </h1>
        <p class="text-xl text-gray-400 leading-relaxed">
          Sistema de memória hierárquico multi-tier (Hot/Warm/Cold) com compressão semântica 
          inteligente, compliance automático LGPD/HIPAA, e context injection para continuidade AI ↔ Humano.
        </p>
      </div>

      <!-- Métricas -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        <div class="bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center">
          <div class="text-3xl font-bold text-emerald-400">&lt;100ms</div>
          <div class="text-sm text-gray-500 mt-1">Latência p99</div>
        </div>
        <div class="bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center">
          <div class="text-3xl font-bold text-emerald-400">90%</div>
          <div class="text-sm text-gray-500 mt-1">Redução de Tokens</div>
        </div>
        <div class="bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center">
          <div class="text-3xl font-bold text-emerald-400">6</div>
          <div class="text-sm text-gray-500 mt-1">Compliance Rules</div>
        </div>
        <div class="bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center">
          <div class="text-3xl font-bold text-emerald-400">99.9%</div>
          <div class="text-sm text-gray-500 mt-1">Durabilidade</div>
        </div>
      </div>

      <!-- Problema -->
      <section class="mb-16">
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
          <span class="text-red-400">⚡</span> O Problema
        </h2>
        <div class="bg-gray-900/30 border border-gray-800 rounded-xl p-8">
          <p class="text-gray-300 leading-relaxed mb-4">
            Chatbots enterprise precisam de <strong class="text-white">memória de contexto</strong>. 
            Quando um cliente retorna dias depois, o bot precisa lembrar conversas anteriores, 
            preferências e histórico de atendimentos.
          </p>
          <ul class="space-y-3 text-gray-400">
            <li class="flex items-start gap-2">
              <span class="text-red-400 mt-1">✗</span>
              <span><strong class="text-white">Tokens são caros</strong>: Injetar todo o histórico no prompt explode os custos</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-red-400 mt-1">✗</span>
              <span><strong class="text-white">Latência mata UX</strong>: Busca em banco relacional adiciona 200-500ms</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-red-400 mt-1">✗</span>
              <span><strong class="text-white">Compliance obrigatório</strong>: LGPD, CFM, CFO têm regras rígidas de retenção</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-red-400 mt-1">✗</span>
              <span><strong class="text-white">Handover complica</strong>: AI precisa saber o que aconteceu quando humano atendeu</span>
            </li>
          </ul>
        </div>
      </section>

      <!-- Solução -->
      <section class="mb-16">
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
          <span class="text-emerald-400">✨</span> A Solução
        </h2>
        <div class="space-y-6">
          <!-- Hot/Warm/Cold -->
          <div class="bg-gray-900/30 border border-gray-800 rounded-xl p-8">
            <h3 class="text-xl font-semibold text-emerald-400 mb-4">Arquitetura Hot/Warm/Cold</h3>
            <p class="text-gray-300 leading-relaxed mb-4">
              Sistema de armazenamento em 3 tiers com estratégia <strong class="text-white">Write-Through</strong>:
            </p>
            <div class="grid md:grid-cols-3 gap-4 mb-4">
              <div class="bg-gray-800/50 rounded-lg p-4 text-center">
                <div class="text-2xl mb-2">🔥</div>
                <div class="text-emerald-400 font-mono font-semibold">HOT</div>
                <div class="text-gray-500 text-sm">Redis · TTL 1min</div>
                <div class="text-gray-600 text-xs mt-1">&lt;10ms latência</div>
              </div>
              <div class="bg-gray-800/50 rounded-lg p-4 text-center">
                <div class="text-2xl mb-2">🌡️</div>
                <div class="text-orange-400 font-mono font-semibold">WARM</div>
                <div class="text-gray-500 text-sm">Redis · TTL 1h</div>
                <div class="text-gray-600 text-xs mt-1">&lt;50ms latência</div>
              </div>
              <div class="bg-gray-800/50 rounded-lg p-4 text-center">
                <div class="text-2xl mb-2">🧊</div>
                <div class="text-blue-400 font-mono font-semibold">COLD</div>
                <div class="text-gray-500 text-sm">PostgreSQL</div>
                <div class="text-gray-600 text-xs mt-1">~100ms · Permanente</div>
              </div>
            </div>
            <p class="text-gray-500 text-sm">
              <strong class="text-gray-300">Write-Through</strong>: Toda escrita vai primeiro para PostgreSQL 
              (durabilidade garantida), depois replica para Redis (performance).
            </p>
          </div>

          <!-- Customer Facts -->
          <div class="bg-gray-900/30 border border-gray-800 rounded-xl p-8">
            <h3 class="text-xl font-semibold text-emerald-400 mb-4">Customer Facts Temporais</h3>
            <p class="text-gray-300 leading-relaxed mb-4">
              Em vez de armazenar conversas brutas, extraímos <strong class="text-white">fatos estruturados</strong> 
              com janela de validade temporal:
            </p>
            <div class="bg-gray-800/50 rounded-lg p-4 font-mono text-sm overflow-x-auto">
              <pre class="text-gray-300">
CustomerFact:
  fact_key: "preferred_times"
  fact_value: {"morning": true}
  valid_at: 2025-01-01T10:00:00Z
  invalid_at: null  ← fato atualmente ativo

# Cliente mudou preferência 3 meses depois:
  fact_key: "preferred_times"
  fact_value: {"afternoon": true}
  valid_at: 2025-04-01T14:00:00Z
  invalid_at: null
              </pre>
            </div>
            <p class="text-gray-500 text-sm mt-4">
              Histórico temporal completo para auditoria. Consulta O(1) para fatos atuais via índice parcial.
            </p>
          </div>

          <!-- Compressão Semântica -->
          <div class="bg-gray-900/30 border border-gray-800 rounded-xl p-8">
            <h3 class="text-xl font-semibold text-emerald-400 mb-4">Compressão Semântica com LLM</h3>
            <p class="text-gray-300 leading-relaxed mb-4">
              Conversas longas são comprimidas usando OpenAI com templates verticais específicos 
              (dental, médico, jurídico):
            </p>
            <ul class="space-y-2 text-gray-400">
              <li class="flex items-start gap-2">
                <span class="text-emerald-400 mt-1">✓</span>
                <span><strong class="text-white">Preserva</strong>: Fatos críticos, decisões, próximos passos</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-emerald-400 mt-1">✓</span>
                <span><strong class="text-white">Remove</strong>: Saudações, confirmações redundantes, detalhes operacionais</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-emerald-400 mt-1">✓</span>
                <span><strong class="text-white">Resultado</strong>: 90% redução com 100% preservação de informação relevante</span>
              </li>
            </ul>
          </div>

          <!-- Compliance -->
          <div class="bg-gray-900/30 border border-gray-800 rounded-xl p-8">
            <h3 class="text-xl font-semibold text-emerald-400 mb-4">Compliance Automático</h3>
            <p class="text-gray-300 leading-relaxed mb-4">
              Classificação e tratamento automático baseado no vertical:
            </p>
            <div class="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
              <div class="bg-gray-800/50 rounded-lg p-3 text-center">
                <div class="text-sm font-semibold text-white">LGPD</div>
                <div class="text-xs text-gray-500">Brasil</div>
              </div>
              <div class="bg-gray-800/50 rounded-lg p-3 text-center">
                <div class="text-sm font-semibold text-white">HIPAA</div>
                <div class="text-xs text-gray-500">EUA - Saúde</div>
              </div>
              <div class="bg-gray-800/50 rounded-lg p-3 text-center">
                <div class="text-sm font-semibold text-white">CFO</div>
                <div class="text-xs text-gray-500">Odontologia</div>
              </div>
              <div class="bg-gray-800/50 rounded-lg p-3 text-center">
                <div class="text-sm font-semibold text-white">CFM</div>
                <div class="text-xs text-gray-500">Medicina</div>
              </div>
              <div class="bg-gray-800/50 rounded-lg p-3 text-center">
                <div class="text-sm font-semibold text-white">OAB</div>
                <div class="text-xs text-gray-500">Advocacia</div>
              </div>
              <div class="bg-gray-800/50 rounded-lg p-3 text-center">
                <div class="text-sm font-semibold text-white">GDPR</div>
                <div class="text-xs text-gray-500">Europa</div>
              </div>
            </div>
            <p class="text-gray-500 text-sm">
              Anonimização inteligente: CPF → ***.***.***.00 · Email → ***@domain.com
            </p>
          </div>

          <!-- Handover Summary -->
          <div class="bg-gray-900/30 border border-gray-800 rounded-xl p-8">
            <h3 class="text-xl font-semibold text-emerald-400 mb-4">Handover Summary</h3>
            <p class="text-gray-300 leading-relaxed mb-4">
              Continuidade perfeita quando atendente humano intervém:
            </p>
            <div class="bg-gray-800/50 rounded-lg p-4 text-sm">
              <div class="flex items-center gap-2 mb-3">
                <span class="px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-xs">1</span>
                <span class="text-gray-300">Mensagens do operador → Buffer Redis (hot path)</span>
              </div>
              <div class="flex items-center gap-2 mb-3">
                <span class="px-2 py-1 bg-purple-500/20 text-purple-400 rounded text-xs">2</span>
                <span class="text-gray-300">Encerramento → Celery worker gera resumo com OpenAI</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="px-2 py-1 bg-emerald-500/20 text-emerald-400 rounded text-xs">3</span>
                <span class="text-gray-300">AI retoma → Recebe resumo estruturado injetado no contexto</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Arquitetura -->
      <section class="mb-16">
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
          <span class="text-blue-400">🏗️</span> Arquitetura
        </h2>
        <div class="bg-gray-900/30 border border-gray-800 rounded-xl p-8 overflow-x-auto">
          <pre class="text-sm text-gray-400 font-mono leading-relaxed">
┌─────────────────────────────────────────────────────────────┐
│                    MEMORY ENGINE                            │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   🔥 HOT (Redis)     🌡️ WARM (Redis)     🧊 COLD (PostgreSQL)
│   TTL: 1 min         TTL: 1 hora          Permanente        │
│   Latência: &lt;10ms    Latência: &lt;50ms      Latência: ~100ms  │
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

┌─────────────────────────────────────────────────────────────┐
│                  CONTEXT COMPOSER v2                         │
├─────────────────────────────────────────────────────────────┤
│  Facts (Lógica)  │  Summary (Linguagem)  │  Recent (Chat)   │
│  ───────────────  │  ────────────────────  │  ─────────────   │
│  name: "João"     │  "Cliente preferiu"   │  [últimas 5 msgs]│
│  phone: "11..."   │  "manhã, já agendou"  │                  │
│  pref: morning    │  "2 consultas..."     │                  │
└─────────────────────────────────────────────────────────────┘</pre>
        </div>
      </section>

      <!-- Decisões Técnicas -->
      <section class="mb-16">
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
          <span class="text-purple-400">🎯</span> Decisões Técnicas
        </h2>
        <div class="space-y-4">
          <div class="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
            <h3 class="font-semibold text-white mb-2">Por que Write-Through e não Write-Behind?</h3>
            <p class="text-gray-400 text-sm">
              Write-Behind (async write to DB) é mais performático mas arriscado. Em atendimento ao cliente, 
              perder uma mensagem é inaceitável. Write-Through garante durabilidade imediata com performance aceitável.
            </p>
          </div>
          <div class="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
            <h3 class="font-semibold text-white mb-2">Por que schema isolation e não row-level security?</h3>
            <p class="text-gray-400 text-sm">
              RLS adiciona overhead em cada query. Com schemas separados (t_{tenant_id}), 
              o isolamento é físico e a performance é máxima. Trade-off: mais complexidade operacional.
            </p>
          </div>
          <div class="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
            <h3 class="font-semibold text-white mb-2">Por que Customer Facts temporais?</h3>
            <p class="text-gray-400 text-sm">
              LLMs são péssimos em "esquecer". Se o cliente mudou de preferência, o modelo com histórico 
              completo continuaria usando a preferência antiga. Facts temporais com valid_at/invalid_at 
              resolvem isso elegantemente.
            </p>
          </div>
          <div class="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
            <h3 class="font-semibold text-white mb-2">Por que separar Facts vs Summary no Context Composer?</h3>
            <p class="text-gray-400 text-sm">
              Facts são para lógica (o sistema usa para tomar decisões). Summary é para linguagem 
              (o LLM usa para gerar respostas naturais). Essa separação evita que o LLM "alucine" 
              sobre dados estruturados.
            </p>
          </div>
        </div>
      </section>

      <!-- Stack -->
      <section class="mb-16">
        <h2 class="text-2xl font-bold mb-6">Stack Técnica</h2>
        <div class="flex flex-wrap gap-3">
          <span class="px-4 py-2 bg-gray-800 rounded-lg text-sm">Python 3.12</span>
          <span class="px-4 py-2 bg-gray-800 rounded-lg text-sm">FastAPI</span>
          <span class="px-4 py-2 bg-gray-800 rounded-lg text-sm">PostgreSQL 15</span>
          <span class="px-4 py-2 bg-gray-800 rounded-lg text-sm">Redis 7</span>
          <span class="px-4 py-2 bg-gray-800 rounded-lg text-sm">SQLAlchemy 2.0</span>
          <span class="px-4 py-2 bg-gray-800 rounded-lg text-sm">OpenAI GPT-4</span>
          <span class="px-4 py-2 bg-gray-800 rounded-lg text-sm">Fernet (AES)</span>
          <span class="px-4 py-2 bg-gray-800 rounded-lg text-sm">Celery</span>
          <span class="px-4 py-2 bg-gray-800 rounded-lg text-sm">Prometheus</span>
        </div>
      </section>

      <!-- CTA -->
      <div class="text-center pt-8 border-t border-gray-800">
        <NuxtLink 
          to="/projetos/ai-engine" 
          class="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-500 rounded-lg transition-colors"
        >
          Próximo: AI Conversation Engine →
        </NuxtLink>
      </div>
    </main>
  </div>
</template>
