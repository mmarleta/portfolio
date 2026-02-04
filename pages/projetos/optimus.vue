<template>
  <article class="max-w-3xl mx-auto px-6 py-20">
    <NuxtLink to="/#projetos" class="text-emerald-400 hover:text-emerald-300 text-sm">{{ $t('cases.optimus.back') }}</NuxtLink>
    
    <h1 class="text-4xl font-bold text-white mt-6 mb-4">{{ $t('cases.optimus.title') }}</h1>
    <p class="text-xl text-gray-400 mb-12">{{ $t('cases.optimus.subtitle') }}</p>

    <div class="space-y-8 text-gray-300 leading-relaxed">
      
      <section>
        <h2 class="text-xl font-bold text-white mb-4">{{ $t('cases.optimus.problem.title') }}</h2>
        <p>{{ $t('cases.optimus.problem.p1') }}</p>
        <p class="mt-4">{{ $t('cases.optimus.problem.p2') }}</p>
      </section>

      <section>
        <h2 class="text-xl font-bold text-white mb-4">{{ $t('cases.optimus.solution.title') }}</h2>
        <p class="mb-6">{{ $t('cases.optimus.solution.intro') }}</p>
        
        <div class="bg-gray-900 rounded-lg p-6 font-mono text-sm overflow-x-auto border border-gray-800">
          <pre class="text-gray-400">
┌─────────────┐  ┌─────────────┐  ┌─────────────┐
│  WhatsApp   │  │  Web/Mobile │  │   Outros    │
└──────┬──────┘  └──────┬──────┘  └──────┬──────┘
       └────────────────┼────────────────┘
                        │
           ┌────────────▼────────────┐
           │  Backend Orchestrator   │
           │  Rate limiting, cache   │
           └────────────┬────────────┘
                        │
    ┌───────────────────┼───────────────────┐
    │                   │                   │
┌───▼───┐         ┌─────▼─────┐       ┌─────▼─────┐
│  AI   │         │  Memory   │       │  Rules    │
│Engine │         │  Engine   │       │  Engine   │
└───────┘         └───────────┘       └───────────┘</pre>
        </div>

        <ul class="mt-6 space-y-2">
          <li><span class="text-emerald-400 font-medium">Backend Orchestrator</span> — {{ $t('cases.optimus.solution.orchestrator') }}</li>
          <li><span class="text-emerald-400 font-medium">AI Engine</span> — {{ $t('cases.optimus.solution.aiEngine') }}</li>
          <li><span class="text-emerald-400 font-medium">Memory Engine</span> — {{ $t('cases.optimus.solution.memoryEngine') }}</li>
          <li><span class="text-emerald-400 font-medium">Rules Engine</span> — {{ $t('cases.optimus.solution.rulesEngine') }}</li>
        </ul>
      </section>

      <section>
        <h2 class="text-xl font-bold text-white mb-4">{{ $t('cases.optimus.multiTenancy.title') }}</h2>
        <p>
          {{ $t('cases.optimus.multiTenancy.p1', { clinicExample: 't_clinica_abc', storeExample: 't_loja_xyz' }) }}
        </p>
      </section>

      <section>
        <h2 class="text-xl font-bold text-white mb-4">{{ $t('cases.optimus.forgetting.title') }}</h2>
        <p>{{ $t('cases.optimus.forgetting.p1') }}</p>
        <p class="mt-4">{{ $t('cases.optimus.forgetting.p2') }}</p>
        <ul class="mt-4 space-y-2">
          <li><span class="text-white font-medium">Hot</span> — {{ $t('cases.optimus.forgetting.hot') }}</li>
          <li><span class="text-white font-medium">Warm</span> — {{ $t('cases.optimus.forgetting.warm') }}</li>
          <li><span class="text-white font-medium">Cold</span> — {{ $t('cases.optimus.forgetting.cold') }}</li>
        </ul>
        <p class="mt-4">{{ $t('cases.optimus.forgetting.p3') }}</p>
      </section>

      <section>
        <h2 class="text-xl font-bold text-white mb-4">{{ $t('cases.optimus.numbers.title') }}</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div class="bg-gray-900 rounded-lg p-4 text-center border border-gray-800">
            <p class="text-2xl font-bold text-emerald-400">&lt;500ms</p>
            <p class="text-xs text-gray-500 mt-1">{{ $t('cases.optimus.numbers.latency') }}</p>
          </div>
          <div class="bg-gray-900 rounded-lg p-4 text-center border border-gray-800">
            <p class="text-2xl font-bold text-emerald-400">~90%</p>
            <p class="text-xs text-gray-500 mt-1">{{ $t('cases.optimus.numbers.cacheHit') }}</p>
          </div>
          <div class="bg-gray-900 rounded-lg p-4 text-center border border-gray-800">
            <p class="text-2xl font-bold text-emerald-400">99.9%</p>
            <p class="text-xs text-gray-500 mt-1">{{ $t('cases.optimus.numbers.uptime') }}</p>
          </div>
          <div class="bg-gray-900 rounded-lg p-4 text-center border border-gray-800">
            <p class="text-2xl font-bold text-emerald-400">3k/s</p>
            <p class="text-xs text-gray-500 mt-1">{{ $t('cases.optimus.numbers.throughput') }}</p>
          </div>
        </div>
      </section>

      <section>
        <h2 class="text-xl font-bold text-white mb-4">{{ $t('cases.optimus.stack.title') }}</h2>
        <div class="flex flex-wrap gap-2">
          <span class="px-3 py-1 bg-gray-900 rounded text-sm border border-gray-800">Python</span>
          <span class="px-3 py-1 bg-gray-900 rounded text-sm border border-gray-800">FastAPI</span>
          <span class="px-3 py-1 bg-gray-900 rounded text-sm border border-gray-800">LangChain</span>
          <span class="px-3 py-1 bg-gray-900 rounded text-sm border border-gray-800">PostgreSQL</span>
          <span class="px-3 py-1 bg-gray-900 rounded text-sm border border-gray-800">Redis</span>
          <span class="px-3 py-1 bg-gray-900 rounded text-sm border border-gray-800">Docker</span>
          <span class="px-3 py-1 bg-gray-900 rounded text-sm border border-gray-800">Kubernetes</span>
          <span class="px-3 py-1 bg-gray-900 rounded text-sm border border-gray-800">OpenAI</span>
        </div>
      </section>

      <section>
        <h2 class="text-xl font-bold text-white mb-4">{{ $t('cases.optimus.learnings.title') }}</h2>
        <p>
          <span class="text-white font-medium">{{ $t('cases.optimus.learnings.p1Label') }}</span> 
          {{ $t('cases.optimus.learnings.p1') }}
        </p>
        <p class="mt-4">
          <span class="text-white font-medium">{{ $t('cases.optimus.learnings.p2Label') }}</span> 
          {{ $t('cases.optimus.learnings.p2') }}
        </p>
        <p class="mt-4">
          <span class="text-white font-medium">{{ $t('cases.optimus.learnings.p3Label') }}</span> 
          {{ $t('cases.optimus.learnings.p3') }}
        </p>
      </section>

    </div>

    <div class="mt-16 pt-8 border-t border-gray-800">
      <p class="text-gray-400 mb-4">{{ $t('cases.optimus.cta.interested') }}</p>
      <a href="mailto:contato@webotify.io" class="inline-block px-6 py-3 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors font-medium">
        {{ $t('cases.optimus.cta.letsChat') }}
      </a>
    </div>
  </article>
</template>
