<template>
  <div class="min-h-screen bg-gray-950 text-gray-100">
    <ProjectHeader
      back-label-key="nav.back"
      right-href="https://github.com/mmarleta/feed-rss"
      right-label="GitHub →"
    />

    <main class="max-w-4xl mx-auto px-6 py-16">
      <ProjectHeroBlock :config="heroConfig" />

      <!-- Visão Geral -->
      <section class="mb-16">
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
          <span class="text-pink-400">📡</span> {{ $t('cases.feedRss.overview.title') }}
        </h2>
        <div class="bg-gray-900/30 border border-gray-800 rounded-xl p-8">
          <p class="text-gray-300 leading-relaxed mb-4">
            {{ $t('cases.feedRss.overview.intro') }}
          </p>
          <div class="grid md:grid-cols-2 gap-4 mt-6">
            <div class="bg-gray-800/50 rounded-lg p-4">
              <div class="text-pink-400 font-semibold mb-2">{{ $t('cases.feedRss.overview.input') }}</div>
              <p class="text-gray-500 text-sm">
                {{ $t('cases.feedRss.overview.inputDesc') }}
              </p>
            </div>
            <div class="bg-gray-800/50 rounded-lg p-4">
              <div class="text-pink-400 font-semibold mb-2">{{ $t('cases.feedRss.overview.output') }}</div>
              <p class="text-gray-500 text-sm">
                {{ $t('cases.feedRss.overview.outputDesc') }}
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Arquitetura -->
      <section class="mb-16">
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
          <span class="text-blue-400">🏗️</span> {{ $t('cases.feedRss.architecture.title') }}
        </h2>
        <div class="bg-gray-900/30 border border-gray-800 rounded-xl p-8 overflow-x-auto">
          <pre class="text-sm text-gray-400 font-mono leading-relaxed">
┌─────────────────────────────────────────────────────────────┐
│                     RSS FEEDS (6+)                          │
│         TechCrunch | Verge | Wired | Ars | MIT | Engadget  │
└─────────────────────────┬───────────────────────────────────┘
                          ▼
┌─────────────────────────────────────────────────────────────┐
│  FeedService (aiohttp)                                      │
│  - Fetch async de múltiplos feeds                           │
│  - Parse via feedparser                                     │
│  - Normalização de datas/IDs                                │
└─────────────────────────┬───────────────────────────────────┘
                          ▼
┌─────────────────────────────────────────────────────────────┐
│  FilterService                                              │
│  - Keyword matching (IA, LLM, OpenAI, etc.)                 │
│  - Filtro por idade (MAX_AGE_HOURS)                         │
│  - Deduplicação via StateService                            │
└─────────────────────────┬───────────────────────────────────┘
                          ▼
┌─────────────────────────────────────────────────────────────┐
│  AIService (OpenAI GPT-4o-mini)                             │
│  - Geração de roteiro YouTube Shorts                        │
│  - Formato: Gancho → Essência → CTA                         │
│  - Max 50 segundos de fala                                  │
└─────────────────────────┬───────────────────────────────────┘
                          ▼
┌─────────────────────────────────────────────────────────────┐
│  NotificationService                                        │
│  - Telegram Bot API                                         │
│  - Discord Webhooks                                         │
│  - Async parallel delivery                                  │
└─────────────────────────────────────────────────────────────┘</pre>
        </div>
      </section>

      <!-- Services -->
      <section class="mb-16">
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
          <span class="text-emerald-400">🧩</span> {{ $t('cases.feedRss.services.title') }}
        </h2>
        <div class="space-y-4">
          <div class="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
            <h3 class="font-semibold text-white mb-2 flex items-center gap-2">
              <span class="text-pink-400">📥</span> {{ $t('cases.feedRss.services.feedService.title') }}
            </h3>
            <p class="text-gray-400 text-sm">
              {{ $t('cases.feedRss.services.feedService.desc') }}
            </p>
          </div>
          <div class="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
            <h3 class="font-semibold text-white mb-2 flex items-center gap-2">
              <span class="text-pink-400">🔍</span> {{ $t('cases.feedRss.services.filterService.title') }}
            </h3>
            <p class="text-gray-400 text-sm">
              {{ $t('cases.feedRss.services.filterService.desc') }}
            </p>
          </div>
          <div class="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
            <h3 class="font-semibold text-white mb-2 flex items-center gap-2">
              <span class="text-pink-400">🤖</span> {{ $t('cases.feedRss.services.aiService.title') }}
            </h3>
            <p class="text-gray-400 text-sm">
              {{ $t('cases.feedRss.services.aiService.desc') }}
            </p>
          </div>
          <div class="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
            <h3 class="font-semibold text-white mb-2 flex items-center gap-2">
              <span class="text-pink-400">💾</span> {{ $t('cases.feedRss.services.stateService.title') }}
            </h3>
            <p class="text-gray-400 text-sm">
              {{ $t('cases.feedRss.services.stateService.desc') }}
            </p>
          </div>
        </div>
      </section>

      <!-- Prompt -->
      <section class="mb-16">
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
          <span class="text-yellow-400">📝</span> {{ $t('cases.feedRss.prompt.title') }}
        </h2>
        <div class="bg-gray-900/30 border border-gray-800 rounded-xl p-8">
          <p class="text-gray-300 leading-relaxed mb-4">
            {{ $t('cases.feedRss.prompt.intro') }}
          </p>
          <div class="bg-gray-800/50 rounded-lg p-4 text-sm">
            <div class="text-gray-500 mb-2">{{ $t('cases.feedRss.prompt.systemPrompt') }}</div>
            <p class="text-gray-400 italic">
              {{ $t('cases.feedRss.prompt.promptText') }}
            </p>
          </div>
        </div>
      </section>

      <!-- Uso -->
      <section class="mb-16">
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
          <span class="text-cyan-400">🚀</span> {{ $t('cases.feedRss.usage.title') }}
        </h2>
        <div class="bg-gray-900/30 border border-gray-800 rounded-xl p-8">
          <div class="bg-gray-800/50 rounded-lg p-4 font-mono text-sm">
            <span class="text-gray-500">{{ $t('cases.feedRss.usage.basicExecution') }}</span><br/>
            <span class="text-cyan-400">python</span> -m rss_monitor.main<br/><br/>
            <span class="text-gray-500">{{ $t('cases.feedRss.usage.withOptions') }}</span><br/>
            <span class="text-cyan-400">python</span> -m rss_monitor.main \<br/>
            <span class="pl-4">--limit 5 \</span><br/>
            <span class="pl-4">--telegram \</span><br/>
            <span class="pl-4">--save-dir ./output</span>
          </div>
        </div>
      </section>

      <!-- Stack -->
      <section class="mb-16">
        <h2 class="text-2xl font-bold mb-6">{{ $t('cases.feedRss.stack.title') }}</h2>
        <div class="flex flex-wrap gap-3">
          <span class="px-4 py-2 bg-gray-800 rounded-lg text-sm">Python 3.11+</span>
          <span class="px-4 py-2 bg-gray-800 rounded-lg text-sm">asyncio</span>
          <span class="px-4 py-2 bg-gray-800 rounded-lg text-sm">aiohttp</span>
          <span class="px-4 py-2 bg-gray-800 rounded-lg text-sm">feedparser</span>
          <span class="px-4 py-2 bg-gray-800 rounded-lg text-sm">OpenAI API</span>
          <span class="px-4 py-2 bg-gray-800 rounded-lg text-sm">Pydantic</span>
          <span class="px-4 py-2 bg-gray-800 rounded-lg text-sm">Telegram Bot</span>
          <span class="px-4 py-2 bg-gray-800 rounded-lg text-sm">Discord Webhooks</span>
        </div>
      </section>

      <!-- CTA -->
      <ProjectCTA section-class="pt-8 border-t border-gray-800" container-class="text-center" actions-class="flex justify-center">
        <template #actions>
          <LocaleLink 
            to="/" 
            class="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-500 rounded-lg transition-colors"
          >
            {{ $t('cases.feedRss.cta.backToHome') }}
          </LocaleLink>
        </template>
      </ProjectCTA>
    </main>
  </div>
</template>

<script setup>
import { heroBlocksBySlug } from '~/data/project-heroes'

const heroConfig = heroBlocksBySlug.feedRss
</script>
