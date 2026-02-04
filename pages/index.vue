<template>
  <div class="min-h-screen bg-gray-950 text-gray-100">
    <!-- Header -->
    <header class="border-b border-gray-800 bg-gray-950/80 backdrop-blur-sm sticky top-0 z-50">
      <nav class="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <span class="text-xl font-bold text-emerald-400">MM</span>
        <div class="flex gap-6">
          <a href="#projetos" class="text-gray-400 hover:text-white transition-colors">Projetos</a>
          <a href="#stack" class="text-gray-400 hover:text-white transition-colors">Stack</a>
          <NuxtLink to="/sobre" class="text-gray-400 hover:text-white transition-colors">Sobre</NuxtLink>
        </div>
      </nav>
    </header>

    <main>
      <!-- Hero -->
      <section class="max-w-6xl mx-auto px-6 py-24">
        <div class="max-w-3xl">
          <h1 class="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Marcelo Marleta
          </h1>
          <p class="text-xl md:text-2xl text-gray-400 mb-4">
            Senior Backend & AI Engineer
          </p>
          <p class="text-lg text-gray-500 leading-relaxed mb-8">
            Arquiteturas de conversação enterprise com LangGraph, RAG otimizado e sistemas 
            multi-tenant. Foco em separação de lógica determinística e linguagem natural.
          </p>
          <div class="flex gap-4">
            <a 
              href="https://github.com/mmarleta" 
              target="_blank"
              class="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 rounded-lg transition-colors"
            >
              GitHub
            </a>
            <a 
              href="https://linkedin.com/in/mmarleta" 
              target="_blank"
              class="px-6 py-3 border border-gray-700 hover:border-gray-600 rounded-lg transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      <!-- Projetos -->
      <section id="projetos" class="bg-gray-900/30 py-24">
        <div class="max-w-6xl mx-auto px-6">
          <h2 class="text-3xl font-bold mb-4">Projetos</h2>
          <p class="text-gray-500 mb-12 max-w-2xl">
            Sistemas de produção com foco em IA conversacional, processamento de documentos 
            e ferramentas de desenvolvimento.
          </p>

          <!-- Optimus Platform -->
          <div class="mb-12">
            <h3 class="text-lg text-emerald-400 font-semibold mb-6 flex items-center gap-2">
              <span class="w-2 h-2 bg-emerald-400 rounded-full"></span>
              Optimus Platform
            </h3>
            <div class="grid md:grid-cols-2 gap-6">
              <!-- AI Engine -->
              <NuxtLink 
                to="/projetos/ai-engine" 
                class="group bg-gray-900/50 border border-gray-800 hover:border-emerald-500/50 rounded-xl p-6 transition-all"
              >
                <div class="flex justify-between items-start mb-4">
                  <span class="text-2xl">🤖</span>
                  <span class="text-xs text-gray-600 group-hover:text-emerald-400 transition-colors">→</span>
                </div>
                <h4 class="text-xl font-semibold mb-2 group-hover:text-emerald-400 transition-colors">
                  AI Conversation Engine
                </h4>
                <p class="text-gray-500 text-sm leading-relaxed mb-4">
                  LangGraph + FSM para separação de lógica determinística e linguagem natural. 
                  20+ nós especializados, 8 estados de booking.
                </p>
                <div class="flex flex-wrap gap-2">
                  <span class="text-xs px-2 py-1 bg-gray-800 rounded">LangGraph</span>
                  <span class="text-xs px-2 py-1 bg-gray-800 rounded">FSM</span>
                  <span class="text-xs px-2 py-1 bg-gray-800 rounded">OpenAI</span>
                </div>
              </NuxtLink>

              <!-- LLM Pool Management -->
              <NuxtLink 
                to="/projetos/llm-pool-management" 
                class="group bg-gray-900/50 border border-gray-800 hover:border-yellow-500/50 rounded-xl p-6 transition-all"
              >
                <div class="flex justify-between items-start mb-4">
                  <span class="text-2xl">💰</span>
                  <span class="text-xs text-gray-600 group-hover:text-yellow-400 transition-colors">→</span>
                </div>
                <h4 class="text-xl font-semibold mb-2 group-hover:text-yellow-400 transition-colors">
                  LLM Pool Management
                </h4>
                <p class="text-gray-500 text-sm leading-relaxed mb-4">
                  Pools separados chat vs tools, key groups com vault criptografado, 
                  rotação automática e fallback inteligente. 40% redução de custos.
                </p>
                <div class="flex flex-wrap gap-2">
                  <span class="text-xs px-2 py-1 bg-gray-800 rounded">Multi-Provider</span>
                  <span class="text-xs px-2 py-1 bg-gray-800 rounded">Key Vault</span>
                  <span class="text-xs px-2 py-1 bg-gray-800 rounded">Fallback</span>
                </div>
              </NuxtLink>

              <!-- Pricing Intelligence -->
              <NuxtLink 
                to="/projetos/pricing-intelligence" 
                class="group bg-gray-900/50 border border-gray-800 hover:border-purple-500/50 rounded-xl p-6 transition-all"
              >
                <div class="flex justify-between items-start mb-4">
                  <span class="text-2xl">💰</span>
                  <span class="text-xs text-gray-600 group-hover:text-purple-400 transition-colors">→</span>
                </div>
                <h4 class="text-xl font-semibold mb-2 group-hover:text-purple-400 transition-colors">
                  Pricing Intelligence
                </h4>
                <p class="text-gray-500 text-sm leading-relaxed mb-4">
                  RAG otimizado com threshold adaptativo, request coalescing e cache multi-tier. 
                  95% precision, &lt;100ms cache hit.
                </p>
                <div class="flex flex-wrap gap-2">
                  <span class="text-xs px-2 py-1 bg-gray-800 rounded">pgvector</span>
                  <span class="text-xs px-2 py-1 bg-gray-800 rounded">HNSW</span>
                  <span class="text-xs px-2 py-1 bg-gray-800 rounded">Redis</span>
                </div>
              </NuxtLink>

              <!-- Memory Engine -->
              <NuxtLink 
                to="/projetos/memory-engine" 
                class="group bg-gray-900/50 border border-gray-800 hover:border-cyan-500/50 rounded-xl p-6 transition-all"
              >
                <div class="flex justify-between items-start mb-4">
                  <span class="text-2xl">🧠</span>
                  <span class="text-xs text-gray-600 group-hover:text-cyan-400 transition-colors">→</span>
                </div>
                <h4 class="text-xl font-semibold mb-2 group-hover:text-cyan-400 transition-colors">
                  Memory Engine
                </h4>
                <p class="text-gray-500 text-sm leading-relaxed mb-4">
                  Sistema hierárquico Hot/Warm/Cold com compressão semântica (90% redução), 
                  compliance LGPD/HIPAA automático e context injection.
                </p>
                <div class="flex flex-wrap gap-2">
                  <span class="text-xs px-2 py-1 bg-gray-800 rounded">Write-Through</span>
                  <span class="text-xs px-2 py-1 bg-gray-800 rounded">Compliance</span>
                  <span class="text-xs px-2 py-1 bg-gray-800 rounded">Fernet</span>
                </div>
              </NuxtLink>

              <!-- Backend Orchestrator -->
              <NuxtLink 
                to="/projetos/backend-orchestrator" 
                class="group bg-gray-900/50 border border-gray-800 hover:border-blue-500/50 rounded-xl p-6 transition-all"
              >
                <div class="flex justify-between items-start mb-4">
                  <span class="text-2xl">🚀</span>
                  <span class="text-xs text-gray-600 group-hover:text-blue-400 transition-colors">→</span>
                </div>
                <h4 class="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors">
                  Backend Orchestrator
                </h4>
                <p class="text-gray-500 text-sm leading-relaxed mb-4">
                  Gateway enterprise com rate limiting distribuído, circuit breaker, 
                  handover dual-mode e fail-closed resilience.
                </p>
                <div class="flex flex-wrap gap-2">
                  <span class="text-xs px-2 py-1 bg-gray-800 rounded">Rate Limiting</span>
                  <span class="text-xs px-2 py-1 bg-gray-800 rounded">Circuit Breaker</span>
                  <span class="text-xs px-2 py-1 bg-gray-800 rounded">WebSocket</span>
                </div>
              </NuxtLink>

              <!-- Observability -->
              <NuxtLink 
                to="/projetos/observability" 
                class="group bg-gray-900/50 border border-gray-800 hover:border-green-500/50 rounded-xl p-6 transition-all"
              >
                <div class="flex justify-between items-start mb-4">
                  <span class="text-2xl">📊</span>
                  <span class="text-xs text-gray-600 group-hover:text-green-400 transition-colors">→</span>
                </div>
                <h4 class="text-xl font-semibold mb-2 group-hover:text-green-400 transition-colors">
                  Observability Stack
                </h4>
                <p class="text-gray-500 text-sm leading-relaxed mb-4">
                  Métricas de negócio, tracing distribuído, token cost tracking, 
                  RAG decision telemetry e state snapshots para debug.
                </p>
                <div class="flex flex-wrap gap-2">
                  <span class="text-xs px-2 py-1 bg-gray-800 rounded">Prometheus</span>
                  <span class="text-xs px-2 py-1 bg-gray-800 rounded">OpenTelemetry</span>
                  <span class="text-xs px-2 py-1 bg-gray-800 rounded">Jaeger</span>
                </div>
              </NuxtLink>

              <!-- Document Processing -->
              <NuxtLink 
                to="/projetos/document-processing" 
                class="group bg-gray-900/50 border border-gray-800 hover:border-orange-500/50 rounded-xl p-6 transition-all"
              >
                <div class="flex justify-between items-start mb-4">
                  <span class="text-2xl">📄</span>
                  <span class="text-xs text-gray-600 group-hover:text-orange-400 transition-colors">→</span>
                </div>
                <h4 class="text-xl font-semibold mb-2 group-hover:text-orange-400 transition-colors">
                  Document Processing
                </h4>
                <p class="text-gray-500 text-sm leading-relaxed mb-4">
                  Pipeline com Docling para detecção de tabelas, chunking estratégico 
                  (tablerow vs semantic) e geração automática de catálogos.
                </p>
                <div class="flex flex-wrap gap-2">
                  <span class="text-xs px-2 py-1 bg-gray-800 rounded">Docling</span>
                  <span class="text-xs px-2 py-1 bg-gray-800 rounded">Celery</span>
                  <span class="text-xs px-2 py-1 bg-gray-800 rounded">Embeddings</span>
                </div>
              </NuxtLink>

              <!-- Rules Engine -->
              <NuxtLink 
                to="/projetos/rules-engine" 
                class="group bg-gray-900/50 border border-gray-800 hover:border-rose-500/50 rounded-xl p-6 transition-all"
              >
                <div class="flex justify-between items-start mb-4">
                  <span class="text-2xl">⚡</span>
                  <span class="text-xs text-gray-600 group-hover:text-rose-400 transition-colors">→</span>
                </div>
                <h4 class="text-xl font-semibold mb-2 group-hover:text-rose-400 transition-colors">
                  Rules Engine
                </h4>
                <p class="text-gray-500 text-sm leading-relaxed mb-4">
                  Motor Python-native 1000x mais rápido que JSONLogic. Regras em runtime 
                  por tenant, avaliação sub-millisecond, multi-vertical.
                </p>
                <div class="flex flex-wrap gap-2">
                  <span class="text-xs px-2 py-1 bg-gray-800 rounded">Python Lambda</span>
                  <span class="text-xs px-2 py-1 bg-gray-800 rounded">Multi-tenant</span>
                  <span class="text-xs px-2 py-1 bg-gray-800 rounded">Event-driven</span>
                </div>
              </NuxtLink>

              <!-- WhatsApp Integration -->
              <NuxtLink 
                to="/projetos/whatsapp-integration" 
                class="group bg-gray-900/50 border border-gray-800 hover:border-green-500/50 rounded-xl p-6 transition-all"
              >
                <div class="flex justify-between items-start mb-4">
                  <span class="text-2xl">📱</span>
                  <span class="text-xs text-gray-600 group-hover:text-green-400 transition-colors">→</span>
                </div>
                <h4 class="text-xl font-semibold mb-2 group-hover:text-green-400 transition-colors">
                  WhatsApp Integration
                </h4>
                <p class="text-gray-500 text-sm leading-relaxed mb-4">
                  Message Aggregator com 5s debounce resolve "split messages". 
                  Redis isolado, graceful degradation, Evolution API.
                </p>
                <div class="flex flex-wrap gap-2">
                  <span class="text-xs px-2 py-1 bg-gray-800 rounded">Aggregator</span>
                  <span class="text-xs px-2 py-1 bg-gray-800 rounded">Redis Isolado</span>
                  <span class="text-xs px-2 py-1 bg-gray-800 rounded">Degradation</span>
                </div>
              </NuxtLink>

              <!-- Audio Processor -->
              <NuxtLink 
                to="/projetos/audio-processor" 
                class="group bg-gray-900/50 border border-gray-800 hover:border-purple-500/50 rounded-xl p-6 transition-all"
              >
                <div class="flex justify-between items-start mb-4">
                  <span class="text-2xl">🎤</span>
                  <span class="text-xs text-gray-600 group-hover:text-purple-400 transition-colors">→</span>
                </div>
                <h4 class="text-xl font-semibold mb-2 group-hover:text-purple-400 transition-colors">
                  Audio Processor
                </h4>
                <p class="text-gray-500 text-sm leading-relaxed mb-4">
                  Multi-provider STT (Groq Whisper) e TTS (ElevenLabs). 
                  Processamento assíncrono Celery, storage MinIO, 8 formatos.
                </p>
                <div class="flex flex-wrap gap-2">
                  <span class="text-xs px-2 py-1 bg-gray-800 rounded">Groq Whisper</span>
                  <span class="text-xs px-2 py-1 bg-gray-800 rounded">ElevenLabs</span>
                  <span class="text-xs px-2 py-1 bg-gray-800 rounded">Celery</span>
                </div>
              </NuxtLink>

              <!-- Frontend Apps -->
              <NuxtLink 
                to="/projetos/frontend" 
                class="group bg-gray-900/50 border border-gray-800 hover:border-blue-500/50 rounded-xl p-6 transition-all"
              >
                <div class="flex justify-between items-start mb-4">
                  <span class="text-2xl">🖥️</span>
                  <span class="text-xs text-gray-600 group-hover:text-blue-400 transition-colors">→</span>
                </div>
                <h4 class="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors">
                  Frontend Apps
                </h4>
                <p class="text-gray-500 text-sm leading-relaxed mb-4">
                  Admin Dashboard (3000) + SuperAdmin Panel (3001). 
                  Vue.js 3, WebSocket real-time, handover management, RBAC.
                </p>
                <div class="flex flex-wrap gap-2">
                  <span class="text-xs px-2 py-1 bg-gray-800 rounded">Vue.js 3</span>
                  <span class="text-xs px-2 py-1 bg-gray-800 rounded">WebSocket</span>
                  <span class="text-xs px-2 py-1 bg-gray-800 rounded">Multi-tenant</span>
                </div>
              </NuxtLink>

              <!-- Test Tools -->
              <NuxtLink 
                to="/projetos/test-tools" 
                class="group bg-gray-900/50 border border-gray-800 hover:border-purple-500/50 rounded-xl p-6 transition-all"
              >
                <div class="flex justify-between items-start mb-4">
                  <span class="text-2xl">🧪</span>
                  <span class="text-xs text-gray-600 group-hover:text-purple-400 transition-colors">→</span>
                </div>
                <h4 class="text-xl font-semibold mb-2 group-hover:text-purple-400 transition-colors">
                  AI Testing Tools
                </h4>
                <p class="text-gray-500 text-sm leading-relaxed mb-4">
                  Hallucination detector, quality scorer, cenários realísticos 
                  com personalidades, interface de simulação multi-canal.
                </p>
                <div class="flex flex-wrap gap-2">
                  <span class="text-xs px-2 py-1 bg-gray-800 rounded">pytest</span>
                  <span class="text-xs px-2 py-1 bg-gray-800 rounded">Flask</span>
                  <span class="text-xs px-2 py-1 bg-gray-800 rounded">WebSocket</span>
                </div>
              </NuxtLink>

              <!-- Infra DevOps -->
              <NuxtLink 
                to="/projetos/infra-devops" 
                class="group bg-gray-900/50 border border-gray-800 hover:border-cyan-500/50 rounded-xl p-6 transition-all"
              >
                <div class="flex justify-between items-start mb-4">
                  <span class="text-2xl">🐳</span>
                  <span class="text-xs text-gray-600 group-hover:text-cyan-400 transition-colors">→</span>
                </div>
                <h4 class="text-xl font-semibold mb-2 group-hover:text-cyan-400 transition-colors">
                  Infra & DevOps
                </h4>
                <p class="text-gray-500 text-sm leading-relaxed mb-4">
                  Docker Compose overlays, Nginx LB com scaling horizontal, 
                  Redis Sentinel HA, CI/CD com guardrails de arquitetura.
                </p>
                <div class="flex flex-wrap gap-2">
                  <span class="text-xs px-2 py-1 bg-gray-800 rounded">Docker</span>
                  <span class="text-xs px-2 py-1 bg-gray-800 rounded">Redis Sentinel</span>
                  <span class="text-xs px-2 py-1 bg-gray-800 rounded">GitHub Actions</span>
                </div>
              </NuxtLink>

              <!-- Optimus Case Study -->
              <NuxtLink 
                to="/projetos/optimus" 
                class="group bg-gray-900/50 border border-gray-800 hover:border-emerald-500/50 rounded-xl p-6 transition-all"
              >
                <div class="flex justify-between items-start mb-4">
                  <span class="text-2xl">🏗️</span>
                  <span class="text-xs text-gray-600 group-hover:text-emerald-400 transition-colors">→</span>
                </div>
                <h4 class="text-xl font-semibold mb-2 group-hover:text-emerald-400 transition-colors">
                  Arquitetura Completa
                </h4>
                <p class="text-gray-500 text-sm leading-relaxed mb-4">
                  Visão geral da plataforma: 4 microserviços, multi-tenant, 
                  integração WhatsApp, Memory Engine hierárquico.
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
              Outros Projetos
            </h3>
            <div class="grid md:grid-cols-2 gap-6">
              <!-- MCP Servers -->
              <NuxtLink 
                to="/projetos/mcp-servers" 
                class="group bg-gray-900/50 border border-gray-800 hover:border-cyan-500/50 rounded-xl p-6 transition-all"
              >
                <div class="flex justify-between items-start mb-4">
                  <span class="text-2xl">🛠️</span>
                  <span class="text-xs text-gray-600 group-hover:text-cyan-400 transition-colors">→</span>
                </div>
                <h4 class="text-xl font-semibold mb-2 group-hover:text-cyan-400 transition-colors">
                  MCP Servers
                </h4>
                <p class="text-gray-500 text-sm leading-relaxed mb-4">
                  Servidores Model Context Protocol para Claude Code. 
                  Debugging, validação arquitetural e navegação de codebase.
                </p>
                <div class="flex flex-wrap gap-2">
                  <span class="text-xs px-2 py-1 bg-gray-800 rounded">MCP</span>
                  <span class="text-xs px-2 py-1 bg-gray-800 rounded">Claude</span>
                  <span class="text-xs px-2 py-1 bg-gray-800 rounded">Python</span>
                </div>
              </NuxtLink>

              <!-- AutoMark -->
              <NuxtLink 
                to="/projetos/automark" 
                class="group bg-gray-900/50 border border-gray-800 hover:border-orange-500/50 rounded-xl p-6 transition-all"
              >
                <div class="flex justify-between items-start mb-4">
                  <span class="text-2xl">🛒</span>
                  <span class="text-xs text-gray-600 group-hover:text-orange-400 transition-colors">→</span>
                </div>
                <h4 class="text-xl font-semibold mb-2 group-hover:text-orange-400 transition-colors">
                  AutoMark Platform
                </h4>
                <p class="text-gray-500 text-sm leading-relaxed mb-4">
                  SaaS multi-tenant de distribuição de ofertas afiliadas. 
                  Shopee → WhatsApp com anti-spam, scoring e dedupe.
                </p>
                <div class="flex flex-wrap gap-2">
                  <span class="text-xs px-2 py-1 bg-gray-800 rounded">Multi-tenant</span>
                  <span class="text-xs px-2 py-1 bg-gray-800 rounded">Celery</span>
                  <span class="text-xs px-2 py-1 bg-gray-800 rounded">Anti-Ban</span>
                </div>
              </NuxtLink>

              <!-- iContei -->
              <NuxtLink 
                to="/projetos/icontei" 
                class="group bg-gray-900/50 border border-gray-800 hover:border-emerald-500/50 rounded-xl p-6 transition-all"
              >
                <div class="flex justify-between items-start mb-4">
                  <span class="text-2xl">🕐</span>
                  <span class="text-xs text-gray-600 group-hover:text-emerald-400 transition-colors">→</span>
                </div>
                <h4 class="text-xl font-semibold mb-2 group-hover:text-emerald-400 transition-colors">
                  iContei
                </h4>
                <p class="text-gray-500 text-sm leading-relaxed mb-4">
                  Rede social de contadores compartilháveis. Next.js 16, FastAPI, 
                  WebSocket real-time, verificação por IA, rankings com Redis.
                </p>
                <div class="flex flex-wrap gap-2">
                  <span class="text-xs px-2 py-1 bg-gray-800 rounded">Next.js 16</span>
                  <span class="text-xs px-2 py-1 bg-gray-800 rounded">FastAPI</span>
                  <span class="text-xs px-2 py-1 bg-gray-800 rounded">WebSocket</span>
                </div>
              </NuxtLink>

              <!-- PVCoach -->
              <NuxtLink 
                to="/projetos/pvcoach" 
                class="group bg-gray-900/50 border border-gray-800 hover:border-amber-500/50 rounded-xl p-6 transition-all"
              >
                <div class="flex justify-between items-start mb-4">
                  <span class="text-2xl">♔</span>
                  <span class="text-xs text-gray-600 group-hover:text-amber-400 transition-colors">→</span>
                </div>
                <h4 class="text-xl font-semibold mb-2 group-hover:text-amber-400 transition-colors">
                  PVCoach
                </h4>
                <p class="text-gray-500 text-sm leading-relaxed mb-4">
                  Chess coach com Stockfish + LLM. MultiPV analysis, 
                  explicações grounded, hints progressivos.
                </p>
                <div class="flex flex-wrap gap-2">
                  <span class="text-xs px-2 py-1 bg-gray-800 rounded">Stockfish</span>
                  <span class="text-xs px-2 py-1 bg-gray-800 rounded">Multi-LLM</span>
                  <span class="text-xs px-2 py-1 bg-gray-800 rounded">FastAPI</span>
                </div>
              </NuxtLink>

              <!-- Feed-RSS -->
              <NuxtLink 
                to="/projetos/feed-rss" 
                class="group bg-gray-900/50 border border-gray-800 hover:border-pink-500/50 rounded-xl p-6 transition-all"
              >
                <div class="flex justify-between items-start mb-4">
                  <span class="text-2xl">📡</span>
                  <span class="text-xs text-gray-600 group-hover:text-pink-400 transition-colors">→</span>
                </div>
                <h4 class="text-xl font-semibold mb-2 group-hover:text-pink-400 transition-colors">
                  Feed-RSS Monitor
                </h4>
                <p class="text-gray-500 text-sm leading-relaxed mb-4">
                  Pipeline de automação de conteúdo: RSS → Filter → OpenAI → Telegram/Discord. 
                  Roteiros de Shorts gerados automaticamente.
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
          <h2 class="text-3xl font-bold mb-12">Stack</h2>
          <div class="grid md:grid-cols-3 gap-8">
            <!-- Backend -->
            <div>
              <h3 class="text-emerald-400 font-semibold mb-4">Backend</h3>
              <ul class="space-y-2 text-gray-400">
                <li>Python 3.12</li>
                <li>FastAPI</li>
                <li>PostgreSQL + pgvector</li>
                <li>Redis</li>
                <li>Celery</li>
                <li>Docker</li>
              </ul>
            </div>
            <!-- AI/ML -->
            <div>
              <h3 class="text-purple-400 font-semibold mb-4">AI / ML</h3>
              <ul class="space-y-2 text-gray-400">
                <li>LangChain / LangGraph</li>
                <li>OpenAI GPT-4</li>
                <li>text-embedding-3-large</li>
                <li>HNSW Index</li>
                <li>RAG Pipelines</li>
                <li>Semantic Search</li>
              </ul>
            </div>
            <!-- Infra -->
            <div>
              <h3 class="text-cyan-400 font-semibold mb-4">Infra / DevOps</h3>
              <ul class="space-y-2 text-gray-400">
                <li>AWS / GCP</li>
                <li>Kubernetes</li>
                <li>Prometheus + Grafana</li>
                <li>GitHub Actions</li>
                <li>Terraform</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <footer class="border-t border-gray-800 py-8">
      <div class="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <span class="text-gray-600">© 2025 Marcelo Marleta</span>
        <div class="flex gap-4">
          <a href="https://github.com/mmarleta" target="_blank" class="text-gray-600 hover:text-white transition-colors">GitHub</a>
          <a href="https://linkedin.com/in/mmarleta" target="_blank" class="text-gray-600 hover:text-white transition-colors">LinkedIn</a>
        </div>
      </div>
    </footer>
  </div>
</template>
