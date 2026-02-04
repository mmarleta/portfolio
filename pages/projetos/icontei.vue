<template>
  <div class="min-h-screen bg-gray-950">
    <!-- Hero Section -->
    <section class="relative py-24 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-gray-950 to-purple-900/20"></div>
      <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
      <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      
      <div class="container mx-auto px-6 relative z-10">
        <NuxtLink to="/" class="inline-flex items-center text-gray-400 hover:text-emerald-400 mb-8 transition-colors">
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
          </svg>
          Voltar ao Portfolio
        </NuxtLink>
        
        <div class="max-w-4xl">
          <div class="flex items-center gap-4 mb-6">
            <span class="px-4 py-2 bg-emerald-500/10 text-emerald-400 rounded-full text-sm font-medium border border-emerald-500/20">
              Full-Stack Platform
            </span>
            <span class="px-4 py-2 bg-purple-500/10 text-purple-400 rounded-full text-sm font-medium border border-purple-500/20">
              Social Network
            </span>
            <span class="px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium border border-blue-500/20">
              Real-time
            </span>
          </div>
          
          <h1 class="text-5xl md:text-6xl font-bold text-white mb-6">
            iContei
            <span class="text-emerald-400">.</span>
          </h1>
          
          <p class="text-xl text-gray-300 mb-8 leading-relaxed">
            Rede social de contadores compartilháveis — desde estatísticas esportivas virais até marcos pessoais.
            Plataforma full-stack com <span class="text-emerald-400">Next.js 16</span>, 
            <span class="text-emerald-400">FastAPI</span>, <span class="text-emerald-400">WebSockets</span>, 
            e <span class="text-emerald-400">verificação por IA</span>.
          </p>
          
          <div class="flex flex-wrap gap-3">
            <span class="px-3 py-1 bg-gray-800/50 text-gray-300 rounded text-sm">Next.js 16</span>
            <span class="px-3 py-1 bg-gray-800/50 text-gray-300 rounded text-sm">React 19</span>
            <span class="px-3 py-1 bg-gray-800/50 text-gray-300 rounded text-sm">FastAPI</span>
            <span class="px-3 py-1 bg-gray-800/50 text-gray-300 rounded text-sm">PostgreSQL</span>
            <span class="px-3 py-1 bg-gray-800/50 text-gray-300 rounded text-sm">Redis</span>
            <span class="px-3 py-1 bg-gray-800/50 text-gray-300 rounded text-sm">WebSocket</span>
            <span class="px-3 py-1 bg-gray-800/50 text-gray-300 rounded text-sm">OpenAI/Groq</span>
            <span class="px-3 py-1 bg-gray-800/50 text-gray-300 rounded text-sm">Prometheus</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Visão Geral -->
    <section class="py-20 border-t border-gray-800">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold text-white mb-12">Visão Geral</h2>
        
        <div class="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 class="text-xl font-semibold text-emerald-400 mb-4">O Produto</h3>
            <p class="text-gray-300 leading-relaxed mb-6">
              iContei é uma plataforma social dedicada a contadores de todos os tipos — desde 
              estatísticas esportivas virais ("Há 2.847 dias o Flamengo está sem título mundial") 
              até marcos pessoais ("Faltam 127 dias para meu casamento") e corporativos 
              ("1.567 dias sem acidentes de trabalho").
            </p>
            <p class="text-gray-300 leading-relaxed">
              O foco é criar contadores visualmente impactantes para compartilhamento em redes 
              sociais (TikTok, Instagram, Twitter) com previews dinâmicos, atualização em tempo 
              real, e comunidade engajada.
            </p>
          </div>
          
          <div>
            <h3 class="text-xl font-semibold text-emerald-400 mb-4">Casos de Uso</h3>
            <div class="space-y-4">
              <div class="p-4 bg-gray-900/50 rounded-lg border border-gray-800">
                <h4 class="text-white font-medium mb-2">📊 Públicos (Virais)</h4>
                <ul class="text-gray-400 text-sm space-y-1">
                  <li>• "Há 2.847 dias o Flamengo está sem título mundial"</li>
                  <li>• "Faltam 180 dias para a Copa do Mundo 2026"</li>
                  <li>• "Real Madrid há 45 dias sem perder no Bernabéu"</li>
                </ul>
              </div>
              <div class="p-4 bg-gray-900/50 rounded-lg border border-gray-800">
                <h4 class="text-white font-medium mb-2">💑 Pessoais</h4>
                <ul class="text-gray-400 text-sm space-y-1">
                  <li>• "Faltam 127 dias para meu casamento"</li>
                  <li>• "Há 1.234 dias que nos conhecemos"</li>
                </ul>
              </div>
              <div class="p-4 bg-gray-900/50 rounded-lg border border-gray-800">
                <h4 class="text-white font-medium mb-2">🏢 Corporativos</h4>
                <ul class="text-gray-400 text-sm space-y-1">
                  <li>• "1.567 dias sem acidentes de trabalho"</li>
                  <li>• "890 dias como líder de mercado"</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Arquitetura -->
    <section class="py-20 bg-gray-900/30 border-t border-gray-800">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold text-white mb-12">Arquitetura Full-Stack</h2>
        
        <div class="bg-gray-900/50 rounded-xl border border-gray-800 p-8 mb-12">
          <pre class="text-sm text-gray-300 overflow-x-auto"><code>┌─────────────────────────────────────────────────────────────────────────┐
│                        FRONTEND (Next.js 16)                            │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  ┌────────────┐  │
│  │  Home Page   │  │Counter Detail│  │   Trending   │  │  Profile   │  │
│  │  (SSR+ISR)   │  │   (SSR)      │  │   Rankings   │  │   Admin    │  │
│  └──────────────┘  └──────────────┘  └──────────────┘  └────────────┘  │
│                            │                                            │
│  ┌───────────────────────────────────────────────────────────────────┐  │
│  │  React 19 + Server Components + Framer Motion + Remotion (video)  │  │
│  └───────────────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────┬───────────────────────────┘
                                              │ HTTP + WebSocket
┌─────────────────────────────────────────────▼───────────────────────────┐
│                         BACKEND (FastAPI)                               │
│  ┌───────────────────────────────────────────────────────────────────┐  │
│  │                      API Layer (Routes)                           │  │
│  │  /counters  /rankings  /auth  /admin  /realtime  /automation     │  │
│  └────────────────────────────┬──────────────────────────────────────┘  │
│                               │                                         │
│  ┌────────────────────────────▼──────────────────────────────────────┐  │
│  │              Service Layer (Domain-Driven Design)                 │  │
│  │  CounterService  RankingService  AutomationService  AIVerify     │  │
│  └────────────────────────────┬──────────────────────────────────────┘  │
│                               │                                         │
│  ┌────────────────────────────▼──────────────────────────────────────┐  │
│  │              Repository Layer (Data Access)                       │  │
│  │  CounterRepo  UserRepo  ThemeRepo  AutomationRuleRepo            │  │
│  └───────────┬──────────────────────────────────────┬────────────────┘  │
└──────────────┼──────────────────────────────────────┼────────────────────┘
               │                                      │
    ┌──────────▼──────────┐            ┌─────────────▼─────────────┐
    │   PostgreSQL 16     │            │        Redis 7            │
    │  (dados + sessions) │            │  (cache + rankings +      │
    │  AsyncPG + SQLAlch  │            │   WebSocket pub/sub)      │
    └─────────────────────┘            └───────────────────────────┘</code></pre>
        </div>
        
        <!-- Stack Cards -->
        <div class="grid md:grid-cols-2 gap-8">
          <div class="bg-gray-900/50 rounded-xl border border-gray-800 p-6">
            <h3 class="text-xl font-semibold text-emerald-400 mb-4">Frontend Stack</h3>
            <ul class="space-y-3 text-gray-300">
              <li class="flex items-start gap-3">
                <span class="text-emerald-400 mt-1">▸</span>
                <div>
                  <span class="text-white font-medium">Next.js 16</span> — App Router, Server Components, ISR
                </div>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-emerald-400 mt-1">▸</span>
                <div>
                  <span class="text-white font-medium">React 19</span> — Latest features, Turbopack
                </div>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-emerald-400 mt-1">▸</span>
                <div>
                  <span class="text-white font-medium">Framer Motion</span> — Animações fluidas
                </div>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-emerald-400 mt-1">▸</span>
                <div>
                  <span class="text-white font-medium">Remotion</span> — Geração de vídeos programática
                </div>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-emerald-400 mt-1">▸</span>
                <div>
                  <span class="text-white font-medium">Sentry</span> — Error tracking e performance
                </div>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-emerald-400 mt-1">▸</span>
                <div>
                  <span class="text-white font-medium">PWA</span> — Manifest + Service Worker
                </div>
              </li>
            </ul>
          </div>
          
          <div class="bg-gray-900/50 rounded-xl border border-gray-800 p-6">
            <h3 class="text-xl font-semibold text-emerald-400 mb-4">Backend Stack</h3>
            <ul class="space-y-3 text-gray-300">
              <li class="flex items-start gap-3">
                <span class="text-emerald-400 mt-1">▸</span>
                <div>
                  <span class="text-white font-medium">FastAPI</span> — Async Python, auto-docs
                </div>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-emerald-400 mt-1">▸</span>
                <div>
                  <span class="text-white font-medium">Domain-Driven Design</span> — Camadas bem separadas
                </div>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-emerald-400 mt-1">▸</span>
                <div>
                  <span class="text-white font-medium">AsyncPG + SQLAlchemy</span> — PostgreSQL async
                </div>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-emerald-400 mt-1">▸</span>
                <div>
                  <span class="text-white font-medium">Redis</span> — Cache, rankings (sorted sets), pub/sub
                </div>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-emerald-400 mt-1">▸</span>
                <div>
                  <span class="text-white font-medium">OpenTelemetry + Prometheus</span> — Observability
                </div>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-emerald-400 mt-1">▸</span>
                <div>
                  <span class="text-white font-medium">MinIO</span> — Object storage (imagens)
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Real-time System -->
    <section class="py-20 border-t border-gray-800">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold text-white mb-4">Sistema Real-time</h2>
        <p class="text-gray-400 mb-12 max-w-3xl">
          Contadores atualizam a cada segundo no frontend. Para suportar milhares de conexões simultâneas, 
          implementei um sistema de WebSocket com Redis pub/sub, heartbeat, e rate limiting inteligente.
        </p>
        
        <div class="grid lg:grid-cols-2 gap-8 mb-12">
          <div class="bg-gray-900/50 rounded-xl border border-gray-800 p-6">
            <h3 class="text-xl font-semibold text-emerald-400 mb-4">WebSocket Manager</h3>
            <div class="bg-gray-950 rounded-lg p-4 mb-4">
              <pre class="text-sm text-gray-300 overflow-x-auto"><code class="language-python">class WebSocketManager:
    """
    Gerencia conexões WebSocket e distribuição 
    de mensagens Redis -> Clientes
    """
    def __init__(self):
        # Mapeia counter_id -> Lista de WebSockets
        self.active_connections: dict[str, list[WebSocket]] = {}
        self._redis_task: asyncio.Task | None = None
        self.presence_timeout = 45  # segundos

    async def connect(
        self, 
        websocket: WebSocket, 
        counter_id: str,
        user_id: str | None = None,
        ip_address: str | None = None
    ):
        # Rate Limiting por usuário
        if user_id:
            user_conn_key = f"user_connections:{user_id}"
            current_conns = await redis_manager.scard(user_conn_key)
            if current_conns >= 5:  # max 5 conexões por user
                await websocket.close(code=4029)  # Too Many Requests
                return False
        
        # Rate Limiting por IP (anônimos)
        elif ip_address:
            ip_conn_key = f"anon_connections:{ip_address}"
            current_ip_conns = await redis_manager.scard(ip_conn_key)
            if current_ip_conns >= 20:
                await websocket.close(code=4029)
                return False
        
        await websocket.accept()
        self.active_connections[counter_id].append(websocket)
        
        # Heartbeat no Redis (Sorted Set com timestamp)
        await self.heartbeat(counter_id, connection_id)
        await self._broadcast_presence(counter_id)</code></pre>
            </div>
            <p class="text-gray-400 text-sm">
              Rate limiting dual: por usuário autenticado (5 conexões) e por IP para anônimos (20 conexões, 
              considerando NAT/CGNAT). Heartbeat via Redis Sorted Set para detectar conexões mortas.
            </p>
          </div>
          
          <div class="bg-gray-900/50 rounded-xl border border-gray-800 p-6">
            <h3 class="text-xl font-semibold text-emerald-400 mb-4">Redis Pub/Sub Distribution</h3>
            <div class="bg-gray-950 rounded-lg p-4 mb-4">
              <pre class="text-sm text-gray-300 overflow-x-auto"><code class="language-python">async def start_redis_listener(self):
    """
    Escuta canal Redis e distribui para WebSockets locais
    Permite escalar horizontalmente com múltiplas instâncias
    """
    pubsub = redis_manager.client.pubsub()
    await pubsub.subscribe("counter_updates")
    
    async for message in pubsub.listen():
        if message["type"] == "message":
            data = json.loads(message["data"])
            counter_id = data["counter_id"]
            
            # Broadcast apenas para conexões desta instância
            if counter_id in self.active_connections:
                await self._broadcast_to_counter(
                    counter_id, 
                    data["payload"]
                )

async def publish_update(self, counter_id: str, payload: dict):
    """
    Publica atualização no Redis
    Todas as instâncias do backend receberão
    """
    await redis_manager.publish(
        "counter_updates",
        json.dumps({
            "counter_id": counter_id,
            "payload": payload
        })
    )</code></pre>
            </div>
            <p class="text-gray-400 text-sm">
              Com Redis pub/sub, posso escalar horizontalmente o backend — cada instância 
              mantém suas conexões WebSocket e recebe atualizações via Redis.
            </p>
          </div>
        </div>
        
        <!-- Presence System -->
        <div class="bg-gray-900/50 rounded-xl border border-gray-800 p-6">
          <h3 class="text-xl font-semibold text-emerald-400 mb-4">Sistema de Presença</h3>
          <div class="grid md:grid-cols-3 gap-6">
            <div class="text-center p-4 bg-gray-950 rounded-lg">
              <div class="text-3xl font-bold text-emerald-400 mb-2">30s</div>
              <div class="text-gray-400 text-sm">Heartbeat interval</div>
            </div>
            <div class="text-center p-4 bg-gray-950 rounded-lg">
              <div class="text-3xl font-bold text-emerald-400 mb-2">45s</div>
              <div class="text-gray-400 text-sm">Presence timeout</div>
            </div>
            <div class="text-center p-4 bg-gray-950 rounded-lg">
              <div class="text-3xl font-bold text-emerald-400 mb-2">ZADD</div>
              <div class="text-gray-400 text-sm">Redis Sorted Set</div>
            </div>
          </div>
          <p class="text-gray-400 mt-4 text-sm">
            Cliente envia heartbeat a cada 30s. Servidor usa <code class="text-emerald-400">ZRANGEBYSCORE</code> 
            para listar conexões ativas (timestamp > now - 45s). Conexões stale são removidas automaticamente.
          </p>
        </div>
      </div>
    </section>

    <!-- AI Verification -->
    <section class="py-20 bg-gray-900/30 border-t border-gray-800">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold text-white mb-4">Verificação por IA</h2>
        <p class="text-gray-400 mb-12 max-w-3xl">
          Contadores oficiais passam por verificação automatizada com IA para garantir 
          que datas e informações estão corretas. Sistema multi-provider com fallback.
        </p>
        
        <div class="grid lg:grid-cols-2 gap-8">
          <div class="bg-gray-900/50 rounded-xl border border-gray-800 p-6">
            <h3 class="text-xl font-semibold text-emerald-400 mb-4">AI Verification Service</h3>
            <div class="bg-gray-950 rounded-lg p-4 mb-4">
              <pre class="text-sm text-gray-300 overflow-x-auto"><code class="language-python">class AIVerificationService:
    """
    Verifica contadores usando OpenAI ou Groq
    Retorna saída padronizada para o ReviewWorker
    """
    def __init__(
        self,
        provider: str,  # "openai" ou "groq"
        model: str,
        openai_api_key: str | None,
        groq_api_key: str | None,
    ):
        self.provider = provider
        # Endpoints compatíveis com OpenAI Chat Completions
        self._openai_url = "https://api.openai.com/v1/chat/completions"
        self._groq_url = "https://api.groq.com/openai/v1/chat/completions"

    async def verify_counter(self, counter: Counter) -> dict | None:
        """
        Retorna:
        {
          "approved": bool,
          "confidence": float (0-100),
          "reasoning": str,
          "model": str
        }
        """
        # Seleção de provider com fallback
        if self.provider == "openai" and self.openai_api_key:
            chosen = "openai"
        elif self.groq_api_key:
            chosen = "groq"  # fallback
        else:
            return None  # Manual review

        system_msg = (
            "Você é um verificador que decide se um contador "
            "é válido. Responda APENAS JSON..."
        )
        
        user_msg = self._build_user_prompt(counter)
        # ... chamada à API e parse do resultado</code></pre>
            </div>
          </div>
          
          <div class="bg-gray-900/50 rounded-xl border border-gray-800 p-6">
            <h3 class="text-xl font-semibold text-emerald-400 mb-4">Pipeline Brave Search + Groq</h3>
            <div class="bg-gray-950 rounded-lg p-4 mb-4">
              <pre class="text-sm text-gray-300 overflow-x-auto"><code class="language-python">class GroqClient:
    """
    Pipeline de 2 estágios para extração de dados:
    1. Brave Search - Busca web
    2. Groq AI - Extrai dados estruturados em JSON
    """
    
    async def search_and_extract(
        self,
        search_query: str,
        prompt_template: str,
        search_count: int = 5,
        groq_model: str = "llama-3.3-70b-versatile",
    ) -> dict | None:
        # Etapa 1: Busca na web
        search_results = await self._brave_search(
            search_query, 
            search_count
        )
        
        # Etapa 2: Processa com IA
        extracted_data = await self._groq_process(
            search_results=search_results,
            prompt_template=prompt_template,
            model=groq_model,
        )
        
        return extracted_data

    async def _retry_with_backoff(self, operation, func, *args):
        """
        Exponential backoff + jitter para resiliência
        Retry on: 5xx, 429 (rate limit), 408 (timeout)
        """
        for attempt in range(self.max_retries + 1):
            try:
                return await func(*args)
            except (TimeoutError, ClientError):
                delay = self.retry_delay * (2 ** attempt) + random.uniform(0, 1)
                await asyncio.sleep(delay)</code></pre>
            </div>
            <p class="text-gray-400 text-sm">
              Para contadores que precisam de dados externos (ex: "última vitória do time X"), 
              uso Brave Search para buscar informações recentes e Groq para extrair dados estruturados.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Ranking System -->
    <section class="py-20 border-t border-gray-800">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold text-white mb-4">Sistema de Rankings</h2>
        <p class="text-gray-400 mb-12 max-w-3xl">
          Rankings em tempo real usando Redis Sorted Sets com algoritmo de scoring 60/30/10 
          que balanceia likes, comentários e visualizações.
        </p>
        
        <div class="grid lg:grid-cols-2 gap-8">
          <div class="bg-gray-900/50 rounded-xl border border-gray-800 p-6">
            <h3 class="text-xl font-semibold text-emerald-400 mb-4">Algoritmo de Scoring</h3>
            <div class="bg-gray-950 rounded-lg p-4 mb-4">
              <pre class="text-sm text-gray-300 overflow-x-auto"><code class="language-python">async def calculate_counter_score(self, counter: Counter) -> float:
    """
    Fórmula: score = (likes × 0.6) + (comments × 0.3) + (views × 0.1)
    
    - 60% peso para likes (engajamento forte)
    - 30% peso para comentários (interação ativa)
    - 10% peso para visualizações (alcance)
    """
    stats = await self.counter_repo.db.fetchrow("""
        SELECT
            COALESCE(likes_count, 0) as likes,
            COALESCE(comments_count, 0) as comments,
            COALESCE(total_views, 0) as views
        FROM counter_stats_current
        WHERE counter_id = $1
    """, counter.id)
    
    # Normaliza views (geralmente muito maiores)
    normalized_views = stats["views"] / 10.0
    
    base_score = (
        stats["likes"] * 0.6 + 
        stats["comments"] * 0.3 + 
        normalized_views * 0.1
    )
    
    # Multipliers opcionais
    featured_multiplier = 1.5 if counter.is_featured else 1.0
    official_multiplier = 1.2 if counter.source == "official" else 1.0
    
    return round(base_score * featured_multiplier * official_multiplier, 2)</code></pre>
            </div>
          </div>
          
          <div class="bg-gray-900/50 rounded-xl border border-gray-800 p-6">
            <h3 class="text-xl font-semibold text-emerald-400 mb-4">Redis Sorted Sets</h3>
            <div class="bg-gray-950 rounded-lg p-4 mb-4">
              <pre class="text-sm text-gray-300 overflow-x-auto"><code class="language-python"># Estrutura de chaves Redis
ranking:24h   # Trending últimas 24 horas
ranking:7d    # Trending últimos 7 dias
ranking:30d   # Trending últimos 30 dias
ranking:all   # All-time trending

async def update_rankings(self, period: str = "24h") -> dict:
    """Atualiza rankings para um período específico"""
    now = datetime.now(UTC)
    
    cutoff_date = {
        "24h": now - timedelta(hours=24),
        "7d": now - timedelta(days=7),
        "30d": now - timedelta(days=30),
        "all": None
    }[period]
    
    # Busca contadores elegíveis
    counters = await self.counter_repo.list(
        visibility=CounterVisibility.PUBLIC,
        created_after=cutoff_date
    )
    
    # Atualiza Redis Sorted Set
    for counter in counters:
        score = await self.calculate_counter_score(counter)
        await self.redis.zadd(
            f"ranking:{period}",
            {str(counter.id): score}
        )
    
    # Mantém apenas top 1000
    await self.redis.zremrangebyrank(f"ranking:{period}", 0, -1001)</code></pre>
            </div>
            <p class="text-gray-400 text-sm">
              <code class="text-emerald-400">ZADD</code> para inserir, <code class="text-emerald-400">ZREVRANGE</code> para 
              buscar top N, <code class="text-emerald-400">ZREMRANGEBYRANK</code> para manter tamanho controlado. 
              O(log N) para todas as operações.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Automation System -->
    <section class="py-20 bg-gray-900/30 border-t border-gray-800">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold text-white mb-4">Sistema de Automação</h2>
        <p class="text-gray-400 mb-12 max-w-3xl">
          Contadores podem ser atualizados automaticamente via regras configuráveis — 
          desde agendamentos cron até triggers baseados em APIs externas.
        </p>
        
        <div class="grid lg:grid-cols-3 gap-6 mb-12">
          <div class="bg-gray-900/50 rounded-xl border border-gray-800 p-6">
            <div class="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-4">
              <span class="text-2xl">⏰</span>
            </div>
            <h3 class="text-lg font-semibold text-white mb-2">Scheduled</h3>
            <p class="text-gray-400 text-sm">
              Cron expressions para atualização periódica. Usa <code class="text-emerald-400">croniter</code> 
              para calcular próxima execução.
            </p>
          </div>
          
          <div class="bg-gray-900/50 rounded-xl border border-gray-800 p-6">
            <div class="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4">
              <span class="text-2xl">🔌</span>
            </div>
            <h3 class="text-lg font-semibold text-white mb-2">API Trigger</h3>
            <p class="text-gray-400 text-sm">
              Integração com APIs externas (API-Football, etc.) para buscar dados automaticamente.
            </p>
          </div>
          
          <div class="bg-gray-900/50 rounded-xl border border-gray-800 p-6">
            <div class="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
              <span class="text-2xl">👥</span>
            </div>
            <h3 class="text-lg font-semibold text-white mb-2">Crowdsourced</h3>
            <p class="text-gray-400 text-sm">
              Usuários podem sugerir atualizações que passam por aprovação antes de serem aplicadas.
            </p>
          </div>
        </div>
        
        <div class="bg-gray-900/50 rounded-xl border border-gray-800 p-6">
          <h3 class="text-xl font-semibold text-emerald-400 mb-4">Sports API Provider</h3>
          <div class="bg-gray-950 rounded-lg p-4 mb-4">
            <pre class="text-sm text-gray-300 overflow-x-auto"><code class="language-python">class SportsAPIProvider(BaseDataProvider):
    """
    Provider para API-Football
    
    Endpoints: fixtures, standings, teams/statistics, players
    
    source_config exemplo:
    {
        "endpoint": "fixtures",
        "query_params": {"team": 128, "season": 2024, "last": 1},
        "extract_path": "response[0].goals.home"
    }
    """
    
    async def fetch_data(self, source_config: dict) -> ProviderResponse:
        endpoint = source_config["endpoint"]
        query_params = source_config.get("query_params", {})
        extract_path = source_config["extract_path"]
        
        # Construir URL e headers
        url = f"{self.base_url}/{endpoint}"
        headers = {"x-apisports-key": self.api_key}
        
        async with httpx.AsyncClient(timeout=self.timeout_seconds) as client:
            response = await client.get(url, headers=headers, params=query_params)
            data = response.json()
        
        # Extrai valor usando JSONPath
        value = self._extract_value(data, extract_path)
        
        return self._create_success_response(
            value=str(value),
            confidence=95.0,  # API-Football é altamente confiável
            metadata={"raw_response": data, "endpoint": endpoint}
        )</code></pre>
          </div>
          <p class="text-gray-400 text-sm">
            Provider Pattern permite adicionar novas fontes de dados facilmente. 
            Cada provider implementa <code class="text-emerald-400">fetch_data()</code> e retorna resposta padronizada.
          </p>
        </div>
      </div>
    </section>

    <!-- Observability -->
    <section class="py-20 border-t border-gray-800">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold text-white mb-4">Observabilidade</h2>
        <p class="text-gray-400 mb-12 max-w-3xl">
          Stack completa de observabilidade para monitorar a plataforma em produção.
        </p>
        
        <div class="grid md:grid-cols-3 gap-6">
          <div class="bg-gray-900/50 rounded-xl border border-gray-800 p-6">
            <h3 class="text-lg font-semibold text-emerald-400 mb-4">Prometheus + Metrics</h3>
            <ul class="space-y-2 text-gray-400 text-sm">
              <li>• HTTP request duration histograms</li>
              <li>• Request count by status code</li>
              <li>• Active WebSocket connections</li>
              <li>• Redis operations latency</li>
              <li>• Database query timing</li>
              <li>• Endpoint: <code class="text-emerald-400">/metrics</code></li>
            </ul>
          </div>
          
          <div class="bg-gray-900/50 rounded-xl border border-gray-800 p-6">
            <h3 class="text-lg font-semibold text-emerald-400 mb-4">OpenTelemetry</h3>
            <ul class="space-y-2 text-gray-400 text-sm">
              <li>• Distributed tracing</li>
              <li>• Auto-instrumentation FastAPI</li>
              <li>• Redis instrumentation</li>
              <li>• httpx instrumentation</li>
              <li>• SQLAlchemy instrumentation</li>
              <li>• Configurable sample rate</li>
            </ul>
          </div>
          
          <div class="bg-gray-900/50 rounded-xl border border-gray-800 p-6">
            <h3 class="text-lg font-semibold text-emerald-400 mb-4">Structured Logging</h3>
            <ul class="space-y-2 text-gray-400 text-sm">
              <li>• structlog para logs estruturados</li>
              <li>• JSON format em produção</li>
              <li>• Request/response middleware</li>
              <li>• Correlation IDs</li>
              <li>• Error context enrichment</li>
              <li>• Sentry integration</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Testing -->
    <section class="py-20 bg-gray-900/30 border-t border-gray-800">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold text-white mb-4">Testes Automatizados</h2>
        <p class="text-gray-400 mb-12 max-w-3xl">
          Cobertura completa com pytest (backend) e vitest + Playwright (frontend).
        </p>
        
        <div class="grid md:grid-cols-2 gap-8">
          <div class="bg-gray-900/50 rounded-xl border border-gray-800 p-6">
            <h3 class="text-xl font-semibold text-emerald-400 mb-4">Backend (pytest)</h3>
            <div class="grid grid-cols-2 gap-4 mb-4">
              <div class="text-center p-4 bg-gray-950 rounded-lg">
                <div class="text-3xl font-bold text-emerald-400">267</div>
                <div class="text-gray-400 text-sm">testes</div>
              </div>
              <div class="text-center p-4 bg-gray-950 rounded-lg">
                <div class="text-3xl font-bold text-emerald-400">✓</div>
                <div class="text-gray-400 text-sm">passando</div>
              </div>
            </div>
            <ul class="space-y-2 text-gray-400 text-sm">
              <li>• Endpoints críticos (health, counters, rankings)</li>
              <li>• Validação de paginação e filtros</li>
              <li>• Tratamento de erros (404, 400, 403)</li>
              <li>• Rate limiting (RATE_LIMIT_ENABLED=false para testes)</li>
              <li>• Admin routes e auth flows</li>
            </ul>
          </div>
          
          <div class="bg-gray-900/50 rounded-xl border border-gray-800 p-6">
            <h3 class="text-xl font-semibold text-emerald-400 mb-4">Frontend (vitest + Playwright)</h3>
            <div class="grid grid-cols-2 gap-4 mb-4">
              <div class="text-center p-4 bg-gray-950 rounded-lg">
                <div class="text-3xl font-bold text-emerald-400">21</div>
                <div class="text-gray-400 text-sm">unit tests</div>
              </div>
              <div class="text-center p-4 bg-gray-950 rounded-lg">
                <div class="text-3xl font-bold text-emerald-400">E2E</div>
                <div class="text-gray-400 text-sm">Playwright</div>
              </div>
            </div>
            <ul class="space-y-2 text-gray-400 text-sm">
              <li>• API client completo (getCounters, getTrending, etc)</li>
              <li>• Construção de URLs com parâmetros</li>
              <li>• Tratamento de erros (APIError)</li>
              <li>• Mock do fetch global</li>
              <li>• E2E com Playwright (headless e headed)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Workers -->
    <section class="py-20 border-t border-gray-800">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold text-white mb-4">Background Workers</h2>
        <p class="text-gray-400 mb-12 max-w-3xl">
          Processamento assíncrono para tarefas pesadas, mantendo a API responsiva.
        </p>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="bg-gray-900/50 rounded-xl border border-gray-800 p-6">
            <h3 class="text-lg font-semibold text-emerald-400 mb-2">Automation Scheduler</h3>
            <p class="text-gray-400 text-sm">
              Executa regras de automação a cada 5 minutos. Calcula próximo run com croniter.
            </p>
          </div>
          
          <div class="bg-gray-900/50 rounded-xl border border-gray-800 p-6">
            <h3 class="text-lg font-semibold text-emerald-400 mb-2">Ranking Worker</h3>
            <p class="text-gray-400 text-sm">
              Atualiza Redis Sorted Sets com scores calculados para cada período (24h, 7d, 30d, all).
            </p>
          </div>
          
          <div class="bg-gray-900/50 rounded-xl border border-gray-800 p-6">
            <h3 class="text-lg font-semibold text-emerald-400 mb-2">Review Worker</h3>
            <p class="text-gray-400 text-sm">
              Processa filas de verificação de contadores, coordena com AI Verification Service.
            </p>
          </div>
          
          <div class="bg-gray-900/50 rounded-xl border border-gray-800 p-6">
            <h3 class="text-lg font-semibold text-emerald-400 mb-2">AI Monitoring</h3>
            <p class="text-gray-400 text-sm">
              Monitora contadores marcados para verificação contínua, atualiza quando dados mudam.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Roadmap -->
    <section class="py-20 bg-gray-900/30 border-t border-gray-800">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold text-white mb-12">Roadmap</h2>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="bg-gray-900/50 rounded-xl border border-emerald-500/30 p-6">
            <div class="text-emerald-400 font-semibold mb-2">Fase 1 - MVP ✅</div>
            <ul class="space-y-1 text-gray-400 text-sm">
              <li>✓ CRUD de contadores</li>
              <li>✓ Sistema de temas</li>
              <li>✓ Rankings (Trending)</li>
              <li>✓ OG images dinâmicas</li>
              <li>✓ Autenticação</li>
              <li>✓ Seguir + reações</li>
            </ul>
          </div>
          
          <div class="bg-gray-900/50 rounded-xl border border-gray-800 p-6">
            <div class="text-purple-400 font-semibold mb-2">Fase 2 - Social</div>
            <ul class="space-y-1 text-gray-400 text-sm">
              <li>• Feed personalizado</li>
              <li>• Comentários e discussões</li>
              <li>• Notificações push</li>
              <li>• Badges e gamificação</li>
              <li>• Perfis públicos robustos</li>
            </ul>
          </div>
          
          <div class="bg-gray-900/50 rounded-xl border border-gray-800 p-6">
            <div class="text-blue-400 font-semibold mb-2">Fase 3 - Empresas</div>
            <ul class="space-y-1 text-gray-400 text-sm">
              <li>• Perfis corporativos</li>
              <li>• Multi-usuário por org</li>
              <li>• Dashboards analytics</li>
              <li>• SSO corporativo</li>
              <li>• Temas licenciados</li>
            </ul>
          </div>
          
          <div class="bg-gray-900/50 rounded-xl border border-gray-800 p-6">
            <div class="text-orange-400 font-semibold mb-2">Fase 4 - Creators</div>
            <ul class="space-y-1 text-gray-400 text-sm">
              <li>• Geração de vídeos (Remotion)</li>
              <li>• SDK para redes sociais</li>
              <li>• API pública</li>
              <li>• Widgets embeddable</li>
              <li>• Marketplace de templates</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Métricas -->
    <section class="py-20 border-t border-gray-800">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold text-white mb-12">Stack Completa</h2>
        
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <div class="bg-gray-900/50 rounded-lg p-4 text-center border border-gray-800">
            <div class="text-2xl mb-2">⚛️</div>
            <div class="text-white font-medium text-sm">Next.js 16</div>
          </div>
          <div class="bg-gray-900/50 rounded-lg p-4 text-center border border-gray-800">
            <div class="text-2xl mb-2">⚡</div>
            <div class="text-white font-medium text-sm">React 19</div>
          </div>
          <div class="bg-gray-900/50 rounded-lg p-4 text-center border border-gray-800">
            <div class="text-2xl mb-2">🐍</div>
            <div class="text-white font-medium text-sm">FastAPI</div>
          </div>
          <div class="bg-gray-900/50 rounded-lg p-4 text-center border border-gray-800">
            <div class="text-2xl mb-2">🐘</div>
            <div class="text-white font-medium text-sm">PostgreSQL</div>
          </div>
          <div class="bg-gray-900/50 rounded-lg p-4 text-center border border-gray-800">
            <div class="text-2xl mb-2">🔴</div>
            <div class="text-white font-medium text-sm">Redis</div>
          </div>
          <div class="bg-gray-900/50 rounded-lg p-4 text-center border border-gray-800">
            <div class="text-2xl mb-2">🔌</div>
            <div class="text-white font-medium text-sm">WebSocket</div>
          </div>
          <div class="bg-gray-900/50 rounded-lg p-4 text-center border border-gray-800">
            <div class="text-2xl mb-2">🤖</div>
            <div class="text-white font-medium text-sm">OpenAI/Groq</div>
          </div>
          <div class="bg-gray-900/50 rounded-lg p-4 text-center border border-gray-800">
            <div class="text-2xl mb-2">📊</div>
            <div class="text-white font-medium text-sm">Prometheus</div>
          </div>
          <div class="bg-gray-900/50 rounded-lg p-4 text-center border border-gray-800">
            <div class="text-2xl mb-2">🔍</div>
            <div class="text-white font-medium text-sm">OpenTelemetry</div>
          </div>
          <div class="bg-gray-900/50 rounded-lg p-4 text-center border border-gray-800">
            <div class="text-2xl mb-2">🎬</div>
            <div class="text-white font-medium text-sm">Remotion</div>
          </div>
          <div class="bg-gray-900/50 rounded-lg p-4 text-center border border-gray-800">
            <div class="text-2xl mb-2">🧪</div>
            <div class="text-white font-medium text-sm">Playwright</div>
          </div>
          <div class="bg-gray-900/50 rounded-lg p-4 text-center border border-gray-800">
            <div class="text-2xl mb-2">🐳</div>
            <div class="text-white font-medium text-sm">Docker</div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-20 border-t border-gray-800">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-3xl font-bold text-white mb-6">Quer ver mais projetos?</h2>
        <p class="text-gray-400 mb-8 max-w-2xl mx-auto">
          Este é um dos meus projetos pessoais. Explore também o Optimus (plataforma de IA conversacional) 
          e outros case studies no meu portfolio.
        </p>
        <NuxtLink 
          to="/" 
          class="inline-flex items-center px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg transition-colors"
        >
          Ver Todos os Projetos
          <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
          </svg>
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'iContei - Rede Social de Contadores | Marcelo Marleta',
  meta: [
    { name: 'description', content: 'Case study: Plataforma full-stack de contadores compartilháveis com Next.js 16, FastAPI, WebSocket real-time, e verificação por IA.' }
  ]
})
</script>
