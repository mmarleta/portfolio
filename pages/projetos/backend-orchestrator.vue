<template>
  <div class="min-h-screen bg-gray-950 text-gray-100">
    <!-- Header -->
    <header class="border-b border-gray-800 bg-gray-950/80 backdrop-blur-sm sticky top-0 z-50">
      <nav class="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <NuxtLink to="/" class="text-xl font-bold text-emerald-400 hover:text-emerald-300 transition-colors">
          {{ $t('common.back') }}
        </NuxtLink>
      </nav>
    </header>

    <main class="max-w-4xl mx-auto px-6 py-16">
      <!-- Hero -->
      <div class="mb-16">
        <span class="inline-block px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm mb-4">
          {{ $t('cases.backend.badge') }}
        </span>
        <h1 class="text-4xl md:text-5xl font-bold mb-6">
          {{ $t('cases.backend.title') }}
        </h1>
        <p class="text-xl text-gray-400 leading-relaxed">
          {{ $t('cases.backend.description') }}
        </p>
      </div>

      <!-- Métricas -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        <div class="bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center">
          <div class="text-3xl font-bold text-blue-400">&lt;50ms</div>
          <div class="text-sm text-gray-500 mt-1">{{ $t('cases.backend.metrics.gatewayLatency') }}</div>
        </div>
        <div class="bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center">
          <div class="text-3xl font-bold text-blue-400">100k+</div>
          <div class="text-sm text-gray-500 mt-1">{{ $t('cases.backend.metrics.reqPerMinTenant') }}</div>
        </div>
        <div class="bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center">
          <div class="text-3xl font-bold text-blue-400">3</div>
          <div class="text-sm text-gray-500 mt-1">{{ $t('cases.backend.metrics.retryStrategies') }}</div>
        </div>
        <div class="bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center">
          <div class="text-3xl font-bold text-blue-400">99.9%</div>
          <div class="text-sm text-gray-500 mt-1">{{ $t('cases.backend.metrics.uptime') }}</div>
        </div>
      </div>

      <!-- Problema -->
      <section class="mb-16">
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
          <span class="text-red-400">⚡</span> {{ $t('cases.backend.problem.title') }}
        </h2>
        <div class="bg-gray-900/30 border border-gray-800 rounded-xl p-8">
          <p class="text-gray-300 leading-relaxed mb-4">
            {{ $t('cases.backend.problem.intro') }}
          </p>
          <ul class="space-y-3 text-gray-400">
            <li class="flex items-start gap-2">
              <span class="text-red-400 mt-1">✗</span>
              <span><strong class="text-white">{{ $t('cases.backend.problem.noisyNeighbor') }}</strong>: {{ $t('cases.backend.problem.noisyNeighborDesc') }}</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-red-400 mt-1">✗</span>
              <span><strong class="text-white">{{ $t('cases.backend.problem.cascadingFailures') }}</strong>: {{ $t('cases.backend.problem.cascadingFailuresDesc') }}</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-red-400 mt-1">✗</span>
              <span><strong class="text-white">{{ $t('cases.backend.problem.handoverChaos') }}</strong>: {{ $t('cases.backend.problem.handoverChaosDesc') }}</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-red-400 mt-1">✗</span>
              <span><strong class="text-white">{{ $t('cases.backend.problem.idempotencyBugs') }}</strong>: {{ $t('cases.backend.problem.idempotencyBugsDesc') }}</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-red-400 mt-1">✗</span>
              <span><strong class="text-white">{{ $t('cases.backend.problem.frontendDesync') }}</strong>: {{ $t('cases.backend.problem.frontendDesyncDesc') }}</span>
            </li>
          </ul>
        </div>
      </section>

      <!-- Solução -->
      <section class="mb-16">
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
          <span class="text-emerald-400">✨</span> {{ $t('cases.backend.solution.title') }}
        </h2>
        <div class="space-y-6">
          <!-- Rate Limiting -->
          <div class="bg-gray-900/30 border border-gray-800 rounded-xl p-8">
            <h3 class="text-xl font-semibold text-blue-400 mb-4">{{ $t('cases.backend.solution.rateLimiting.title') }}</h3>
            <p class="text-gray-300 leading-relaxed mb-4">
              {{ $t('cases.backend.solution.rateLimiting.intro') }}
            </p>
            <div class="grid md:grid-cols-3 gap-4 mb-4">
              <div class="bg-gray-800/50 rounded-lg p-4">
                <div class="text-blue-400 font-mono font-semibold mb-2">{{ $t('cases.backend.solution.rateLimiting.slidingWindow') }}</div>
                <p class="text-gray-500 text-sm">{{ $t('cases.backend.solution.rateLimiting.slidingWindowDesc') }}</p>
              </div>
              <div class="bg-gray-800/50 rounded-lg p-4">
                <div class="text-blue-400 font-mono font-semibold mb-2">{{ $t('cases.backend.solution.rateLimiting.tokenBucket') }}</div>
                <p class="text-gray-500 text-sm">{{ $t('cases.backend.solution.rateLimiting.tokenBucketDesc') }}</p>
              </div>
              <div class="bg-gray-800/50 rounded-lg p-4">
                <div class="text-blue-400 font-mono font-semibold mb-2">{{ $t('cases.backend.solution.rateLimiting.localFallback') }}</div>
                <p class="text-gray-500 text-sm">{{ $t('cases.backend.solution.rateLimiting.localFallbackDesc') }}</p>
              </div>
            </div>
            <div class="bg-gray-800/50 rounded-lg p-4 text-sm">
              <div class="text-gray-400">
                <strong class="text-white">{{ $t('cases.backend.solution.rateLimiting.tenantTiers') }}</strong>: {{ $t('cases.backend.solution.rateLimiting.tenantTiersDesc') }}
              </div>
            </div>
          </div>

          <!-- Circuit Breaker -->
          <div class="bg-gray-900/30 border border-gray-800 rounded-xl p-8">
            <h3 class="text-xl font-semibold text-blue-400 mb-4">{{ $t('cases.backend.solution.circuitBreaker.title') }}</h3>
            <p class="text-gray-300 leading-relaxed mb-4">
              {{ $t('cases.backend.solution.circuitBreaker.intro') }}
            </p>
            <div class="flex items-center justify-center gap-4 mb-4">
              <div class="bg-green-500/20 text-green-400 px-4 py-2 rounded-lg font-mono text-sm">
                {{ $t('cases.backend.solution.circuitBreaker.closed') }}
              </div>
              <span class="text-gray-600">→</span>
              <div class="bg-red-500/20 text-red-400 px-4 py-2 rounded-lg font-mono text-sm">
                {{ $t('cases.backend.solution.circuitBreaker.open') }}
              </div>
              <span class="text-gray-600">→</span>
              <div class="bg-yellow-500/20 text-yellow-400 px-4 py-2 rounded-lg font-mono text-sm">
                {{ $t('cases.backend.solution.circuitBreaker.halfOpen') }}
              </div>
            </div>
            <ul class="space-y-2 text-gray-400 text-sm">
              <li class="flex items-start gap-2">
                <span class="text-emerald-400 mt-1">→</span>
                <span><strong class="text-white">{{ $t('cases.backend.solution.circuitBreaker.failureThreshold') }}</strong>: {{ $t('cases.backend.solution.circuitBreaker.failureThresholdDesc') }}</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-emerald-400 mt-1">→</span>
                <span><strong class="text-white">{{ $t('cases.backend.solution.circuitBreaker.recoveryTimeout') }}</strong>: {{ $t('cases.backend.solution.circuitBreaker.recoveryTimeoutDesc') }}</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-emerald-400 mt-1">→</span>
                <span><strong class="text-white">{{ $t('cases.backend.solution.circuitBreaker.halfOpenMaxCalls') }}</strong>: {{ $t('cases.backend.solution.circuitBreaker.halfOpenMaxCallsDesc') }}</span>
              </li>
            </ul>
          </div>

          <!-- Handover Dual-Mode -->
          <div class="bg-gray-900/30 border border-gray-800 rounded-xl p-8">
            <h3 class="text-xl font-semibold text-blue-400 mb-4">{{ $t('cases.backend.solution.handover.title') }}</h3>
            <p class="text-gray-300 leading-relaxed mb-4">
              {{ $t('cases.backend.solution.handover.intro') }}
            </p>
            <div class="grid md:grid-cols-2 gap-4">
              <div class="bg-gray-800/50 rounded-lg p-4">
                <div class="text-purple-400 font-semibold mb-2">👤 {{ $t('cases.backend.solution.handover.operatorTakeover') }}</div>
                <ul class="text-gray-500 text-sm space-y-1">
                  <li v-for="(item, index) in $tm('cases.backend.solution.handover.operatorTakeoverList')" :key="index">• {{ item }}</li>
                </ul>
              </div>
              <div class="bg-gray-800/50 rounded-lg p-4">
                <div class="text-orange-400 font-semibold mb-2">🤖 {{ $t('cases.backend.solution.handover.aiInitiated') }}</div>
                <ul class="text-gray-500 text-sm space-y-1">
                  <li v-for="(item, index) in $tm('cases.backend.solution.handover.aiInitiatedList')" :key="index">• {{ item }}</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Fail-Closed -->
          <div class="bg-gray-900/30 border border-gray-800 rounded-xl p-8">
            <h3 class="text-xl font-semibold text-blue-400 mb-4">{{ $t('cases.backend.solution.failClosed.title') }}</h3>
            <p class="text-gray-300 leading-relaxed mb-4">
              {{ $t('cases.backend.solution.failClosed.intro') }}
            </p>
            <div class="bg-gray-800/50 rounded-lg p-4 font-mono text-sm overflow-x-auto">
              <pre class="text-gray-300">
HandoverGateDecision:
  blocked: true
  reason: "redis_unavailable"  {{ $t('cases.backend.solution.failClosed.comment') }}
  retry_count: 3               # Exponential backoff + jitter

{{ $t('cases.backend.solution.failClosed.customerReceives') }}
{{ $t('cases.backend.solution.failClosed.notSilent') }}
              </pre>
            </div>
            <p class="text-gray-500 text-sm mt-4">
              <strong class="text-gray-300">{{ $t('cases.backend.solution.failClosed.retryStrategy') }}</strong>: {{ $t('cases.backend.solution.failClosed.retryStrategyDesc') }}
            </p>
          </div>

          <!-- WebSocket Broadcasting -->
          <div class="bg-gray-900/30 border border-gray-800 rounded-xl p-8">
            <h3 class="text-xl font-semibold text-blue-400 mb-4">{{ $t('cases.backend.solution.websocket.title') }}</h3>
            <p class="text-gray-300 leading-relaxed mb-4">
              {{ $t('cases.backend.solution.websocket.intro') }}
            </p>
            <div class="grid md:grid-cols-2 gap-3">
              <div class="bg-gray-800/50 rounded-lg p-3">
                <div class="text-emerald-400 font-mono text-sm">{{ $t('cases.backend.solution.websocket.conversationUpdate') }}</div>
                <p class="text-gray-600 text-xs mt-1">{{ $t('cases.backend.solution.websocket.conversationUpdateDesc') }}</p>
              </div>
              <div class="bg-gray-800/50 rounded-lg p-3">
                <div class="text-emerald-400 font-mono text-sm">{{ $t('cases.backend.solution.websocket.newMessage') }}</div>
                <p class="text-gray-600 text-xs mt-1">{{ $t('cases.backend.solution.websocket.newMessageDesc') }}</p>
              </div>
              <div class="bg-gray-800/50 rounded-lg p-3">
                <div class="text-emerald-400 font-mono text-sm">{{ $t('cases.backend.solution.websocket.operatorMessage') }}</div>
                <p class="text-gray-600 text-xs mt-1">{{ $t('cases.backend.solution.websocket.operatorMessageDesc') }}</p>
              </div>
              <div class="bg-gray-800/50 rounded-lg p-3">
                <div class="text-emerald-400 font-mono text-sm">{{ $t('cases.backend.solution.websocket.cacheInvalidation') }}</div>
                <p class="text-gray-600 text-xs mt-1">{{ $t('cases.backend.solution.websocket.cacheInvalidationDesc') }}</p>
              </div>
            </div>
          </div>

          <!-- Idempotency -->
          <div class="bg-gray-900/30 border border-gray-800 rounded-xl p-8">
            <h3 class="text-xl font-semibold text-blue-400 mb-4">{{ $t('cases.backend.solution.idempotency.title') }}</h3>
            <p class="text-gray-300 leading-relaxed mb-4">
              {{ $t('cases.backend.solution.idempotency.intro') }}
            </p>
            <div class="bg-gray-800/50 rounded-lg p-4 text-sm">
              <div class="flex items-center gap-2 mb-2">
                <span class="px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-xs">1</span>
                <span class="text-gray-300">{{ $t('cases.backend.solution.idempotency.step1') }} <code class="text-emerald-400">X-Idempotency-Key</code></span>
              </div>
              <div class="flex items-center gap-2 mb-2">
                <span class="px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-xs">2</span>
                <span class="text-gray-300">{{ $t('cases.backend.solution.idempotency.step2') }}</span>
              </div>
              <div class="flex items-center gap-2 mb-2">
                <span class="px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-xs">3</span>
                <span class="text-gray-300">{{ $t('cases.backend.solution.idempotency.step3') }}</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-xs">4</span>
                <span class="text-gray-300">{{ $t('cases.backend.solution.idempotency.step4') }}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Arquitetura -->
      <section class="mb-16">
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
          <span class="text-blue-400">🏗️</span> {{ $t('cases.backend.architecture.title') }}
        </h2>
        <div class="bg-gray-900/30 border border-gray-800 rounded-xl p-8 overflow-x-auto">
          <pre class="text-sm text-gray-400 font-mono leading-relaxed">
┌─────────────────────────────────────────────────────────────┐
│                    BACKEND ORCHESTRATOR                     │
│                    {{ $t('cases.backend.architecture.gatewayEnterprise') }}                     │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   ┌─────────────┐    ┌─────────────┐    ┌─────────────┐    │
│   │  Rate       │    │  Circuit    │    │  Handover   │    │
│   │  Limiter    │───▶│  Breaker    │───▶│  Gate       │    │
│   │  {{ $t('cases.backend.architecture.multiTier') }}     │    │  {{ $t('cases.backend.architecture.threeStates') }} │    │  {{ $t('cases.backend.architecture.failClosed') }}   │    │
│   └─────────────┘    └─────────────┘    └─────────────┘    │
│         │                  │                  │             │
│         └──────────────────┴──────────────────┘             │
│                           │                                 │
│                    ┌──────▼──────┐                          │
│                    │  Chat       │                          │
│                    │  Orchestrator│                         │
│                    │  {{ $t('cases.backend.architecture.idempotency') }}│                        │
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
{{ $t('cases.backend.architecture.step1') }}
{{ $t('cases.backend.architecture.step2') }}
{{ $t('cases.backend.architecture.step3') }}
{{ $t('cases.backend.architecture.step4') }}
{{ $t('cases.backend.architecture.step5') }}
{{ $t('cases.backend.architecture.step6') }}
{{ $t('cases.backend.architecture.step7') }}</pre>
        </div>
      </section>

      <!-- Decisões Técnicas -->
      <section class="mb-16">
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
          <span class="text-purple-400">🎯</span> {{ $t('cases.backend.decisions.title') }}
        </h2>
        <div class="space-y-4">
          <div class="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
            <h3 class="font-semibold text-white mb-2">{{ $t('cases.backend.decisions.failClosed.question') }}</h3>
            <p class="text-gray-400 text-sm">
              {{ $t('cases.backend.decisions.failClosed.answer') }}
            </p>
          </div>
          <div class="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
            <h3 class="font-semibold text-white mb-2">{{ $t('cases.backend.decisions.redisLatch.question') }}</h3>
            <p class="text-gray-400 text-sm">
              {{ $t('cases.backend.decisions.redisLatch.answer') }}
            </p>
          </div>
          <div class="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
            <h3 class="font-semibold text-white mb-2">{{ $t('cases.backend.decisions.slidingWindow.question') }}</h3>
            <p class="text-gray-400 text-sm">
              {{ $t('cases.backend.decisions.slidingWindow.answer') }}
            </p>
          </div>
          <div class="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
            <h3 class="font-semibold text-white mb-2">{{ $t('cases.backend.decisions.luaScripts.question') }}</h3>
            <p class="text-gray-400 text-sm">
              {{ $t('cases.backend.decisions.luaScripts.answer') }}
            </p>
          </div>
        </div>
      </section>

      <!-- Stack -->
      <section class="mb-16">
        <h2 class="text-2xl font-bold mb-6">{{ $t('common.technicalStack') }}</h2>
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
          {{ $t('cases.backend.nextProject') }}
        </NuxtLink>
      </div>
    </main>
  </div>
</template>
