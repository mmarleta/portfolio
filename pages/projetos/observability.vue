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
        <span class="inline-block px-3 py-1 bg-green-500/10 text-green-400 rounded-full text-sm mb-4">
          Observabilidade Enterprise
        </span>
        <h1 class="text-4xl md:text-5xl font-bold mb-6">
          Observability Stack
        </h1>
        <p class="text-xl text-gray-400 leading-relaxed">
          Sistema completo de observabilidade com métricas de negócio, tracing distribuído, 
          monitoramento de custos de tokens, telemetria de decisões de IA e alertas em tempo real.
        </p>
      </div>

      <!-- Métricas -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        <div class="bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center">
          <div class="text-3xl font-bold text-green-400">4</div>
          <div class="text-sm text-gray-500 mt-1">Pilares MELT</div>
        </div>
        <div class="bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center">
          <div class="text-3xl font-bold text-green-400">50+</div>
          <div class="text-sm text-gray-500 mt-1">Métricas Custom</div>
        </div>
        <div class="bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center">
          <div class="text-3xl font-bold text-green-400">100%</div>
          <div class="text-sm text-gray-500 mt-1">Trace Coverage</div>
        </div>
        <div class="bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center">
          <div class="text-3xl font-bold text-green-400">&lt;5min</div>
          <div class="text-sm text-gray-500 mt-1">MTTR Debug</div>
        </div>
      </div>

      <!-- Por que Observabilidade? -->
      <section class="mb-16">
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
          <span class="text-red-400">⚡</span> Por Que Observabilidade é Crítica
        </h2>
        <div class="bg-gray-900/30 border border-gray-800 rounded-xl p-8">
          <p class="text-gray-300 leading-relaxed mb-4">
            Em sistemas de IA conversacional, "não funcionou" não é um diagnóstico. 
            Precisamos responder perguntas específicas:
          </p>
          <ul class="space-y-3 text-gray-400">
            <li class="flex items-start gap-2">
              <span class="text-yellow-400 mt-1">?</span>
              <span><strong class="text-white">Debug</strong>: Por que o AI não entendeu "quero marcar amanhã"?</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-yellow-400 mt-1">?</span>
              <span><strong class="text-white">Performance</strong>: Qual nó do LangGraph está lento?</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-yellow-400 mt-1">?</span>
              <span><strong class="text-white">Custos</strong>: Quanto estamos gastando em tokens por tenant?</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-yellow-400 mt-1">?</span>
              <span><strong class="text-white">Negócio</strong>: Qual % das conversas resolvemos sem humano?</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-yellow-400 mt-1">?</span>
              <span><strong class="text-white">Qualidade</strong>: O RAG está retornando preços corretos?</span>
            </li>
          </ul>
        </div>
      </section>

      <!-- Stack de Observabilidade -->
      <section class="mb-16">
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
          <span class="text-emerald-400">✨</span> Stack Completo
        </h2>
        <div class="space-y-6">
          <!-- Business Metrics -->
          <div class="bg-gray-900/30 border border-gray-800 rounded-xl p-8">
            <h3 class="text-xl font-semibold text-green-400 mb-4">📊 Business Metrics (Prometheus)</h3>
            <p class="text-gray-300 leading-relaxed mb-4">
              Métricas de negócio com ownership claro por serviço (evita double counting):
            </p>
            <div class="overflow-x-auto mb-4">
              <table class="w-full text-sm">
                <thead>
                  <tr class="text-left text-gray-500 border-b border-gray-800">
                    <th class="pb-2">Métrica</th>
                    <th class="pb-2">Owner</th>
                    <th class="pb-2">Labels</th>
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
              <strong class="text-gray-300">Ownership Table</strong>: Cada métrica tem um único serviço responsável 
              por emiti-la, evitando contagem dupla em sistemas distribuídos.
            </p>
          </div>

          <!-- OpenTelemetry Tracing -->
          <div class="bg-gray-900/30 border border-gray-800 rounded-xl p-8">
            <h3 class="text-xl font-semibold text-green-400 mb-4">🔍 Distributed Tracing (OpenTelemetry)</h3>
            <p class="text-gray-300 leading-relaxed mb-4">
              Tracing end-to-end com propagação de contexto entre serviços:
            </p>
            <div class="bg-gray-800/50 rounded-lg p-4 font-mono text-sm overflow-x-auto mb-4">
              <pre class="text-gray-300">
Request → Orchestrator → AI Engine → Memory Engine → PostgreSQL
   │           │             │            │
   │           │             │            └── db.query span
   │           │             └── langgraph.node spans (20+)
   │           └── chat.orchestration span
   └── http.request span

trace_id: a1b2c3d4... (propagado via headers)
              </pre>
            </div>
            <div class="grid md:grid-cols-2 gap-4">
              <div class="bg-gray-800/50 rounded-lg p-4">
                <div class="text-emerald-400 font-semibold mb-2">Instrumentação Automática</div>
                <ul class="text-gray-500 text-sm space-y-1">
                  <li>• FastAPI requests/responses</li>
                  <li>• HTTPX client calls</li>
                  <li>• SQLAlchemy queries</li>
                  <li>• Redis operations</li>
                </ul>
              </div>
              <div class="bg-gray-800/50 rounded-lg p-4">
                <div class="text-purple-400 font-semibold mb-2">Spans Customizados</div>
                <ul class="text-gray-500 text-sm space-y-1">
                  <li>• LangGraph node execution</li>
                  <li>• RAG search decisions</li>
                  <li>• Booking FSM transitions</li>
                  <li>• LLM API calls + tokens</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Token Usage Reports -->
          <div class="bg-gray-900/30 border border-gray-800 rounded-xl p-8">
            <h3 class="text-xl font-semibold text-green-400 mb-4">💰 Token Usage & Cost Tracking</h3>
            <p class="text-gray-300 leading-relaxed mb-4">
              Relatórios de uso de tokens via Jaeger traces para controle de custos:
            </p>
            <div class="bg-gray-800/50 rounded-lg p-4 font-mono text-sm overflow-x-auto mb-4">
              <pre class="text-gray-300">
GET /api/token-reports?tenant_id=clinic2&days=30

{
  "tenant_id": "clinic2",
  "total_input_tokens": 1_250_000,
  "total_output_tokens": 450_000,
  "total_cost": 42.50,  // USD estimado
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
              Dados extraídos de spans OpenTelemetry com atributos <code class="text-emerald-400">llm.input_tokens</code>, 
              <code class="text-emerald-400">llm.output_tokens</code>, <code class="text-emerald-400">llm.model</code>.
            </p>
          </div>

          <!-- State Snapshot Telemetry -->
          <div class="bg-gray-900/30 border border-gray-800 rounded-xl p-8">
            <h3 class="text-xl font-semibold text-green-400 mb-4">📸 State Snapshot Telemetry</h3>
            <p class="text-gray-300 leading-relaxed mb-4">
              Cada response inclui snapshot do estado para debug de conversas:
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
            <h3 class="text-xl font-semibold text-green-400 mb-4">🎯 RAG Decision Telemetry</h3>
            <p class="text-gray-300 leading-relaxed mb-4">
              Explicabilidade de decisões do pipeline de pricing/RAG:
            </p>
            <div class="bg-gray-800/50 rounded-lg p-4 font-mono text-sm overflow-x-auto mb-4">
              <pre class="text-gray-300">
{
  "total_entries": 10,
  "match_types": {
    "structured": 8,   // Match direto no catálogo
    "semantic": 2,     // Match via embeddings
    "alias": 0,        // Match via sinônimo
    "fallback": 0      // Fallback genérico
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
              Permite identificar: catálogo incompleto, aliases faltando, threshold de score inadequado.
            </p>
          </div>

          <!-- Usage Monitoring -->
          <div class="bg-gray-900/30 border border-gray-800 rounded-xl p-8">
            <h3 class="text-xl font-semibold text-green-400 mb-4">📡 Usage Monitoring Middleware</h3>
            <p class="text-gray-300 leading-relaxed mb-4">
              Monitoramento de endpoints para decisões de deprecação:
            </p>
            <ul class="space-y-2 text-gray-400 text-sm">
              <li class="flex items-start gap-2">
                <span class="text-emerald-400 mt-1">✓</span>
                <span><strong class="text-white">Non-intrusive</strong>: Não bloqueia requests, apenas observa</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-emerald-400 mt-1">✓</span>
                <span><strong class="text-white">Sample rate</strong>: Configurável por ambiente (prod: 1%, dev: 100%)</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-emerald-400 mt-1">✓</span>
                <span><strong class="text-white">30+ days data</strong>: Coleta dados antes de decisões de remoção</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-emerald-400 mt-1">✓</span>
                <span><strong class="text-white">Endpoint tracking</strong>: Identifica endpoints legados ainda em uso</span>
              </li>
            </ul>
          </div>

          <!-- Detailed Metrics -->
          <div class="bg-gray-900/30 border border-gray-800 rounded-xl p-8">
            <h3 class="text-xl font-semibold text-green-400 mb-4">📈 Performance Thresholds</h3>
            <p class="text-gray-300 leading-relaxed mb-4">
              Thresholds automáticos para alertas:
            </p>
            <div class="grid md:grid-cols-2 gap-4">
              <div class="bg-gray-800/50 rounded-lg p-4">
                <div class="text-yellow-400 font-semibold mb-2">⚠️ Warning</div>
                <ul class="text-gray-500 text-sm space-y-1">
                  <li>• memory_retrieval_latency > 100ms</li>
                  <li>• cache_hit_rate < 80%</li>
                  <li>• error_rate > 1%</li>
                </ul>
              </div>
              <div class="bg-gray-800/50 rounded-lg p-4">
                <div class="text-red-400 font-semibold mb-2">🚨 Critical</div>
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
          <span class="text-blue-400">🏗️</span> Arquitetura
        </h2>
        <div class="bg-gray-900/30 border border-gray-800 rounded-xl p-8 overflow-x-auto">
          <pre class="text-sm text-gray-400 font-mono leading-relaxed">
┌─────────────────────────────────────────────────────────────┐
│                 OBSERVABILITY STACK                          │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   ┌─────────────┐  ┌─────────────┐  ┌─────────────┐        │
│   │ Orchestrator│  │  AI Engine  │  │Memory Engine│        │
│   │  metrics    │  │  metrics    │  │  metrics    │        │
│   └──────┬──────┘  └──────┬──────┘  └──────┬──────┘        │
│          │                │                │                │
│          └────────────────┼────────────────┘                │
│                           │                                 │
│   ┌───────────────────────▼─────────────────────────────┐  │
│   │              PROMETHEUS                              │  │
│   │  - Business metrics (handover, booking, AI)         │  │
│   │  - System metrics (latency, errors, cache)          │  │
│   │  - Custom metrics (RAG, tool budget)                │  │
│   └───────────────────────┬─────────────────────────────┘  │
│                           │                                 │
│   ┌───────────────────────▼─────────────────────────────┐  │
│   │              GRAFANA DASHBOARDS                      │  │
│   │  - Real-time KPIs per tenant                        │  │
│   │  - Cost tracking & forecasting                      │  │
│   │  - Alert rules & notifications                      │  │
│   └─────────────────────────────────────────────────────┘  │
│                                                             │
│   ┌─────────────────────────────────────────────────────┐  │
│   │              OPENTELEMETRY + JAEGER                  │  │
│   │  - Distributed traces across services               │  │
│   │  - Token usage extraction from spans                │  │
│   │  - Latency breakdown per operation                  │  │
│   └─────────────────────────────────────────────────────┘  │
│                                                             │
│   ┌─────────────────────────────────────────────────────┐  │
│   │              LOKI + JSON LOGS                        │  │
│   │  - Structured logging with trace correlation        │  │
│   │  - trace_id + span_id in every log entry            │  │
│   │  - Searchable by tenant, operation, error           │  │
│   └─────────────────────────────────────────────────────┘  │
│                                                             │
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
            <h3 class="font-semibold text-white mb-2">Por que ownership table para métricas?</h3>
            <p class="text-gray-400 text-sm">
              Em sistemas distribuídos, múltiplos serviços podem observar o mesmo evento. Sem ownership 
              claro, métricas de handover seriam emitidas pelo Orchestrator E pelo AI Engine, causando 
              double counting. Ownership table define um único emissor por métrica.
            </p>
          </div>
          <div class="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
            <h3 class="font-semibold text-white mb-2">Por que extrair tokens de traces e não de logs?</h3>
            <p class="text-gray-400 text-sm">
              Traces têm estrutura padronizada (span attributes) e contexto (trace_id liga request a response). 
              Logs são texto livre que requer parsing. Jaeger já indexa spans por atributo, facilitando queries 
              como "total tokens por modelo no último mês".
            </p>
          </div>
          <div class="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
            <h3 class="font-semibold text-white mb-2">Por que state snapshot em response_metadata?</h3>
            <p class="text-gray-400 text-sm">
              Debugging de conversas requer saber o estado exato após cada turno. Incluir snapshot no response 
              permite reproduzir problemas sem acessar logs ou traces. Frontend pode mostrar "estado interno" 
              em modo debug.
            </p>
          </div>
          <div class="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
            <h3 class="font-semibold text-white mb-2">Por que sample rate configurável?</h3>
            <p class="text-gray-400 text-sm">
              Em produção com milhões de requests, 100% sampling é caro (storage, processing). 
              1-10% sampling captura anomalias suficientes para debug. Em dev/staging, 100% 
              permite debug completo de cada request.
            </p>
          </div>
        </div>
      </section>

      <!-- Stack -->
      <section class="mb-16">
        <h2 class="text-2xl font-bold mb-6">Stack Técnica</h2>
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
      <div class="text-center pt-8 border-t border-gray-800">
        <NuxtLink 
          to="/projetos/backend-orchestrator" 
          class="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-500 rounded-lg transition-colors"
        >
          Próximo: Backend Orchestrator →
        </NuxtLink>
      </div>
    </main>
  </div>
</template>
