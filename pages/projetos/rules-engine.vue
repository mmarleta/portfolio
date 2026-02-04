<template>
  <div class="min-h-screen bg-gray-950 text-gray-100">
    <!-- Hero Section -->
    <section class="relative py-20 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-emerald-950/50 via-gray-950 to-gray-950"></div>
      <div class="absolute top-20 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl"></div>
      <div class="absolute bottom-10 right-10 w-96 h-96 bg-emerald-600/5 rounded-full blur-3xl"></div>
      
      <div class="container mx-auto px-6 relative z-10">
        <NuxtLink to="/" class="inline-flex items-center text-emerald-400 hover:text-emerald-300 mb-8 transition-colors">
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
          {{ $t('nav.backToPortfolio') }}
        </NuxtLink>
        
        <div class="flex items-center gap-4 mb-6">
          <span class="px-4 py-2 bg-emerald-500/20 text-emerald-400 rounded-full text-sm font-medium border border-emerald-500/30">
            {{ $t('cases.rules.badge') }}
          </span>
          <span class="px-4 py-2 bg-gray-800 text-gray-300 rounded-full text-sm">
            {{ $t('cases.rules.badgeSecondary') }}
          </span>
        </div>
        
        <h1 class="text-5xl md:text-6xl font-bold mb-6">
          <span class="bg-gradient-to-r from-emerald-400 via-emerald-300 to-teal-400 bg-clip-text text-transparent">
            {{ $t('cases.rules.title') }}
          </span>
        </h1>
        
        <p class="text-xl text-gray-400 max-w-3xl mb-8">
          {{ $t('cases.rules.description') }}
        </p>

        <div class="flex flex-wrap gap-3">
          <span class="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300">{{ $t('cases.rules.tags.pythonLambda') }}</span>
          <span class="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300">{{ $t('cases.rules.tags.subMillisecond') }}</span>
          <span class="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300">{{ $t('cases.rules.tags.multiTenant') }}</span>
          <span class="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300">{{ $t('cases.rules.tags.eventDriven') }}</span>
          <span class="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300">{{ $t('cases.rules.tags.typeSafe') }}</span>
          <span class="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300">{{ $t('cases.rules.tags.cacheCoherence') }}</span>
        </div>
      </div>
    </section>

    <!-- O Problema do JSONLogic -->
    <section class="py-16 border-t border-gray-800">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold mb-8 text-red-400">{{ $t('cases.rules.problem.title') }}</h2>
        
        <div class="grid md:grid-cols-2 gap-8 mb-12">
          <!-- JSONLogic Problems -->
          <div class="bg-red-950/20 rounded-xl p-6 border border-red-900/30">
            <h3 class="text-xl font-bold mb-4 text-red-400">❌ {{ $t('cases.rules.problem.jsonLogicTrap') }}</h3>
            
            <div class="bg-gray-900 rounded-lg p-4 mb-4">
              <pre class="text-sm text-gray-300 overflow-x-auto"><code>{{ $t('cases.rules.problem.simpleRule') }}
{
  "and": [
    {"&lt;": [{"var": "last_visit_days"}, 180]},
    {"==": [{"var": "has_insurance"}, true]},
    {"or": [
      {"&gt;": [{"var": "pending_treatments"}, 0]},
      {"in": [{"var": "vertical"}, ["dental", "medical"]]}
    ]}
  ]
}</code></pre>
            </div>
            
            <ul class="space-y-3 text-gray-400">
              <li class="flex items-start gap-2">
                <span class="text-red-400 mt-1">⚠️</span>
                <span><strong class="text-red-300">{{ $t('cases.rules.problem.issues.interpreted') }}</strong> - {{ $t('cases.rules.problem.issues.interpretedDesc') }}</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-red-400 mt-1">⚠️</span>
                <span><strong class="text-red-300">{{ $t('cases.rules.problem.issues.limitedOps') }}</strong> - {{ $t('cases.rules.problem.issues.limitedOpsDesc') }}</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-red-400 mt-1">⚠️</span>
                <span><strong class="text-red-300">{{ $t('cases.rules.problem.issues.noTypeCheck') }}</strong> - {{ $t('cases.rules.problem.issues.noTypeCheckDesc') }}</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-red-400 mt-1">⚠️</span>
                <span><strong class="text-red-300">{{ $t('cases.rules.problem.issues.debugImpossible') }}</strong> - {{ $t('cases.rules.problem.issues.debugImpossibleDesc') }}</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-red-400 mt-1">⚠️</span>
                <span><strong class="text-red-300">{{ $t('cases.rules.problem.issues.slowPerf') }}</strong> {{ $t('cases.rules.problem.issues.slowPerfDesc') }}</span>
              </li>
            </ul>
          </div>

          <!-- Python Native -->
          <div class="bg-emerald-950/20 rounded-xl p-6 border border-emerald-900/30">
            <h3 class="text-xl font-bold mb-4 text-emerald-400">✅ {{ $t('cases.rules.problem.pythonNativeSolution') }}</h3>
            
            <div class="bg-gray-900 rounded-lg p-4 mb-4">
              <pre class="text-sm text-gray-300 overflow-x-auto"><code>{{ $t('cases.rules.problem.sameRule') }}
lambda facts: (
    facts.get('last_visit_days', 999) &lt; 180 and
    facts.get('has_insurance') is True and
    (facts.get('pending_treatments', 0) &gt; 0 or
     facts.get('vertical') in ('dental', 'medical'))
)</code></pre>
            </div>
            
            <ul class="space-y-3 text-gray-400">
              <li class="flex items-start gap-2">
                <span class="text-emerald-400 mt-1">✓</span>
                <span><strong class="text-emerald-300">{{ $t('cases.rules.problem.benefits.compiledOnce') }}</strong> - {{ $t('cases.rules.problem.benefits.compiledOnceDesc') }}</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-emerald-400 mt-1">✓</span>
                <span><strong class="text-emerald-300">{{ $t('cases.rules.problem.benefits.fullPower') }}</strong> - {{ $t('cases.rules.problem.benefits.fullPowerDesc') }}</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-emerald-400 mt-1">✓</span>
                <span><strong class="text-emerald-300">{{ $t('cases.rules.problem.benefits.typeHints') }}</strong> - {{ $t('cases.rules.problem.benefits.typeHintsDesc') }}</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-emerald-400 mt-1">✓</span>
                <span><strong class="text-emerald-300">{{ $t('cases.rules.problem.benefits.normalDebug') }}</strong> - {{ $t('cases.rules.problem.benefits.normalDebugDesc') }}</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-emerald-400 mt-1">✓</span>
                <span><strong class="text-emerald-300">{{ $t('cases.rules.problem.benefits.fastPerf') }}</strong> {{ $t('cases.rules.problem.benefits.fastPerfDesc') }}</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Benchmark -->
        <div class="bg-gray-900/50 rounded-xl p-8 border border-gray-800">
          <h3 class="text-xl font-bold mb-6 text-emerald-400">📊 {{ $t('cases.rules.problem.benchmark.title') }}</h3>
          
          <div class="grid md:grid-cols-4 gap-6">
            <div class="text-center p-4 bg-gray-800/50 rounded-lg">
              <div class="text-4xl font-bold text-red-400 mb-2">~150ms</div>
              <div class="text-sm text-gray-400">{{ $t('cases.rules.problem.benchmark.jsonLogic') }}</div>
            </div>
            <div class="text-center p-4 bg-gray-800/50 rounded-lg">
              <div class="text-4xl font-bold text-emerald-400 mb-2">&lt;0.5ms</div>
              <div class="text-sm text-gray-400">{{ $t('cases.rules.problem.benchmark.pythonNative') }}</div>
            </div>
            <div class="text-center p-4 bg-gray-800/50 rounded-lg">
              <div class="text-4xl font-bold text-emerald-400 mb-2">300x</div>
              <div class="text-sm text-gray-400">{{ $t('cases.rules.problem.benchmark.fasterCold') }}</div>
            </div>
            <div class="text-center p-4 bg-gray-800/50 rounded-lg">
              <div class="text-4xl font-bold text-emerald-400 mb-2">1000x</div>
              <div class="text-sm text-gray-400">{{ $t('cases.rules.problem.benchmark.fasterCached') }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Arquitetura do Rules Engine -->
    <section class="py-16 border-t border-gray-800">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold mb-8">{{ $t('cases.rules.architecture.title') }}</h2>
        
        <div class="bg-gray-900/50 rounded-xl p-8 border border-gray-800 mb-8">
          <pre class="text-sm text-emerald-400 overflow-x-auto"><code>┌─────────────────────────────────────────────────────────────────────────┐
│                        {{ $t('cases.rules.architecture.requestFlow') }}                      │
└─────────────────────────────────────────────────────────────────────────┘

   {{ $t('cases.rules.architecture.clientRequest') }}
         │
         ▼
┌─────────────────┐     ┌──────────────────────┐     ┌─────────────────┐
│    Backend      │────▶│  {{ $t('cases.rules.architecture.rulesCoordinator') }}   │────▶│  {{ $t('cases.rules.architecture.rulesEngine') }}   │
│  Orchestrator   │     │  {{ $t('cases.rules.architecture.cacheFallback') }}  │     │   {{ $t('cases.rules.architecture.port') }}   │
└─────────────────┘     └──────────────────────┘     └─────────────────┘
                               │                              │
                               │                              │
                        ┌──────▼──────┐                ┌──────▼──────┐
                        │ {{ $t('cases.rules.architecture.redisCache') }} │                │ {{ $t('cases.rules.architecture.postgresql') }}  │
                        │  {{ $t('cases.rules.architecture.ttl15min') }}   │                │  {{ $t('cases.rules.architecture.rulesDb') }} │
                        └─────────────┘                └─────────────┘

┌─────────────────────────────────────────────────────────────────────────┐
│                    {{ $t('cases.rules.architecture.fallbackHierarchy') }}                      │
├─────────────────────────────────────────────────────────────────────────┤
│  {{ $t('cases.rules.architecture.primary') }}                           │
│  {{ $t('cases.rules.architecture.secondary') }}                          │
│  {{ $t('cases.rules.architecture.basic') }}                  │
└─────────────────────────────────────────────────────────────────────────┘</code></pre>
        </div>

        <!-- Fluxo detalhado -->
        <div class="grid md:grid-cols-3 gap-6">
          <div class="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
            <div class="text-3xl mb-4">🎯</div>
            <h3 class="text-lg font-bold mb-3 text-emerald-400">{{ $t('cases.rules.architecture.components.rulesEngine.title') }}</h3>
            <p class="text-gray-400 text-sm mb-4">
              {{ $t('cases.rules.architecture.components.rulesEngine.desc') }}
            </p>
            <ul class="text-sm text-gray-400 space-y-2">
              <li v-for="(item, index) in $tm('cases.rules.architecture.components.rulesEngine.items')" :key="index">• {{ item }}</li>
            </ul>
          </div>

          <div class="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
            <div class="text-3xl mb-4">🔄</div>
            <h3 class="text-lg font-bold mb-3 text-emerald-400">{{ $t('cases.rules.architecture.components.rulesCoordinator.title') }}</h3>
            <p class="text-gray-400 text-sm mb-4">
              {{ $t('cases.rules.architecture.components.rulesCoordinator.desc') }}
            </p>
            <ul class="text-sm text-gray-400 space-y-2">
              <li v-for="(item, index) in $tm('cases.rules.architecture.components.rulesCoordinator.items')" :key="index">• {{ item }}</li>
            </ul>
          </div>

          <div class="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
            <div class="text-3xl mb-4">🧠</div>
            <h3 class="text-lg font-bold mb-3 text-emerald-400">{{ $t('cases.rules.architecture.components.contextEnrichment.title') }}</h3>
            <p class="text-gray-400 text-sm mb-4">
              {{ $t('cases.rules.architecture.components.contextEnrichment.desc') }}
            </p>
            <ul class="text-sm text-gray-400 space-y-2">
              <li v-for="(item, index) in $tm('cases.rules.architecture.components.contextEnrichment.items')" :key="index">• {{ item }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Runtime Rule Creation -->
    <section class="py-16 border-t border-gray-800 bg-gray-900/30">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold mb-8">{{ $t('cases.rules.runtimeCreation.title') }}</h2>
        
        <p class="text-gray-400 mb-8 max-w-3xl">
          {{ $t('cases.rules.runtimeCreation.intro') }}
        </p>

        <div class="grid md:grid-cols-2 gap-8 mb-12">
          <!-- API para criar regras -->
          <div class="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
            <h3 class="text-lg font-bold mb-4 text-emerald-400">{{ $t('cases.rules.runtimeCreation.apiTitle') }}</h3>
            <div class="bg-gray-800 rounded-lg p-4">
              <pre class="text-sm text-gray-300 overflow-x-auto"><code>POST /api/rules/
{
  "name": "Emergency Dental Protocol",
  "vertical": "dental",
  "event_types": ["message_received"],
  "condition_code": """
    lambda facts: (
      any(word in facts.get('message_content', '').lower()
          for word in ['pain', 'blood', 'swollen']) and
      facts.get('customer_urgency_level') == 'high'
    )
  """,
  "actions": [{
    "type": "emergency_protocol",
    "params": {
      "escalate_to_human": true,
      "priority": "urgent",
      "notification_channel": "whatsapp"
    }
  }],
  "priority": 1,
  "timeout_seconds": 30
}</code></pre>
            </div>
          </div>

          <!-- Exemplos por vertical -->
          <div class="space-y-4">
            <div class="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
              <h4 class="font-bold text-emerald-400 mb-2">{{ $t('cases.rules.runtimeCreation.examples.dental.title') }}</h4>
              <p class="text-sm text-gray-400">
                {{ $t('cases.rules.runtimeCreation.examples.dental.desc') }}
              </p>
            </div>

            <div class="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
              <h4 class="font-bold text-emerald-400 mb-2">{{ $t('cases.rules.runtimeCreation.examples.ecommerce.title') }}</h4>
              <p class="text-sm text-gray-400">
                {{ $t('cases.rules.runtimeCreation.examples.ecommerce.desc') }}
              </p>
            </div>

            <div class="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
              <h4 class="font-bold text-emerald-400 mb-2">{{ $t('cases.rules.runtimeCreation.examples.legal.title') }}</h4>
              <p class="text-sm text-gray-400">
                {{ $t('cases.rules.runtimeCreation.examples.legal.desc') }}
              </p>
            </div>
          </div>
        </div>

        <!-- Isolamento Multi-tenant -->
        <div class="bg-emerald-950/20 rounded-xl p-8 border border-emerald-900/30">
          <h3 class="text-xl font-bold mb-6 text-emerald-400">{{ $t('cases.rules.runtimeCreation.multiTenant.title') }}</h3>
          
          <div class="grid md:grid-cols-3 gap-6">
            <div class="text-center">
              <div class="text-4xl mb-3">🏥</div>
              <div class="font-bold text-white mb-2">{{ $t('cases.rules.runtimeCreation.multiTenant.clinic.name') }}</div>
              <div class="text-sm text-gray-400">
                {{ $t('cases.rules.runtimeCreation.multiTenant.clinic.rules') }}<br>
                {{ $t('cases.rules.runtimeCreation.multiTenant.clinic.vertical') }}<br>
                {{ $t('cases.rules.runtimeCreation.multiTenant.clinic.focus') }}
              </div>
            </div>
            <div class="text-center">
              <div class="text-4xl mb-3">🛍️</div>
              <div class="font-bold text-white mb-2">{{ $t('cases.rules.runtimeCreation.multiTenant.store.name') }}</div>
              <div class="text-sm text-gray-400">
                {{ $t('cases.rules.runtimeCreation.multiTenant.store.rules') }}<br>
                {{ $t('cases.rules.runtimeCreation.multiTenant.store.vertical') }}<br>
                {{ $t('cases.rules.runtimeCreation.multiTenant.store.focus') }}
              </div>
            </div>
            <div class="text-center">
              <div class="text-4xl mb-3">⚖️</div>
              <div class="font-bold text-white mb-2">{{ $t('cases.rules.runtimeCreation.multiTenant.law.name') }}</div>
              <div class="text-sm text-gray-400">
                {{ $t('cases.rules.runtimeCreation.multiTenant.law.rules') }}<br>
                {{ $t('cases.rules.runtimeCreation.multiTenant.law.vertical') }}<br>
                {{ $t('cases.rules.runtimeCreation.multiTenant.law.focus') }}
              </div>
            </div>
          </div>
          
          <p class="text-gray-400 text-sm mt-6 text-center">
            {{ $t('cases.rules.runtimeCreation.multiTenant.footer') }}
          </p>
        </div>
      </div>
    </section>

    <!-- Código Real -->
    <section class="py-16 border-t border-gray-800">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold mb-8">{{ $t('cases.rules.deepDive.title') }}</h2>
        
        <!-- Rules Coordinator -->
        <div class="mb-12">
          <h3 class="text-xl font-bold mb-4 text-emerald-400">{{ $t('cases.rules.deepDive.coordinator.title') }}</h3>
          <div class="bg-gray-900 rounded-xl p-6 border border-gray-800">
            <pre class="text-sm text-gray-300 overflow-x-auto"><code>class RulesCoordinator:
    """
    {{ $t('cases.rules.deepDive.coordinator.docstring') }}
    
    Responsibilities:
    {{ $t('cases.rules.deepDive.coordinator.responsibilities[0]') }}
    {{ $t('cases.rules.deepDive.coordinator.responsibilities[1]') }}
    {{ $t('cases.rules.deepDive.coordinator.responsibilities[2]') }}
    {{ $t('cases.rules.deepDive.coordinator.responsibilities[3]') }}
    {{ $t('cases.rules.deepDive.coordinator.responsibilities[4]') }}
    """

    async def evaluate_rules_for_conversation(
        self,
        tenant_id: str,
        conversation_data: dict,
        message_content: str,
        memory_context: dict | None = None,
    ) -> dict:
        
        {{ $t('cases.rules.deepDive.coordinator.comment1') }}
        enriched_facts = await self._enrich_with_memory_context(
            tenant_id, conversation_data, message_content, memory_context
        )

        {{ $t('cases.rules.deepDive.coordinator.comment2') }}
        try:
            async with circuit_breaker_context("rules_engine_evaluate"):
                response = await self.rules_client.post(
                    "/api/evaluation/evaluate",
                    json={
                        "tenant_id": tenant_id,
                        "event_type": "message_received",
                        "facts": enriched_facts,
                    }
                )
                
                if response.status_code == 200:
                    result = response.json()
                    {{ $t('cases.rules.deepDive.coordinator.comment3') }}
                    await self._cache_evaluation_result(tenant_id, enriched_facts, result)
                    return result

        except Exception as e:
            logger.warning(f"Rules Engine failed: {e}")

        {{ $t('cases.rules.deepDive.coordinator.comment4') }}
        cache_result = await self._evaluate_via_redis_cache(tenant_id, enriched_facts)
        if cache_result:
            return cache_result

        {{ $t('cases.rules.deepDive.coordinator.comment5') }}
        return await self._evaluate_basic_fallback(tenant_id, enriched_facts)</code></pre>
          </div>
        </div>

        <!-- Memory Context Enrichment -->
        <div class="mb-12">
          <h3 class="text-xl font-bold mb-4 text-emerald-400">{{ $t('cases.rules.deepDive.enrichment.title') }}</h3>
          <div class="bg-gray-900 rounded-xl p-6 border border-gray-800">
            <pre class="text-sm text-gray-300 overflow-x-auto"><code>def _extract_intelligent_patterns(self, memory_context: dict) -> dict:
    """
    {{ $t('cases.rules.deepDive.enrichment.docstring') }}
    """
    patterns = {
        "interaction_frequency": "new",      # new | regular | frequent
        "customer_urgency_level": "normal",  # normal | high
        "preferred_communication_style": "formal",
        "likely_appointment_need": False,
        "pain_indicators": False,
        "satisfaction_level": "neutral",
    }

    context_content = memory_context.get("context", "").lower()
    memory_items = memory_context.get("memory_items", [])

    {{ $t('cases.rules.deepDive.enrichment.comments.detectsUrgency') }}
    if any(word in context_content for word in ["pain", "urgent", "emergency"]):
        patterns["customer_urgency_level"] = "high"
        patterns["pain_indicators"] = True

    {{ $t('cases.rules.deepDive.enrichment.comments.detectsScheduling') }}
    if any(word in context_content for word in ["schedule", "appointment", "book"]):
        patterns["likely_appointment_need"] = True

    {{ $t('cases.rules.deepDive.enrichment.comments.analyzesFrequency') }}
    if len(memory_items) > 5:
        patterns["interaction_frequency"] = "frequent"
    elif len(memory_items) > 2:
        patterns["interaction_frequency"] = "regular"

    return patterns

{{ $t('cases.rules.deepDive.enrichment.comments.result') }}
# facts = {
#     "message_content": "I have tooth pain",
#     "customer_urgency_level": "high",
#     "pain_indicators": True,
#     "interaction_frequency": "regular",
#     "has_previous_appointments": True
# }</code></pre>
          </div>
        </div>

        <!-- Event Types -->
        <div>
          <h3 class="text-xl font-bold mb-4 text-emerald-400">{{ $t('cases.rules.deepDive.eventTypes.title') }}</h3>
          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div class="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
              <div class="text-emerald-400 font-mono text-sm mb-2">{{ $t('cases.rules.deepDive.eventTypes.messageReceived') }}</div>
              <p class="text-gray-400 text-xs">{{ $t('cases.rules.deepDive.eventTypes.messageReceivedDesc') }}</p>
            </div>
            <div class="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
              <div class="text-emerald-400 font-mono text-sm mb-2">{{ $t('cases.rules.deepDive.eventTypes.conversationStarted') }}</div>
              <p class="text-gray-400 text-xs">{{ $t('cases.rules.deepDive.eventTypes.conversationStartedDesc') }}</p>
            </div>
            <div class="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
              <div class="text-emerald-400 font-mono text-sm mb-2">{{ $t('cases.rules.deepDive.eventTypes.handoverCompleted') }}</div>
              <p class="text-gray-400 text-xs">{{ $t('cases.rules.deepDive.eventTypes.handoverCompletedDesc') }}</p>
            </div>
            <div class="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
              <div class="text-emerald-400 font-mono text-sm mb-2">{{ $t('cases.rules.deepDive.eventTypes.appointmentScheduled') }}</div>
              <p class="text-gray-400 text-xs">{{ $t('cases.rules.deepDive.eventTypes.appointmentScheduledDesc') }}</p>
            </div>
            <div class="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
              <div class="text-emerald-400 font-mono text-sm mb-2">{{ $t('cases.rules.deepDive.eventTypes.cartAbandoned') }}</div>
              <p class="text-gray-400 text-xs">{{ $t('cases.rules.deepDive.eventTypes.cartAbandonedDesc') }}</p>
            </div>
            <div class="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
              <div class="text-emerald-400 font-mono text-sm mb-2">{{ $t('cases.rules.deepDive.eventTypes.deadlineApproaching') }}</div>
              <p class="text-gray-400 text-xs">{{ $t('cases.rules.deepDive.eventTypes.deadlineApproachingDesc') }}</p>
            </div>
            <div class="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
              <div class="text-emerald-400 font-mono text-sm mb-2">{{ $t('cases.rules.deepDive.eventTypes.sentimentNegative') }}</div>
              <p class="text-gray-400 text-xs">{{ $t('cases.rules.deepDive.eventTypes.sentimentNegativeDesc') }}</p>
            </div>
            <div class="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
              <div class="text-emerald-400 font-mono text-sm mb-2">{{ $t('cases.rules.deepDive.eventTypes.timeBased') }}</div>
              <p class="text-gray-400 text-xs">{{ $t('cases.rules.deepDive.eventTypes.timeBasedDesc') }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Resultados -->
    <section class="py-16 border-t border-gray-800 bg-gray-900/30">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold mb-8">{{ $t('cases.rules.results.title') }}</h2>
        
        <div class="grid md:grid-cols-4 gap-6 mb-12">
          <div class="bg-gray-800/50 rounded-xl p-6 text-center border border-gray-700">
            <div class="text-4xl font-bold text-emerald-400 mb-2">&lt;50ms</div>
            <div class="text-gray-400 text-sm">{{ $t('cases.rules.results.latencyP95') }}</div>
            <div class="text-gray-500 text-xs mt-1">{{ $t('cases.rules.results.latencyP95Desc') }}</div>
          </div>
          <div class="bg-gray-800/50 rounded-xl p-6 text-center border border-gray-700">
            <div class="text-4xl font-bold text-emerald-400 mb-2">1000x</div>
            <div class="text-gray-400 text-sm">{{ $t('cases.rules.results.vsJsonLogic') }}</div>
            <div class="text-gray-500 text-xs mt-1">{{ $t('cases.rules.results.vsJsonLogicDesc') }}</div>
          </div>
          <div class="bg-gray-800/50 rounded-xl p-6 text-center border border-gray-700">
            <div class="text-4xl font-bold text-emerald-400 mb-2">3000+</div>
            <div class="text-gray-400 text-sm">{{ $t('cases.rules.results.rulesInProduction') }}</div>
            <div class="text-gray-500 text-xs mt-1">{{ $t('cases.rules.results.rulesInProductionDesc') }}</div>
          </div>
          <div class="bg-gray-800/50 rounded-xl p-6 text-center border border-gray-700">
            <div class="text-4xl font-bold text-emerald-400 mb-2">100%</div>
            <div class="text-gray-400 text-sm">{{ $t('cases.rules.results.evaluationUptime') }}</div>
            <div class="text-gray-500 text-xs mt-1">{{ $t('cases.rules.results.evaluationUptimeDesc') }}</div>
          </div>
        </div>

        <!-- Decisões técnicas -->
        <div class="bg-gray-900/50 rounded-xl p-8 border border-gray-800">
          <h3 class="text-xl font-bold mb-6 text-emerald-400">{{ $t('cases.rules.results.decisions.title') }}</h3>
          
          <div class="space-y-6">
            <div class="flex gap-4">
              <div class="text-emerald-400 text-2xl">1</div>
              <div>
                <h4 class="font-bold text-white mb-2">{{ $t('cases.rules.results.decisions.pythonLambda.title') }}</h4>
                <p class="text-gray-400 text-sm">
                  {{ $t('cases.rules.results.decisions.pythonLambda.desc') }}
                </p>
              </div>
            </div>

            <div class="flex gap-4">
              <div class="text-emerald-400 text-2xl">2</div>
              <div>
                <h4 class="font-bold text-white mb-2">{{ $t('cases.rules.results.decisions.cache15min.title') }}</h4>
                <p class="text-gray-400 text-sm">
                  {{ $t('cases.rules.results.decisions.cache15min.desc') }}
                </p>
              </div>
            </div>

            <div class="flex gap-4">
              <div class="text-emerald-400 text-2xl">3</div>
              <div>
                <h4 class="font-bold text-white mb-2">{{ $t('cases.rules.results.decisions.keywordFallback.title') }}</h4>
                <p class="text-gray-400 text-sm">
                  {{ $t('cases.rules.results.decisions.keywordFallback.desc') }}
                </p>
              </div>
            </div>

            <div class="flex gap-4">
              <div class="text-emerald-400 text-2xl">4</div>
              <div>
                <h4 class="font-bold text-white mb-2">{{ $t('cases.rules.results.decisions.separateMicroservice.title') }}</h4>
                <p class="text-gray-400 text-sm">
                  {{ $t('cases.rules.results.decisions.separateMicroservice.desc') }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Stack Técnico -->
    <section class="py-16 border-t border-gray-800">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold mb-8">{{ $t('cases.rules.technicalStack.title') }}</h2>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div class="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
            <div class="text-emerald-400 font-bold mb-2">{{ $t('cases.rules.technicalStack.runtime') }}</div>
            <p class="text-gray-400 text-sm">{{ $t('cases.rules.technicalStack.runtimeDesc') }}</p>
          </div>
          <div class="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
            <div class="text-emerald-400 font-bold mb-2">{{ $t('cases.rules.technicalStack.framework') }}</div>
            <p class="text-gray-400 text-sm">{{ $t('cases.rules.technicalStack.frameworkDesc') }}</p>
          </div>
          <div class="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
            <div class="text-emerald-400 font-bold mb-2">{{ $t('cases.rules.technicalStack.cache') }}</div>
            <p class="text-gray-400 text-sm">{{ $t('cases.rules.technicalStack.cacheDesc') }}</p>
          </div>
          <div class="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
            <div class="text-emerald-400 font-bold mb-2">{{ $t('cases.rules.technicalStack.storage') }}</div>
            <p class="text-gray-400 text-sm">{{ $t('cases.rules.technicalStack.storageDesc') }}</p>
          </div>
          <div class="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
            <div class="text-emerald-400 font-bold mb-2">{{ $t('cases.rules.technicalStack.isolation') }}</div>
            <p class="text-gray-400 text-sm">{{ $t('cases.rules.technicalStack.isolationDesc') }}</p>
          </div>
          <div class="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
            <div class="text-emerald-400 font-bold mb-2">{{ $t('cases.rules.technicalStack.circuitBreaker') }}</div>
            <p class="text-gray-400 text-sm">{{ $t('cases.rules.technicalStack.circuitBreakerDesc') }}</p>
          </div>
          <div class="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
            <div class="text-emerald-400 font-bold mb-2">{{ $t('cases.rules.technicalStack.httpClient') }}</div>
            <p class="text-gray-400 text-sm">{{ $t('cases.rules.technicalStack.httpClientDesc') }}</p>
          </div>
          <div class="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
            <div class="text-emerald-400 font-bold mb-2">{{ $t('cases.rules.technicalStack.metrics') }}</div>
            <p class="text-gray-400 text-sm">{{ $t('cases.rules.technicalStack.metricsDesc') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-16 border-t border-gray-800">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-3xl font-bold mb-4">{{ $t('cases.rules.cta.title') }}</h2>
        <p class="text-gray-400 mb-8">
          {{ $t('cases.rules.cta.desc') }}
        </p>
        <a 
          href="mailto:marcelomarleta@gmail.com" 
          class="inline-flex items-center px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-medium rounded-lg transition-colors"
        >
          {{ $t('cases.rules.cta.contact') }}
          <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </section>
  </div>
</template>

<script setup>
const { t } = useI18n()

useHead({
  title: t('cases.rules.meta.title'),
  meta: [
    { 
      name: 'description', 
      content: t('cases.rules.meta.description')
    }
  ]
})
</script>
