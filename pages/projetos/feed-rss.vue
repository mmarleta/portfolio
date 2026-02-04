<template>
  <div class="min-h-screen bg-gray-950 text-gray-100">
    <!-- Header -->
    <header class="border-b border-gray-800 bg-gray-950/80 backdrop-blur-sm sticky top-0 z-50">
      <nav class="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <NuxtLink to="/" class="text-xl font-bold text-emerald-400 hover:text-emerald-300 transition-colors">
          ← Voltar
        </NuxtLink>
        <a 
          href="https://github.com/mmarleta/feed-rss" 
          target="_blank"
          class="text-gray-400 hover:text-white transition-colors"
        >
          GitHub →
        </a>
      </nav>
    </header>

    <main class="max-w-4xl mx-auto px-6 py-16">
      <!-- Hero -->
      <div class="mb-16">
        <span class="inline-block px-3 py-1 bg-pink-500/10 text-pink-400 rounded-full text-sm mb-4">
          Automação
        </span>
        <h1 class="text-4xl md:text-5xl font-bold mb-6">
          Feed-RSS Monitor
        </h1>
        <p class="text-xl text-gray-400 leading-relaxed">
          Pipeline de automação de conteúdo que monitora feeds RSS, filtra por keywords, 
          gera roteiros via OpenAI e notifica em Telegram/Discord.
        </p>
      </div>

      <!-- Métricas -->
      <div class="grid grid-cols-2 md:grid-cols-3 gap-6 mb-16">
        <div class="bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center">
          <div class="text-3xl font-bold text-pink-400">6+</div>
          <div class="text-sm text-gray-500 mt-1">Feeds Monitorados</div>
        </div>
        <div class="bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center">
          <div class="text-3xl font-bold text-pink-400">15+</div>
          <div class="text-sm text-gray-500 mt-1">Keywords AI</div>
        </div>
        <div class="bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center">
          <div class="text-3xl font-bold text-pink-400">Async</div>
          <div class="text-sm text-gray-500 mt-1">Python Pipeline</div>
        </div>
      </div>

      <!-- Visão Geral -->
      <section class="mb-16">
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
          <span class="text-pink-400">📡</span> Visão Geral
        </h2>
        <div class="bg-gray-900/30 border border-gray-800 rounded-xl p-8">
          <p class="text-gray-300 leading-relaxed mb-4">
            Solução para criadores de conteúdo que precisam acompanhar notícias de IA/tech 
            e transformá-las rapidamente em conteúdo para redes sociais.
          </p>
          <div class="grid md:grid-cols-2 gap-4 mt-6">
            <div class="bg-gray-800/50 rounded-lg p-4">
              <div class="text-pink-400 font-semibold mb-2">Input</div>
              <p class="text-gray-500 text-sm">
                TechCrunch, The Verge, Wired, Ars Technica, MIT Tech Review, Engadget
              </p>
            </div>
            <div class="bg-gray-800/50 rounded-lg p-4">
              <div class="text-pink-400 font-semibold mb-2">Output</div>
              <p class="text-gray-500 text-sm">
                Roteiros para YouTube Shorts (50s) entregues via Telegram/Discord
              </p>
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
          <span class="text-emerald-400">🧩</span> Arquitetura Modular
        </h2>
        <div class="space-y-4">
          <div class="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
            <h3 class="font-semibold text-white mb-2 flex items-center gap-2">
              <span class="text-pink-400">📥</span> FeedService
            </h3>
            <p class="text-gray-400 text-sm">
              Busca assíncrona de feeds com aiohttp. Timeout configurável, 
              retry em falhas, normalização de entries para modelo Pydantic.
            </p>
          </div>
          <div class="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
            <h3 class="font-semibold text-white mb-2 flex items-center gap-2">
              <span class="text-pink-400">🔍</span> FilterService
            </h3>
            <p class="text-gray-400 text-sm">
              Filtra notícias por keywords (case-insensitive). Keywords configuráveis 
              via .env ou arquivo externo. Combina título + resumo para matching.
            </p>
          </div>
          <div class="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
            <h3 class="font-semibold text-white mb-2 flex items-center gap-2">
              <span class="text-pink-400">🤖</span> AIService
            </h3>
            <p class="text-gray-400 text-sm">
              Integração OpenAI com prompt otimizado para roteiros de Shorts. 
              Formato estruturado: gancho impactante → 3-5 frases de essência → CTA com pergunta.
            </p>
          </div>
          <div class="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
            <h3 class="font-semibold text-white mb-2 flex items-center gap-2">
              <span class="text-pink-400">💾</span> StateService
            </h3>
            <p class="text-gray-400 text-sm">
              Persiste IDs de notícias já processadas em JSON. Evita reprocessamento 
              e spam de notificações repetidas.
            </p>
          </div>
        </div>
      </section>

      <!-- Prompt -->
      <section class="mb-16">
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
          <span class="text-yellow-400">📝</span> Prompt Engineering
        </h2>
        <div class="bg-gray-900/30 border border-gray-800 rounded-xl p-8">
          <p class="text-gray-300 leading-relaxed mb-4">
            O prompt foi otimizado para gerar roteiros concisos e impactantes:
          </p>
          <div class="bg-gray-800/50 rounded-lg p-4 text-sm">
            <div class="text-gray-500 mb-2">System Prompt:</div>
            <p class="text-gray-400 italic">
              "Você é roteirista do canal Cyber Inteligente. Crie roteiros para YouTube Shorts 
              de até 50 segundos, em português claro e direto. Tom energético, futurista, sem enrolação. 
              Formato: (1) Gancho em 1 frase; (2) Essência em 3-5 frases curtas; (3) CTA com pergunta."
            </p>
          </div>
        </div>
      </section>

      <!-- Uso -->
      <section class="mb-16">
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
          <span class="text-cyan-400">🚀</span> Uso
        </h2>
        <div class="bg-gray-900/30 border border-gray-800 rounded-xl p-8">
          <div class="bg-gray-800/50 rounded-lg p-4 font-mono text-sm">
            <span class="text-gray-500"># Execução básica</span><br/>
            <span class="text-cyan-400">python</span> -m rss_monitor.main<br/><br/>
            <span class="text-gray-500"># Com opções</span><br/>
            <span class="text-cyan-400">python</span> -m rss_monitor.main \<br/>
            <span class="pl-4">--limit 5 \</span><br/>
            <span class="pl-4">--telegram \</span><br/>
            <span class="pl-4">--save-dir ./output</span>
          </div>
        </div>
      </section>

      <!-- Stack -->
      <section class="mb-16">
        <h2 class="text-2xl font-bold mb-6">Stack Técnica</h2>
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
      <div class="text-center pt-8 border-t border-gray-800">
        <NuxtLink 
          to="/" 
          class="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-500 rounded-lg transition-colors"
        >
          ← Voltar para Home
        </NuxtLink>
      </div>
    </main>
  </div>
</template>
