<template>
  <div class="min-h-screen bg-gray-950 text-gray-100">
    <ProjectHeader back-label-key="nav.backToPortfolio" />

    <main class="max-w-4xl mx-auto px-6 py-16">
      <ProjectHeroBlock :config="heroConfig" />

      <!-- Por que Observabilidade? -->
      <section class="mb-16">
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
          <span class="text-red-400">{{ $t('cases.observability.whyObservability.title') }}</span>
        </h2>
        <div class="bg-gray-900/30 border border-gray-800 rounded-xl p-8">
          <p class="text-gray-300 leading-relaxed mb-4">
            {{ $t('cases.observability.whyObservability.intro') }}
          </p>
          <ul class="space-y-3 text-gray-400">
            <li class="flex items-start gap-2">
              <span class="text-yellow-400 mt-1">?</span>
              <span><strong class="text-white">{{ $t('cases.observability.whyObservability.debug') }}</strong>{{ $t('cases.observability.whyObservability.debugQ') }}</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-yellow-400 mt-1">?</span>
              <span><strong class="text-white">{{ $t('cases.observability.whyObservability.performance') }}</strong>{{ $t('cases.observability.whyObservability.performanceQ') }}</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-yellow-400 mt-1">?</span>
              <span><strong class="text-white">{{ $t('cases.observability.whyObservability.costs') }}</strong>{{ $t('cases.observability.whyObservability.costsQ') }}</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-yellow-400 mt-1">?</span>
              <span><strong class="text-white">{{ $t('cases.observability.whyObservability.business') }}</strong>{{ $t('cases.observability.whyObservability.businessQ') }}</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-yellow-400 mt-1">?</span>
              <span><strong class="text-white">{{ $t('cases.observability.whyObservability.quality') }}</strong>{{ $t('cases.observability.whyObservability.qualityQ') }}</span>
            </li>
          </ul>
        </div>
      </section>

      <!-- Stack de Observabilidade -->
      <section class="mb-16">
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
          <span class="text-emerald-400">{{ $t('cases.observability.stack.title') }}</span>
        </h2>
        <div class="space-y-6">
          <!-- Business Metrics -->
          <div class="bg-gray-900/30 border border-gray-800 rounded-xl p-8">
            <h3 class="text-xl font-semibold text-green-400 mb-4">{{ $t('cases.observability.stack.businessMetrics.title') }}</h3>
            <p class="text-gray-300 leading-relaxed mb-4">
              {{ $t('cases.observability.stack.businessMetrics.description') }}
            </p>
            <div class="overflow-x-auto mb-4">
              <table class="w-full text-sm">
                <thead>
                  <tr class="text-left text-gray-500 border-b border-gray-800">
                    <th class="pb-2">{{ $t('cases.observability.stack.businessMetrics.tableMetric') }}</th>
                    <th class="pb-2">{{ $t('cases.observability.stack.businessMetrics.tableOwner') }}</th>
                    <th class="pb-2">{{ $t('cases.observability.stack.businessMetrics.tableLabels') }}</th>
                  </tr>
                </thead>
                <tbody class="text-gray-400">
                  <tr class="border-b border-gray-800/50">
                    <td class="py-2 font-mono text-xs text-green-400">optimus_handover_requests_total</td>
                    <td class="py-2">Orchestrator</td>
                    <td class="py-2 text-xs">tenant_id, reason, outcome</td>
                  </tr>
                  <tr class="border-b border-gray-800/50">
                    <td class="py-2 font-mono text-xs text-green-400">optimus_ai_conversations_total</td>
                    <td class="py-2">AI Engine</td>
                    <td class="py-2 text-xs">tenant_id, resolved_by</td>
                  </tr>
                  <tr class="border-b border-gray-800/50">
                    <td class="py-2 font-mono text-xs text-green-400">optimus_booking_attempts_total</td>
                    <td class="py-2">Memory Engine</td>
                    <td class="py-2 text-xs">tenant_id, status</td>
                  </tr>
                  <tr>
                    <td class="py-2 font-mono text-xs text-green-400">optimus_ai_first_response_seconds</td>
                    <td class="py-2">AI Engine</td>
                    <td class="py-2 text-xs">tenant_id (histogram)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p class="text-gray-500 text-sm">
              <strong class="text-gray-300">{{ $t('cases.observability.stack.businessMetrics.ownershipNote') }}</strong>{{ $t('cases.observability.stack.businessMetrics.ownershipDesc') }}
            </p>
          </div>

          <!-- OpenTelemetry Tracing -->
          <div class="bg-gray-900/30 border border-gray-800 rounded-xl p-8">
            <h3 class="text-xl font-semibold text-green-400 mb-4">{{ $t('cases.observability.stack.tracing.title') }}</h3>
            <p class="text-gray-300 leading-relaxed mb-4">
              {{ $t('cases.observability.stack.tracing.description') }}
            </p>
            <div class="bg-gray-800/50 rounded-lg p-4 font-mono text-sm overflow-x-auto mb-4">
              <pre class="text-gray-300">
Request → Orchestrator → AI Engine → Memory Engine → PostgreSQL
   │           │             │            │
   │           │             │            └── db.query span
   │           │             └── langgraph.node spans (20+)
   │           └── chat.orchestration span
   └── http.request span

{{ $t('cases.observability.stack.tracing.propagatedVia') }}
              </pre>
            </div>
            <div class="grid md:grid-cols-2 gap-4">
              <div class="bg-gray-800/50 rounded-lg p-4">
                <div class="text-emerald-400 font-semibold mb-2">{{ $t('cases.observability.stack.tracing.autoInstrumentation') }}</div>
                <ul class="text-gray-500 text-sm space-y-1">
                  <li>{{ $t('cases.observability.stack.tracing.fastapiRequests') }}</li>
                  <li>{{ $t('cases.observability.stack.tracing.httpxCalls') }}</li>
                  <li>{{ $t('cases.observability.stack.tracing.sqlalchemyQueries') }}</li>
                  <li>{{ $t('cases.observability.stack.tracing.redisOps') }}</li>
                </ul>
              </div>
              <div class="bg-gray-800/50 rounded-lg p-4">
                <div class="text-purple-400 font-semibold mb-2">{{ $t('cases.observability.stack.tracing.customSpans') }}</div>
                <ul class="text-gray-500 text-sm space-y-1">
                  <li>{{ $t('cases.observability.stack.tracing.langGraphNode') }}</li>
                  <li>{{ $t('cases.observability.stack.tracing.ragDecisions') }}</li>
                  <li>{{ $t('cases.observability.stack.tracing.bookingFsm') }}</li>
                  <li>{{ $t('cases.observability.stack.tracing.llmCalls') }}</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Token Usage Reports -->
          <div class="bg-gray-900/30 border border-gray-800 rounded-xl p-8">
            <h3 class="text-xl font-semibold text-green-400 mb-4">{{ $t('cases.observability.stack.tokenUsage.title') }}</h3>
            <p class="text-gray-300 leading-relaxed mb-4">
              {{ $t('cases.observability.stack.tokenUsage.description') }}
            </p>
            <div class="bg-gray-800/50 rounded-lg p-4 font-mono text-sm overflow-x-auto mb-4">
              <pre class="text-gray-300">
GET /api/token-reports?tenant_id=clinic2&days=30

{
  "tenant_id": "clinic2",
  "total_input_tokens": 1_250_000,
  "total_output_tokens": 450_000,
  "total_cost": 42.50,  // USD estimated
  "models_breakdown": {
    "gpt-4o-mini": {"tokens": 1_500_000, "cost": 15.00},
    "gpt-4o": {"tokens": 200_000, "cost": 27.50}
  },
  "daily_usage": {
    "2025-01-15": {"tokens": 50_000, "cost": 1.50},
    ...
  }
}
              </pre>
            </div>
            <p class="text-gray-500 text-sm">
              {{ $t('cases.observability.stack.tokenUsage.dataExtracted') }} <code class="text-emerald-400">llm.input_tokens</code>, 
              <code class="text-emerald-400">llm.output_tokens</code>, <code class="text-emerald-400">llm.model</code>.
            </p>
          </div>

          <!-- State Snapshot Telemetry -->
          <div class="bg-gray-900/30 border border-gray-800 rounded-xl p-8">
            <h3 class="text-xl font-semibold text-green-400 mb-4">{{ $t('cases.observability.stack.stateSnapshot.title') }}</h3>
            <p class="text-gray-300 leading-relaxed mb-4">
              {{ $t('cases.observability.stack.stateSnapshot.description') }}
            </p>
            <div class="bg-gray-800/50 rounded-lg p-4 font-mono text-sm overflow-x-auto">
              <pre class="text-gray-300">
response_metadata.state_snapshot = {
  "appointment_confirmed": true,
  "booking_id": "apt_12345",
  "booking_datetime": "2025-01-20T10:00:00",
  "pending_action": null,
  "user_intent": "schedule",
  "customer_name": "João Silva",
  "tool_budget_reached": false,
  "tool_calls_used": 3,
  "tool_budget_max": 6
}
              </pre>
            </div>
          </div>

          <!-- Pricing Match Telemetry -->
          <div class="bg-gray-900/30 border border-gray-800 rounded-xl p-8">
            <h3 class="text-xl font-semibold text-green-400 mb-4">{{ $t('cases.observability.stack.ragTelemetry.title') }}</h3>
            <p class="text-gray-300 leading-relaxed mb-4">
              {{ $t('cases.observability.stack.ragTelemetry.description') }}
            </p>
            <div class="bg-gray-800/50 rounded-lg p-4 font-mono text-sm overflow-x-auto mb-4">
              <pre class="text-gray-300">
{
  "total_entries": 10,
  "match_types": {
    "structured": 8,   // Direct catalog match
    "semantic": 2,     // Embeddings match
    "alias": 0,        // Synonym match
    "fallback": 0      // Generic fallback
  },
  "score_stats": {"avg": 0.89, "min": 0.82, "max": 0.95},
  "fallback_rate": 0.0,
  "reasoning_samples": [
    {"item": "hemograma", "reason": "exact_match", "score": 0.95}
  ]
}
              </pre>
            </div>
            <p class="text-gray-500 text-sm">
              {{ $t('cases.observability.stack.ragTelemetry.allowsIdentify') }}
            </p>
          </div>

          <!-- Usage Monitoring -->
          <div class="bg-gray-900/30 border border-gray-800 rounded-xl p-8">
            <h3 class="text-xl font-semibold text-green-400 mb-4">{{ $t('cases.observability.stack.usageMonitoring.title') }}</h3>
            <p class="text-gray-300 leading-relaxed mb-4">
              {{ $t('cases.observability.stack.usageMonitoring.description') }}
            </p>
            <ul class="space-y-2 text-gray-400 text-sm">
              <li class="flex items-start gap-2">
                <span class="text-emerald-400 mt-1">✓</span>
                <span><strong class="text-white">{{ $t('cases.observability.stack.usageMonitoring.nonIntrusive') }}</strong>{{ $t('cases.observability.stack.usageMonitoring.nonIntrusiveDesc') }}</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-emerald-400 mt-1">✓</span>
                <span><strong class="text-white">{{ $t('cases.observability.stack.usageMonitoring.sampleRate') }}</strong>{{ $t('cases.observability.stack.usageMonitoring.sampleRateDesc') }}</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-emerald-400 mt-1">✓</span>
                <span><strong class="text-white">{{ $t('cases.observability.stack.usageMonitoring.thirtyDaysData') }}</strong>{{ $t('cases.observability.stack.usageMonitoring.thirtyDaysDesc') }}</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-emerald-400 mt-1">✓</span>
                <span><strong class="text-white">{{ $t('cases.observability.stack.usageMonitoring.endpointTracking') }}</strong>{{ $t('cases.observability.stack.usageMonitoring.endpointTrackingDesc') }}</span>
              </li>
            </ul>
          </div>

          <!-- Detailed Metrics -->
          <div class="bg-gray-900/30 border border-gray-800 rounded-xl p-8">
            <h3 class="text-xl font-semibold text-green-400 mb-4">{{ $t('cases.observability.stack.performanceThresholds.title') }}</h3>
            <p class="text-gray-300 leading-relaxed mb-4">
              {{ $t('cases.observability.stack.performanceThresholds.description') }}
            </p>
            <div class="grid md:grid-cols-2 gap-4">
              <div class="bg-gray-800/50 rounded-lg p-4">
                <div class="text-yellow-400 font-semibold mb-2">{{ $t('cases.observability.stack.performanceThresholds.warning') }}</div>
                <ul class="text-gray-500 text-sm space-y-1">
                  <li>• memory_retrieval_latency > 100ms</li>
                  <li>• cache_hit_rate < 80%</li>
                  <li>• error_rate > 1%</li>
                </ul>
              </div>
              <div class="bg-gray-800/50 rounded-lg p-4">
                <div class="text-red-400 font-semibold mb-2">{{ $t('cases.observability.stack.performanceThresholds.critical') }}</div>
                <ul class="text-gray-500 text-sm space-y-1">
                  <li>• memory_retrieval_latency > 500ms</li>
                  <li>• cache_hit_rate < 60%</li>
                  <li>• error_rate > 5%</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Arquitetura -->
      <section class="mb-16">
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
          <span class="text-blue-400">{{ $t('cases.observability.architecture.title') }}</span>
        </h2>
        <div class="bg-gray-900/30 border border-gray-800 rounded-xl p-8 overflow-x-auto">
          <pre class="text-sm text-gray-400 font-mono leading-relaxed">
┌─────────────────────────────────────────────────────────────┐
│                 {{ $t('cases.observability.architecture.stackTitle') }}                          │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   ┌─────────────┐  ┌─────────────┐  ┌─────────────┐        │
│   │ {{ $t('cases.observability.architecture.orchestrator') }}│  │  {{ $t('cases.observability.architecture.aiEngine') }}  │  │{{ $t('cases.observability.architecture.memoryEngine') }}│        │
│   │  {{ $t('cases.observability.architecture.metricsLabel') }}    │  │  {{ $t('cases.observability.architecture.metricsLabel') }}    │  │  {{ $t('cases.observability.architecture.metricsLabel') }}    │        │
│   └──────┬──────┘  └──────┬──────┘  └──────┬──────┘        │
│          │                │                │                │
│          └────────────────┼────────────────┘                │
│                           │                                 │
│   ┌───────────────────────▼─────────────────────────────┐  │
│   │              {{ $t('cases.observability.architecture.prometheusSection') }}                              │  │
│   │  {{ $t('cases.observability.architecture.prometheusLine1') }}         │  │
│   │  {{ $t('cases.observability.architecture.prometheusLine2') }}          │  │
│   │  {{ $t('cases.observability.architecture.prometheusLine3') }}                │  │
│   └───────────────────────┬─────────────────────────────┘  │
│                           │                                 │
│   ┌───────────────────────▼─────────────────────────────┐  │
│   │              {{ $t('cases.observability.architecture.grafanaSection') }}                      │  │
│   │  {{ $t('cases.observability.architecture.grafanaLine1') }}                        │  │
│   │  {{ $t('cases.observability.architecture.grafanaLine2') }}                      │  │
│   │  {{ $t('cases.observability.architecture.grafanaLine3') }}                      │  │
│   └─────────────────────────────────────────────────────┘  │
│                                                             │
│   ┌─────────────────────────────────────────────────────┐  │
│   │              {{ $t('cases.observability.architecture.otelSection') }}                  │  │
│   │  {{ $t('cases.observability.architecture.otelLine1') }}               │  │
│   │  {{ $t('cases.observability.architecture.otelLine2') }}                │  │
│   │  {{ $t('cases.observability.architecture.otelLine3') }}                  │  │
│   └─────────────────────────────────────────────────────┘  │
│                                                             │
│   ┌─────────────────────────────────────────────────────┐  │
│   │              {{ $t('cases.observability.architecture.lokiSection') }}                        │  │
│   │  {{ $t('cases.observability.architecture.lokiLine1') }}        │  │
│   │  {{ $t('cases.observability.architecture.lokiLine2') }}            │  │
│   │  {{ $t('cases.observability.architecture.lokiLine3') }}           │  │
│   └─────────────────────────────────────────────────────┘  │
│                                                             │
└─────────────────────────────────────────────────────────────┘</pre>
        </div>
      </section>

      <!-- Decisões Técnicas -->
      <section class="mb-16">
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
          <span class="text-purple-400">{{ $t('cases.observability.decisions.title') }}</span>
        </h2>
        <div class="space-y-4">
          <div class="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
            <h3 class="font-semibold text-white mb-2">{{ $t('cases.observability.decisions.ownershipQ') }}</h3>
            <p class="text-gray-400 text-sm">
              {{ $t('cases.observability.decisions.ownershipA') }}
            </p>
          </div>
          <div class="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
            <h3 class="font-semibold text-white mb-2">{{ $t('cases.observability.decisions.tracesQ') }}</h3>
            <p class="text-gray-400 text-sm">
              {{ $t('cases.observability.decisions.tracesA') }}
            </p>
          </div>
          <div class="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
            <h3 class="font-semibold text-white mb-2">{{ $t('cases.observability.decisions.snapshotQ') }}</h3>
            <p class="text-gray-400 text-sm">
              {{ $t('cases.observability.decisions.snapshotA') }}
            </p>
          </div>
          <div class="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
            <h3 class="font-semibold text-white mb-2">{{ $t('cases.observability.decisions.sampleRateQ') }}</h3>
            <p class="text-gray-400 text-sm">
              {{ $t('cases.observability.decisions.sampleRateA') }}
            </p>
          </div>
        </div>
      </section>

      <!-- Stack -->
      <section class="mb-16">
        <h2 class="text-2xl font-bold mb-6">{{ $t('cases.observability.techStack.title') }}</h2>
        <div class="flex flex-wrap gap-3">
          <span class="px-4 py-2 bg-gray-800 rounded-lg text-sm">Prometheus</span>
          <span class="px-4 py-2 bg-gray-800 rounded-lg text-sm">Grafana</span>
          <span class="px-4 py-2 bg-gray-800 rounded-lg text-sm">OpenTelemetry</span>
          <span class="px-4 py-2 bg-gray-800 rounded-lg text-sm">Jaeger</span>
          <span class="px-4 py-2 bg-gray-800 rounded-lg text-sm">Loki</span>
          <span class="px-4 py-2 bg-gray-800 rounded-lg text-sm">structlog</span>
          <span class="px-4 py-2 bg-gray-800 rounded-lg text-sm">pythonjsonlogger</span>
          <span class="px-4 py-2 bg-gray-800 rounded-lg text-sm">prometheus_client</span>
        </div>
      </section>

      <!-- CTA -->
      <ProjectCTA section-class="pt-8 border-t border-gray-800" container-class="text-center" actions-class="flex justify-center">
        <template #actions>
          <LocaleLink 
            to="/projetos/backend-orchestrator" 
            class="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-500 rounded-lg transition-colors"
          >
            {{ $t('cases.observability.cta.next') }}
          </LocaleLink>
        </template>
      </ProjectCTA>
    </main>
  </div>
</template>

<script setup>
import { heroBlocksBySlug } from '~/data/project-heroes'

const heroConfig = heroBlocksBySlug.observability
const { t } = useI18n()

useHead({
  title: 'Observability Stack - Prometheus, OpenTelemetry, Grafana | Marcelo Marleta',
  meta: [
    { 
      name: 'description', 
      content: 'Complete observability system with business metrics, distributed tracing, token cost monitoring, AI decision telemetry and real-time alerts.' 
    }
  ]
})
</script>
