<template>
  <div class="min-h-screen bg-gray-950 text-gray-100">
    <!-- Header -->
    <header class="border-b border-gray-800 bg-gray-950/80 backdrop-blur-sm sticky top-0 z-50">
      <div class="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <NuxtLink to="/" class="text-emerald-400 hover:text-emerald-300 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd" />
          </svg>
          {{ $t('cases.automark.header.back') }}
        </NuxtLink>
        <span class="text-gray-500 text-sm">{{ $t('cases.automark.header.projectType') }}</span>
      </div>
    </header>

    <!-- Hero Section -->
    <section class="py-16 px-4 border-b border-gray-800">
      <div class="max-w-4xl mx-auto">
        <div class="flex items-center gap-3 mb-6">
          <span class="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm font-medium">
            {{ $t('cases.automark.hero.tag1') }}
          </span>
          <span class="px-3 py-1 bg-gray-800 text-gray-400 rounded-full text-sm">
            {{ $t('cases.automark.hero.tag2') }}
          </span>
        </div>
        
        <h1 class="text-4xl md:text-5xl font-bold mb-6">
          {{ $t('cases.automark.hero.title') }}
          <span class="text-orange-400">{{ $t('cases.automark.hero.titleHighlight') }}</span>
        </h1>
        
        <p class="text-xl text-gray-400 mb-8 leading-relaxed">
          {{ $t('cases.automark.hero.description') }}
        </p>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-4 text-center">
            <div class="text-2xl font-bold text-orange-400">{{ $t('cases.automark.hero.stat1Value') }}</div>
            <div class="text-sm text-gray-500">{{ $t('cases.automark.hero.stat1Label') }}</div>
          </div>
          <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-4 text-center">
            <div class="text-2xl font-bold text-orange-400">{{ $t('cases.automark.hero.stat2Value') }}</div>
            <div class="text-sm text-gray-500">{{ $t('cases.automark.hero.stat2Label') }}</div>
          </div>
          <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-4 text-center">
            <div class="text-2xl font-bold text-orange-400">{{ $t('cases.automark.hero.stat3Value') }}</div>
            <div class="text-sm text-gray-500">{{ $t('cases.automark.hero.stat3Label') }}</div>
          </div>
          <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-4 text-center">
            <div class="text-2xl font-bold text-orange-400">{{ $t('cases.automark.hero.stat4Value') }}</div>
            <div class="text-sm text-gray-500">{{ $t('cases.automark.hero.stat4Label') }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Navigation -->
    <nav class="sticky top-16 z-40 bg-gray-950/90 backdrop-blur-sm border-b border-gray-800">
      <div class="max-w-4xl mx-auto px-4">
        <div class="flex gap-6 overflow-x-auto py-4 text-sm">
          <a href="#problema" class="text-gray-400 hover:text-orange-400 whitespace-nowrap transition-colors">{{ $t('cases.automark.nav.problem') }}</a>
          <a href="#arquitetura" class="text-gray-400 hover:text-orange-400 whitespace-nowrap transition-colors">{{ $t('cases.automark.nav.architecture') }}</a>
          <a href="#providers" class="text-gray-400 hover:text-orange-400 whitespace-nowrap transition-colors">{{ $t('cases.automark.nav.providers') }}</a>
          <a href="#scoring" class="text-gray-400 hover:text-orange-400 whitespace-nowrap transition-colors">{{ $t('cases.automark.nav.scoring') }}</a>
          <a href="#dedupe" class="text-gray-400 hover:text-orange-400 whitespace-nowrap transition-colors">{{ $t('cases.automark.nav.dedupe') }}</a>
          <a href="#anti-ban" class="text-gray-400 hover:text-orange-400 whitespace-nowrap transition-colors">{{ $t('cases.automark.nav.antiBan') }}</a>
          <a href="#automations" class="text-gray-400 hover:text-orange-400 whitespace-nowrap transition-colors">{{ $t('cases.automark.nav.automations') }}</a>
          <a href="#stack" class="text-gray-400 hover:text-orange-400 whitespace-nowrap transition-colors">{{ $t('cases.automark.nav.stack') }}</a>
        </div>
      </div>
    </nav>

    <!-- Content -->
    <main class="max-w-4xl mx-auto px-4 py-12">
      
      <!-- Problema -->
      <section id="problema" class="mb-16">
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
          <span class="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center text-red-400">!</span>
          {{ $t('cases.automark.problem.title') }}
        </h2>
        
        <div class="prose prose-invert max-w-none">
          <p class="text-gray-300 leading-relaxed mb-4">
            {{ $t('cases.automark.problem.intro') }}
          </p>
          
          <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-6 my-6">
            <ul class="space-y-4 text-gray-400">
              <li class="flex items-start gap-3">
                <span class="text-red-400 mt-1">✗</span>
                <div>
                  <strong class="text-gray-200">{{ $t('cases.automark.problem.issue1Title') }}</strong>
                  <p class="text-sm mt-1">{{ $t('cases.automark.problem.issue1Desc') }}</p>
                </div>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-red-400 mt-1">✗</span>
                <div>
                  <strong class="text-gray-200">{{ $t('cases.automark.problem.issue2Title') }}</strong>
                  <p class="text-sm mt-1">{{ $t('cases.automark.problem.issue2Desc') }}</p>
                </div>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-red-400 mt-1">✗</span>
                <div>
                  <strong class="text-gray-200">{{ $t('cases.automark.problem.issue3Title') }}</strong>
                  <p class="text-sm mt-1">{{ $t('cases.automark.problem.issue3Desc') }}</p>
                </div>
              </li>
            </ul>
          </div>

          <div class="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4 my-6">
            <h4 class="font-semibold text-orange-400 mb-2">{{ $t('cases.automark.problem.objectiveTitle') }}</h4>
            <p class="text-sm text-gray-300">
              {{ $t('cases.automark.problem.objectiveDesc') }}
            </p>
          </div>
        </div>
      </section>

      <!-- Arquitetura -->
      <section id="arquitetura" class="mb-16">
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
          <span class="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center text-orange-400">🏗️</span>
          {{ $t('cases.automark.architecture.title') }}
        </h2>

        <div class="prose prose-invert max-w-none">
          <p class="text-gray-300 leading-relaxed mb-6">
            {{ $t('cases.automark.architecture.intro') }}
          </p>

          <div class="grid md:grid-cols-2 gap-4 my-6">
            <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
              <h4 class="font-semibold text-orange-400 mb-2">{{ $t('cases.automark.architecture.principle1Title') }}</h4>
              <p class="text-sm text-gray-400">{{ $t('cases.automark.architecture.principle1Desc') }}</p>
            </div>
            <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
              <h4 class="font-semibold text-orange-400 mb-2">{{ $t('cases.automark.architecture.principle2Title') }}</h4>
              <p class="text-sm text-gray-400">{{ $t('cases.automark.architecture.principle2Desc') }}</p>
            </div>
            <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
              <h4 class="font-semibold text-orange-400 mb-2">{{ $t('cases.automark.architecture.principle3Title') }}</h4>
              <p class="text-sm text-gray-400">{{ $t('cases.automark.architecture.principle3Desc') }}</p>
            </div>
            <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
              <h4 class="font-semibold text-orange-400 mb-2">{{ $t('cases.automark.architecture.principle4Title') }}</h4>
              <p class="text-sm text-gray-400">{{ $t('cases.automark.architecture.principle4Desc') }}</p>
            </div>
          </div>

          <!-- Entity Diagram -->
          <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-6 my-6">
            <h4 class="text-lg font-semibold text-gray-200 mb-4 text-center">{{ $t('cases.automark.architecture.dataModelTitle') }}</h4>
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

          <h3 class="text-xl font-semibold text-gray-200 mt-8 mb-4">{{ $t('cases.automark.architecture.rolesTitle') }}</h3>

          <div class="grid md:grid-cols-2 gap-4 my-6">
            <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
              <h4 class="font-semibold text-purple-400 mb-2">{{ $t('cases.automark.architecture.superAdminTitle') }}</h4>
              <ul class="text-sm text-gray-400 space-y-1">
                <li>• {{ $t('cases.automark.architecture.superAdminRole1') }}</li>
                <li>• {{ $t('cases.automark.architecture.superAdminRole2') }}</li>
                <li>• {{ $t('cases.automark.architecture.superAdminRole3') }}</li>
                <li>• {{ $t('cases.automark.architecture.superAdminRole4') }}</li>
              </ul>
            </div>
            <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
              <h4 class="font-semibold text-blue-400 mb-2">{{ $t('cases.automark.architecture.tenantAdminTitle') }}</h4>
              <ul class="text-sm text-gray-400 space-y-1">
                <li>• {{ $t('cases.automark.architecture.tenantAdminRole1') }}</li>
                <li>• {{ $t('cases.automark.architecture.tenantAdminRole2') }}</li>
                <li>• {{ $t('cases.automark.architecture.tenantAdminRole3') }}</li>
                <li>• {{ $t('cases.automark.architecture.tenantAdminRole4') }}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- Providers -->
      <section id="providers" class="mb-16">
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
          <span class="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center text-green-400">🔌</span>
          {{ $t('cases.automark.providers.title') }}
        </h2>

        <div class="prose prose-invert max-w-none">
          <p class="text-gray-300 leading-relaxed mb-6">
            {{ $t('cases.automark.providers.intro') }}
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

          <h3 class="text-xl font-semibold text-gray-200 mt-8 mb-4">{{ $t('cases.automark.providers.shopeeTitle') }}</h3>

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
            <h4 class="font-semibold text-green-400 mb-2">{{ $t('cases.automark.providers.dedupeKeyTitle') }}</h4>
            <p class="text-sm text-gray-300">
              {{ $t('cases.automark.providers.dedupeKeyDesc') }}
            </p>
          </div>
        </div>
      </section>

      <!-- Scoring -->
      <section id="scoring" class="mb-16">
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
          <span class="w-8 h-8 bg-yellow-500/20 rounded-lg flex items-center justify-center text-yellow-400">⭐</span>
          {{ $t('cases.automark.scoring.title') }}
        </h2>

        <div class="prose prose-invert max-w-none">
          <p class="text-gray-300 leading-relaxed mb-6">
            {{ $t('cases.automark.scoring.intro') }}
          </p>

          <div class="bg-gray-900 rounded-lg overflow-hidden mb-6">
            <div class="bg-gray-800 px-4 py-2 text-sm text-gray-400 font-mono">{{ $t('cases.automark.scoring.formulaTitle') }}</div>
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

          <h3 class="text-xl font-semibold text-gray-200 mt-8 mb-4">{{ $t('cases.automark.scoring.weightsTitle') }}</h3>

          <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-6 my-6">
            <ul class="space-y-3 text-gray-400">
              <li class="flex items-start gap-3">
                <span class="text-yellow-400 font-bold">{{ $t('cases.automark.scoring.weight1Pct') }}</span>
                <span><strong class="text-gray-200">{{ $t('cases.automark.scoring.weight1Label') }}</strong> {{ $t('cases.automark.scoring.weight1Desc') }}</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-yellow-400 font-bold">{{ $t('cases.automark.scoring.weight2Pct') }}</span>
                <span><strong class="text-gray-200">{{ $t('cases.automark.scoring.weight2Label') }}</strong> {{ $t('cases.automark.scoring.weight2Desc') }}</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-yellow-400 font-bold">{{ $t('cases.automark.scoring.weight3Pct') }}</span>
                <span><strong class="text-gray-200">{{ $t('cases.automark.scoring.weight3Label') }}</strong> {{ $t('cases.automark.scoring.weight3Desc') }}</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-yellow-400 font-bold">{{ $t('cases.automark.scoring.weight4Pct') }}</span>
                <span><strong class="text-gray-200">{{ $t('cases.automark.scoring.weight4Label') }}</strong> {{ $t('cases.automark.scoring.weight4Desc') }}</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Dedupe -->
      <section id="dedupe" class="mb-16">
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
          <span class="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-400">🔄</span>
          {{ $t('cases.automark.dedupe.title') }}
        </h2>

        <div class="prose prose-invert max-w-none">
          <p class="text-gray-300 leading-relaxed mb-6">
            {{ $t('cases.automark.dedupe.intro') }}
          </p>

          <div class="grid md:grid-cols-2 gap-4 my-6">
            <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
              <h4 class="font-semibold text-blue-400 mb-2">{{ $t('cases.automark.dedupe.targetScopeTitle') }}</h4>
              <p class="text-sm text-gray-400">{{ $t('cases.automark.dedupe.targetScopeDesc') }}</p>
            </div>
            <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
              <h4 class="font-semibold text-cyan-400 mb-2">{{ $t('cases.automark.dedupe.channelScopeTitle') }}</h4>
              <p class="text-sm text-gray-400">{{ $t('cases.automark.dedupe.channelScopeDesc') }}</p>
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
            <h4 class="font-semibold text-blue-400 mb-2">{{ $t('cases.automark.dedupe.cleanupTitle') }}</h4>
            <p class="text-sm text-gray-300">
              {{ $t('cases.automark.dedupe.cleanupDesc') }}
            </p>
          </div>
        </div>
      </section>

      <!-- Anti-Ban -->
      <section id="anti-ban" class="mb-16">
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
          <span class="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center text-red-400">🛡️</span>
          {{ $t('cases.automark.antiBan.title') }}
        </h2>

        <div class="prose prose-invert max-w-none">
          <p class="text-gray-300 leading-relaxed mb-6">
            {{ $t('cases.automark.antiBan.intro') }}
          </p>

          <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-6 my-6">
            <ul class="space-y-4 text-gray-400">
              <li class="flex items-start gap-3">
                <span class="text-red-400 mt-1">{{ $t('cases.automark.antiBan.feature1Icon') }}</span>
                <div>
                  <strong class="text-gray-200">{{ $t('cases.automark.antiBan.feature1Title') }}</strong>
                  <p class="text-sm mt-1">{{ $t('cases.automark.antiBan.feature1Desc') }}</p>
                </div>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-red-400 mt-1">{{ $t('cases.automark.antiBan.feature2Icon') }}</span>
                <div>
                  <strong class="text-gray-200">{{ $t('cases.automark.antiBan.feature2Title') }}</strong>
                  <p class="text-sm mt-1">{{ $t('cases.automark.antiBan.feature2Desc') }}</p>
                </div>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-red-400 mt-1">{{ $t('cases.automark.antiBan.feature3Icon') }}</span>
                <div>
                  <strong class="text-gray-200">{{ $t('cases.automark.antiBan.feature3Title') }}</strong>
                  <p class="text-sm mt-1">{{ $t('cases.automark.antiBan.feature3Desc') }}</p>
                </div>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-red-400 mt-1">{{ $t('cases.automark.antiBan.feature4Icon') }}</span>
                <div>
                  <strong class="text-gray-200">{{ $t('cases.automark.antiBan.feature4Title') }}</strong>
                  <p class="text-sm mt-1">{{ $t('cases.automark.antiBan.feature4Desc') }}</p>
                </div>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-red-400 mt-1">{{ $t('cases.automark.antiBan.feature5Icon') }}</span>
                <div>
                  <strong class="text-gray-200">{{ $t('cases.automark.antiBan.feature5Title') }}</strong>
                  <p class="text-sm mt-1">{{ $t('cases.automark.antiBan.feature5Desc') }}</p>
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
          {{ $t('cases.automark.automations.title') }}
        </h2>

        <div class="prose prose-invert max-w-none">
          <p class="text-gray-300 leading-relaxed mb-6">
            {{ $t('cases.automark.automations.intro') }}
          </p>

          <div class="bg-gray-900 rounded-lg overflow-hidden mb-6">
            <div class="bg-gray-800 px-4 py-2 text-sm text-gray-400 font-mono">{{ $t('cases.automark.automations.pipelineTitle') }}</div>
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

          <h3 class="text-xl font-semibold text-gray-200 mt-8 mb-4">{{ $t('cases.automark.automations.typesTitle') }}</h3>

          <div class="grid md:grid-cols-3 gap-4 my-6">
            <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
              <h4 class="font-semibold text-purple-400 mb-2">{{ $t('cases.automark.automations.typeSearchTitle') }}</h4>
              <p class="text-sm text-gray-400">{{ $t('cases.automark.automations.typeSearchDesc') }}</p>
            </div>
            <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
              <h4 class="font-semibold text-blue-400 mb-2">{{ $t('cases.automark.automations.typeFeedTitle') }}</h4>
              <p class="text-sm text-gray-400">{{ $t('cases.automark.automations.typeFeedDesc') }}</p>
            </div>
            <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
              <h4 class="font-semibold text-green-400 mb-2">{{ $t('cases.automark.automations.typeMonitorTitle') }}</h4>
              <p class="text-sm text-gray-400">{{ $t('cases.automark.automations.typeMonitorDesc') }}</p>
            </div>
          </div>

          <h3 class="text-xl font-semibold text-gray-200 mt-8 mb-4">{{ $t('cases.automark.automations.targetTitle') }}</h3>

          <div class="bg-gray-900 rounded-lg overflow-hidden mb-6">
            <div class="bg-gray-800 px-4 py-2 text-sm text-gray-400 font-mono">{{ $t('cases.automark.automations.targetConfigTitle') }}</div>
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
          {{ $t('cases.automark.stack.title') }}
        </h2>

        <div class="prose prose-invert max-w-none">
          <div class="grid md:grid-cols-2 gap-6 my-6">
            <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
              <h4 class="font-semibold text-cyan-400 mb-3">{{ $t('cases.automark.stack.backendTitle') }}</h4>
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
              <h4 class="font-semibold text-cyan-400 mb-3">{{ $t('cases.automark.stack.frontendTitle') }}</h4>
              <div class="flex flex-wrap gap-2">
                <span class="px-2 py-1 bg-gray-800 rounded text-xs">Vue.js 3</span>
                <span class="px-2 py-1 bg-gray-800 rounded text-xs">TypeScript</span>
                <span class="px-2 py-1 bg-gray-800 rounded text-xs">Vite</span>
                <span class="px-2 py-1 bg-gray-800 rounded text-xs">TailwindCSS</span>
              </div>
            </div>
            <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
              <h4 class="font-semibold text-cyan-400 mb-3">{{ $t('cases.automark.stack.integrationsTitle') }}</h4>
              <div class="flex flex-wrap gap-2">
                <span class="px-2 py-1 bg-gray-800 rounded text-xs">Shopee Affiliate API</span>
                <span class="px-2 py-1 bg-gray-800 rounded text-xs">Evolution API</span>
                <span class="px-2 py-1 bg-gray-800 rounded text-xs">WhatsApp</span>
              </div>
            </div>
            <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
              <h4 class="font-semibold text-cyan-400 mb-3">{{ $t('cases.automark.stack.infraTitle') }}</h4>
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
          {{ $t('cases.automark.results.title') }}
        </h2>

        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-gradient-to-br from-orange-500/10 to-yellow-500/10 border border-orange-500/20 rounded-lg p-6">
            <div class="text-3xl font-bold text-orange-400 mb-2">{{ $t('cases.automark.results.stat1Value') }}</div>
            <div class="text-gray-400">{{ $t('cases.automark.results.stat1Label') }}</div>
          </div>
          <div class="bg-gradient-to-br from-orange-500/10 to-yellow-500/10 border border-orange-500/20 rounded-lg p-6">
            <div class="text-3xl font-bold text-orange-400 mb-2">{{ $t('cases.automark.results.stat2Value') }}</div>
            <div class="text-gray-400">{{ $t('cases.automark.results.stat2Label') }}</div>
          </div>
          <div class="bg-gradient-to-br from-orange-500/10 to-yellow-500/10 border border-orange-500/20 rounded-lg p-6">
            <div class="text-3xl font-bold text-orange-400 mb-2">{{ $t('cases.automark.results.stat3Value') }}</div>
            <div class="text-gray-400">{{ $t('cases.automark.results.stat3Label') }}</div>
          </div>
          <div class="bg-gradient-to-br from-orange-500/10 to-yellow-500/10 border border-orange-500/20 rounded-lg p-6">
            <div class="text-3xl font-bold text-orange-400 mb-2">{{ $t('cases.automark.results.stat4Value') }}</div>
            <div class="text-gray-400">{{ $t('cases.automark.results.stat4Label') }}</div>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="border-t border-gray-800 pt-12">
        <div class="text-center">
          <h2 class="text-2xl font-bold mb-4">{{ $t('cases.automark.cta.title') }}</h2>
          <p class="text-gray-400 mb-8">{{ $t('cases.automark.cta.description') }}</p>
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
        <p>{{ $t('cases.automark.footer.caseStudy') }}</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
const { t } = useI18n()

useHead({
  title: t('cases.automark.meta.title'),
  meta: [
    { name: 'description', content: t('cases.automark.meta.description') }
  ]
})
</script>
