<template>
  <div class="min-h-screen bg-gray-950">
    <ProjectHero :config="heroConfig" />

    <!-- Visão Geral -->
    <section class="py-20 border-t border-gray-800">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold text-white mb-12">{{ $t('cases.icontei.overview.title') }}</h2>
        
        <div class="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 class="text-xl font-semibold text-emerald-400 mb-4">{{ $t('cases.icontei.overview.productTitle') }}</h3>
            <p class="text-gray-300 leading-relaxed mb-6">
              {{ $t('cases.icontei.overview.productDesc1') }}
            </p>
            <p class="text-gray-300 leading-relaxed">
              {{ $t('cases.icontei.overview.productDesc2') }}
            </p>
          </div>
          
          <div>
            <h3 class="text-xl font-semibold text-emerald-400 mb-4">{{ $t('cases.icontei.overview.useCasesTitle') }}</h3>
            <div class="space-y-4">
              <div class="p-4 bg-gray-900/50 rounded-lg border border-gray-800">
                <h4 class="text-white font-medium mb-2">{{ $t('cases.icontei.overview.publicTitle') }}</h4>
                <ul class="text-gray-400 text-sm space-y-1">
                  <li>• {{ $t('cases.icontei.overview.publicExample1') }}</li>
                  <li>• {{ $t('cases.icontei.overview.publicExample2') }}</li>
                  <li>• {{ $t('cases.icontei.overview.publicExample3') }}</li>
                </ul>
              </div>
              <div class="p-4 bg-gray-900/50 rounded-lg border border-gray-800">
                <h4 class="text-white font-medium mb-2">{{ $t('cases.icontei.overview.personalTitle') }}</h4>
                <ul class="text-gray-400 text-sm space-y-1">
                  <li>• {{ $t('cases.icontei.overview.personalExample1') }}</li>
                  <li>• {{ $t('cases.icontei.overview.personalExample2') }}</li>
                </ul>
              </div>
              <div class="p-4 bg-gray-900/50 rounded-lg border border-gray-800">
                <h4 class="text-white font-medium mb-2">{{ $t('cases.icontei.overview.corporateTitle') }}</h4>
                <ul class="text-gray-400 text-sm space-y-1">
                  <li>• {{ $t('cases.icontei.overview.corporateExample1') }}</li>
                  <li>• {{ $t('cases.icontei.overview.corporateExample2') }}</li>
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
        <h2 class="text-3xl font-bold text-white mb-12">{{ $t('cases.icontei.architecture.title') }}</h2>
        
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
            <h3 class="text-xl font-semibold text-emerald-400 mb-4">{{ $t('cases.icontei.architecture.frontendStackTitle') }}</h3>
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
                  <span class="text-white font-medium">Framer Motion</span> — Fluid animations
                </div>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-emerald-400 mt-1">▸</span>
                <div>
                  <span class="text-white font-medium">Remotion</span> — Programmatic video generation
                </div>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-emerald-400 mt-1">▸</span>
                <div>
                  <span class="text-white font-medium">Sentry</span> — Error tracking & performance
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
            <h3 class="text-xl font-semibold text-emerald-400 mb-4">{{ $t('cases.icontei.architecture.backendStackTitle') }}</h3>
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
                  <span class="text-white font-medium">Domain-Driven Design</span> — Well-separated layers
                </div>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-emerald-400 mt-1">▸</span>
                <div>
                  <span class="text-white font-medium">AsyncPG + SQLAlchemy</span> — Async PostgreSQL
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
                  <span class="text-white font-medium">MinIO</span> — Object storage (images)
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
        <h2 class="text-3xl font-bold text-white mb-4">{{ $t('cases.icontei.realtime.title') }}</h2>
        <p class="text-gray-400 mb-12 max-w-3xl">
          {{ $t('cases.icontei.realtime.description') }}
        </p>
        
        <div class="grid lg:grid-cols-2 gap-8 mb-12">
          <div class="bg-gray-900/50 rounded-xl border border-gray-800 p-6">
            <h3 class="text-xl font-semibold text-emerald-400 mb-4">{{ $t('cases.icontei.realtime.websocketTitle') }}</h3>
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
              {{ $t('cases.icontei.realtime.websocketDesc') }}
            </p>
          </div>
          
          <div class="bg-gray-900/50 rounded-xl border border-gray-800 p-6">
            <h3 class="text-xl font-semibold text-emerald-400 mb-4">{{ $t('cases.icontei.realtime.pubsubTitle') }}</h3>
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
              {{ $t('cases.icontei.realtime.pubsubDesc') }}
            </p>
          </div>
        </div>
        
        <!-- Presence System -->
        <div class="bg-gray-900/50 rounded-xl border border-gray-800 p-6">
          <h3 class="text-xl font-semibold text-emerald-400 mb-4">{{ $t('cases.icontei.realtime.presenceTitle') }}</h3>
          <div class="grid md:grid-cols-3 gap-6">
            <div class="text-center p-4 bg-gray-950 rounded-lg">
              <div class="text-3xl font-bold text-emerald-400 mb-2">{{ $t('cases.icontei.realtime.presenceStat1Value') }}</div>
              <div class="text-gray-400 text-sm">{{ $t('cases.icontei.realtime.presenceStat1Label') }}</div>
            </div>
            <div class="text-center p-4 bg-gray-950 rounded-lg">
              <div class="text-3xl font-bold text-emerald-400 mb-2">{{ $t('cases.icontei.realtime.presenceStat2Value') }}</div>
              <div class="text-gray-400 text-sm">{{ $t('cases.icontei.realtime.presenceStat2Label') }}</div>
            </div>
            <div class="text-center p-4 bg-gray-950 rounded-lg">
              <div class="text-3xl font-bold text-emerald-400 mb-2">{{ $t('cases.icontei.realtime.presenceStat3Value') }}</div>
              <div class="text-gray-400 text-sm">{{ $t('cases.icontei.realtime.presenceStat3Label') }}</div>
            </div>
          </div>
          <p class="text-gray-400 mt-4 text-sm">
            {{ $t('cases.icontei.realtime.presenceDesc') }}
          </p>
        </div>
      </div>
    </section>

    <!-- AI Verification -->
    <section class="py-20 bg-gray-900/30 border-t border-gray-800">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold text-white mb-4">{{ $t('cases.icontei.aiVerification.title') }}</h2>
        <p class="text-gray-400 mb-12 max-w-3xl">
          {{ $t('cases.icontei.aiVerification.description') }}
        </p>
        
        <div class="grid lg:grid-cols-2 gap-8">
          <div class="bg-gray-900/50 rounded-xl border border-gray-800 p-6">
            <h3 class="text-xl font-semibold text-emerald-400 mb-4">{{ $t('cases.icontei.aiVerification.serviceTitle') }}</h3>
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
            <h3 class="text-xl font-semibold text-emerald-400 mb-4">{{ $t('cases.icontei.aiVerification.pipelineTitle') }}</h3>
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
              {{ $t('cases.icontei.aiVerification.pipelineDesc') }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Ranking System -->
    <section class="py-20 border-t border-gray-800">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold text-white mb-4">{{ $t('cases.icontei.rankings.title') }}</h2>
        <p class="text-gray-400 mb-12 max-w-3xl">
          {{ $t('cases.icontei.rankings.description') }}
        </p>
        
        <div class="grid lg:grid-cols-2 gap-8">
          <div class="bg-gray-900/50 rounded-xl border border-gray-800 p-6">
            <h3 class="text-xl font-semibold text-emerald-400 mb-4">{{ $t('cases.icontei.rankings.algorithmTitle') }}</h3>
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
            <h3 class="text-xl font-semibold text-emerald-400 mb-4">{{ $t('cases.icontei.rankings.redisTitle') }}</h3>
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
              {{ $t('cases.icontei.rankings.redisDesc') }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Automation System -->
    <section class="py-20 bg-gray-900/30 border-t border-gray-800">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold text-white mb-4">{{ $t('cases.icontei.automation.title') }}</h2>
        <p class="text-gray-400 mb-12 max-w-3xl">
          {{ $t('cases.icontei.automation.description') }}
        </p>
        
        <div class="grid lg:grid-cols-3 gap-6 mb-12">
          <div class="bg-gray-900/50 rounded-xl border border-gray-800 p-6">
            <div class="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-4">
              <span class="text-2xl">⏰</span>
            </div>
            <h3 class="text-lg font-semibold text-white mb-2">{{ $t('cases.icontei.automation.scheduledTitle') }}</h3>
            <p class="text-gray-400 text-sm">
              {{ $t('cases.icontei.automation.scheduledDesc') }}
            </p>
          </div>
          
          <div class="bg-gray-900/50 rounded-xl border border-gray-800 p-6">
            <div class="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4">
              <span class="text-2xl">🔌</span>
            </div>
            <h3 class="text-lg font-semibold text-white mb-2">{{ $t('cases.icontei.automation.apiTriggerTitle') }}</h3>
            <p class="text-gray-400 text-sm">
              {{ $t('cases.icontei.automation.apiTriggerDesc') }}
            </p>
          </div>
          
          <div class="bg-gray-900/50 rounded-xl border border-gray-800 p-6">
            <div class="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
              <span class="text-2xl">👥</span>
            </div>
            <h3 class="text-lg font-semibold text-white mb-2">{{ $t('cases.icontei.automation.crowdsourcedTitle') }}</h3>
            <p class="text-gray-400 text-sm">
              {{ $t('cases.icontei.automation.crowdsourcedDesc') }}
            </p>
          </div>
        </div>
        
        <div class="bg-gray-900/50 rounded-xl border border-gray-800 p-6">
          <h3 class="text-xl font-semibold text-emerald-400 mb-4">{{ $t('cases.icontei.automation.sportsProviderTitle') }}</h3>
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
            {{ $t('cases.icontei.automation.sportsProviderDesc') }}
          </p>
        </div>
      </div>
    </section>

    <!-- Observability -->
    <section class="py-20 border-t border-gray-800">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold text-white mb-4">{{ $t('cases.icontei.observability.title') }}</h2>
        <p class="text-gray-400 mb-12 max-w-3xl">
          {{ $t('cases.icontei.observability.description') }}
        </p>
        
        <div class="grid md:grid-cols-3 gap-6">
          <div class="bg-gray-900/50 rounded-xl border border-gray-800 p-6">
            <h3 class="text-lg font-semibold text-emerald-400 mb-4">{{ $t('cases.icontei.observability.prometheusTitle') }}</h3>
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
            <h3 class="text-lg font-semibold text-emerald-400 mb-4">{{ $t('cases.icontei.observability.otelTitle') }}</h3>
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
            <h3 class="text-lg font-semibold text-emerald-400 mb-4">{{ $t('cases.icontei.observability.loggingTitle') }}</h3>
            <ul class="space-y-2 text-gray-400 text-sm">
              <li>• structlog for structured logs</li>
              <li>• JSON format in production</li>
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
        <h2 class="text-3xl font-bold text-white mb-4">{{ $t('cases.icontei.testing.title') }}</h2>
        <p class="text-gray-400 mb-12 max-w-3xl">
          {{ $t('cases.icontei.testing.description') }}
        </p>
        
        <div class="grid md:grid-cols-2 gap-8">
          <div class="bg-gray-900/50 rounded-xl border border-gray-800 p-6">
            <h3 class="text-xl font-semibold text-emerald-400 mb-4">{{ $t('cases.icontei.testing.backendTitle') }}</h3>
            <div class="grid grid-cols-2 gap-4 mb-4">
              <div class="text-center p-4 bg-gray-950 rounded-lg">
                <div class="text-3xl font-bold text-emerald-400">{{ $t('cases.icontei.testing.backendTestCount') }}</div>
                <div class="text-gray-400 text-sm">{{ $t('cases.icontei.testing.backendTestLabel') }}</div>
              </div>
              <div class="text-center p-4 bg-gray-950 rounded-lg">
                <div class="text-3xl font-bold text-emerald-400">{{ $t('cases.icontei.testing.backendStatus') }}</div>
                <div class="text-gray-400 text-sm">{{ $t('cases.icontei.testing.backendStatusLabel') }}</div>
              </div>
            </div>
            <ul class="space-y-2 text-gray-400 text-sm">
              <li>• Critical endpoints (health, counters, rankings)</li>
              <li>• Pagination and filter validation</li>
              <li>• Error handling (404, 400, 403)</li>
              <li>• Rate limiting (RATE_LIMIT_ENABLED=false for tests)</li>
              <li>• Admin routes and auth flows</li>
            </ul>
          </div>
          
          <div class="bg-gray-900/50 rounded-xl border border-gray-800 p-6">
            <h3 class="text-xl font-semibold text-emerald-400 mb-4">{{ $t('cases.icontei.testing.frontendTitle') }}</h3>
            <div class="grid grid-cols-2 gap-4 mb-4">
              <div class="text-center p-4 bg-gray-950 rounded-lg">
                <div class="text-3xl font-bold text-emerald-400">{{ $t('cases.icontei.testing.frontendUnitCount') }}</div>
                <div class="text-gray-400 text-sm">{{ $t('cases.icontei.testing.frontendUnitLabel') }}</div>
              </div>
              <div class="text-center p-4 bg-gray-950 rounded-lg">
                <div class="text-3xl font-bold text-emerald-400">{{ $t('cases.icontei.testing.frontendE2E') }}</div>
                <div class="text-gray-400 text-sm">{{ $t('cases.icontei.testing.frontendE2ELabel') }}</div>
              </div>
            </div>
            <ul class="space-y-2 text-gray-400 text-sm">
              <li>• Complete API client (getCounters, getTrending, etc)</li>
              <li>• URL construction with parameters</li>
              <li>• Error handling (APIError)</li>
              <li>• Global fetch mock</li>
              <li>• E2E with Playwright (headless and headed)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Workers -->
    <section class="py-20 border-t border-gray-800">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold text-white mb-4">{{ $t('cases.icontei.workers.title') }}</h2>
        <p class="text-gray-400 mb-12 max-w-3xl">
          {{ $t('cases.icontei.workers.description') }}
        </p>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="bg-gray-900/50 rounded-xl border border-gray-800 p-6">
            <h3 class="text-lg font-semibold text-emerald-400 mb-2">{{ $t('cases.icontei.workers.schedulerTitle') }}</h3>
            <p class="text-gray-400 text-sm">
              {{ $t('cases.icontei.workers.schedulerDesc') }}
            </p>
          </div>
          
          <div class="bg-gray-900/50 rounded-xl border border-gray-800 p-6">
            <h3 class="text-lg font-semibold text-emerald-400 mb-2">{{ $t('cases.icontei.workers.rankingTitle') }}</h3>
            <p class="text-gray-400 text-sm">
              {{ $t('cases.icontei.workers.rankingDesc') }}
            </p>
          </div>
          
          <div class="bg-gray-900/50 rounded-xl border border-gray-800 p-6">
            <h3 class="text-lg font-semibold text-emerald-400 mb-2">{{ $t('cases.icontei.workers.reviewTitle') }}</h3>
            <p class="text-gray-400 text-sm">
              {{ $t('cases.icontei.workers.reviewDesc') }}
            </p>
          </div>
          
          <div class="bg-gray-900/50 rounded-xl border border-gray-800 p-6">
            <h3 class="text-lg font-semibold text-emerald-400 mb-2">{{ $t('cases.icontei.workers.monitoringTitle') }}</h3>
            <p class="text-gray-400 text-sm">
              {{ $t('cases.icontei.workers.monitoringDesc') }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Roadmap -->
    <section class="py-20 bg-gray-900/30 border-t border-gray-800">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold text-white mb-12">{{ $t('cases.icontei.roadmap.title') }}</h2>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="bg-gray-900/50 rounded-xl border border-emerald-500/30 p-6">
            <div class="text-emerald-400 font-semibold mb-2">{{ $t('cases.icontei.roadmap.phase1Title') }}</div>
            <ul class="space-y-1 text-gray-400 text-sm">
              <li>{{ $t('cases.icontei.roadmap.phase1Item1') }}</li>
              <li>{{ $t('cases.icontei.roadmap.phase1Item2') }}</li>
              <li>{{ $t('cases.icontei.roadmap.phase1Item3') }}</li>
              <li>{{ $t('cases.icontei.roadmap.phase1Item4') }}</li>
              <li>{{ $t('cases.icontei.roadmap.phase1Item5') }}</li>
              <li>{{ $t('cases.icontei.roadmap.phase1Item6') }}</li>
            </ul>
          </div>
          
          <div class="bg-gray-900/50 rounded-xl border border-gray-800 p-6">
            <div class="text-purple-400 font-semibold mb-2">{{ $t('cases.icontei.roadmap.phase2Title') }}</div>
            <ul class="space-y-1 text-gray-400 text-sm">
              <li>• {{ $t('cases.icontei.roadmap.phase2Item1') }}</li>
              <li>• {{ $t('cases.icontei.roadmap.phase2Item2') }}</li>
              <li>• {{ $t('cases.icontei.roadmap.phase2Item3') }}</li>
              <li>• {{ $t('cases.icontei.roadmap.phase2Item4') }}</li>
              <li>• {{ $t('cases.icontei.roadmap.phase2Item5') }}</li>
            </ul>
          </div>
          
          <div class="bg-gray-900/50 rounded-xl border border-gray-800 p-6">
            <div class="text-blue-400 font-semibold mb-2">{{ $t('cases.icontei.roadmap.phase3Title') }}</div>
            <ul class="space-y-1 text-gray-400 text-sm">
              <li>• {{ $t('cases.icontei.roadmap.phase3Item1') }}</li>
              <li>• {{ $t('cases.icontei.roadmap.phase3Item2') }}</li>
              <li>• {{ $t('cases.icontei.roadmap.phase3Item3') }}</li>
              <li>• {{ $t('cases.icontei.roadmap.phase3Item4') }}</li>
              <li>• {{ $t('cases.icontei.roadmap.phase3Item5') }}</li>
            </ul>
          </div>
          
          <div class="bg-gray-900/50 rounded-xl border border-gray-800 p-6">
            <div class="text-orange-400 font-semibold mb-2">{{ $t('cases.icontei.roadmap.phase4Title') }}</div>
            <ul class="space-y-1 text-gray-400 text-sm">
              <li>• {{ $t('cases.icontei.roadmap.phase4Item1') }}</li>
              <li>• {{ $t('cases.icontei.roadmap.phase4Item2') }}</li>
              <li>• {{ $t('cases.icontei.roadmap.phase4Item3') }}</li>
              <li>• {{ $t('cases.icontei.roadmap.phase4Item4') }}</li>
              <li>• {{ $t('cases.icontei.roadmap.phase4Item5') }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Métricas -->
    <section class="py-20 border-t border-gray-800">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold text-white mb-12">{{ $t('cases.icontei.stackSection.title') }}</h2>
        
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
    <ProjectCTA
      title-key="cases.icontei.cta.title"
      description-key="cases.icontei.cta.description"
      section-class="py-20 border-t border-gray-800"
      container-class="container mx-auto px-6 text-center"
      title-class="text-3xl font-bold text-white mb-6"
      description-class="text-gray-400 mb-8 max-w-2xl mx-auto"
    >
      <template #actions>
        <LocaleLink 
          to="/" 
          class="inline-flex items-center px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg transition-colors"
        >
          {{ $t('common.viewAllProjects') }}
          <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
          </svg>
        </LocaleLink>
      </template>
    </ProjectCTA>
  </div>
</template>

<script setup>
import { heroGradientBySlug } from '~/data/project-heroes'

const heroConfig = heroGradientBySlug.icontei
const { t } = useI18n()

useHead({
  title: t('cases.icontei.meta.title'),
  meta: [
    { name: 'description', content: t('cases.icontei.meta.description') }
  ]
})
</script>
