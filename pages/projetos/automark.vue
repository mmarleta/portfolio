<template>
  <div class="min-h-screen bg-gray-950 text-gray-100">
    <!-- Header -->
    <header class="border-b border-gray-800 bg-gray-950/80 backdrop-blur-sm sticky top-0 z-50">
      <div class="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <NuxtLink to="/" class="text-emerald-400 hover:text-emerald-300 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd" />
          </svg>
          Voltar
        </NuxtLink>
        <span class="text-gray-500 text-sm">Projeto Pessoal</span>
      </div>
    </header>

    <!-- Hero Section -->
    <section class="py-16 px-4 border-b border-gray-800">
      <div class="max-w-4xl mx-auto">
        <div class="flex items-center gap-3 mb-6">
          <span class="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm font-medium">
            SaaS Platform
          </span>
          <span class="px-3 py-1 bg-gray-800 text-gray-400 rounded-full text-sm">
            Affiliate Marketing
          </span>
        </div>
        
        <h1 class="text-4xl md:text-5xl font-bold mb-6">
          AutoMark
          <span class="text-orange-400"> Platform</span>
        </h1>
        
        <p class="text-xl text-gray-400 mb-8 leading-relaxed">
          Plataforma SaaS multi-tenant de distribuição inteligente de ofertas afiliadas. 
          Conecta marketplaces (Shopee, ML, Amazon) a canais (WhatsApp, Telegram) com 
          automações anti-spam, scoring inteligente e deduplicação.
        </p>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-4 text-center">
            <div class="text-2xl font-bold text-orange-400">Multi</div>
            <div class="text-sm text-gray-500">Marketplace</div>
          </div>
          <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-4 text-center">
            <div class="text-2xl font-bold text-orange-400">Multi</div>
            <div class="text-sm text-gray-500">Channel</div>
          </div>
          <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-4 text-center">
            <div class="text-2xl font-bold text-orange-400">48h</div>
            <div class="text-sm text-gray-500">Dedupe Target</div>
          </div>
          <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-4 text-center">
            <div class="text-2xl font-bold text-orange-400">0</div>
            <div class="text-sm text-gray-500">Spam/Ban</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Navigation -->
    <nav class="sticky top-16 z-40 bg-gray-950/90 backdrop-blur-sm border-b border-gray-800">
      <div class="max-w-4xl mx-auto px-4">
        <div class="flex gap-6 overflow-x-auto py-4 text-sm">
          <a href="#problema" class="text-gray-400 hover:text-orange-400 whitespace-nowrap transition-colors">Problema</a>
          <a href="#arquitetura" class="text-gray-400 hover:text-orange-400 whitespace-nowrap transition-colors">Arquitetura</a>
          <a href="#providers" class="text-gray-400 hover:text-orange-400 whitespace-nowrap transition-colors">Providers</a>
          <a href="#scoring" class="text-gray-400 hover:text-orange-400 whitespace-nowrap transition-colors">Scoring</a>
          <a href="#dedupe" class="text-gray-400 hover:text-orange-400 whitespace-nowrap transition-colors">Dedupe</a>
          <a href="#anti-ban" class="text-gray-400 hover:text-orange-400 whitespace-nowrap transition-colors">Anti-Ban</a>
          <a href="#automations" class="text-gray-400 hover:text-orange-400 whitespace-nowrap transition-colors">Automações</a>
          <a href="#stack" class="text-gray-400 hover:text-orange-400 whitespace-nowrap transition-colors">Stack</a>
        </div>
      </div>
    </nav>

    <!-- Content -->
    <main class="max-w-4xl mx-auto px-4 py-12">
      
      <!-- Problema -->
      <section id="problema" class="mb-16">
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
          <span class="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center text-red-400">!</span>
          O Problema
        </h2>
        
        <div class="prose prose-invert max-w-none">
          <p class="text-gray-300 leading-relaxed mb-4">
            Afiliados enfrentam três problemas críticos na distribuição de ofertas:
          </p>
          
          <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-6 my-6">
            <ul class="space-y-4 text-gray-400">
              <li class="flex items-start gap-3">
                <span class="text-red-400 mt-1">✗</span>
                <div>
                  <strong class="text-gray-200">Distribuição manual não escala:</strong>
                  <p class="text-sm mt-1">Postar links manualmente em grupos gera repetição, spam e ban. Tempo gasto vs conversão não compensa.</p>
                </div>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-red-400 mt-1">✗</span>
                <div>
                  <strong class="text-gray-200">Marketplaces são fragmentados:</strong>
                  <p class="text-sm mt-1">Shopee, Mercado Livre, Amazon têm APIs diferentes, formatos diferentes, regras de afiliado diferentes.</p>
                </div>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-red-400 mt-1">✗</span>
                <div>
                  <strong class="text-gray-200">WhatsApp pune comportamento robótico:</strong>
                  <p class="text-sm mt-1">Sem controle de cadência, dedupe e humanização: shadow ban, bloqueio, queda de engajamento.</p>
                </div>
              </li>
            </ul>
          </div>

          <div class="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4 my-6">
            <h4 class="font-semibold text-orange-400 mb-2">🎯 Objetivo</h4>
            <p class="text-sm text-gray-300">
              Criar uma plataforma que <strong>pareça humana</strong>, poste <strong>o que converte</strong>, 
              no <strong>lugar certo</strong>, na <strong>hora certa</strong>, sem spam.
            </p>
          </div>
        </div>
      </section>

      <!-- Arquitetura -->
      <section id="arquitetura" class="mb-16">
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
          <span class="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center text-orange-400">🏗️</span>
          Arquitetura Multi-Tenant
        </h2>

        <div class="prose prose-invert max-w-none">
          <p class="text-gray-300 leading-relaxed mb-6">
            A arquitetura segue princípios rígidos que permitem evolução sem breaking changes:
          </p>

          <div class="grid md:grid-cols-2 gap-4 my-6">
            <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
              <h4 class="font-semibold text-orange-400 mb-2">Marketplace nunca hardcoded</h4>
              <p class="text-sm text-gray-400">Shopee é o primeiro conector, mas ML, Amazon, AliExpress são plug-and-play.</p>
            </div>
            <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
              <h4 class="font-semibold text-orange-400 mb-2">Canal nunca hardcoded</h4>
              <p class="text-sm text-gray-400">WhatsApp é o primeiro, mas Telegram, Discord, Instagram seguem a mesma interface.</p>
            </div>
            <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
              <h4 class="font-semibold text-orange-400 mb-2">Automação gera Post, não envia</h4>
              <p class="text-sm text-gray-400">Separação de concerns: Automação decide O QUE, Dispatcher decide COMO.</p>
            </div>
            <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
              <h4 class="font-semibold text-orange-400 mb-2">Dedupe obrigatório</h4>
              <p class="text-sm text-gray-400">Nenhum envio acontece sem passar pelo dedupe. Zero spam garantido.</p>
            </div>
          </div>

          <!-- Entity Diagram -->
          <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-6 my-6">
            <h4 class="text-lg font-semibold text-gray-200 mb-4 text-center">Modelo de Dados</h4>
            <div class="font-mono text-xs overflow-x-auto">
              <pre class="text-gray-400 leading-relaxed">
┌─────────────────┐      ┌──────────────────┐      ┌─────────────────┐
│     Tenants     │      │   Marketplaces   │      │    Channels     │
│  (multi-tenant) │      │ (Shopee, ML...)  │      │ (WhatsApp, TG)  │
└────────┬────────┘      └────────┬─────────┘      └────────┬────────┘
         │                        │                         │
         │ 1:N                    │ 1:N                     │ 1:N
         ▼                        ▼                         ▼
┌─────────────────────────────────────────────────────────────────────┐
│                    tenant_marketplace_connections                    │
│                    tenant_channel_connections                        │
│  (credenciais, affiliate_tag, config, status)                       │
└────────┬────────────────────────────────────────────────────────────┘
         │
         │ 1:N
         ▼
┌─────────────────┐      ┌──────────────────┐      ┌─────────────────┐
│   Automations   │─────▶│ AutomationRules  │      │AutomationTargets│
│ (search/ranking)│      │ (keywords, price)│      │ (groups, limits)│
└────────┬────────┘      └──────────────────┘      └────────┬────────┘
         │                                                   │
         │ 1:N                                              │
         ▼                                                   │
┌─────────────────┐      ┌──────────────────┐               │
│     Offers      │─────▶│      Posts       │◀──────────────┘
│ (normalized)    │      │ (content ready)  │
└─────────────────┘      └────────┬─────────┘
                                  │
                                  │ 1:N
                                  ▼
                         ┌──────────────────┐
                         │  PostDispatches  │
                         │ (sent/failed/...)│
                         └──────────────────┘</pre>
            </div>
          </div>

          <h3 class="text-xl font-semibold text-gray-200 mt-8 mb-4">Papéis e Permissões</h3>

          <div class="grid md:grid-cols-2 gap-4 my-6">
            <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
              <h4 class="font-semibold text-purple-400 mb-2">SuperAdmin (Plataforma)</h4>
              <ul class="text-sm text-gray-400 space-y-1">
                <li>• Cria tenants</li>
                <li>• Define quais marketplaces existem</li>
                <li>• Controla feature flags</li>
                <li>• Observa saúde global</li>
              </ul>
            </div>
            <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
              <h4 class="font-semibold text-blue-400 mb-2">Tenant Admin (Cliente)</h4>
              <ul class="text-sm text-gray-400 space-y-1">
                <li>• Conecta canais (WhatsApp, Telegram)</li>
                <li>• Conecta afiliados (Shopee, ML)</li>
                <li>• Cria automações</li>
                <li>• Vê histórico e métricas</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- Providers -->
      <section id="providers" class="mb-16">
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
          <span class="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center text-green-400">🔌</span>
          Provider Pattern
        </h2>

        <div class="prose prose-invert max-w-none">
          <p class="text-gray-300 leading-relaxed mb-6">
            Cada marketplace implementa uma interface comum. O provider não sabe o que é tenant — 
            tudo vem via <code>tenant_connection</code>. Isso permite adicionar novos marketplaces 
            sem tocar no core.
          </p>

          <div class="bg-gray-900 rounded-lg overflow-hidden mb-6">
            <div class="bg-gray-800 px-4 py-2 text-sm text-gray-400 font-mono">providers/marketplace/base.py</div>
            <pre class="p-4 overflow-x-auto text-sm"><code class="text-gray-300">class MarketplaceProvider:
    """Interface obrigatória para todo marketplace."""
    
    def search(
        self, 
        *, 
        rules: SearchRules, 
        limit: int,
        tenant_connection: TenantMarketplaceConnection,
    ) -> list[OfferCandidate]:
        """Busca ofertas no marketplace."""
        ...
    
    def build_affiliate_url(
        self, 
        *, 
        product_url: str, 
        tenant_connection: TenantMarketplaceConnection,
    ) -> str:
        """Gera URL com tag de afiliado do tenant."""
        ...
    
    def validate_connection(
        self, 
        tenant_connection: TenantMarketplaceConnection,
    ) -> ValidationResult:
        """Valida credenciais (app_id, secret, affiliate_tag)."""
        ...</code></pre>
          </div>

          <h3 class="text-xl font-semibold text-gray-200 mt-8 mb-4">Shopee Provider</h3>

          <div class="bg-gray-900 rounded-lg overflow-hidden mb-6">
            <div class="bg-gray-800 px-4 py-2 text-sm text-gray-400 font-mono">providers/marketplace/shopee.py</div>
            <pre class="p-4 overflow-x-auto text-sm"><code class="text-gray-300">class ShopeeProvider(MarketplaceProvider):
    PROVIDER_KEY = "shopee"
    GRAPHQL_ENDPOINT = "https://open-api.affiliate.shopee.com.br/graphql"
    
    def search(self, *, rules, limit, tenant_connection):
        credentials = self._get_credentials(tenant_connection)
        
        # GraphQL query com filtros
        query = self._build_search_query(
            keyword=rules.query,
            category=rules.category,
            min_price=rules.min_price,
            max_price=rules.max_price,
            min_discount=rules.min_discount_percent,
        )
        
        # Assinatura HMAC para autenticação
        signature = self._sign_request(query, credentials)
        
        response = httpx.post(
            self.GRAPHQL_ENDPOINT,
            json={"query": query},
            headers={"Authorization": f"SHA256 {signature}"},
            timeout=20.0,
        )
        
        return self._parse_offers(response.json())
    
    def _build_dedupe_key(self, item) -> str:
        """Identidade única: shopee:{shop_id}:{item_id}"""
        return f"shopee:{item['shopId']}:{item['itemId']}"</code></pre>
          </div>

          <div class="bg-green-500/10 border border-green-500/30 rounded-lg p-4 my-6">
            <h4 class="font-semibold text-green-400 mb-2">✓ Dedupe Key</h4>
            <p class="text-sm text-gray-300">
              O <code>dedupe_key</code> é a identidade real do produto: <code>shopee:123:456</code>. 
              Nunca usar título para dedupe — variações de texto causariam spam.
            </p>
          </div>
        </div>
      </section>

      <!-- Scoring -->
      <section id="scoring" class="mb-16">
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
          <span class="w-8 h-8 bg-yellow-500/20 rounded-lg flex items-center justify-center text-yellow-400">⭐</span>
          Offer Scoring
        </h2>

        <div class="prose prose-invert max-w-none">
          <p class="text-gray-300 leading-relaxed mb-6">
            Nem toda oferta vale a pena postar. O sistema de scoring ranqueia ofertas por 
            potencial de conversão, penalizando produtos suspeitos.
          </p>

          <div class="bg-gray-900 rounded-lg overflow-hidden mb-6">
            <div class="bg-gray-800 px-4 py-2 text-sm text-gray-400 font-mono">Fórmula de Score</div>
            <pre class="p-4 overflow-x-auto text-sm"><code class="text-gray-300"># Score Components (0-10 each)
discount_score = min(discount_percent, 80) / 80 * 10
rating_score = (rating / 5) * 10
commission_score = min(commission_pct, 10) / 10 * 10
sales_score = min(sold_count, 1000) / 1000 * 10

# Weighted Sum
score = (discount_score * 0.40) +
        (rating_score * 0.25) +
        (commission_score * 0.15) +
        (sales_score * 0.20) +
        recency_bonus

# Recency Bonus
< 6h:  +1.5
< 24h: +1.0
< 72h: +0.5
> 72h: +0.0

# Penalties (subtraídas do score)
fake_promo:      discount > 70% AND rating < 4.1 → -2.0
no_reviews:      rating is None or 0 → -1.0
too_cheap:       price < R$5.00 → -0.5
high_commission: commission > 20% → -1.0</code></pre>
          </div>

          <h3 class="text-xl font-semibold text-gray-200 mt-8 mb-4">Por que esses pesos?</h3>

          <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-6 my-6">
            <ul class="space-y-3 text-gray-400">
              <li class="flex items-start gap-3">
                <span class="text-yellow-400 font-bold">40%</span>
                <span><strong class="text-gray-200">Desconto:</strong> Principal driver de clique. Ofertas com desconto alto convertem mais.</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-yellow-400 font-bold">25%</span>
                <span><strong class="text-gray-200">Rating:</strong> Confiança do produto. Rating baixo = devolução = comissão cancelada.</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-yellow-400 font-bold">20%</span>
                <span><strong class="text-gray-200">Vendas:</strong> Prova social. Produto muito vendido tem validação de mercado.</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-yellow-400 font-bold">15%</span>
                <span><strong class="text-gray-200">Comissão:</strong> Retorno para o afiliado. Mas comissão alta demais é red flag.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Dedupe -->
      <section id="dedupe" class="mb-16">
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
          <span class="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-400">🔄</span>
          Deduplicação Anti-Spam
        </h2>

        <div class="prose prose-invert max-w-none">
          <p class="text-gray-300 leading-relaxed mb-6">
            O sistema de dedupe opera em dois escopos: por target (grupo específico) e por channel 
            (todos os grupos do canal). Isso previne spam tanto vertical quanto horizontal.
          </p>

          <div class="grid md:grid-cols-2 gap-4 my-6">
            <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
              <h4 class="font-semibold text-blue-400 mb-2">Target Scope (48h)</h4>
              <p class="text-sm text-gray-400">Mesmo produto não pode ser enviado para o mesmo grupo em 48h. Evita repetição percebida pelos membros.</p>
            </div>
            <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
              <h4 class="font-semibold text-cyan-400 mb-2">Channel Scope (2-5min)</h4>
              <p class="text-sm text-gray-400">Gap mínimo entre qualquer envio para qualquer grupo. Evita burst que parece bot.</p>
            </div>
          </div>

          <div class="bg-gray-900 rounded-lg overflow-hidden mb-6">
            <div class="bg-gray-800 px-4 py-2 text-sm text-gray-400 font-mono">services/dedupe_service.py</div>
            <pre class="p-4 overflow-x-auto text-sm"><code class="text-gray-300">class DedupeService:
    def is_blocked(
        self,
        *,
        tenant_id: UUID,
        channel_id: UUID,
        dedupe_key: str,  # ex: "shopee:123:456"
        target_ref: UUID | None,
        scope: DedupeScope,
    ) -> bool:
        """
        Check if offer is blocked by cooldown.
        
        Returns True if still in cooldown, False if can send.
        """
        record = self.db.query(DedupeRecord).filter(
            DedupeRecord.tenant_id == tenant_id,
            DedupeRecord.dedupe_key == dedupe_key,
            DedupeRecord.scope == scope,
            DedupeRecord.cooldown_until > now,  # Still cooling
        ).first()
        
        return record is not None
    
    def mark_sent(self, *, dedupe_key, scope, post_id):
        """Mark offer as sent, starting cooldown."""
        cooldown = (
            timedelta(hours=48) if scope == DedupeScope.target
            else timedelta(minutes=5)
        )
        
        record = DedupeRecord(
            dedupe_key=dedupe_key,
            cooldown_until=now + cooldown,
            last_post_id=post_id,
        )
        self.db.add(record)</code></pre>
          </div>

          <div class="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 my-6">
            <h4 class="font-semibold text-blue-400 mb-2">✓ Cleanup Automático</h4>
            <p class="text-sm text-gray-300">
              Records expirados são deletados periodicamente via <code>cleanup_expired()</code>. 
              A tabela não cresce indefinidamente.
            </p>
          </div>
        </div>
      </section>

      <!-- Anti-Ban -->
      <section id="anti-ban" class="mb-16">
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
          <span class="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center text-red-400">🛡️</span>
          Anti-Ban (WhatsApp)
        </h2>

        <div class="prose prose-invert max-w-none">
          <p class="text-gray-300 leading-relaxed mb-6">
            WhatsApp detecta bots por padrões de envio. O sistema implementa múltiplas 
            camadas de humanização para evitar banimento:
          </p>

          <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-6 my-6">
            <ul class="space-y-4 text-gray-400">
              <li class="flex items-start gap-3">
                <span class="text-red-400 mt-1">🖊️</span>
                <div>
                  <strong class="text-gray-200">Typing Indicator:</strong>
                  <p class="text-sm mt-1">Antes de enviar, simula "digitando..." por 2-5 segundos (Evolution API).</p>
                </div>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-red-400 mt-1">🎲</span>
                <div>
                  <strong class="text-gray-200">Jitter Humano:</strong>
                  <p class="text-sm mt-1">Delay aleatório entre mensagens. Nunca intervalos exatos.</p>
                </div>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-red-400 mt-1">🚦</span>
                <div>
                  <strong class="text-gray-200">Rate Limit por Conta:</strong>
                  <p class="text-sm mt-1">Semáforo Redis limita msgs/minuto por número. Múltiplas contas = mais throughput.</p>
                </div>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-red-400 mt-1">⚡</span>
                <div>
                  <strong class="text-gray-200">Circuit Breaker:</strong>
                  <p class="text-sm mt-1">Erro 429 ou 503 → pausa automática de 30min para aquela conta.</p>
                </div>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-red-400 mt-1">🌙</span>
                <div>
                  <strong class="text-gray-200">Quiet Hours:</strong>
                  <p class="text-sm mt-1">Configurável por target: não envia entre 23h-8h (ou custom).</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Automations -->
      <section id="automations" class="mb-16">
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
          <span class="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center text-purple-400">⚙️</span>
          Sistema de Automações
        </h2>

        <div class="prose prose-invert max-w-none">
          <p class="text-gray-300 leading-relaxed mb-6">
            Automações são o coração do sistema. Definem O QUE buscar, ONDE enviar, e QUANDO executar.
          </p>

          <div class="bg-gray-900 rounded-lg overflow-hidden mb-6">
            <div class="bg-gray-800 px-4 py-2 text-sm text-gray-400 font-mono">Automation Pipeline</div>
            <pre class="p-4 overflow-x-auto text-sm"><code class="text-gray-300"># Pipeline de Execução (workers/tasks.py)

1. tick_automations()
   └─ Busca automations habilitadas no intervalo

2. Para cada automation:
   ├─ Valida janela de horário (start_time/end_time)
   ├─ Carrega conexões ativas do tenant (marketplace + channel)
   │
   ├─ Busca ofertas via provider.search()
   │   └─ Aplica rules (keywords, price, discount)
   │
   ├─ Normaliza ofertas + gera dedupe_key
   │
   ├─ Aplica scoring + ranking
   │   └─ priority_mode: max_discount | min_price | score
   │
   └─ Para cada target:
       ├─ Check dedupe (target scope)
       ├─ Check rate limit (channel scope)
       ├─ Check quiet hours
       │
       ├─ typing() → delay → send()
       │
       ├─ Cria Post + PostDispatch
       └─ Marca dedupe</code></pre>
          </div>

          <h3 class="text-xl font-semibold text-gray-200 mt-8 mb-4">Tipos de Automação</h3>

          <div class="grid md:grid-cols-3 gap-4 my-6">
            <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
              <h4 class="font-semibold text-purple-400 mb-2">search</h4>
              <p class="text-sm text-gray-400">Busca ativa no marketplace. Executa a cada intervalo configurado.</p>
            </div>
            <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
              <h4 class="font-semibold text-blue-400 mb-2">feed</h4>
              <p class="text-sm text-gray-400">Usa ofertas já no banco (ingestão externa). Aplica ranking e distribui.</p>
            </div>
            <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
              <h4 class="font-semibold text-green-400 mb-2">monitor</h4>
              <p class="text-sm text-gray-400">Monitora preço de produtos específicos. Alerta quando desconto atinge threshold.</p>
            </div>
          </div>

          <h3 class="text-xl font-semibold text-gray-200 mt-8 mb-4">AutomationTarget (Limites)</h3>

          <div class="bg-gray-900 rounded-lg overflow-hidden mb-6">
            <div class="bg-gray-800 px-4 py-2 text-sm text-gray-400 font-mono">Configuração por Grupo</div>
            <pre class="p-4 overflow-x-auto text-sm"><code class="text-gray-300">automation_targets:
  - target_ref: "uuid-do-grupo"
    max_posts_per_day: 10      # Máximo de posts/dia neste grupo
    min_gap_minutes: 30        # Mínimo entre posts (além do dedupe)
    quiet_hours_start: "23:00"
    quiet_hours_end: "08:00"</code></pre>
          </div>
        </div>
      </section>

      <!-- Stack -->
      <section id="stack" class="mb-16">
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
          <span class="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center text-cyan-400">🛠️</span>
          Stack Técnico
        </h2>

        <div class="prose prose-invert max-w-none">
          <div class="grid md:grid-cols-2 gap-6 my-6">
            <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
              <h4 class="font-semibold text-cyan-400 mb-3">Backend</h4>
              <div class="flex flex-wrap gap-2">
                <span class="px-2 py-1 bg-gray-800 rounded text-xs">Python 3.12</span>
                <span class="px-2 py-1 bg-gray-800 rounded text-xs">FastAPI</span>
                <span class="px-2 py-1 bg-gray-800 rounded text-xs">SQLAlchemy 2.0</span>
                <span class="px-2 py-1 bg-gray-800 rounded text-xs">Celery</span>
                <span class="px-2 py-1 bg-gray-800 rounded text-xs">PostgreSQL</span>
                <span class="px-2 py-1 bg-gray-800 rounded text-xs">Redis</span>
                <span class="px-2 py-1 bg-gray-800 rounded text-xs">Alembic</span>
                <span class="px-2 py-1 bg-gray-800 rounded text-xs">structlog</span>
              </div>
            </div>
            <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
              <h4 class="font-semibold text-cyan-400 mb-3">Frontend</h4>
              <div class="flex flex-wrap gap-2">
                <span class="px-2 py-1 bg-gray-800 rounded text-xs">Vue.js 3</span>
                <span class="px-2 py-1 bg-gray-800 rounded text-xs">TypeScript</span>
                <span class="px-2 py-1 bg-gray-800 rounded text-xs">Vite</span>
                <span class="px-2 py-1 bg-gray-800 rounded text-xs">TailwindCSS</span>
              </div>
            </div>
            <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
              <h4 class="font-semibold text-cyan-400 mb-3">Integrações</h4>
              <div class="flex flex-wrap gap-2">
                <span class="px-2 py-1 bg-gray-800 rounded text-xs">Shopee Affiliate API</span>
                <span class="px-2 py-1 bg-gray-800 rounded text-xs">Evolution API</span>
                <span class="px-2 py-1 bg-gray-800 rounded text-xs">WhatsApp</span>
              </div>
            </div>
            <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
              <h4 class="font-semibold text-cyan-400 mb-3">Infra</h4>
              <div class="flex flex-wrap gap-2">
                <span class="px-2 py-1 bg-gray-800 rounded text-xs">Docker</span>
                <span class="px-2 py-1 bg-gray-800 rounded text-xs">Docker Compose</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Results -->
      <section class="mb-16">
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
          <span class="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center text-emerald-400">📊</span>
          Resultados
        </h2>

        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-gradient-to-br from-orange-500/10 to-yellow-500/10 border border-orange-500/20 rounded-lg p-6">
            <div class="text-3xl font-bold text-orange-400 mb-2">0</div>
            <div class="text-gray-400">Bans de conta WhatsApp</div>
          </div>
          <div class="bg-gradient-to-br from-orange-500/10 to-yellow-500/10 border border-orange-500/20 rounded-lg p-6">
            <div class="text-3xl font-bold text-orange-400 mb-2">100%</div>
            <div class="text-gray-400">Dedupe coverage (zero spam)</div>
          </div>
          <div class="bg-gradient-to-br from-orange-500/10 to-yellow-500/10 border border-orange-500/20 rounded-lg p-6">
            <div class="text-3xl font-bold text-orange-400 mb-2">Plug</div>
            <div class="text-gray-400">& Play para novos marketplaces</div>
          </div>
          <div class="bg-gradient-to-br from-orange-500/10 to-yellow-500/10 border border-orange-500/20 rounded-lg p-6">
            <div class="text-3xl font-bold text-orange-400 mb-2">Multi</div>
            <div class="text-gray-400">Tenant desde o dia 1</div>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="border-t border-gray-800 pt-12">
        <div class="text-center">
          <h2 class="text-2xl font-bold mb-4">Explore Outros Projetos</h2>
          <p class="text-gray-400 mb-8">Veja outros sistemas que construí</p>
          <div class="flex flex-wrap justify-center gap-4">
            <NuxtLink to="/projetos/feed-rss" class="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-gray-200 rounded-lg transition-colors">
              Feed-RSS Monitor →
            </NuxtLink>
            <NuxtLink to="/projetos/ai-engine" class="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-gray-200 rounded-lg transition-colors">
              AI Conversation Engine →
            </NuxtLink>
            <NuxtLink to="/projetos/whatsapp-integration" class="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-gray-200 rounded-lg transition-colors">
              WhatsApp Integration →
            </NuxtLink>
          </div>
        </div>
      </section>

    </main>

    <!-- Footer -->
    <footer class="border-t border-gray-800 py-8 mt-12">
      <div class="max-w-4xl mx-auto px-4 text-center text-gray-500 text-sm">
        <p>Case Study: AutoMark Platform — Affiliate Marketing Automation</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
useHead({
  title: 'AutoMark - Affiliate Marketing Platform | Marcelo Marleta',
  meta: [
    { name: 'description', content: 'Case study: Plataforma SaaS multi-tenant de distribuição inteligente de ofertas afiliadas. Shopee, WhatsApp, anti-spam, scoring inteligente.' }
  ]
})
</script>
