<template>
  <div class="min-h-screen bg-gray-950 text-gray-100">
    <!-- Header -->
    <header class="border-b border-gray-800 bg-gray-950/80 backdrop-blur-sm sticky top-0 z-50">
      <nav class="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <span class="text-xl font-bold text-emerald-400">MM</span>
        <div class="flex items-center gap-6">
          <a href="#projetos" class="text-gray-400 hover:text-white transition-colors">{{ $t('nav.projects') }}</a>
          <a href="#stack" class="text-gray-400 hover:text-white transition-colors">{{ $t('nav.stack') }}</a>
          <NuxtLink :to="localePath('/sobre')" class="text-gray-400 hover:text-white transition-colors">{{ $t('nav.about') }}</NuxtLink>
          <LanguageSwitcher />
        </div>
      </nav>
    </header>

    <main>
      <!-- Hero -->
      <section class="max-w-6xl mx-auto px-6 py-24">
        <div class="max-w-3xl">
          <h1 class="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            {{ $t('hero.title') }}
          </h1>
          <p class="text-xl md:text-2xl text-gray-400 mb-4">
            {{ $t('hero.subtitle') }}
          </p>
          <p class="text-lg text-gray-500 leading-relaxed mb-8">
            {{ $t('hero.description') }}
          </p>
          <div class="flex gap-4">
            <a 
              href="https://github.com/mmarleta" 
              target="_blank"
              class="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 rounded-lg transition-colors"
            >
              {{ $t('hero.github') }}
            </a>
            <a 
              href="https://linkedin.com/in/mmarleta" 
              target="_blank"
              class="px-6 py-3 border border-gray-700 hover:border-gray-600 rounded-lg transition-colors"
            >
              {{ $t('hero.linkedin') }}
            </a>
          </div>
        </div>
      </section>

      <!-- Projetos -->
      <section id="projetos" class="bg-gray-900/30 py-24">
        <div class="max-w-6xl mx-auto px-6">
          <h2 class="text-3xl font-bold mb-4">{{ $t('projects.title') }}</h2>
          <p class="text-gray-500 mb-12 max-w-2xl">
            {{ $t('projects.description') }}
          </p>

          <!-- Optimus Platform -->
          <div class="mb-12">
            <h3 class="text-lg text-emerald-400 font-semibold mb-6 flex items-center gap-2">
              <span class="w-2 h-2 bg-emerald-400 rounded-full"></span>
              {{ $t('projects.optimusPlatform') }}
            </h3>
            <div class="grid md:grid-cols-2 gap-6">
              <!-- AI Engine -->
              <NuxtLink 
                :to="localePath('/projetos/ai-engine')" 
                class="group bg-gray-900/50 border border-gray-800 hover:border-emerald-500/50 rounded-xl p-6 transition-all"
              >
                <div class="flex justify-between items-start mb-4">
                  <span class="text-2xl">🤖</span>
                  <span class="text-xs text-gray-600 group-hover:text-emerald-400 transition-colors">→</span>
                </div>
                <h4 class="text-xl font-semibold mb-2 group-hover:text-emerald-400 transition-colors">
                  {{ $t('cards.aiEngine.title') }}
                </h4>
                <p class="text-gray-500 text-sm leading-relaxed mb-4">
                  {{ $t('cards.aiEngine.description') }}
                </p>
                <div class="flex flex-wrap gap-2">
                  <span class="text-xs px-2 py-1 bg-gray-800 rounded">LangGraph</span>
                  <span class="text-xs px-2 py-1 bg-gray-800 rounded">FSM</span>
                  <span class="text-xs px-2 py-1 bg-gray-800 rounded">OpenAI</span>
                </div>
              </NuxtLink>

              <!-- LLM Pool Management -->
              <NuxtLink 
                :to="localePath('/projetos/llm-pool-management')" 
                class="group bg-gray-900/50 border border-gray-800 hover:border-yellow-500/50 rounded-xl p-6 transition-all"
              >
                <div class="flex justify-between items-start mb-4">
                  <span class="text-2xl">💰</span>
                  <span class="text-xs text-gray-600 group-hover:text-yellow-400 transition-colors">→</span>
                </div>
                <h4 class="text-xl font-semibold mb-2 group-hover:text-yellow-400 transition-colors">
                  {{ $t('cards.llmPool.title') }}
                </h4>
                <p class="text-gray-500 text-sm leading-relaxed mb-4">
                  {{ $t('cards.llmPool.description') }}
                </p>
                <div class="flex flex-wrap gap-2">
                  <span class="text-xs px-2 py-1 bg-gray-800 rounded">Multi-Provider</span>
                  <span class="text-xs px-2 py-1 bg-gray-800 rounded">Key Vault</span>
                  <span class="text-xs px-2 py-1 bg-gray-800 rounded">Fallback</span>
                </div>
              </NuxtLink>

              <!-- Pricing Intelligence -->
              <NuxtLink 
                :to="localePath('/projetos/pricing-intelligence')" 
                class="group bg-gray-900/50 border border-gray-800 hover:border-purple-500/50 rounded-xl p-6 transition-all"
              >
                <div class="flex justify-between items-start mb-4">
                  <span class="text-2xl">💰</span>
                  <span class="text-xs text-gray-600 group-hover:text-purple-400 transition-colors">→</span>
                </div>
                <h4 class="text-xl font-semibold mb-2 group-hover:text-purple-400 transition-colors">
                  {{ $t('cards.pricing.title') }}
                </h4>
                <p class="text-gray-500 text-sm leading-relaxed mb-4">
                  {{ $t('cards.pricing.description') }}
                </p>
                <div class="flex flex-wrap gap-2">
                  <span class="text-xs px-2 py-1 bg-gray-800 rounded">pgvector</span>
                  <span class="text-xs px-2 py-1 bg-gray-800 rounded">HNSW</span>
                  <span class="text-xs px-2 py-1 bg-gray-800 rounded">Redis</span>
                </div>
              </NuxtLink>

              <!-- Memory Engine -->
              <NuxtLink 
                :to="localePath('/projetos/memory-engine')" 
                class="group bg-gray-900/50 border border-gray-800 hover:border-cyan-500/50 rounded-xl p-6 transition-all"
              >
                <div class="flex justify-between items-start mb-4">
                  <span class="text-2xl">🧠</span>
                  <span class="text-xs text-gray-600 group-hover:text-cyan-400 transition-colors">→</span>
                </div>
                <h4 class="text-xl font-semibold mb-2 group-hover:text-cyan-400 transition-colors">
                  {{ $t('cards.memory.title') }}
                </h4>
                <p class="text-gray-500 text-sm leading-relaxed mb-4">
                  {{ $t('cards.memory.description') }}
                </p>
                <div class="flex flex-wrap gap-2">
                  <span class="text-xs px-2 py-1 bg-gray-800 rounded">Write-Through</span>
                  <span class="text-xs px-2 py-1 bg-gray-800 rounded">LGPD</span>
                  <span class="text-xs px-2 py-1 bg-gray-800 rounded">Compression</span>
                </div>
              </NuxtLink>

              <!-- Backend Orchestrator -->
              <NuxtLink 
                :to="localePath('/projetos/backend-orchestrator')" 
                class="group bg-gray-900/50 border border-gray-800 hover:border-orange-500/50 rounded-xl p-6 transition-all"
              >
                <div class="flex justify-between items-start mb-4">
                  <span class="text-2xl">⚙️</span>
                  <span class="text-xs text-gray-600 group-hover:text-orange-400 transition-colors">→</span>
                </div>
                <h4 class="text-xl font-semibold mb-2 group-hover:text-orange-400 transition-colors">
                  {{ $t('cards.backend.title') }}
                </h4>
                <p class="text-gray-500 text-sm leading-relaxed mb-4">
                  {{ $t('cards.backend.description') }}
                </p>
                <div class="flex flex-wrap gap-2">
                  <span class="text-xs px-2 py-1 bg-gray-800 rounded">FastAPI</span>
                  <span class="text-xs px-2 py-1 bg-gray-800 rounded">Multi-tenant</span>
                  <span class="text-xs px-2 py-1 bg-gray-800 rounded">Fail-closed</span>
                </div>
              </NuxtLink>

              <!-- Rules Engine -->
              <NuxtLink 
                :to="localePath('/projetos/rules-engine')" 
                class="group bg-gray-900/50 border border-gray-800 hover:border-red-500/50 rounded-xl p-6 transition-all"
              >
                <div class="flex justify-between items-start mb-4">
                  <span class="text-2xl">📜</span>
                  <span class="text-xs text-gray-600 group-hover:text-red-400 transition-colors">→</span>
                </div>
                <h4 class="text-xl font-semibold mb-2 group-hover:text-red-400 transition-colors">
                  {{ $t('cards.rules.title') }}
                </h4>
                <p class="text-gray-500 text-sm leading-relaxed mb-4">
                  {{ $t('cards.rules.description') }}
                </p>
                <div class="flex flex-wrap gap-2">
                  <span class="text-xs px-2 py-1 bg-gray-800 rounded">Python Lambda</span>
                  <span class="text-xs px-2 py-1 bg-gray-800 rounded">YAML</span>
                  <span class="text-xs px-2 py-1 bg-gray-800 rounded">Fast-lane</span>
                </div>
              </NuxtLink>

              <!-- WhatsApp Integration -->
              <NuxtLink 
                :to="localePath('/projetos/whatsapp-integration')" 
                class="group bg-gray-900/50 border border-gray-800 hover:border-green-500/50 rounded-xl p-6 transition-all"
              >
                <div class="flex justify-between items-start mb-4">
                  <span class="text-2xl">💬</span>
                  <span class="text-xs text-gray-600 group-hover:text-green-400 transition-colors">→</span>
                </div>
                <h4 class="text-xl font-semibold mb-2 group-hover:text-green-400 transition-colors">
                  {{ $t('cards.whatsapp.title') }}
                </h4>
                <p class="text-gray-500 text-sm leading-relaxed mb-4">
                  {{ $t('cards.whatsapp.description') }}
                </p>
                <div class="flex flex-wrap gap-2">
                  <span class="text-xs px-2 py-1 bg-gray-800 rounded">Redis</span>
                  <span class="text-xs px-2 py-1 bg-gray-800 rounded">WebSocket</span>
                  <span class="text-xs px-2 py-1 bg-gray-800 rounded">Webhooks</span>
                </div>
              </NuxtLink>

              <!-- Audio Processor -->
              <NuxtLink 
                :to="localePath('/projetos/audio-processor')" 
                class="group bg-gray-900/50 border border-gray-800 hover:border-pink-500/50 rounded-xl p-6 transition-all"
              >
                <div class="flex justify-between items-start mb-4">
                  <span class="text-2xl">🎙️</span>
                  <span class="text-xs text-gray-600 group-hover:text-pink-400 transition-colors">→</span>
                </div>
                <h4 class="text-xl font-semibold mb-2 group-hover:text-pink-400 transition-colors">
                  {{ $t('cards.audio.title') }}
                </h4>
                <p class="text-gray-500 text-sm leading-relaxed mb-4">
                  {{ $t('cards.audio.description') }}
                </p>
                <div class="flex flex-wrap gap-2">
                  <span class="text-xs px-2 py-1 bg-gray-800 rounded">Whisper</span>
                  <span class="text-xs px-2 py-1 bg-gray-800 rounded">ElevenLabs</span>
                  <span class="text-xs px-2 py-1 bg-gray-800 rounded">Celery</span>
                </div>
              </NuxtLink>

              <!-- Observability -->
              <NuxtLink 
                :to="localePath('/projetos/observability')" 
                class="group bg-gray-900/50 border border-gray-800 hover:border-yellow-500/50 rounded-xl p-6 transition-all"
              >
                <div class="flex justify-between items-start mb-4">
                  <span class="text-2xl">📊</span>
                  <span class="text-xs text-gray-600 group-hover:text-yellow-400 transition-colors">→</span>
                </div>
                <h4 class="text-xl font-semibold mb-2 group-hover:text-yellow-400 transition-colors">
                  {{ $t('cards.observability.title') }}
                </h4>
                <p class="text-gray-500 text-sm leading-relaxed mb-4">
                  {{ $t('cards.observability.description') }}
                </p>
                <div class="flex flex-wrap gap-2">
                  <span class="text-xs px-2 py-1 bg-gray-800 rounded">Prometheus</span>
                  <span class="text-xs px-2 py-1 bg-gray-800 rounded">OpenTelemetry</span>
                  <span class="text-xs px-2 py-1 bg-gray-800 rounded">structlog</span>
                </div>
              </NuxtLink>

              <!-- Frontend Apps -->
              <NuxtLink 
                :to="localePath('/projetos/frontend')" 
                class="group bg-gray-900/50 border border-gray-800 hover:border-blue-500/50 rounded-xl p-6 transition-all"
              >
                <div class="flex justify-between items-start mb-4">
                  <span class="text-2xl">🖥️</span>
                  <span class="text-xs text-gray-600 group-hover:text-blue-400 transition-colors">→</span>
                </div>
                <h4 class="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors">
                  {{ $t('cards.frontend.title') }}
                </h4>
                <p class="text-gray-500 text-sm leading-relaxed mb-4">
                  {{ $t('cards.frontend.description') }}
                </p>
                <div class="flex flex-wrap gap-2">
                  <span class="text-xs px-2 py-1 bg-gray-800 rounded">Vue.js 3</span>
                  <span class="text-xs px-2 py-1 bg-gray-800 rounded">WebSocket</span>
                  <span class="text-xs px-2 py-1 bg-gray-800 rounded">Multi-tenant</span>
                </div>
              </NuxtLink>

              <!-- Test Tools -->
              <NuxtLink 
                :to="localePath('/projetos/test-tools')" 
                class="group bg-gray-900/50 border border-gray-800 hover:border-purple-500/50 rounded-xl p-6 transition-all"
              >
                <div class="flex justify-between items-start mb-4">
                  <span class="text-2xl">🧪</span>
                  <span class="text-xs text-gray-600 group-hover:text-purple-400 transition-colors">→</span>
                </div>
                <h4 class="text-xl font-semibold mb-2 group-hover:text-purple-400 transition-colors">
                  {{ $t('cards.testTools.title') }}
                </h4>
                <p class="text-gray-500 text-sm leading-relaxed mb-4">
                  {{ $t('cards.testTools.description') }}
                </p>
                <div class="flex flex-wrap gap-2">
                  <span class="text-xs px-2 py-1 bg-gray-800 rounded">pytest</span>
                  <span class="text-xs px-2 py-1 bg-gray-800 rounded">Flask</span>
                  <span class="text-xs px-2 py-1 bg-gray-800 rounded">WebSocket</span>
                </div>
              </NuxtLink>

              <!-- Infra DevOps -->
              <NuxtLink 
                :to="localePath('/projetos/infra-devops')" 
                class="group bg-gray-900/50 border border-gray-800 hover:border-cyan-500/50 rounded-xl p-6 transition-all"
              >
                <div class="flex justify-between items-start mb-4">
                  <span class="text-2xl">🐳</span>
                  <span class="text-xs text-gray-600 group-hover:text-cyan-400 transition-colors">→</span>
                </div>
                <h4 class="text-xl font-semibold mb-2 group-hover:text-cyan-400 transition-colors">
                  {{ $t('cards.infraDevops.title') }}
                </h4>
                <p class="text-gray-500 text-sm leading-relaxed mb-4">
                  {{ $t('cards.infraDevops.description') }}
                </p>
                <div class="flex flex-wrap gap-2">
                  <span class="text-xs px-2 py-1 bg-gray-800 rounded">Docker</span>
                  <span class="text-xs px-2 py-1 bg-gray-800 rounded">Redis Sentinel</span>
                  <span class="text-xs px-2 py-1 bg-gray-800 rounded">GitHub Actions</span>
                </div>
              </NuxtLink>

              <!-- Optimus Case Study -->
              <NuxtLink 
                :to="localePath('/projetos/optimus')" 
                class="group bg-gray-900/50 border border-gray-800 hover:border-emerald-500/50 rounded-xl p-6 transition-all"
              >
                <div class="flex justify-between items-start mb-4">
                  <span class="text-2xl">🏗️</span>
                  <span class="text-xs text-gray-600 group-hover:text-emerald-400 transition-colors">→</span>
                </div>
                <h4 class="text-xl font-semibold mb-2 group-hover:text-emerald-400 transition-colors">
                  {{ $t('cards.architecture.title') }}
                </h4>
                <p class="text-gray-500 text-sm leading-relaxed mb-4">
                  {{ $t('cards.architecture.description') }}
                </p>
                <div class="flex flex-wrap gap-2">
                  <span class="text-xs px-2 py-1 bg-gray-800 rounded">Microservices</span>
                  <span class="text-xs px-2 py-1 bg-gray-800 rounded">Multi-tenant</span>
                  <span class="text-xs px-2 py-1 bg-gray-800 rounded">WhatsApp</span>
                </div>
              </NuxtLink>
            </div>
          </div>

          <!-- Outros Projetos -->
          <div>
            <h3 class="text-lg text-gray-400 font-semibold mb-6 flex items-center gap-2">
              <span class="w-2 h-2 bg-gray-500 rounded-full"></span>
              {{ $t('projects.otherProjects') }}
            </h3>
            <div class="grid md:grid-cols-2 gap-6">
              <!-- MCP Servers -->
              <NuxtLink 
                :to="localePath('/projetos/mcp-servers')" 
                class="group bg-gray-900/50 border border-gray-800 hover:border-cyan-500/50 rounded-xl p-6 transition-all"
              >
                <div class="flex justify-between items-start mb-4">
                  <span class="text-2xl">🛠️</span>
                  <span class="text-xs text-gray-600 group-hover:text-cyan-400 transition-colors">→</span>
                </div>
                <h4 class="text-xl font-semibold mb-2 group-hover:text-cyan-400 transition-colors">
                  {{ $t('cards.mcp.title') }}
                </h4>
                <p class="text-gray-500 text-sm leading-relaxed mb-4">
                  {{ $t('cards.mcp.description') }}
                </p>
                <div class="flex flex-wrap gap-2">
                  <span class="text-xs px-2 py-1 bg-gray-800 rounded">MCP</span>
                  <span class="text-xs px-2 py-1 bg-gray-800 rounded">Claude</span>
                  <span class="text-xs px-2 py-1 bg-gray-800 rounded">Python</span>
                </div>
              </NuxtLink>

              <!-- AutoMark -->
              <NuxtLink 
                :to="localePath('/projetos/automark')" 
                class="group bg-gray-900/50 border border-gray-800 hover:border-orange-500/50 rounded-xl p-6 transition-all"
              >
                <div class="flex justify-between items-start mb-4">
                  <span class="text-2xl">🛒</span>
                  <span class="text-xs text-gray-600 group-hover:text-orange-400 transition-colors">→</span>
                </div>
                <h4 class="text-xl font-semibold mb-2 group-hover:text-orange-400 transition-colors">
                  {{ $t('cards.automark.title') }}
                </h4>
                <p class="text-gray-500 text-sm leading-relaxed mb-4">
                  {{ $t('cards.automark.description') }}
                </p>
                <div class="flex flex-wrap gap-2">
                  <span class="text-xs px-2 py-1 bg-gray-800 rounded">Multi-tenant</span>
                  <span class="text-xs px-2 py-1 bg-gray-800 rounded">Celery</span>
                  <span class="text-xs px-2 py-1 bg-gray-800 rounded">Anti-Ban</span>
                </div>
              </NuxtLink>

              <!-- iContei -->
              <NuxtLink 
                :to="localePath('/projetos/icontei')" 
                class="group bg-gray-900/50 border border-gray-800 hover:border-emerald-500/50 rounded-xl p-6 transition-all"
              >
                <div class="flex justify-between items-start mb-4">
                  <span class="text-2xl">🕐</span>
                  <span class="text-xs text-gray-600 group-hover:text-emerald-400 transition-colors">→</span>
                </div>
                <h4 class="text-xl font-semibold mb-2 group-hover:text-emerald-400 transition-colors">
                  {{ $t('cards.icontei.title') }}
                </h4>
                <p class="text-gray-500 text-sm leading-relaxed mb-4">
                  {{ $t('cards.icontei.description') }}
                </p>
                <div class="flex flex-wrap gap-2">
                  <span class="text-xs px-2 py-1 bg-gray-800 rounded">Next.js 16</span>
                  <span class="text-xs px-2 py-1 bg-gray-800 rounded">FastAPI</span>
                  <span class="text-xs px-2 py-1 bg-gray-800 rounded">WebSocket</span>
                </div>
              </NuxtLink>

              <!-- GratiDiem -->
              <NuxtLink 
                :to="localePath('/projetos/gratidiem')" 
                class="group bg-gray-900/50 border border-gray-800 hover:border-amber-500/50 rounded-xl p-6 transition-all"
              >
                <div class="flex justify-between items-start mb-4">
                  <span class="text-2xl">🙏</span>
                  <span class="text-xs text-gray-600 group-hover:text-amber-400 transition-colors">→</span>
                </div>
                <h4 class="text-xl font-semibold mb-2 group-hover:text-amber-400 transition-colors">
                  {{ $t('cards.gratidiem.title') }}
                </h4>
                <p class="text-gray-500 text-sm leading-relaxed mb-4">
                  {{ $t('cards.gratidiem.description') }}
                </p>
                <div class="flex flex-wrap gap-2">
                  <span class="text-xs px-2 py-1 bg-gray-800 rounded">Flutter</span>
                  <span class="text-xs px-2 py-1 bg-gray-800 rounded">Firebase</span>
                  <span class="text-xs px-2 py-1 bg-gray-800 rounded">Gemini</span>
                </div>
              </NuxtLink>

              <!-- PVCoach -->
              <NuxtLink 
                :to="localePath('/projetos/pvcoach')" 
                class="group bg-gray-900/50 border border-gray-800 hover:border-amber-500/50 rounded-xl p-6 transition-all"
              >
                <div class="flex justify-between items-start mb-4">
                  <span class="text-2xl">♔</span>
                  <span class="text-xs text-gray-600 group-hover:text-amber-400 transition-colors">→</span>
                </div>
                <h4 class="text-xl font-semibold mb-2 group-hover:text-amber-400 transition-colors">
                  {{ $t('cards.pvcoach.title') }}
                </h4>
                <p class="text-gray-500 text-sm leading-relaxed mb-4">
                  {{ $t('cards.pvcoach.description') }}
                </p>
                <div class="flex flex-wrap gap-2">
                  <span class="text-xs px-2 py-1 bg-gray-800 rounded">Stockfish</span>
                  <span class="text-xs px-2 py-1 bg-gray-800 rounded">Multi-LLM</span>
                  <span class="text-xs px-2 py-1 bg-gray-800 rounded">FastAPI</span>
                </div>
              </NuxtLink>

              <!-- Feed-RSS -->
              <NuxtLink 
                :to="localePath('/projetos/feed-rss')" 
                class="group bg-gray-900/50 border border-gray-800 hover:border-pink-500/50 rounded-xl p-6 transition-all"
              >
                <div class="flex justify-between items-start mb-4">
                  <span class="text-2xl">📡</span>
                  <span class="text-xs text-gray-600 group-hover:text-pink-400 transition-colors">→</span>
                </div>
                <h4 class="text-xl font-semibold mb-2 group-hover:text-pink-400 transition-colors">
                  {{ $t('cards.feedRss.title') }}
                </h4>
                <p class="text-gray-500 text-sm leading-relaxed mb-4">
                  {{ $t('cards.feedRss.description') }}
                </p>
                <div class="flex flex-wrap gap-2">
                  <span class="text-xs px-2 py-1 bg-gray-800 rounded">async</span>
                  <span class="text-xs px-2 py-1 bg-gray-800 rounded">OpenAI</span>
                  <span class="text-xs px-2 py-1 bg-gray-800 rounded">aiohttp</span>
                </div>
              </NuxtLink>
            </div>
          </div>
        </div>
      </section>

      <!-- Stack -->
      <section id="stack" class="py-24">
        <div class="max-w-6xl mx-auto px-6">
          <h2 class="text-3xl font-bold mb-12">{{ $t('stack.title') }}</h2>
          <div class="grid md:grid-cols-3 gap-8">
            <!-- Backend -->
            <div>
              <h3 class="text-emerald-400 font-semibold mb-4">{{ $t('stack.backend') }}</h3>
              <ul class="space-y-2 text-gray-400">
                <li>Python / FastAPI</li>
                <li>PostgreSQL / Redis</li>
                <li>Celery / RabbitMQ</li>
                <li>Docker / Kubernetes</li>
              </ul>
            </div>
            
            <!-- AI/ML -->
            <div>
              <h3 class="text-emerald-400 font-semibold mb-4">{{ $t('stack.ai') }}</h3>
              <ul class="space-y-2 text-gray-400">
                <li>LangGraph / LangChain</li>
                <li>OpenAI / Anthropic</li>
                <li>pgvector / FAISS</li>
                <li>Whisper / ElevenLabs</li>
              </ul>
            </div>
            
            <!-- Infra -->
            <div>
              <h3 class="text-emerald-400 font-semibold mb-4">{{ $t('stack.infra') }}</h3>
              <ul class="space-y-2 text-gray-400">
                <li>GitHub Actions / CI/CD</li>
                <li>Prometheus / Grafana</li>
                <li>OpenTelemetry / Jaeger</li>
                <li>Nginx / Redis Sentinel</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <footer class="border-t border-gray-800 py-12">
      <div class="max-w-6xl mx-auto px-6 text-center text-gray-500">
        <p>© {{ new Date().getFullYear() }} Marcelo Marleta</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
const localePath = useLocalePath()

useHead({
  title: 'Marcelo Marleta | Full-Stack Developer',
  meta: [
    { name: 'description', content: 'Full-Stack Developer especializado em sistemas AI/LLM e arquiteturas escaláveis.' },
  ],
})
</script>
