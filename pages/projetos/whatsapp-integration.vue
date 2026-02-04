<template>
  <div class="min-h-screen bg-gray-950 text-gray-100">
    <ProjectHero :config="heroConfig" />

    <!-- O Problema das Mensagens Fragmentadas -->
    <section class="py-16 border-t border-gray-800">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold mb-8 text-red-400">{{ $t('cases.whatsapp.problem.title') }}</h2>
        
        <div class="grid md:grid-cols-2 gap-8 mb-12">
          <!-- O Problema -->
          <div class="bg-red-950/20 rounded-xl p-6 border border-red-900/30">
            <h3 class="text-xl font-bold mb-4 text-red-400">{{ $t('cases.whatsapp.problem.naturalBehavior') }}</h3>
            
            <div class="bg-gray-900 rounded-lg p-4 mb-4">
              <div class="space-y-2 text-sm text-gray-300 font-mono">
                <div class="flex gap-2"><span class="text-gray-500">[14:32:01]</span> "Oi"</div>
                <div class="flex gap-2"><span class="text-gray-500">[14:32:03]</span> "tudo bem?"</div>
                <div class="flex gap-2"><span class="text-gray-500">[14:32:07]</span> "queria agendar"</div>
                <div class="flex gap-2"><span class="text-gray-500">[14:32:12]</span> "uma consulta"</div>
                <div class="flex gap-2"><span class="text-gray-500">[14:32:15]</span> "pra amanhã às 10h"</div>
              </div>
            </div>
            
            <p class="text-gray-400 text-sm mb-4">
              {{ $t('cases.whatsapp.problem.userFragmented') }}
              <strong class="text-red-300">{{ $t('cases.whatsapp.problem.normalBehavior') }}</strong>
              {{ $t('cases.whatsapp.problem.inWhatsApp') }}
            </p>
            
            <h4 class="text-red-300 font-bold mb-2">{{ $t('cases.whatsapp.problem.withoutAggregation') }}</h4>
            <ul class="space-y-2 text-gray-400 text-sm">
              <li class="flex items-start gap-2">
                <span class="text-red-400 mt-1">⚠️</span>
                <span>{{ $t('cases.whatsapp.problem.issue1') }}</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-red-400 mt-1">⚠️</span>
                <span>{{ $t('cases.whatsapp.problem.issue2') }}</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-red-400 mt-1">⚠️</span>
                <span>{{ $t('cases.whatsapp.problem.issue3') }}</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-red-400 mt-1">⚠️</span>
                <span>{{ $t('cases.whatsapp.problem.issue4') }}</span>
              </li>
            </ul>
          </div>

          <!-- A Solução -->
          <div class="bg-green-950/20 rounded-xl p-6 border border-green-900/30">
            <h3 class="text-xl font-bold mb-4 text-green-400">{{ $t('cases.whatsapp.solution.title') }}</h3>
            
            <div class="bg-gray-900 rounded-lg p-4 mb-4">
              <div class="space-y-2 text-sm text-gray-300 font-mono">
                <div class="text-gray-500">{{ $t('cases.whatsapp.solution.messagesReceived') }}</div>
                <div class="text-green-400">{{ $t('cases.whatsapp.solution.aggregatedIn') }}</div>
                <div class="mt-2">{{ $t('cases.whatsapp.solution.aggregatedResult') }}</div>
              </div>
            </div>
            
            <p class="text-gray-400 text-sm mb-4">
              {{ $t('cases.whatsapp.solution.description') }}
              <strong class="text-green-300">{{ $t('cases.whatsapp.solution.extendsTimeout') }}</strong>.
            </p>
            
            <h4 class="text-green-300 font-bold mb-2">{{ $t('cases.whatsapp.solution.withAggregation') }}</h4>
            <ul class="space-y-2 text-gray-400 text-sm">
              <li class="flex items-start gap-2">
                <span class="text-green-400 mt-1">✓</span>
                <span>{{ $t('cases.whatsapp.solution.benefit1') }}</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-green-400 mt-1">✓</span>
                <span>{{ $t('cases.whatsapp.solution.benefit2') }}</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-green-400 mt-1">✓</span>
                <span>{{ $t('cases.whatsapp.solution.benefit3') }}</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-green-400 mt-1">✓</span>
                <span>{{ $t('cases.whatsapp.solution.benefit4') }}</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Diagrama do Aggregator -->
        <div class="bg-gray-900/50 rounded-xl p-8 border border-gray-800">
          <h3 class="text-xl font-bold mb-6 text-green-400">{{ $t('cases.whatsapp.aggregatorFlow.title') }}</h3>
          
          <pre class="text-sm text-green-400 overflow-x-auto"><code>┌─────────────────────────────────────────────────────────────────────────┐
│                    {{ $t('cases.whatsapp.aggregatorFlow.timeline') }}                           │
└─────────────────────────────────────────────────────────────────────────┘

  {{ $t('cases.whatsapp.aggregatorFlow.message') }} 1        {{ $t('cases.whatsapp.aggregatorFlow.message') }} 2        {{ $t('cases.whatsapp.aggregatorFlow.message') }} 3        {{ $t('cases.whatsapp.aggregatorFlow.timeout') }}
      │                 │                 │                 │
      ▼                 ▼                 ▼                 ▼
   ┌──────┐          ┌──────┐          ┌──────┐          ┌──────┐
   │ "Oi" │          │"bem?"│          │"10h" │          │{{ $t('cases.whatsapp.aggregatorFlow.send') }}│
   └──┬───┘          └──┬───┘          └──┬───┘          └──┬───┘
      │                 │                 │                 │
      │    {{ $t('cases.whatsapp.aggregatorFlow.timer') }}     │    {{ $t('cases.whatsapp.aggregatorFlow.reset') }}       │    {{ $t('cases.whatsapp.aggregatorFlow.reset') }}       │
      │────────────────▶│────────────────▶│────────────────▶│
      │                 │                 │                 │
      │         {{ $t('cases.whatsapp.aggregatorFlow.timerExtended') }}     {{ $t('cases.whatsapp.aggregatorFlow.timerExtended') }}    {{ $t('cases.whatsapp.aggregatorFlow.timerExpired') }}
      │                 │                 │                 │
      └─────────────────┴─────────────────┴─────────────────┘
                                                           │
                              ┌─────────────────────────────┘
                              │
                              ▼
                   ┌─────────────────────┐
                   │ {{ $t('cases.whatsapp.aggregatorFlow.aggregatedMessage') }}  │
                   │ "Oi bem? 10h"       │
                   │                     │
                   │ {{ $t('cases.whatsapp.aggregatorFlow.backendOrch') }}     │
                   │ {{ $t('cases.whatsapp.aggregatorFlow.aiEngine') }}         │
                   └─────────────────────┘

┌─────────────────────────────────────────────────────────────────────────┐
│  CONFIG: MESSAGE_DEBOUNCE_SECONDS=5                                     │
│          AGGREGATOR_MAX_TIMEOUT_SECONDS=30                              │
│          AGGREGATOR_MAX_MESSAGES_PER_AGGREGATION=10                     │
└─────────────────────────────────────────────────────────────────────────┘</code></pre>
        </div>
      </div>
    </section>

    <!-- Typing Detection -->
    <section class="py-16 border-t border-gray-800 bg-gray-900/30">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold mb-8">{{ $t('cases.whatsapp.typingDetection.title') }}</h2>
        
        <div class="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <p class="text-gray-400 mb-6">
              {{ $t('cases.whatsapp.typingDetection.description') }}
              <strong class="text-green-400">{{ $t('cases.whatsapp.typingDetection.extendIntelligently') }}</strong>.
            </p>
            
            <div class="bg-gray-900 rounded-xl p-6 border border-gray-800 mb-6">
              <h4 class="text-green-400 font-bold mb-4">{{ $t('cases.whatsapp.typingDetection.realScenario') }}</h4>
              <ol class="space-y-3 text-gray-400 text-sm">
                <li class="flex gap-3">
                  <span class="text-green-400 font-mono">t=0</span>
                  <span>{{ $t('cases.whatsapp.typingDetection.step1') }}</span>
                </li>
                <li class="flex gap-3">
                  <span class="text-green-400 font-mono">t=3</span>
                  <span>{{ $t('cases.whatsapp.typingDetection.step2') }}</span>
                </li>
                <li class="flex gap-3">
                  <span class="text-green-400 font-mono">t=8</span>
                  <span>{{ $t('cases.whatsapp.typingDetection.step3') }}</span>
                </li>
                <li class="flex gap-3">
                  <span class="text-green-400 font-mono">t=13</span>
                  <span>{{ $t('cases.whatsapp.typingDetection.step4') }}</span>
                </li>
              </ol>
            </div>

            <div class="bg-green-950/20 rounded-lg p-4 border border-green-900/30">
              <p class="text-green-400 text-sm">
                <strong>{{ $t('cases.whatsapp.typingDetection.result') }}</strong> {{ $t('cases.whatsapp.typingDetection.resultDesc') }}
              </p>
            </div>
          </div>

          <div class="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
            <h4 class="text-green-400 font-bold mb-4">{{ $t('cases.whatsapp.typingDetection.safetyLimits') }}</h4>
            
            <div class="space-y-4">
              <div class="flex justify-between items-center p-3 bg-gray-900 rounded-lg">
                <span class="text-gray-400">{{ $t('cases.whatsapp.typingDetection.maxTimeout') }}</span>
                <span class="text-green-400 font-mono">30 seconds</span>
              </div>
              <div class="flex justify-between items-center p-3 bg-gray-900 rounded-lg">
                <span class="text-gray-400">{{ $t('cases.whatsapp.typingDetection.maxMessages') }}</span>
                <span class="text-green-400 font-mono">10 messages</span>
              </div>
              <div class="flex justify-between items-center p-3 bg-gray-900 rounded-lg">
                <span class="text-gray-400">{{ $t('cases.whatsapp.typingDetection.debounceBase') }}</span>
                <span class="text-green-400 font-mono">5 seconds</span>
              </div>
            </div>
            
            <p class="text-gray-500 text-sm mt-4">
              {{ $t('cases.whatsapp.typingDetection.limitsDesc') }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Redis Isolado -->
    <section class="py-16 border-t border-gray-800">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold mb-8">{{ $t('cases.whatsapp.redisIsolated.title') }}</h2>
        
        <p class="text-gray-400 mb-8 max-w-3xl">
          {{ $t('cases.whatsapp.redisIsolated.description') }}
          <strong class="text-green-400">{{ $t('cases.whatsapp.redisIsolated.highWebhookTraffic') }}</strong>
          {{ $t('cases.whatsapp.redisIsolated.mixingBad') }}
        </p>

        <div class="bg-gray-900/50 rounded-xl p-8 border border-gray-800 mb-8">
          <pre class="text-sm text-green-400 overflow-x-auto"><code>┌─────────────────────────────────────────────────────────────────┐
│                   {{ $t('cases.whatsapp.redisIsolated.archTitle') }}                    │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  {{ $t('cases.whatsapp.redisIsolated.mainRedis') }}                           │
│  ├─ {{ $t('cases.whatsapp.redisIsolated.aiEngineCache') }}                    │
│  ├─ {{ $t('cases.whatsapp.redisIsolated.orchestratorCache') }}                │
│  ├─ {{ $t('cases.whatsapp.redisIsolated.memoryCache') }}                      │
│  ├─ {{ $t('cases.whatsapp.redisIsolated.rulesCache') }}                       │
│  └─ {{ $t('cases.whatsapp.redisIsolated.celeryQueues') }}                           │
│                                                                 │
│  {{ $t('cases.whatsapp.redisIsolated.whatsappRedis') }}                       │
│  └─ {{ $t('cases.whatsapp.redisIsolated.whatsappOnly') }}                                   │
│      ├─ {{ $t('cases.whatsapp.redisIsolated.messageBuffers') }}                             │
│      ├─ {{ $t('cases.whatsapp.redisIsolated.typingState') }}                                │
│      ├─ {{ $t('cases.whatsapp.redisIsolated.webhookDedupe') }}                              │
│      ├─ {{ $t('cases.whatsapp.redisIsolated.instanceMapping') }}                            │
│      └─ {{ $t('cases.whatsapp.redisIsolated.deliveryCache') }}                              │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘

{{ $t('cases.whatsapp.redisIsolated.benefits') }}
   {{ $t('cases.whatsapp.redisIsolated.benefit1') }}
   {{ $t('cases.whatsapp.redisIsolated.benefit2') }}
   {{ $t('cases.whatsapp.redisIsolated.benefit3') }}
   {{ $t('cases.whatsapp.redisIsolated.benefit4') }}</code></pre>
        </div>

        <div class="grid md:grid-cols-3 gap-6">
          <div class="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
            <div class="text-3xl mb-4">{{ $t('cases.whatsapp.redisIsolated.faultIsolation') }}</div>
            <h3 class="text-lg font-bold mb-3 text-green-400">{{ $t('cases.whatsapp.redisIsolated.faultIsolationTitle') }}</h3>
            <p class="text-gray-400 text-sm">
              {{ $t('cases.whatsapp.redisIsolated.faultIsolationDesc') }}
            </p>
          </div>

          <div class="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
            <div class="text-3xl mb-4">{{ $t('cases.whatsapp.redisIsolated.separateMetrics') }}</div>
            <h3 class="text-lg font-bold mb-3 text-green-400">{{ $t('cases.whatsapp.redisIsolated.separateMetricsTitle') }}</h3>
            <p class="text-gray-400 text-sm">
              {{ $t('cases.whatsapp.redisIsolated.separateMetricsDesc') }}
            </p>
          </div>

          <div class="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
            <div class="text-3xl mb-4">{{ $t('cases.whatsapp.redisIsolated.independentScale') }}</div>
            <h3 class="text-lg font-bold mb-3 text-green-400">{{ $t('cases.whatsapp.redisIsolated.independentScaleTitle') }}</h3>
            <p class="text-gray-400 text-sm">
              {{ $t('cases.whatsapp.redisIsolated.independentScaleDesc') }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Graceful Degradation -->
    <section class="py-16 border-t border-gray-800 bg-gray-900/30">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold mb-8">{{ $t('cases.whatsapp.gracefulDegradation.title') }}</h2>
        
        <p class="text-gray-400 mb-8 max-w-3xl">
          {{ $t('cases.whatsapp.gracefulDegradation.description') }}
          <strong class="text-green-400">{{ $t('cases.whatsapp.gracefulDegradation.degradesNonEssential') }}</strong>
          {{ $t('cases.whatsapp.gracefulDegradation.toKeepCore') }}
        </p>

        <div class="grid md:grid-cols-3 gap-6 mb-12">
          <div class="bg-green-950/20 rounded-xl p-6 border border-green-900/30">
            <div class="text-green-400 font-bold text-sm mb-2">{{ $t('cases.whatsapp.gracefulDegradation.normal') }}</div>
            <h3 class="text-lg font-bold mb-3 text-white">{{ $t('cases.whatsapp.gracefulDegradation.normalUsers') }}</h3>
            <ul class="space-y-2 text-gray-400 text-sm">
              <li>{{ $t('cases.whatsapp.gracefulDegradation.normalFeature1') }}</li>
              <li>{{ $t('cases.whatsapp.gracefulDegradation.normalFeature2') }}</li>
              <li>{{ $t('cases.whatsapp.gracefulDegradation.normalFeature3') }}</li>
              <li>{{ $t('cases.whatsapp.gracefulDegradation.normalFeature4') }}</li>
            </ul>
          </div>

          <div class="bg-yellow-950/20 rounded-xl p-6 border border-yellow-900/30">
            <div class="text-yellow-400 font-bold text-sm mb-2">{{ $t('cases.whatsapp.gracefulDegradation.degradedLow') }}</div>
            <h3 class="text-lg font-bold mb-3 text-white">{{ $t('cases.whatsapp.gracefulDegradation.degradedLowUsers') }}</h3>
            <ul class="space-y-2 text-gray-400 text-sm">
              <li>{{ $t('cases.whatsapp.gracefulDegradation.degradedLowFeature1') }}</li>
              <li>{{ $t('cases.whatsapp.gracefulDegradation.degradedLowFeature2') }}</li>
              <li>{{ $t('cases.whatsapp.gracefulDegradation.degradedLowFeature3') }}</li>
              <li>{{ $t('cases.whatsapp.gracefulDegradation.degradedLowFeature4') }}</li>
            </ul>
          </div>

          <div class="bg-red-950/20 rounded-xl p-6 border border-red-900/30">
            <div class="text-red-400 font-bold text-sm mb-2">{{ $t('cases.whatsapp.gracefulDegradation.degradedHigh') }}</div>
            <h3 class="text-lg font-bold mb-3 text-white">{{ $t('cases.whatsapp.gracefulDegradation.degradedHighUsers') }}</h3>
            <ul class="space-y-2 text-gray-400 text-sm">
              <li>{{ $t('cases.whatsapp.gracefulDegradation.degradedHighFeature1') }}</li>
              <li>{{ $t('cases.whatsapp.gracefulDegradation.degradedHighFeature2') }}</li>
              <li>{{ $t('cases.whatsapp.gracefulDegradation.degradedHighFeature3') }}</li>
              <li>{{ $t('cases.whatsapp.gracefulDegradation.degradedHighFeature4') }}</li>
            </ul>
          </div>
        </div>

        <div class="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
          <h4 class="text-green-400 font-bold mb-4">{{ $t('cases.whatsapp.gracefulDegradation.configurableThresholds') }}</h4>
          <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-gray-900 rounded-lg p-4">
              <code class="text-sm text-gray-300">
                DEGRADATION_PENDING_USERS_THRESHOLD_LOW=500<br>
                DEGRADATION_PENDING_USERS_THRESHOLD_HIGH=2000<br>
                DEGRADATION_REDIS_LATENCY_THRESHOLD_LOW_MS=50<br>
                DEGRADATION_REDIS_LATENCY_THRESHOLD_HIGH_MS=150
              </code>
            </div>
            <div class="text-gray-400 text-sm">
              <p class="mb-2">{{ $t('cases.whatsapp.gracefulDegradation.degradationBasedOn') }}</p>
              <ul class="list-disc list-inside space-y-1">
                <li>{{ $t('cases.whatsapp.gracefulDegradation.pendingUsers') }}</li>
                <li>{{ $t('cases.whatsapp.gracefulDegradation.redisLatency') }}</li>
                <li>{{ $t('cases.whatsapp.gracefulDegradation.webhookErrorRate') }}</li>
                <li>{{ $t('cases.whatsapp.gracefulDegradation.messageQueueSize') }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Deterministic Conversation ID -->
    <section class="py-16 border-t border-gray-800">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold mb-8">{{ $t('cases.whatsapp.deterministicId.title') }}</h2>
        
        <p class="text-gray-400 mb-8 max-w-3xl">
          {{ $t('cases.whatsapp.deterministicId.description') }}
          <strong class="text-green-400">{{ $t('cases.whatsapp.deterministicId.alwaysCalculates') }}</strong>
          {{ $t('cases.whatsapp.deterministicId.forSamePhone') }}
        </p>

        <div class="grid md:grid-cols-2 gap-8 mb-12">
          <div class="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
            <h3 class="text-lg font-bold mb-4 text-green-400">{{ $t('cases.whatsapp.deterministicId.deterministicCalc') }}</h3>
            <div class="bg-gray-800 rounded-lg p-4 mb-4">
              <pre class="text-sm text-gray-300 overflow-x-auto"><code>conversation_id = UUID5(
    namespace=OPTIMUS_NAMESPACE,
    name=f"{tenant_id}:{normalized_phone}"
)

# {{ $t('cases.whatsapp.deterministicId.example') }}
# tenant: "clinica_abc"
# phone: "+5511999999999"
# → UUID: "a1b2c3d4-e5f6-5a7b-8c9d-0e1f2a3b4c5d"

# {{ $t('cases.whatsapp.deterministicId.alwaysSameUuid') }}
# {{ $t('cases.whatsapp.deterministicId.ignoresHeaders') }}</code></pre>
            </div>
            <p class="text-gray-400 text-sm">
              {{ $t('cases.whatsapp.deterministicId.headersIgnored') }}
              <strong class="text-red-400">{{ $t('cases.whatsapp.deterministicId.ignored') }}</strong>{{ $t('cases.whatsapp.deterministicId.preventsHijack') }}
            </p>
          </div>

          <div class="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
            <h3 class="text-lg font-bold mb-4 text-green-400">{{ $t('cases.whatsapp.deterministicId.phoneNormalization') }}</h3>
            <div class="bg-gray-800 rounded-lg p-4 mb-4">
              <pre class="text-sm text-gray-300 overflow-x-auto"><code>{{ $t('cases.whatsapp.deterministicId.allBecomeSameUuid') }}
"+5511999999999"     → UUID_X
"5511999999999"      → UUID_X
"+55 11 999-999-999" → UUID_X
"+55 (11) 99999-9999" → UUID_X

{{ $t('cases.whatsapp.deterministicId.normalizedBefore') }}
{{ $t('cases.whatsapp.deterministicId.removeSpaces') }}
{{ $t('cases.whatsapp.deterministicId.removePrefix') }}
{{ $t('cases.whatsapp.deterministicId.ensureNumeric') }}</code></pre>
            </div>
            <p class="text-gray-400 text-sm">
              {{ $t('cases.whatsapp.deterministicId.noMatterHow') }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Handover Integration -->
    <section class="py-16 border-t border-gray-800 bg-gray-900/30">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold mb-8">{{ $t('cases.whatsapp.handoverIntegration.title') }}</h2>
        
        <p class="text-gray-400 mb-8 max-w-3xl">
          {{ $t('cases.whatsapp.handoverIntegration.description') }}
          <strong class="text-green-400">{{ $t('cases.whatsapp.handoverIntegration.supportRealtime') }}</strong>.
        </p>

        <div class="grid md:grid-cols-2 gap-8">
          <div class="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
            <h3 class="text-lg font-bold mb-4 text-green-400">{{ $t('cases.whatsapp.handoverIntegration.duringHandover') }}</h3>
            <ul class="space-y-3">
              <li class="flex items-start gap-3">
                <span class="text-green-400 text-xl">{{ $t('cases.whatsapp.handoverIntegration.aggregationPaused') }}</span>
                <div>
                  <div class="font-bold text-white">{{ $t('cases.whatsapp.handoverIntegration.aggregationPausedTitle') }}</div>
                  <div class="text-gray-400 text-sm">
                    {{ $t('cases.whatsapp.handoverIntegration.aggregationPausedDesc') }}
                  </div>
                </div>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-green-400 text-xl">{{ $t('cases.whatsapp.handoverIntegration.immediateDelivery') }}</span>
                <div>
                  <div class="font-bold text-white">{{ $t('cases.whatsapp.handoverIntegration.immediateDeliveryTitle') }}</div>
                  <div class="text-gray-400 text-sm">
                    {{ $t('cases.whatsapp.handoverIntegration.immediateDeliveryDesc') }}
                  </div>
                </div>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-green-400 text-xl">{{ $t('cases.whatsapp.handoverIntegration.websocketRealtime') }}</span>
                <div>
                  <div class="font-bold text-white">{{ $t('cases.whatsapp.handoverIntegration.websocketRealtimeTitle') }}</div>
                  <div class="text-gray-400 text-sm">
                    {{ $t('cases.whatsapp.handoverIntegration.websocketRealtimeDesc') }}
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div class="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
            <h4 class="text-green-400 font-bold mb-4">{{ $t('cases.whatsapp.handoverIntegration.handoverConfig') }}</h4>
            <div class="space-y-3">
              <div class="flex justify-between items-center p-3 bg-gray-900 rounded-lg">
                <span class="text-gray-400 text-sm">HANDOVER_PAUSE_AGGREGATION</span>
                <span class="text-green-400 font-mono text-sm">true</span>
              </div>
              <div class="flex justify-between items-center p-3 bg-gray-900 rounded-lg">
                <span class="text-gray-400 text-sm">HANDOVER_IMMEDIATE_DELIVERY</span>
                <span class="text-green-400 font-mono text-sm">true</span>
              </div>
              <div class="flex justify-between items-center p-3 bg-gray-900 rounded-lg">
                <span class="text-gray-400 text-sm">HANDOVER_WEBSOCKET_ENABLED</span>
                <span class="text-green-400 font-mono text-sm">true</span>
              </div>
              <div class="flex justify-between items-center p-3 bg-gray-900 rounded-lg">
                <span class="text-gray-400 text-sm">HANDOVER_AUTO_RESUME_MINUTES</span>
                <span class="text-green-400 font-mono text-sm">30</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Evolution API Integration -->
    <section class="py-16 border-t border-gray-800">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold mb-8">{{ $t('cases.whatsapp.evolutionApi.title') }}</h2>
        
        <div class="grid md:grid-cols-2 gap-8 mb-12">
          <div class="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
            <h3 class="text-lg font-bold mb-4 text-green-400">{{ $t('cases.whatsapp.evolutionApi.multiTenantInstances') }}</h3>
            <p class="text-gray-400 text-sm mb-4">
              {{ $t('cases.whatsapp.evolutionApi.multiTenantDesc') }}
            </p>
            <div class="bg-gray-800 rounded-lg p-4">
              <pre class="text-sm text-gray-300"><code>{{ $t('cases.whatsapp.evolutionApi.instanceMapping') }}
{
  "clinica_sp": "Local - SP",
  "clinica_rj": "Local - RJ",
  "clinica_demo": "Local - Dev"
}

{{ $t('cases.whatsapp.evolutionApi.lookupO1') }}
// GET instance:tenant:{instance_name}</code></pre>
            </div>
          </div>

          <div class="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
            <h3 class="text-lg font-bold mb-4 text-green-400">{{ $t('cases.whatsapp.evolutionApi.webhookSecurity') }}</h3>
            <p class="text-gray-400 text-sm mb-4">
              {{ $t('cases.whatsapp.evolutionApi.webhookSecurityDesc') }}
            </p>
            <div class="bg-gray-800 rounded-lg p-4">
              <pre class="text-sm text-gray-300"><code>{{ $t('cases.whatsapp.evolutionApi.validationFlow') }}
{{ $t('cases.whatsapp.evolutionApi.step1') }}
{{ $t('cases.whatsapp.evolutionApi.step2') }}
{{ $t('cases.whatsapp.evolutionApi.step3') }}
{{ $t('cases.whatsapp.evolutionApi.step4') }}
{{ $t('cases.whatsapp.evolutionApi.step5') }}</code></pre>
            </div>
          </div>
        </div>

        <!-- Audio Integration -->
        <div class="bg-green-950/20 rounded-xl p-8 border border-green-900/30">
          <h3 class="text-xl font-bold mb-6 text-green-400">{{ $t('cases.whatsapp.evolutionApi.audioSupport') }}</h3>
          
          <div class="grid md:grid-cols-3 gap-6">
            <div class="text-center">
              <div class="text-4xl mb-3">{{ $t('cases.whatsapp.evolutionApi.voiceNotes') }}</div>
              <div class="font-bold text-white mb-2">{{ $t('cases.whatsapp.evolutionApi.voiceNotesTitle') }}</div>
              <div class="text-sm text-gray-400">
                {{ $t('cases.whatsapp.evolutionApi.voiceNotesDesc') }}
              </div>
            </div>
            <div class="text-center">
              <div class="text-4xl mb-3">{{ $t('cases.whatsapp.evolutionApi.audioReply') }}</div>
              <div class="font-bold text-white mb-2">{{ $t('cases.whatsapp.evolutionApi.audioReplyTitle') }}</div>
              <div class="text-sm text-gray-400">
                {{ $t('cases.whatsapp.evolutionApi.audioReplyDesc') }}
              </div>
            </div>
            <div class="text-center">
              <div class="text-4xl mb-3">{{ $t('cases.whatsapp.evolutionApi.minioStorage') }}</div>
              <div class="font-bold text-white mb-2">{{ $t('cases.whatsapp.evolutionApi.minioStorageTitle') }}</div>
              <div class="text-sm text-gray-400">
                {{ $t('cases.whatsapp.evolutionApi.minioStorageDesc') }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Resultados -->
    <section class="py-16 border-t border-gray-800 bg-gray-900/30">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold mb-8">{{ $t('cases.whatsapp.results.title') }}</h2>
        
        <div class="grid md:grid-cols-4 gap-6 mb-12">
          <div class="bg-gray-800/50 rounded-xl p-6 text-center border border-gray-700">
            <div class="text-4xl font-bold text-green-400 mb-2">{{ $t('cases.whatsapp.results.aiReduction') }}</div>
            <div class="text-gray-400 text-sm">{{ $t('cases.whatsapp.results.aiReductionLabel') }}</div>
            <div class="text-gray-500 text-xs mt-1">{{ $t('cases.whatsapp.results.aiReductionDesc') }}</div>
          </div>
          <div class="bg-gray-800/50 rounded-xl p-6 text-center border border-gray-700">
            <div class="text-4xl font-bold text-green-400 mb-2">{{ $t('cases.whatsapp.results.webhookLatency') }}</div>
            <div class="text-gray-400 text-sm">{{ $t('cases.whatsapp.results.webhookLatencyLabel') }}</div>
            <div class="text-gray-500 text-xs mt-1">{{ $t('cases.whatsapp.results.webhookLatencyDesc') }}</div>
          </div>
          <div class="bg-gray-800/50 rounded-xl p-6 text-center border border-gray-700">
            <div class="text-4xl font-bold text-green-400 mb-2">{{ $t('cases.whatsapp.results.redisIsolation') }}</div>
            <div class="text-gray-400 text-sm">{{ $t('cases.whatsapp.results.redisIsolationLabel') }}</div>
            <div class="text-gray-500 text-xs mt-1">{{ $t('cases.whatsapp.results.redisIsolationDesc') }}</div>
          </div>
          <div class="bg-gray-800/50 rounded-xl p-6 text-center border border-gray-700">
            <div class="text-4xl font-bold text-green-400 mb-2">{{ $t('cases.whatsapp.results.simultaneousUsers') }}</div>
            <div class="text-gray-400 text-sm">{{ $t('cases.whatsapp.results.simultaneousUsersLabel') }}</div>
            <div class="text-gray-500 text-xs mt-1">{{ $t('cases.whatsapp.results.simultaneousUsersDesc') }}</div>
          </div>
        </div>

        <!-- Stack -->
        <div class="bg-gray-900/50 rounded-xl p-8 border border-gray-800">
          <h3 class="text-xl font-bold mb-6 text-green-400">{{ $t('cases.whatsapp.results.techStack') }}</h3>
          
          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div class="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
              <div class="text-green-400 font-bold mb-2">{{ $t('cases.whatsapp.results.framework') }}</div>
              <p class="text-gray-400 text-sm">FastAPI + Uvicorn</p>
            </div>
            <div class="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
              <div class="text-green-400 font-bold mb-2">{{ $t('cases.whatsapp.results.storage') }}</div>
              <p class="text-gray-400 text-sm">Redis 8.2 (isolated) + MinIO</p>
            </div>
            <div class="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
              <div class="text-green-400 font-bold mb-2">{{ $t('cases.whatsapp.results.realtime') }}</div>
              <p class="text-gray-400 text-sm">WebSocket (25 concurrent)</p>
            </div>
            <div class="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
              <div class="text-green-400 font-bold mb-2">{{ $t('cases.whatsapp.results.whatsappApi') }}</div>
              <p class="text-gray-400 text-sm">Evolution API</p>
            </div>
            <div class="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
              <div class="text-green-400 font-bold mb-2">{{ $t('cases.whatsapp.results.audio') }}</div>
              <p class="text-gray-400 text-sm">Audio Processor (STT/TTS)</p>
            </div>
            <div class="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
              <div class="text-green-400 font-bold mb-2">{{ $t('cases.whatsapp.results.observability') }}</div>
              <p class="text-gray-400 text-sm">OpenTelemetry + Prometheus</p>
            </div>
            <div class="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
              <div class="text-green-400 font-bold mb-2">{{ $t('cases.whatsapp.results.rateLimiting') }}</div>
              <p class="text-gray-400 text-sm">60 req/min configurable</p>
            </div>
            <div class="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
              <div class="text-green-400 font-bold mb-2">{{ $t('cases.whatsapp.results.httpClient') }}</div>
              <p class="text-gray-400 text-sm">HTTPX (30s timeout, 3 retries)</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <ProjectCTA title-key="cases.whatsapp.cta.title" description-key="cases.whatsapp.cta.description">
      <template #actions>
        <a
          :href="`mailto:${SITE.contactEmail}`"
          class="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-500 text-white font-medium rounded-lg transition-colors"
        >
          {{ $t('cases.whatsapp.cta.contact') }}
          <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </template>
    </ProjectCTA>
  </div>
</template>

<script setup>
import { heroGradientBySlug } from '~/data/project-heroes'
import { SITE } from '~/data/site'

const heroConfig = heroGradientBySlug.whatsappIntegration
const { t } = useI18n()

useHead({
  title: 'WhatsApp Integration - Message Aggregator, Isolated Redis | Marcelo Marleta',
  meta: [
    { 
      name: 'description', 
      content: 'Enterprise WhatsApp service with Message Aggregator (5s debounce), isolated Redis, graceful degradation and Evolution API integration.' 
    }
  ]
})
</script>
