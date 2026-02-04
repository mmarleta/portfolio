<template>
  <div class="min-h-screen bg-gray-950 text-gray-100">
    <!-- Header -->
    <header class="border-b border-gray-800 bg-gray-950/80 backdrop-blur-sm sticky top-0 z-50">
      <nav class="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <NuxtLink to="/" class="text-xl font-bold text-emerald-400 hover:text-emerald-300 transition-colors">
          {{ $t('cases.pricing.back') }}
        </NuxtLink>
      </nav>
    </header>

    <main class="max-w-4xl mx-auto px-6 py-16">
      <!-- Hero -->
      <div class="mb-16">
        <span class="inline-block px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-sm mb-4">
          {{ $t('cases.pricing.badge') }}
        </span>
        <h1 class="text-4xl md:text-5xl font-bold mb-6">
          {{ $t('cases.pricing.title') }}
        </h1>
        <p class="text-xl text-gray-400 leading-relaxed">
          {{ $t('cases.pricing.description') }}
        </p>
      </div>

      <!-- Métricas -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        <div class="bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center">
          <div class="text-3xl font-bold text-purple-400">95%</div>
          <div class="text-sm text-gray-500 mt-1">{{ $t('cases.pricing.metrics.precision') }}</div>
        </div>
        <div class="bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center">
          <div class="text-3xl font-bold text-purple-400">&lt;100ms</div>
          <div class="text-sm text-gray-500 mt-1">{{ $t('cases.pricing.metrics.cacheHit') }}</div>
        </div>
        <div class="bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center">
          <div class="text-3xl font-bold text-purple-400">80%</div>
          <div class="text-sm text-gray-500 mt-1">{{ $t('cases.pricing.metrics.cacheRate') }}</div>
        </div>
        <div class="bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center">
          <div class="text-3xl font-bold text-purple-400">3072d</div>
          <div class="text-sm text-gray-500 mt-1">{{ $t('cases.pricing.metrics.embeddingDim') }}</div>
        </div>
      </div>

      <!-- Problema -->
      <section class="mb-16">
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
          <span class="text-red-400">⚡</span> {{ $t('cases.pricing.problem.title') }}
        </h2>
        <div class="bg-gray-900/30 border border-gray-800 rounded-xl p-8">
          <p class="text-gray-300 leading-relaxed mb-4">
            {{ $t('cases.pricing.problem.intro') }}
          </p>
          <ul class="space-y-2 text-gray-400">
            <li class="flex items-start gap-2">
              <span class="text-red-400 mt-1">✗</span>
              <span>{{ $t('cases.pricing.problem.fuzzyMatching') }}</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-red-400 mt-1">✗</span>
              <span>{{ $t('cases.pricing.problem.multipleItems') }}</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-red-400 mt-1">✗</span>
              <span>{{ $t('cases.pricing.problem.acceptableLatency') }}</span>
            </li>
          </ul>
        </div>
      </section>

      <!-- Solução -->
      <section class="mb-16">
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
          <span class="text-emerald-400">✨</span> {{ $t('cases.pricing.solution.title') }}
        </h2>
        <div class="space-y-6">
          <div class="bg-gray-900/30 border border-gray-800 rounded-xl p-8">
            <h3 class="text-xl font-semibold text-purple-400 mb-4">{{ $t('cases.pricing.solution.pricingFastLane.title') }}</h3>
            <p class="text-gray-300 leading-relaxed mb-4">
              {{ $t('cases.pricing.solution.pricingFastLane.description') }}
            </p>
            <div class="bg-gray-800/50 rounded-lg p-4 font-mono text-sm text-gray-400">
              <div class="text-green-400">{{ $t('cases.pricing.solution.pricingFastLane.fastLaneComment') }}</div>
              <div>semantic_routing → <span class="text-purple-400">pricing_fast_lane</span> → format_response</div>
              <div class="text-gray-600 mt-2">{{ $t('cases.pricing.solution.pricingFastLane.normalFlowComment') }}</div>
              <div class="text-gray-600">semantic_routing → structured_analysis → agent → tools → format</div>
            </div>
          </div>

          <div class="bg-gray-900/30 border border-gray-800 rounded-xl p-8">
            <h3 class="text-xl font-semibold text-purple-400 mb-4">{{ $t('cases.pricing.solution.adaptiveThreshold.title') }}</h3>
            <p class="text-gray-300 leading-relaxed mb-4">
              {{ $t('cases.pricing.solution.adaptiveThreshold.description') }}
            </p>
            <ul class="space-y-2 text-gray-400 text-sm">
              <li class="flex items-start gap-2">
                <span class="text-purple-400 mt-1">→</span>
                <span><strong class="text-white">{{ $t('cases.pricing.solution.adaptiveThreshold.shortQuery') }}</strong> {{ $t('cases.pricing.solution.adaptiveThreshold.shortQueryDesc') }}</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-purple-400 mt-1">→</span>
                <span><strong class="text-white">{{ $t('cases.pricing.solution.adaptiveThreshold.numbersQuery') }}</strong>: {{ $t('cases.pricing.solution.adaptiveThreshold.numbersQueryDesc') }}</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-purple-400 mt-1">→</span>
                <span><strong class="text-white">{{ $t('cases.pricing.solution.adaptiveThreshold.multiItemQuery') }}</strong>: {{ $t('cases.pricing.solution.adaptiveThreshold.multiItemQueryDesc') }}</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-purple-400 mt-1">→</span>
                <span><strong class="text-white">{{ $t('cases.pricing.solution.adaptiveThreshold.llmOverride') }}</strong>: {{ $t('cases.pricing.solution.adaptiveThreshold.llmOverrideDesc') }}</span>
              </li>
            </ul>
          </div>

          <div class="bg-gray-900/30 border border-gray-800 rounded-xl p-8">
            <h3 class="text-xl font-semibold text-purple-400 mb-4">{{ $t('cases.pricing.solution.requestCoalescing.title') }}</h3>
            <p class="text-gray-300 leading-relaxed mb-4">
              {{ $t('cases.pricing.solution.requestCoalescing.description') }}
            </p>
            <div class="bg-gray-800/50 rounded-lg p-4 text-sm">
              <p class="text-gray-400 mb-2">{{ $t('cases.pricing.solution.requestCoalescing.intro') }}</p>
              <ol class="space-y-1 text-gray-500">
                <li>1. {{ $t('cases.pricing.solution.requestCoalescing.step1') }}</li>
                <li>2. {{ $t('cases.pricing.solution.requestCoalescing.step2') }}</li>
                <li>3. {{ $t('cases.pricing.solution.requestCoalescing.step3') }}</li>
                <li>4. {{ $t('cases.pricing.solution.requestCoalescing.step4') }}</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <!-- Cache Architecture -->
      <section class="mb-16">
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
          <span class="text-blue-400">🏗️</span> {{ $t('cases.pricing.cacheArchitecture.title') }}
        </h2>
        <div class="bg-gray-900/30 border border-gray-800 rounded-xl p-8 overflow-x-auto">
          <pre class="text-sm text-gray-400 font-mono leading-relaxed">
┌─────────────────────────────────────────────────────────────┐
│                     PRICING QUERY                           │
└─────────────────────────┬───────────────────────────────────┘
                          ▼
┌─────────────────────────────────────────────────────────────┐
│  L1: In-Memory Cache (per-instance)                         │
│  TTL: 60s | Key: normalized_query_hash                      │
└─────────────────────────┬───────────────────────────────────┘
                          │ MISS
                          ▼
┌─────────────────────────────────────────────────────────────┐
│  L2: Redis Intelligent Cache (shared)                       │
│  TTL: 300s | Key: exam_names_signature                      │
│  + Request Coalescing Lock                                  │
└─────────────────────────┬───────────────────────────────────┘
                          │ MISS
                          ▼
┌─────────────────────────────────────────────────────────────┐
│  Semantic Search (pgvector + HNSW)                          │
│  - Embeddings: text-embedding-3-large (3072d)               │
│  - Reranking: BM25 + semantic score fusion                  │
│  - Alias map: fuzzy match recovery                          │
└─────────────────────────────────────────────────────────────┘</pre>
        </div>
      </section>

      <!-- Intelligent Cache Key -->
      <section class="mb-16">
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
          <span class="text-yellow-400">🔑</span> {{ $t('cases.pricing.intelligentCacheKey.title') }}
        </h2>
        <div class="bg-gray-900/30 border border-gray-800 rounded-xl p-8">
          <p class="text-gray-300 leading-relaxed mb-4">
            {{ $t('cases.pricing.intelligentCacheKey.intro') }}
            <strong class="text-white">{{ $t('cases.pricing.intelligentCacheKey.semanticSignature') }}</strong>
            {{ $t('cases.pricing.intelligentCacheKey.basedOnItems') }}
          </p>
          <div class="grid md:grid-cols-2 gap-4 text-sm">
            <div class="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
              <div class="text-red-400 font-semibold mb-2">❌ {{ $t('cases.pricing.intelligentCacheKey.traditional') }}</div>
              <div class="text-gray-500 font-mono">
                hash("how much does cleaning cost?") ≠<br/>
                hash("price of dental cleaning")
              </div>
            </div>
            <div class="bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-4">
              <div class="text-emerald-400 font-semibold mb-2">✅ {{ $t('cases.pricing.intelligentCacheKey.semantic') }}</div>
              <div class="text-gray-500 font-mono">
                signature(["cleaning"]) ==<br/>
                signature(["cleaning"])
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Stack -->
      <section class="mb-16">
        <h2 class="text-2xl font-bold mb-6">{{ $t('cases.pricing.techStack') }}</h2>
        <div class="flex flex-wrap gap-3">
          <span class="px-4 py-2 bg-gray-800 rounded-lg text-sm">pgvector</span>
          <span class="px-4 py-2 bg-gray-800 rounded-lg text-sm">HNSW Index</span>
          <span class="px-4 py-2 bg-gray-800 rounded-lg text-sm">text-embedding-3-large</span>
          <span class="px-4 py-2 bg-gray-800 rounded-lg text-sm">Redis</span>
          <span class="px-4 py-2 bg-gray-800 rounded-lg text-sm">BM25</span>
          <span class="px-4 py-2 bg-gray-800 rounded-lg text-sm">Celery</span>
          <span class="px-4 py-2 bg-gray-800 rounded-lg text-sm">FastAPI</span>
        </div>
      </section>

      <!-- CTA -->
      <div class="text-center pt-8 border-t border-gray-800">
        <NuxtLink 
          to="/projetos/document-processing" 
          class="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-500 rounded-lg transition-colors"
        >
          {{ $t('cases.pricing.nextProject') }}
        </NuxtLink>
      </div>
    </main>
  </div>
</template>
