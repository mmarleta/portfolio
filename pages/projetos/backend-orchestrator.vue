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
        <span class="inline-block px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm mb-4">
          Gateway Inteligente
        </span>
        <h1 class="text-4xl md:text-5xl font-bold mb-6">
          Backend Orchestrator
        </h1>
        <p class="text-xl text-gray-400 leading-relaxed">
          Gateway enterprise multi-tenant com rate limiting distribuído, circuit breaker, 
          handover dual-mode (operator + AI-initiated), WebSocket real-time e fail-closed resilience.
        </p>
      </div>

      <!-- Métricas -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        <div class="bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center">
          <div class="text-3xl font-bold text-blue-400">&lt;50ms</div>
          <div class="text-sm text-gray-500 mt-1">Gateway Latency</div>
        </div>
        <div class="bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center">
          <div class="text-3xl font-bold text-blue-400">100k+</div>
          <div class="text-sm text-gray-500 mt-1">Req/min/tenant</div>
        </div>
        <div class="bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center">
          <div class="text-3xl font-bold text-blue-400">3</div>
          <div class="text-sm text-gray-500 mt-1">Retry Strategies</div>
        </div>
        <div class="bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center">
          <div class="text-3xl font-bold text-blue-400">99.9%</div>
          <div class="text-sm text-gray-500 mt-1">Uptime</div>
        </div>
      </div>

      <!-- Problema -->
      <section class="mb-16">
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
          <span class="text-red-400">⚡</span> O Problema
        </h2>
        <div class="bg-gray-900/30 border border-gray-800 rounded-xl p-8">
          <p class="text-gray-300 leading-relaxed mb-4">
            Em sistemas de atendimento multi-tenant, o gateway é o ponto crítico de falha. 
            Problemas comuns:
          </p>
          <ul class="space-y-3 text-gray-400">
            <li class="flex items-start gap-2">
              <span class="text-red-400 mt-1">✗</span>
              <span><strong class="text-white">Noisy Neighbor</strong>: Um tenant com tráfego alto derruba todos os outros</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-red-400 mt-1">✗</span>
              <span><strong class="text-white">Cascading Failures</strong>: AI Engine lento bloqueia todo o sistema</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-red-400 mt-1">✗</span>
              <span><strong class="text-white">Handover Chaos</strong>: AI responde quando humano está atendendo</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-red-400 mt-1">✗</span>
              <span><strong class="text-white">Idempotency Bugs</strong>: Mesma mensagem processada múltiplas vezes</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-red-400 mt-1">✗</span>
              <span><strong class="text-white">Frontend Desync</strong>: UI não reflete estado real das conversas</span>
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
          <!-- Rate Limiting -->
          <div class="bg-gray-900/30 border border-gray-800 rounded-xl p-8">
            <h3 class="text-xl font-semibold text-blue-400 mb-4">Enterprise Rate Limiting</h3>
            <p class="text-gray-300 leading-relaxed mb-4">
              Sistema de rate limiting multi-camada com algoritmos adaptativos:
            </p>
            <div class="grid md:grid-cols-3 gap-4 mb-4">
              <div class="bg-gray-800/50 rounded-lg p-4">
                <div class="text-blue-400 font-mono font-semibold mb-2">Sliding Window</div>
                <p class="text-gray-500 text-sm">Precisão temporal com Redis ZSET</p>
              </div>
              <div class="bg-gray-800/50 rounded-lg p-4">
                <div class="text-blue-400 font-mono font-semibold mb-2">Token Bucket</div>
                <p class="text-gray-500 text-sm">Burst handling com Lua scripts atômicos</p>
              </div>
              <div class="bg-gray-800/50 rounded-lg p-4">
                <div class="text-blue-400 font-mono font-semibold mb-2">Local Fallback</div>
                <p class="text-gray-500 text-sm">Cache local quando Redis indisponível</p>
              </div>
            </div>
            <div class="bg-gray-800/50 rounded-lg p-4 text-sm">
              <div class="text-gray-400">
                <strong class="text-white">Tenant Tiers</strong>: FREE (10 req/min) → BASIC (50) → PROFESSIONAL (200) → ENTERPRISE (unlimited)
              </div>
            </div>
          </div>

          <!-- Circuit Breaker -->
          <div class="bg-gray-900/30 border border-gray-800 rounded-xl p-8">
            <h3 class="text-xl font-semibold text-blue-400 mb-4">Circuit Breaker Pattern</h3>
            <p class="text-gray-300 leading-relaxed mb-4">
              Proteção contra cascading failures com 3 estados:
            </p>
            <div class="flex items-center justify-center gap-4 mb-4">
              <div class="bg-green-500/20 text-green-400 px-4 py-2 rounded-lg font-mono text-sm">
                CLOSED
              </div>
              <span class="text-gray-600">→</span>
              <div class="bg-red-500/20 text-red-400 px-4 py-2 rounded-lg font-mono text-sm">
                OPEN
              </div>
              <span class="text-gray-600">→</span>
              <div class="bg-yellow-500/20 text-yellow-400 px-4 py-2 rounded-lg font-mono text-sm">
                HALF_OPEN
              </div>
            </div>
            <ul class="space-y-2 text-gray-400 text-sm">
              <li class="flex items-start gap-2">
                <span class="text-emerald-400 mt-1">→</span>
                <span><strong class="text-white">failure_threshold</strong>: 5 falhas consecutivas abrem o circuito</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-emerald-400 mt-1">→</span>
                <span><strong class="text-white">recovery_timeout</strong>: 60s antes de testar novamente</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-emerald-400 mt-1">→</span>
                <span><strong class="text-white">half_open_max_calls</strong>: 10 requests de teste antes de fechar</span>
              </li>
            </ul>
          </div>

          <!-- Handover Dual-Mode -->
          <div class="bg-gray-900/30 border border-gray-800 rounded-xl p-8">
            <h3 class="text-xl font-semibold text-blue-400 mb-4">Handover Dual-Mode</h3>
            <p class="text-gray-300 leading-relaxed mb-4">
              Dois modos de transição AI ↔ Humano:
            </p>
            <div class="grid md:grid-cols-2 gap-4">
              <div class="bg-gray-800/50 rounded-lg p-4">
                <div class="text-purple-400 font-semibold mb-2">👤 Operator Takeover</div>
                <ul class="text-gray-500 text-sm space-y-1">
                  <li>• Operador clica "assumir conversa"</li>
                  <li>• Redis latch bloqueia AI instantaneamente</li>
                  <li>• Timer auto-resume configurável por tenant</li>
                  <li>• Lazy finalize: summary gerado ao retomar</li>
                </ul>
              </div>
              <div class="bg-gray-800/50 rounded-lg p-4">
                <div class="text-orange-400 font-semibold mb-2">🤖 AI-Initiated</div>
                <ul class="text-gray-500 text-sm space-y-1">
                  <li>• AI detecta problema (ERP failure, complexidade)</li>
                  <li>• Context injection com prioridade máxima</li>
                  <li>• Mensagem natural para cliente</li>
                  <li>• Histórico multi-handover preservado</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Fail-Closed -->
          <div class="bg-gray-900/30 border border-gray-800 rounded-xl p-8">
            <h3 class="text-xl font-semibold text-blue-400 mb-4">Fail-Closed Resilience</h3>
            <p class="text-gray-300 leading-relaxed mb-4">
              Quando Redis está indisponível, o sistema <strong class="text-white">bloqueia AI</strong> 
              (não fica silencioso):
            </p>
            <div class="bg-gray-800/50 rounded-lg p-4 font-mono text-sm overflow-x-auto">
              <pre class="text-gray-300">
HandoverGateDecision:
  blocked: true
  reason: "redis_unavailable"  # Fail-closed
  retry_count: 3               # Exponential backoff + jitter

# Cliente recebe: "Um momento, estamos te transferindo..."
# NÃO: silêncio total (fail-open)
              </pre>
            </div>
            <p class="text-gray-500 text-sm mt-4">
              <strong class="text-gray-300">Retry Strategy</strong>: 3 tentativas com exponential backoff (50ms base) + jitter aleatório
            </p>
          </div>

          <!-- WebSocket Broadcasting -->
          <div class="bg-gray-900/30 border border-gray-800 rounded-xl p-8">
            <h3 class="text-xl font-semibold text-blue-400 mb-4">WebSocket Real-Time</h3>
            <p class="text-gray-300 leading-relaxed mb-4">
              Broadcasting de eventos para sincronização frontend:
            </p>
            <div class="grid md:grid-cols-2 gap-3">
              <div class="bg-gray-800/50 rounded-lg p-3">
                <div class="text-emerald-400 font-mono text-sm">conversation_update</div>
                <p class="text-gray-600 text-xs mt-1">Nova conversa ou mudança de status</p>
              </div>
              <div class="bg-gray-800/50 rounded-lg p-3">
                <div class="text-emerald-400 font-mono text-sm">new_message</div>
                <p class="text-gray-600 text-xs mt-1">Mensagem cliente/AI normalizada</p>
              </div>
              <div class="bg-gray-800/50 rounded-lg p-3">
                <div class="text-emerald-400 font-mono text-sm">operator_message</div>
                <p class="text-gray-600 text-xs mt-1">Mensagem do operador (WhatsApp/Web)</p>
              </div>
              <div class="bg-gray-800/50 rounded-lg p-3">
                <div class="text-emerald-400 font-mono text-sm">cache_invalidation</div>
                <p class="text-gray-600 text-xs mt-1">Trigger de refetch no frontend</p>
              </div>
            </div>
          </div>

          <!-- Idempotency -->
          <div class="bg-gray-900/30 border border-gray-800 rounded-xl p-8">
            <h3 class="text-xl font-semibold text-blue-400 mb-4">Idempotency Gate</h3>
            <p class="text-gray-300 leading-relaxed mb-4">
              Proteção contra processamento duplicado:
            </p>
            <div class="bg-gray-800/50 rounded-lg p-4 text-sm">
              <div class="flex items-center gap-2 mb-2">
                <span class="px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-xs">1</span>
                <span class="text-gray-300">Request chega com <code class="text-emerald-400">X-Idempotency-Key</code></span>
              </div>
              <div class="flex items-center gap-2 mb-2">
                <span class="px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-xs">2</span>
                <span class="text-gray-300">Check Redis: já processado? → retorna cached response</span>
              </div>
              <div class="flex items-center gap-2 mb-2">
                <span class="px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-xs">3</span>
                <span class="text-gray-300">Slot reservado → processa request</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-xs">4</span>
                <span class="text-gray-300">Response cacheada com TTL de 24h</span>
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
│                    BACKEND ORCHESTRATOR                     │
│                    (Gateway Enterprise)                     │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   ┌─────────────┐    ┌─────────────┐    ┌─────────────┐    │
│   │  Rate       │    │  Circuit    │    │  Handover   │    │
│   │  Limiter    │───▶│  Breaker    │───▶│  Gate       │    │
│   │  (Multi-    │    │  (3 states) │    │  (Fail-     │    │
│   │   tier)     │    │             │    │   closed)   │    │
│   └─────────────┘    └─────────────┘    └─────────────┘    │
│         │                  │                  │             │
│         └──────────────────┴──────────────────┘             │
│                           │                                 │
│                    ┌──────▼──────┐                          │
│                    │  Chat       │                          │
│                    │  Orchestrator│                         │
│                    │  + Idempotency│                        │
│                    └──────┬──────┘                          │
│                           │                                 │
│         ┌─────────────────┼─────────────────┐              │
│         ▼                 ▼                 ▼              │
│   ┌──────────┐    ┌──────────────┐   ┌──────────┐         │
│   │ AI Engine│    │ Memory Engine│   │ WebSocket│         │
│   │ (LangGraph)   │ (PostgreSQL) │   │ Broadcast│         │
│   └──────────┘    └──────────────┘   └──────────┘         │
│                                                             │
└─────────────────────────────────────────────────────────────┘

Request Flow:
1. Rate Limit Check (per-tenant tier)
2. Circuit Breaker (protect downstream)
3. Handover Gate (AI blocking)
4. Idempotency Check (dedupe)
5. AI Engine Call (with timeout)
6. WebSocket Broadcast (real-time)
7. Cache Response (24h TTL)</pre>
        </div>
      </section>

      <!-- Decisões Técnicas -->
      <section class="mb-16">
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
          <span class="text-purple-400">🎯</span> Decisões Técnicas
        </h2>
        <div class="space-y-4">
          <div class="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
            <h3 class="font-semibold text-white mb-2">Por que fail-closed e não fail-open?</h3>
            <p class="text-gray-400 text-sm">
              Em atendimento ao cliente, silêncio é pior que resposta de fallback. Fail-closed 
              garante que o cliente sempre receba feedback ("estamos te transferindo") mesmo quando 
              Redis está indisponível. Fail-open deixaria o cliente esperando indefinidamente.
            </p>
          </div>
          <div class="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
            <h3 class="font-semibold text-white mb-2">Por que Redis latch e não database flag?</h3>
            <p class="text-gray-400 text-sm">
              Redis latch com TTL automático elimina a necessidade de cleanup workers. Se o operador 
              esquecer de "devolver" a conversa, o TTL expira e AI retoma automaticamente. 
              Database flags precisariam de cron jobs para timeout.
            </p>
          </div>
          <div class="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
            <h3 class="font-semibold text-white mb-2">Por que sliding window e não fixed window?</h3>
            <p class="text-gray-400 text-sm">
              Fixed window tem o problema de "boundary burst": 100 requests no segundo 59 + 100 no segundo 0 
              = 200 requests em 2 segundos. Sliding window distribui uniformemente e evita esse pico.
            </p>
          </div>
          <div class="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
            <h3 class="font-semibold text-white mb-2">Por que Lua scripts para token bucket?</h3>
            <p class="text-gray-400 text-sm">
              Token bucket precisa de operações atômicas (read-modify-write). Sem Lua, teríamos race 
              conditions entre GET e SET. Lua scripts executam atomicamente no servidor Redis, 
              garantindo consistência mesmo com milhares de requests concorrentes.
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
          <span class="px-4 py-2 bg-gray-800 rounded-lg text-sm">Redis 7</span>
          <span class="px-4 py-2 bg-gray-800 rounded-lg text-sm">HTTPX (async)</span>
          <span class="px-4 py-2 bg-gray-800 rounded-lg text-sm">WebSocket</span>
          <span class="px-4 py-2 bg-gray-800 rounded-lg text-sm">Lua Scripts</span>
          <span class="px-4 py-2 bg-gray-800 rounded-lg text-sm">JWT Auth</span>
          <span class="px-4 py-2 bg-gray-800 rounded-lg text-sm">Prometheus</span>
          <span class="px-4 py-2 bg-gray-800 rounded-lg text-sm">structlog</span>
        </div>
      </section>

      <!-- CTA -->
      <div class="text-center pt-8 border-t border-gray-800">
        <NuxtLink 
          to="/projetos/memory-engine" 
          class="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors"
        >
          Próximo: Memory Engine →
        </NuxtLink>
      </div>
    </main>
  </div>
</template>
