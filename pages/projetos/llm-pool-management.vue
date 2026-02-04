<template>
  <div class="min-h-screen bg-gray-950 text-gray-100">
    <!-- Header -->
    <header class="border-b border-gray-800 bg-gray-950/80 backdrop-blur-sm sticky top-0 z-50">
      <nav class="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <NuxtLink to="/" class="text-xl font-bold text-emerald-400 hover:text-emerald-300 transition-colors">
          {{ $t('cases.llmPool.back') }}
        </NuxtLink>
      </nav>
    </header>

    <main class="max-w-4xl mx-auto px-6 py-16">
      <!-- Hero -->
      <div class="mb-16">
        <span class="inline-block px-3 py-1 bg-yellow-500/10 text-yellow-400 rounded-full text-sm mb-4">
          {{ $t('cases.llmPool.badge') }}
        </span>
        <h1 class="text-4xl md:text-5xl font-bold mb-6">
          {{ $t('cases.llmPool.title') }}
        </h1>
        <p class="text-xl text-gray-400 leading-relaxed">
          {{ $t('cases.llmPool.description') }}
        </p>
      </div>

      <!-- Métricas -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        <div class="bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center">
          <div class="text-3xl font-bold text-yellow-400">40%</div>
          <div class="text-sm text-gray-500 mt-1">{{ $t('cases.llmPool.metrics.costReduction') }}</div>
        </div>
        <div class="bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center">
          <div class="text-3xl font-bold text-yellow-400">&lt;200ms</div>
          <div class="text-sm text-gray-500 mt-1">{{ $t('cases.llmPool.metrics.latencyP95') }}</div>
        </div>
        <div class="bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center">
          <div class="text-3xl font-bold text-yellow-400">99.9%</div>
          <div class="text-sm text-gray-500 mt-1">{{ $t('cases.llmPool.metrics.availability') }}</div>
        </div>
        <div class="bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center">
          <div class="text-3xl font-bold text-yellow-400">N</div>
          <div class="text-sm text-gray-500 mt-1">{{ $t('cases.llmPool.metrics.simultaneousProviders') }}</div>
        </div>
      </div>

      <!-- Problema -->
      <section class="mb-16">
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
          <span class="text-red-400">⚡</span> {{ $t('cases.llmPool.problem.title') }}
        </h2>
        <div class="bg-gray-900/30 border border-gray-800 rounded-xl p-8">
          <p class="text-gray-300 leading-relaxed mb-4">
            {{ $t('cases.llmPool.problem.intro') }}
          </p>
          <ul class="space-y-3 text-gray-400">
            <li class="flex items-start gap-2">
              <span class="text-red-400 mt-1">✗</span>
              <span><strong class="text-white">{{ $t('cases.llmPool.problem.explosiveCosts') }}</strong>: {{ $t('cases.llmPool.problem.explosiveCostsDesc') }}</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-red-400 mt-1">✗</span>
              <span><strong class="text-white">{{ $t('cases.llmPool.problem.toolCallingExpensive') }}</strong>: {{ $t('cases.llmPool.problem.toolCallingExpensiveDesc') }}</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-red-400 mt-1">✗</span>
              <span><strong class="text-white">{{ $t('cases.llmPool.problem.rateLimits') }}</strong>: {{ $t('cases.llmPool.problem.rateLimitsDesc') }}</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-red-400 mt-1">✗</span>
              <span><strong class="text-white">{{ $t('cases.llmPool.problem.vendorLockIn') }}</strong>: {{ $t('cases.llmPool.problem.vendorLockInDesc') }}</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-red-400 mt-1">✗</span>
              <span><strong class="text-white">{{ $t('cases.llmPool.problem.keyManagement') }}</strong>: {{ $t('cases.llmPool.problem.keyManagementDesc') }}</span>
            </li>
          </ul>
        </div>
      </section>

      <!-- Solução -->
      <section class="mb-16">
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
          <span class="text-emerald-400">✨</span> {{ $t('cases.llmPool.solution.title') }}
        </h2>
        <div class="space-y-6">
          <!-- Pool Architecture -->
          <div class="bg-gray-900/30 border border-gray-800 rounded-xl p-8">
            <h3 class="text-xl font-semibold text-yellow-400 mb-4">{{ $t('cases.llmPool.solution.poolArchitecture.title') }}</h3>
            <p class="text-gray-300 leading-relaxed mb-4">
              {{ $t('cases.llmPool.solution.poolArchitecture.intro') }} <strong class="text-white">{{ $t('cases.llmPool.solution.poolArchitecture.chat') }}</strong> {{ $t('cases.llmPool.solution.poolArchitecture.chatDesc') }} {{ $t('cases.llmPool.solution.poolArchitecture.and') }} <strong class="text-white">{{ $t('cases.llmPool.solution.poolArchitecture.tools') }}</strong> {{ $t('cases.llmPool.solution.poolArchitecture.toolsDesc') }}
            </p>
            <div class="grid md:grid-cols-2 gap-4 mb-4">
              <div class="bg-gray-800/50 rounded-lg p-4">
                <div class="text-emerald-400 font-semibold mb-2">💬 {{ $t('cases.llmPool.solution.poolArchitecture.chatPool') }}</div>
                <ul class="text-gray-500 text-sm space-y-1">
                  <li>• {{ $t('cases.llmPool.solution.poolArchitecture.chatPoolOptimized') }}</li>
                  <li>• <code class="text-yellow-400">supports_tools: false</code></li>
                  <li>• {{ $t('cases.llmPool.solution.poolArchitecture.chatPoolLowerCost') }}</li>
                  <li>• {{ $t('cases.llmPool.solution.poolArchitecture.chatPoolHumanized') }}</li>
                </ul>
              </div>
              <div class="bg-gray-800/50 rounded-lg p-4">
                <div class="text-purple-400 font-semibold mb-2">🔧 {{ $t('cases.llmPool.solution.poolArchitecture.toolsPool') }}</div>
                <ul class="text-gray-500 text-sm space-y-1">
                  <li>• {{ $t('cases.llmPool.solution.poolArchitecture.toolsPoolFunctionCalling') }}</li>
                  <li>• <code class="text-yellow-400">supports_tools: true</code></li>
                  <li>• {{ $t('cases.llmPool.solution.poolArchitecture.toolsPoolHigherCost') }}</li>
                  <li>• {{ $t('cases.llmPool.solution.poolArchitecture.toolsPoolOnlyWhenNeeded') }}</li>
                </ul>
              </div>
            </div>
            <p class="text-gray-500 text-sm">
              <strong class="text-gray-300">{{ $t('cases.llmPool.solution.poolArchitecture.resultLabel') }}</strong>: {{ $t('cases.llmPool.solution.poolArchitecture.resultText') }}
            </p>
          </div>

          <!-- Key Groups -->
          <div class="bg-gray-900/30 border border-gray-800 rounded-xl p-8">
            <h3 class="text-xl font-semibold text-yellow-400 mb-4">{{ $t('cases.llmPool.solution.keyGroups.title') }}</h3>
            <p class="text-gray-300 leading-relaxed mb-4">
              {{ $t('cases.llmPool.solution.keyGroups.intro') }} <strong class="text-white">{{ $t('cases.llmPool.solution.keyGroups.pools') }}</strong> {{ $t('cases.llmPool.solution.keyGroups.poolsDesc') }} {{ $t('cases.llmPool.solution.keyGroups.and') }} <strong class="text-white">{{ $t('cases.llmPool.solution.keyGroups.keyGroupsLabel') }}</strong> {{ $t('cases.llmPool.solution.keyGroups.keyGroupsDesc') }}
            </p>
            <div class="bg-gray-800/50 rounded-lg p-4 font-mono text-sm overflow-x-auto mb-4">
              <pre class="text-gray-300">
Key Group: "openai-production"
├── provider_type: "openai"
├── base_url: "https://api.openai.com/v1"
└── keys: [
      {key_id: "k1", fingerprint: "sk-...7f2a", status: "valid"},
      {key_id: "k2", fingerprint: "sk-...9b3c", status: "valid"},
      {key_id: "k3", fingerprint: "sk-...4d1e", status: "invalid"}
    ]

Pool: "gpt4o-mini-chat"
├── key_group_id: "openai-production"  ← Reference
├── model: "gpt-4o-mini"
├── supports_tools: false
└── is_active: true
              </pre>
            </div>
            <ul class="space-y-2 text-gray-400 text-sm">
              <li class="flex items-start gap-2">
                <span class="text-emerald-400 mt-1">✓</span>
                <span><strong class="text-white">{{ $t('cases.llmPool.solution.keyGroups.fernetEncryption') }}</strong>: {{ $t('cases.llmPool.solution.keyGroups.fernetEncryptionDesc') }}</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-emerald-400 mt-1">✓</span>
                <span><strong class="text-white">{{ $t('cases.llmPool.solution.keyGroups.fingerprint') }}</strong>: {{ $t('cases.llmPool.solution.keyGroups.fingerprintDesc') }}</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-emerald-400 mt-1">✓</span>
                <span><strong class="text-white">{{ $t('cases.llmPool.solution.keyGroups.autoValidation') }}</strong>: {{ $t('cases.llmPool.solution.keyGroups.autoValidationDesc') }}</span>
              </li>
            </ul>
          </div>

          <!-- Automatic Selection -->
          <div class="bg-gray-900/30 border border-gray-800 rounded-xl p-8">
            <h3 class="text-xl font-semibold text-yellow-400 mb-4">{{ $t('cases.llmPool.solution.automaticSelection.title') }}</h3>
            <p class="text-gray-300 leading-relaxed mb-4">
              {{ $t('cases.llmPool.solution.automaticSelection.description') }}
            </p>
            <div class="bg-gray-800/50 rounded-lg p-4 text-sm">
              <div class="flex items-center gap-2 mb-2">
                <span class="px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded text-xs">1</span>
                <span class="text-gray-300">{{ $t('cases.llmPool.solution.automaticSelection.step1') }} <code class="text-emerald-400">gpt4o-mini-chat</code></span>
              </div>
              <div class="flex items-center gap-2 mb-2">
                <span class="px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded text-xs">2</span>
                <span class="text-gray-300">{{ $t('cases.llmPool.solution.automaticSelection.step2') }} <code class="text-emerald-400">openai-production</code></span>
              </div>
              <div class="flex items-center gap-2 mb-2">
                <span class="px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded text-xs">3</span>
                <span class="text-gray-300">{{ $t('cases.llmPool.solution.automaticSelection.step3') }} <code class="text-emerald-400">status: valid|active</code></span>
              </div>
              <div class="flex items-center gap-2 mb-2">
                <span class="px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded text-xs">4</span>
                <span class="text-gray-300">{{ $t('cases.llmPool.solution.automaticSelection.step4') }}</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded text-xs">5</span>
                <span class="text-gray-300">{{ $t('cases.llmPool.solution.automaticSelection.step5') }}</span>
              </div>
            </div>
          </div>

          <!-- Global Defaults -->
          <div class="bg-gray-900/30 border border-gray-800 rounded-xl p-8">
            <h3 class="text-xl font-semibold text-yellow-400 mb-4">{{ $t('cases.llmPool.solution.globalDefaults.title') }}</h3>
            <p class="text-gray-300 leading-relaxed mb-4">
              {{ $t('cases.llmPool.solution.globalDefaults.description') }}
            </p>
            <div class="bg-gray-800/50 rounded-lg p-4 font-mono text-sm overflow-x-auto">
              <pre class="text-gray-300">
# Priority resolution:
1. tenant.chat_provider_id    → Tenant-specific pool
2. global.chat_provider_id    → Global default pool
3. ❌ FAIL-FAST               → Error (no hardcoded fallback)

# Frontend can:
- Select specific pool for tenant
- Leave empty to use "Global Default"
- Badge "⚡ using default" indicates inheritance
              </pre>
            </div>
          </div>

          <!-- Cross-Pool Fallback -->
          <div class="bg-gray-900/30 border border-gray-800 rounded-xl p-8">
            <h3 class="text-xl font-semibold text-yellow-400 mb-4">{{ $t('cases.llmPool.solution.crossPoolFallback.title') }}</h3>
            <p class="text-gray-300 leading-relaxed mb-4">
              {{ $t('cases.llmPool.solution.crossPoolFallback.description') }}
            </p>
            <div class="bg-gray-800/50 rounded-lg p-4 text-sm">
              <div class="flex items-center gap-2 mb-2">
                <span class="px-2 py-1 bg-red-500/20 text-red-400 rounded text-xs">!</span>
                <span class="text-gray-300">{{ $t('cases.llmPool.solution.crossPoolFallback.exhausted') }}</span>
              </div>
              <div class="flex items-center gap-2 mb-2">
                <span class="px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded text-xs">→</span>
                <span class="text-gray-300">{{ $t('cases.llmPool.solution.crossPoolFallback.tryTools') }}</span>
              </div>
              <div class="flex items-center gap-2 mb-2">
                <span class="px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded text-xs">→</span>
                <span class="text-gray-300">{{ $t('cases.llmPool.solution.crossPoolFallback.tryGlobal') }}</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="px-2 py-1 bg-emerald-500/20 text-emerald-400 rounded text-xs">✓</span>
                <span class="text-gray-300">{{ $t('cases.llmPool.solution.crossPoolFallback.success') }}</span>
              </div>
            </div>
            <p class="text-gray-500 text-sm mt-4">
              <strong class="text-gray-300">{{ $t('cases.llmPool.solution.crossPoolFallback.quotaEnforcerLabel') }}</strong>: {{ $t('cases.llmPool.solution.crossPoolFallback.quotaEnforcerText') }}
            </p>
          </div>

          <!-- Frontend Integration -->
          <div class="bg-gray-900/30 border border-gray-800 rounded-xl p-8">
            <h3 class="text-xl font-semibold text-yellow-400 mb-4">{{ $t('cases.llmPool.solution.frontendIntegration.title') }}</h3>
            <p class="text-gray-300 leading-relaxed mb-4">
              {{ $t('cases.llmPool.solution.frontendIntegration.description') }}
            </p>
            <div class="grid md:grid-cols-2 gap-4">
              <div class="bg-gray-800/50 rounded-lg p-4">
                <div class="text-emerald-400 font-semibold mb-2">{{ $t('cases.llmPool.solution.frontendIntegration.poolManagement') }}</div>
                <ul class="text-gray-500 text-sm space-y-1">
                  <li>• {{ $t('cases.llmPool.solution.frontendIntegration.poolCrud') }}</li>
                  <li>• {{ $t('cases.llmPool.solution.frontendIntegration.toggleTools') }}</li>
                  <li>• {{ $t('cases.llmPool.solution.frontendIntegration.toggleActive') }}</li>
                  <li>• {{ $t('cases.llmPool.solution.frontendIntegration.keyGroupSelection') }}</li>
                </ul>
              </div>
              <div class="bg-gray-800/50 rounded-lg p-4">
                <div class="text-purple-400 font-semibold mb-2">{{ $t('cases.llmPool.solution.frontendIntegration.keyManagement') }}</div>
                <ul class="text-gray-500 text-sm space-y-1">
                  <li>• {{ $t('cases.llmPool.solution.frontendIntegration.addRemoveKeys') }}</li>
                  <li>• {{ $t('cases.llmPool.solution.frontendIntegration.revealVault') }}</li>
                  <li>• {{ $t('cases.llmPool.solution.frontendIntegration.batchValidation') }}</li>
                  <li>• {{ $t('cases.llmPool.solution.frontendIntegration.statusPerKey') }}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Arquitetura -->
      <section class="mb-16">
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
          <span class="text-blue-400">🏗️</span> {{ $t('cases.llmPool.architecture.title') }}
        </h2>
        <div class="bg-gray-900/30 border border-gray-800 rounded-xl p-8 overflow-x-auto">
          <pre class="text-sm text-gray-400 font-mono leading-relaxed">
┌─────────────────────────────────────────────────────────────┐
│                    LLM POOL SYSTEM                          │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   ┌─────────────────────────────────────────────────────┐  │
│   │                  KEY GROUPS (Vault)                 │  │
│   │  ┌──────────────┐  ┌──────────────┐                │  │
│   │  │ openai-prod  │  │ groq-prod    │                │  │
│   │  │ keys: [k1,k2]│  │ keys: [k3]   │                │  │
│   │  │ base_url:... │  │ base_url:... │                │  │
│   │  └──────┬───────┘  └──────┬───────┘                │  │
│   └─────────┼─────────────────┼─────────────────────────┘  │
│             │                 │                             │
│   ┌─────────▼─────────────────▼─────────────────────────┐  │
│   │                    POOLS                             │  │
│   │  ┌──────────────┐  ┌──────────────┐  ┌───────────┐ │  │
│   │  │ gpt4o-mini   │  │ gpt4o-tools  │  │ groq-fast │ │  │
│   │  │ chat only    │  │ tool calling │  │ chat only │ │  │
│   │  │ key_group:   │  │ key_group:   │  │ key_group:│ │  │
│   │  │ openai-prod  │  │ openai-prod  │  │ groq-prod │ │  │
│   │  └──────────────┘  └──────────────┘  └───────────┘ │  │
│   └─────────────────────────────────────────────────────┘  │
│                           │                                 │
│   ┌───────────────────────▼─────────────────────────────┐  │
│   │                 GLOBAL DEFAULTS                      │  │
│   │  chat_provider_id: "gpt4o-mini"                     │  │
│   │  tools_provider_id: "gpt4o-tools"                   │  │
│   └─────────────────────────────────────────────────────┘  │
│                           │                                 │
│   ┌───────────────────────▼─────────────────────────────┐  │
│   │              TENANT OVERRIDE (optional)              │  │
│   │  tenant_A.chat_provider_id: "groq-fast" (override)  │  │
│   │  tenant_B.chat_provider_id: null (uses default)     │  │
│   └─────────────────────────────────────────────────────┘  │
│                                                             │
└─────────────────────────────────────────────────────────────┘</pre>
        </div>
      </section>

      <!-- Decisões Técnicas -->
      <section class="mb-16">
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
          <span class="text-purple-400">🎯</span> {{ $t('cases.llmPool.technicalDecisions.title') }}
        </h2>
        <div class="space-y-4">
          <div class="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
            <h3 class="font-semibold text-white mb-2">{{ $t('cases.llmPool.technicalDecisions.whySeparate') }}</h3>
            <p class="text-gray-400 text-sm">
              {{ $t('cases.llmPool.technicalDecisions.whySeparateAnswer') }}
            </p>
          </div>
          <div class="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
            <h3 class="font-semibold text-white mb-2">{{ $t('cases.llmPool.technicalDecisions.whyFailFast') }}</h3>
            <p class="text-gray-400 text-sm">
              {{ $t('cases.llmPool.technicalDecisions.whyFailFastAnswer') }}
            </p>
          </div>
          <div class="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
            <h3 class="font-semibold text-white mb-2">{{ $t('cases.llmPool.technicalDecisions.whyCache60s') }}</h3>
            <p class="text-gray-400 text-sm">
              {{ $t('cases.llmPool.technicalDecisions.whyCache60sAnswer') }}
            </p>
          </div>
          <div class="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
            <h3 class="font-semibold text-white mb-2">{{ $t('cases.llmPool.technicalDecisions.whyCooldown60s') }}</h3>
            <p class="text-gray-400 text-sm">
              {{ $t('cases.llmPool.technicalDecisions.whyCooldown60sAnswer') }}
            </p>
          </div>
        </div>
      </section>

      <!-- Stack -->
      <section class="mb-16">
        <h2 class="text-2xl font-bold mb-6">{{ $t('cases.llmPool.techStack') }}</h2>
        <div class="flex flex-wrap gap-3">
          <span class="px-4 py-2 bg-gray-800 rounded-lg text-sm">Python 3.12</span>
          <span class="px-4 py-2 bg-gray-800 rounded-lg text-sm">FastAPI</span>
          <span class="px-4 py-2 bg-gray-800 rounded-lg text-sm">SQLAlchemy 2.0</span>
          <span class="px-4 py-2 bg-gray-800 rounded-lg text-sm">Fernet (AES)</span>
          <span class="px-4 py-2 bg-gray-800 rounded-lg text-sm">cachetools TTLCache</span>
          <span class="px-4 py-2 bg-gray-800 rounded-lg text-sm">HTTPX (async)</span>
          <span class="px-4 py-2 bg-gray-800 rounded-lg text-sm">LangChain</span>
          <span class="px-4 py-2 bg-gray-800 rounded-lg text-sm">Vue.js 3</span>
        </div>
      </section>

      <!-- CTA -->
      <div class="text-center pt-8 border-t border-gray-800">
        <NuxtLink 
          to="/projetos/ai-engine" 
          class="inline-flex items-center gap-2 px-6 py-3 bg-yellow-600 hover:bg-yellow-500 rounded-lg transition-colors"
        >
          {{ $t('cases.llmPool.nextProject') }}
        </NuxtLink>
      </div>
    </main>
  </div>
</template>
