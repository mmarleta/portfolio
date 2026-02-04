<template>
  <ProjectPage class="text-gray-100">
    <ProjectHeader back-label-key="nav.back" />

    <main class="max-w-4xl mx-auto px-6 py-16">
      <ProjectHeroBlock :config="heroConfig" />

      <!-- Problema -->
      <section class="mb-16">
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
          <span class="text-red-400">⚡</span> {{ $t('cases.memory.problem.title') }}
        </h2>
        <div class="bg-gray-900/30 border border-gray-800 rounded-xl p-8">
          <p class="text-gray-300 leading-relaxed mb-4">
            {{ $t('cases.memory.problem.intro') }}
          </p>
          <ul class="space-y-3 text-gray-400">
            <li class="flex items-start gap-2">
              <span class="text-red-400 mt-1">✗</span>
              <span><strong class="text-white">{{ $t('cases.memory.problem.tokensCost') }}</strong>: {{ $t('cases.memory.problem.tokensCostDesc') }}</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-red-400 mt-1">✗</span>
              <span><strong class="text-white">{{ $t('cases.memory.problem.latencyKillsUx') }}</strong>: {{ $t('cases.memory.problem.latencyKillsUxDesc') }}</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-red-400 mt-1">✗</span>
              <span><strong class="text-white">{{ $t('cases.memory.problem.complianceMandatory') }}</strong>: {{ $t('cases.memory.problem.complianceMandatoryDesc') }}</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-red-400 mt-1">✗</span>
              <span><strong class="text-white">{{ $t('cases.memory.problem.handoverComplicates') }}</strong>: {{ $t('cases.memory.problem.handoverComplicatesDesc') }}</span>
            </li>
          </ul>
        </div>
      </section>

      <!-- Solução -->
      <section class="mb-16">
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
          <span class="text-emerald-400">✨</span> {{ $t('cases.memory.solution.title') }}
        </h2>
        <div class="space-y-6">
          <!-- Hot/Warm/Cold -->
          <div class="bg-gray-900/30 border border-gray-800 rounded-xl p-8">
            <h3 class="text-xl font-semibold text-emerald-400 mb-4">{{ $t('cases.memory.solution.hotWarmCold.title') }}</h3>
            <p class="text-gray-300 leading-relaxed mb-4">
              {{ $t('cases.memory.solution.hotWarmCold.intro') }}
            </p>
            <div class="grid md:grid-cols-3 gap-4 mb-4">
              <div class="bg-gray-800/50 rounded-lg p-4 text-center">
                <div class="text-2xl mb-2">🔥</div>
                <div class="text-emerald-400 font-mono font-semibold">{{ $t('cases.memory.solution.hotWarmCold.hot') }}</div>
                <div class="text-gray-500 text-sm">{{ $t('cases.memory.solution.hotWarmCold.hotDesc') }}</div>
                <div class="text-gray-600 text-xs mt-1">{{ $t('cases.memory.solution.hotWarmCold.hotLatency') }}</div>
              </div>
              <div class="bg-gray-800/50 rounded-lg p-4 text-center">
                <div class="text-2xl mb-2">🌡️</div>
                <div class="text-orange-400 font-mono font-semibold">{{ $t('cases.memory.solution.hotWarmCold.warm') }}</div>
                <div class="text-gray-500 text-sm">{{ $t('cases.memory.solution.hotWarmCold.warmDesc') }}</div>
                <div class="text-gray-600 text-xs mt-1">{{ $t('cases.memory.solution.hotWarmCold.warmLatency') }}</div>
              </div>
              <div class="bg-gray-800/50 rounded-lg p-4 text-center">
                <div class="text-2xl mb-2">🧊</div>
                <div class="text-blue-400 font-mono font-semibold">{{ $t('cases.memory.solution.hotWarmCold.cold') }}</div>
                <div class="text-gray-500 text-sm">{{ $t('cases.memory.solution.hotWarmCold.coldDesc') }}</div>
                <div class="text-gray-600 text-xs mt-1">{{ $t('cases.memory.solution.hotWarmCold.coldLatency') }}</div>
              </div>
            </div>
            <p class="text-gray-500 text-sm">
              <strong class="text-gray-300">{{ $t('cases.memory.solution.hotWarmCold.writeThrough') }}</strong>: {{ $t('cases.memory.solution.hotWarmCold.writeThroughDesc') }}
            </p>
          </div>

          <!-- Customer Facts -->
          <div class="bg-gray-900/30 border border-gray-800 rounded-xl p-8">
            <h3 class="text-xl font-semibold text-emerald-400 mb-4">{{ $t('cases.memory.solution.customerFacts.title') }}</h3>
            <p class="text-gray-300 leading-relaxed mb-4">
              {{ $t('cases.memory.solution.customerFacts.intro') }}
            </p>
            <div class="bg-gray-800/50 rounded-lg p-4 font-mono text-sm overflow-x-auto">
              <pre class="text-gray-300">
CustomerFact:
  fact_key: "preferred_times"
  fact_value: {"morning": true}
  valid_at: 2025-01-01T10:00:00Z
  invalid_at: null  ← fact currently active

# Customer changed preference 3 months later:
  fact_key: "preferred_times"
  fact_value: {"afternoon": true}
  valid_at: 2025-04-01T14:00:00Z
  invalid_at: null
              </pre>
            </div>
            <p class="text-gray-500 text-sm mt-4">
              {{ $t('cases.memory.solution.customerFacts.footer') }}
            </p>
          </div>

          <!-- Compressão Semântica -->
          <div class="bg-gray-900/30 border border-gray-800 rounded-xl p-8">
            <h3 class="text-xl font-semibold text-emerald-400 mb-4">{{ $t('cases.memory.solution.semanticCompression.title') }}</h3>
            <p class="text-gray-300 leading-relaxed mb-4">
              {{ $t('cases.memory.solution.semanticCompression.intro') }}
            </p>
            <ul class="space-y-2 text-gray-400">
              <li class="flex items-start gap-2">
                <span class="text-emerald-400 mt-1">✓</span>
                <span><strong class="text-white">{{ $t('cases.memory.solution.semanticCompression.preserves') }}</strong>: {{ $t('cases.memory.solution.semanticCompression.preservesDesc') }}</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-emerald-400 mt-1">✓</span>
                <span><strong class="text-white">{{ $t('cases.memory.solution.semanticCompression.removes') }}</strong>: {{ $t('cases.memory.solution.semanticCompression.removesDesc') }}</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-emerald-400 mt-1">✓</span>
                <span><strong class="text-white">{{ $t('cases.memory.solution.semanticCompression.result') }}</strong>: {{ $t('cases.memory.solution.semanticCompression.resultDesc') }}</span>
              </li>
            </ul>
          </div>

          <!-- Compliance -->
          <div class="bg-gray-900/30 border border-gray-800 rounded-xl p-8">
            <h3 class="text-xl font-semibold text-emerald-400 mb-4">{{ $t('cases.memory.solution.compliance.title') }}</h3>
            <p class="text-gray-300 leading-relaxed mb-4">
              {{ $t('cases.memory.solution.compliance.intro') }}
            </p>
            <div class="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
              <div class="bg-gray-800/50 rounded-lg p-3 text-center">
                <div class="text-sm font-semibold text-white">{{ $t('cases.memory.solution.compliance.lgpd') }}</div>
                <div class="text-xs text-gray-500">{{ $t('cases.memory.solution.compliance.lgpdDesc') }}</div>
              </div>
              <div class="bg-gray-800/50 rounded-lg p-3 text-center">
                <div class="text-sm font-semibold text-white">{{ $t('cases.memory.solution.compliance.hipaa') }}</div>
                <div class="text-xs text-gray-500">{{ $t('cases.memory.solution.compliance.hipaaDesc') }}</div>
              </div>
              <div class="bg-gray-800/50 rounded-lg p-3 text-center">
                <div class="text-sm font-semibold text-white">{{ $t('cases.memory.solution.compliance.cfo') }}</div>
                <div class="text-xs text-gray-500">{{ $t('cases.memory.solution.compliance.cfoDesc') }}</div>
              </div>
              <div class="bg-gray-800/50 rounded-lg p-3 text-center">
                <div class="text-sm font-semibold text-white">{{ $t('cases.memory.solution.compliance.cfm') }}</div>
                <div class="text-xs text-gray-500">{{ $t('cases.memory.solution.compliance.cfmDesc') }}</div>
              </div>
              <div class="bg-gray-800/50 rounded-lg p-3 text-center">
                <div class="text-sm font-semibold text-white">{{ $t('cases.memory.solution.compliance.oab') }}</div>
                <div class="text-xs text-gray-500">{{ $t('cases.memory.solution.compliance.oabDesc') }}</div>
              </div>
              <div class="bg-gray-800/50 rounded-lg p-3 text-center">
                <div class="text-sm font-semibold text-white">{{ $t('cases.memory.solution.compliance.gdpr') }}</div>
                <div class="text-xs text-gray-500">{{ $t('cases.memory.solution.compliance.gdprDesc') }}</div>
              </div>
            </div>
            <p class="text-gray-500 text-sm">
              {{ $t('cases.memory.solution.compliance.footer') }}
            </p>
          </div>

          <!-- Handover Summary -->
          <div class="bg-gray-900/30 border border-gray-800 rounded-xl p-8">
            <h3 class="text-xl font-semibold text-emerald-400 mb-4">{{ $t('cases.memory.solution.handover.title') }}</h3>
            <p class="text-gray-300 leading-relaxed mb-4">
              {{ $t('cases.memory.solution.handover.intro') }}
            </p>
            <div class="bg-gray-800/50 rounded-lg p-4 text-sm">
              <div class="flex items-center gap-2 mb-3">
                <span class="px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-xs">1</span>
                <span class="text-gray-300">{{ $t('cases.memory.solution.handover.step1') }}</span>
              </div>
              <div class="flex items-center gap-2 mb-3">
                <span class="px-2 py-1 bg-purple-500/20 text-purple-400 rounded text-xs">2</span>
                <span class="text-gray-300">{{ $t('cases.memory.solution.handover.step2') }}</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="px-2 py-1 bg-emerald-500/20 text-emerald-400 rounded text-xs">3</span>
                <span class="text-gray-300">{{ $t('cases.memory.solution.handover.step3') }}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Arquitetura -->
      <section class="mb-16">
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
          <span class="text-blue-400">🏗️</span> {{ $t('cases.memory.architecture.title') }}
        </h2>
        <div class="bg-gray-900/30 border border-gray-800 rounded-xl p-8 overflow-x-auto">
          <pre class="text-sm text-gray-400 font-mono leading-relaxed">
┌─────────────────────────────────────────────────────────────┐
│                    MEMORY ENGINE                            │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   🔥 HOT (Redis)     🌡️ WARM (Redis)     🧊 COLD (PostgreSQL)
│   TTL: 1 min         TTL: 1 hour          Permanent         │
│   Latency: &lt;10ms     Latency: &lt;50ms       Latency: ~100ms   │
│                                                             │
│   ┌─────────┐        ┌─────────┐         ┌─────────────┐   │
│   │ {{ $t('cases.memory.architecture.lastMsg') }}  │        │ {{ $t('cases.memory.architecture.activeSession') }} │         │ {{ $t('cases.memory.architecture.completeHistory') }}   │   │
│   │         │───────▶│         │────────▶│             │   │
│   └─────────┘        └─────────┘         └─────────────┘   │
│        │                   │                    │           │
│        └───────────────────┴────────────────────┘           │
│                    {{ $t('cases.memory.architecture.writeThroughStrategy') }}                    │
│              {{ $t('cases.memory.architecture.sourceOfTruth') }}                 │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│                  {{ $t('cases.memory.architecture.contextComposer') }}                         │
├─────────────────────────────────────────────────────────────┤
│  {{ $t('cases.memory.architecture.factsLogic') }}  │  {{ $t('cases.memory.architecture.summaryLanguage') }}  │  {{ $t('cases.memory.architecture.recentChat') }}   │
│  ───────────────  │  ────────────────────  │  ─────────────   │
│  name: "João"     │  "Customer preferred" │  {{ $t('cases.memory.architecture.lastMsgs') }}│
│  phone: "11..."   │  "morning, already"   │                  │
│  pref: morning    │  "scheduled 2..."     │                  │
└─────────────────────────────────────────────────────────────┘</pre>
        </div>
      </section>

      <!-- Decisões Técnicas -->
      <section class="mb-16">
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
          <span class="text-purple-400">🎯</span> {{ $t('cases.memory.decisions.title') }}
        </h2>
        <div class="space-y-4">
          <div class="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
            <h3 class="font-semibold text-white mb-2">{{ $t('cases.memory.decisions.writeThrough.question') }}</h3>
            <p class="text-gray-400 text-sm">
              {{ $t('cases.memory.decisions.writeThrough.answer') }}
            </p>
          </div>
          <div class="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
            <h3 class="font-semibold text-white mb-2">{{ $t('cases.memory.decisions.schemaIsolation.question') }}</h3>
            <p class="text-gray-400 text-sm">
              {{ $t('cases.memory.decisions.schemaIsolation.answer') }}
            </p>
          </div>
          <div class="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
            <h3 class="font-semibold text-white mb-2">{{ $t('cases.memory.decisions.temporalFacts.question') }}</h3>
            <p class="text-gray-400 text-sm">
              {{ $t('cases.memory.decisions.temporalFacts.answer') }}
            </p>
          </div>
          <div class="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
            <h3 class="font-semibold text-white mb-2">{{ $t('cases.memory.decisions.factsSummary.question') }}</h3>
            <p class="text-gray-400 text-sm">
              {{ $t('cases.memory.decisions.factsSummary.answer') }}
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
      <ProjectCTA section-class="pt-8 border-t border-gray-800" container-class="text-center" actions-class="flex justify-center">
        <template #actions>
          <LocaleLink 
            to="/projetos/ai-engine" 
            class="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-500 rounded-lg transition-colors"
          >
            {{ $t('cases.memory.nextProject') }}
          </LocaleLink>
        </template>
      </ProjectCTA>
    </main>
  </ProjectPage>
</template>

<script setup>
import { heroBlocksBySlug } from '~/data/project-heroes'

const heroConfig = heroBlocksBySlug.memoryEngine
</script>
