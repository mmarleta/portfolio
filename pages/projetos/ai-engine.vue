<template>
  <div class="min-h-screen bg-gray-950 text-gray-100">
    <ProjectHeader back-label-key="cases.aiEngine.back" subtitle-key="cases.aiEngine.platformName" />

    <ProjectHeroBlock :config="heroConfig" />

    <!-- Navigation -->
    <nav class="sticky top-16 z-40 bg-gray-950/90 backdrop-blur-sm border-b border-gray-800">
      <div class="max-w-4xl mx-auto px-4">
        <div class="flex gap-6 overflow-x-auto py-4 text-sm">
          <a href="#problema" class="text-gray-400 hover:text-emerald-400 whitespace-nowrap transition-colors">{{ $t('cases.aiEngine.nav.problem') }}</a>
          <a href="#arquitetura" class="text-gray-400 hover:text-emerald-400 whitespace-nowrap transition-colors">{{ $t('cases.aiEngine.nav.architecture') }}</a>
          <a href="#semantic-routing" class="text-gray-400 hover:text-emerald-400 whitespace-nowrap transition-colors">{{ $t('cases.aiEngine.nav.semanticRouting') }}</a>
          <a href="#fsm" class="text-gray-400 hover:text-emerald-400 whitespace-nowrap transition-colors">{{ $t('cases.aiEngine.nav.fsm') }}</a>
          <a href="#context-composer" class="text-gray-400 hover:text-emerald-400 whitespace-nowrap transition-colors">{{ $t('cases.aiEngine.nav.contextComposer') }}</a>
          <a href="#fast-lane" class="text-gray-400 hover:text-emerald-400 whitespace-nowrap transition-colors">{{ $t('cases.aiEngine.nav.fastLane') }}</a>
          <a href="#reducer" class="text-gray-400 hover:text-emerald-400 whitespace-nowrap transition-colors">{{ $t('cases.aiEngine.nav.reducer') }}</a>
          <a href="#retry" class="text-gray-400 hover:text-emerald-400 whitespace-nowrap transition-colors">{{ $t('cases.aiEngine.nav.retry') }}</a>
          <a href="#resultados" class="text-gray-400 hover:text-emerald-400 whitespace-nowrap transition-colors">{{ $t('cases.aiEngine.nav.results') }}</a>
        </div>
      </div>
    </nav>

    <!-- Content -->
    <main class="max-w-4xl mx-auto px-4 py-12">
      
      <!-- Problema -->
      <section id="problema" class="mb-16">
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
          <span class="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center text-red-400">!</span>
          {{ $t('cases.aiEngine.sections.problem.title') }}
        </h2>
        
        <div class="prose prose-invert max-w-none">
          <p class="text-gray-300 leading-relaxed mb-4">
            {{ $t('cases.aiEngine.sections.problem.content1') }}
            <strong class="text-white">{{ $t('cases.aiEngine.sections.problem.nonDeterminism') }}</strong>{{ $t('cases.aiEngine.sections.problem.content2') }}
          </p>
          
          <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-6 my-6">
            <h4 class="text-lg font-semibold text-gray-200 mb-4">{{ $t('cases.aiEngine.sections.problem.scenariosTitle') }}</h4>
            <ul class="space-y-3 text-gray-400">
              <li class="flex items-start gap-3">
                <span class="text-red-400 mt-1">✗</span>
                <span><strong class="text-gray-200">{{ $t('cases.aiEngine.sections.problem.scenarios.hallucination.title') }}</strong> {{ $t('cases.aiEngine.sections.problem.scenarios.hallucination.content') }}</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-red-400 mt-1">✗</span>
                <span><strong class="text-gray-200">{{ $t('cases.aiEngine.sections.problem.scenarios.ambiguous.title') }}</strong> {{ $t('cases.aiEngine.sections.problem.scenarios.ambiguous.content') }}</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-red-400 mt-1">✗</span>
                <span><strong class="text-gray-200">{{ $t('cases.aiEngine.sections.problem.scenarios.drift.title') }}</strong> {{ $t('cases.aiEngine.sections.problem.scenarios.drift.content') }}</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-red-400 mt-1">✗</span>
                <span><strong class="text-gray-200">{{ $t('cases.aiEngine.sections.problem.scenarios.loop.title') }}</strong> {{ $t('cases.aiEngine.sections.problem.scenarios.loop.content') }}</span>
              </li>
            </ul>
          </div>

          <p class="text-gray-300 leading-relaxed">
            {{ $t('cases.aiEngine.sections.problem.conclusion') }}
          </p>
        </div>
      </section>

      <!-- Arquitetura -->
      <section id="arquitetura" class="mb-16">
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
          <span class="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center text-emerald-400">🏗️</span>
          {{ $t('cases.aiEngine.sections.architecture.title') }}
        </h2>

        <div class="prose prose-invert max-w-none">
          <p class="text-gray-300 leading-relaxed mb-6">
            {{ $t('cases.aiEngine.sections.architecture.intro1') }} <strong class="text-white">{{ $t('cases.aiEngine.sections.architecture.introHighlight1') }}</strong> {{ $t('cases.aiEngine.sections.architecture.intro2') }}
            <strong class="text-white">{{ $t('cases.aiEngine.sections.architecture.introHighlight2') }}</strong> {{ $t('cases.aiEngine.sections.architecture.intro3') }}
          </p>

          <!-- Architecture Diagram -->
          <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-6 my-6">
            <h4 class="text-lg font-semibold text-gray-200 mb-4 text-center">{{ $t('cases.aiEngine.sections.architecture.diagramTitle') }}</h4>
            <div class="font-mono text-xs overflow-x-auto">
              <pre class="text-gray-400 leading-relaxed">
┌─────────────────────────────────────────────────────────────────────────────┐
│                              USER MESSAGE                                    │
└───────────────────────────────────┬─────────────────────────────────────────┘
                                    ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│  workflow_hygiene → user_signal_node → semantic_routing                      │
│  (TTL/Reset)         (Intent Extract)    (Embeddings &lt;10ms)                 │
└───────────────────────────────────┬─────────────────────────────────────────┘
                                    │
                    ┌───────────────┴───────────────────────┐
                    │                                       │
           [High Confidence]                       [Low Confidence]
                    │                                       │
                    ▼                                       ▼
┌───────────────────────────────┐       ┌─────────────────────────────────────┐
│     BYPASS LLM (Fast Path)    │       │   structured_analysis_node (LLM)    │
│     ~40% of requests          │       │   Intent + Entities Extraction      │
└───────────────┬───────────────┘       └─────────────────┬───────────────────┘
                │                                         │
                └────────────────────┬────────────────────┘
                                     ▼
        ┌────────────────────────────┴────────────────────────────┐
        │                                                          │
   [pricing]                  [schedule/reschedule/cancel]    [information]
        │                                                          │
        ▼                              ▼                           ▼
┌───────────────────┐   ┌──────────────────────────────┐   ┌──────────────┐
│ pricing_fast_lane │   │   BOOKING STATE MACHINE      │   │  agent_node  │
│ (Deterministic)   │   │   (FSM - 8 States)           │   │  (RAG/Tools) │
│ - RAG Search      │   │   ┌────────────────────────┐ │   │              │
│ - Cache Check     │   │   │ detect → discover_slots │ │   │              │
│ - Direct Response │   │   │ → await_selection       │ │   │              │
└─────────┬─────────┘   │   │ → await_confirmation    │ │   └──────┬───────┘
          │             │   │ → completed/handover    │ │          │
          │             │   └────────────────────────┘ │          │
          │             └──────────────┬───────────────┘          │
          │                            ▼                          │
          │             ┌──────────────────────────────┐          │
          │             │ booking_response_renderer    │          │
          │             │ (LLM Humanization)           │          │
          └─────────────┴──────────────┬───────────────┴──────────┘
                                       ▼
                        ┌──────────────────────────────┐
                        │    sanitize_followup_node    │
                        │    (Guard + Format)          │
                        └──────────────┬───────────────┘
                                       ▼
                        ┌──────────────────────────────┐
                        │      FINAL RESPONSE          │
                        └──────────────────────────────┘</pre>
            </div>
          </div>

          <h3 class="text-xl font-semibold text-gray-200 mt-8 mb-4">{{ $t('cases.aiEngine.sections.architecture.langGraphTitle') }}</h3>

          <div class="bg-gray-900 rounded-lg overflow-hidden mb-6">
            <div class="bg-gray-800 px-4 py-2 text-sm text-gray-400 font-mono">graph_builder.py</div>
            <pre class="p-4 overflow-x-auto text-sm"><code class="text-gray-300"># LangGraph offers granular control over flow
graph = StateGraph(
    state_schema=ConversationState,  # State typed
    context_schema=ContextSchema,    # Injected context
)

# Conditional edges based on state
graph.add_conditional_edges(
    "semantic_routing",
    lambda state: route_by_intent(state),  # Pure function
    {
        "pricing": "pricing_fast_lane",
        "appointment": "booking_flow_router",
        "information": "agent_node",
        "greeting": "format_response",
    }
)

# Differentiated RetryPolicy by error type
retry_policy = RetryPolicy(
    max_attempts=3,
    initial_interval=0.5,
    backoff_factor=2.0,
    retry_on=TRANSIENT_EXCEPTIONS,  # Only transient!
)</code></pre>
          </div>

          <p class="text-gray-300 leading-relaxed">
            {{ $t('cases.aiEngine.sections.architecture.langGraphExplanation') }}
          </p>
        </div>
      </section>

      <!-- Semantic Routing -->
      <section id="semantic-routing" class="mb-16">
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
          <span class="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center text-purple-400">🎯</span>
          {{ $t('cases.aiEngine.sections.semanticRouting.title') }}
        </h2>

        <div class="prose prose-invert max-w-none">
          <p class="text-gray-300 leading-relaxed mb-6">
            {{ $t('cases.aiEngine.sections.semanticRouting.intro') }}
          </p>

          <div class="bg-gray-900 rounded-lg overflow-hidden mb-6">
            <div class="bg-gray-800 px-4 py-2 text-sm text-gray-400 font-mono">semantic_routing.py</div>
            <pre class="p-4 overflow-x-auto text-sm"><code class="text-gray-300">async def semantic_routing_node(state: dict, service: Any, config: Any):
    """
    Semantic Routing (Pre-LLM).
    
    1. Check Priority-0 flags (Booking/Handover) → If yes, ignore semantic
    2. Call SemanticRouter.classify() via embeddings
    3. If High Confidence:
       a. Create synthetic structured_analysis
       b. Validate via RoutingDecisionEngine (Policies/Circuit Breaker)
       c. Set routing_decision + fast_path_taken=True
    4. If Low Confidence: add hints, proceed to LLM
    """
    
    # Priority-0: deterministic states have absolute priority
    pending_action = state.get("pending_action", "")
    if pending_action.startswith("confirm_"):
        # User is confirming something - don't reclassify
        return {"skip_semantic": True, "reason": "pending_confirmation"}
    
    # Classification via embeddings (~7ms p95)
    result = await semantic_router.classify(
        text=user_message,
        hybrid_alpha=0.7,        # 70% embedding, 30% keyword
        abstain_threshold=0.55,  # Below this → goes to LLM
        bias_weight=0.03,        # Boost for priority intents
    )
    
    if result.confidence >= 0.85:
        # High confidence: bypass LLM
        return {
            "routing_decision": result.route,
            "fast_path_taken": True,
            "semantic_confidence": result.confidence,
        }
    else:
        # Low confidence: hints for the LLM
        return {
            "semantic_hints": result.top_routes,
            "fast_path_taken": False,
        }</code></pre>
          </div>

          <h3 class="text-xl font-semibold text-gray-200 mt-8 mb-4">{{ $t('cases.aiEngine.sections.semanticRouting.hybridAlphaTitle') }}</h3>

          <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-6 my-6">
            <p class="text-gray-400 mb-4">
              {{ $t('cases.aiEngine.sections.semanticRouting.hybridAlphaExplanation') }}
            </p>
            <div class="font-mono text-sm bg-gray-800 rounded p-4">
              <span class="text-purple-400">score_final</span> = 
              <span class="text-emerald-400">0.7</span> × embedding_similarity + 
              <span class="text-emerald-400">0.3</span> × keyword_match
            </div>
            <p class="text-gray-500 text-sm mt-4">
              {{ $t('cases.aiEngine.sections.semanticRouting.hybridAlphaConfig') }} <code>SEMANTIC_ROUTER_HYBRID_ALPHA=0.7</code>
            </p>
          </div>

          <div class="grid md:grid-cols-3 gap-4 my-6">
            <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
              <h4 class="font-semibold text-purple-400 mb-2">{{ $t('cases.aiEngine.sections.semanticRouting.params.hybridAlpha.title') }}</h4>
              <p class="text-sm text-gray-400">{{ $t('cases.aiEngine.sections.semanticRouting.params.hybridAlpha.description') }}</p>
            </div>
            <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
              <h4 class="font-semibold text-purple-400 mb-2">{{ $t('cases.aiEngine.sections.semanticRouting.params.abstainThreshold.title') }}</h4>
              <p class="text-sm text-gray-400">{{ $t('cases.aiEngine.sections.semanticRouting.params.abstainThreshold.description') }}</p>
            </div>
            <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
              <h4 class="font-semibold text-purple-400 mb-2">{{ $t('cases.aiEngine.sections.semanticRouting.params.biasWeight.title') }}</h4>
              <p class="text-sm text-gray-400">{{ $t('cases.aiEngine.sections.semanticRouting.params.biasWeight.description') }}</p>
            </div>
          </div>

          <div class="bg-green-500/10 border border-green-500/30 rounded-lg p-4 my-6">
            <h4 class="font-semibold text-green-400 mb-2">{{ $t('cases.aiEngine.sections.semanticRouting.resultTitle') }}</h4>
            <p class="text-sm text-gray-300">
              {{ $t('cases.aiEngine.sections.semanticRouting.resultContent') }}
            </p>
          </div>
        </div>
      </section>

      <!-- Booking FSM -->
      <section id="fsm" class="mb-16">
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
          <span class="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-400">🔄</span>
          {{ $t('cases.aiEngine.sections.fsm.title') }}
        </h2>

        <div class="prose prose-invert max-w-none">
          <p class="text-gray-300 leading-relaxed mb-6">
            {{ $t('cases.aiEngine.sections.fsm.intro') }}
          </p>

          <!-- FSM Diagram -->
          <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-6 my-6">
            <h4 class="text-lg font-semibold text-gray-200 mb-4 text-center">{{ $t('cases.aiEngine.sections.fsm.diagramTitle') }}</h4>
            <div class="font-mono text-xs overflow-x-auto">
              <pre class="text-gray-400 leading-relaxed">
                                    ┌──────────┐
                                    │  detect  │
                                    └────┬─────┘
                    ┌───────────────────┼───────────────────┐
                    ▼                   ▼                   ▼
          ┌─────────────────┐  ┌───────────────┐  ┌──────────────────┐
          │ discover_booking│  │ discover_slots│  │  clarification   │
          │ (search existing)│  │ (search slots) │  │ (ask details)  │
          └────────┬────────┘  └───────┬───────┘  └────────┬─────────┘
                   │                   │                   │
                   └─────────┬─────────┘                   │
                             ▼                             │
                   ┌─────────────────────┐                 │
                   │   await_selection   │◄────────────────┘
                   │ (multiple options)  │
                   └──────────┬──────────┘
                              ▼
                   ┌─────────────────────┐
                   │ await_confirmation  │
                   │ (user confirms)     │
                   └──────────┬──────────┘
                              │
              ┌───────────────┼───────────────┐
              ▼               ▼               ▼
        ┌───────────┐  ┌────────────┐  ┌─────────────┐
        │ completed │  │  handover  │  │ (back loop) │
        │ (success) │  │ (human)    │  │             │
        └───────────┘  └────────────┘  └─────────────┘</pre>
            </div>
          </div>

          <h3 class="text-xl font-semibold text-gray-200 mt-8 mb-4">{{ $t('cases.aiEngine.sections.fsm.transitionsTitle') }}</h3>

          <div class="bg-gray-900 rounded-lg overflow-hidden mb-6">
            <div class="bg-gray-800 px-4 py-2 text-sm text-gray-400 font-mono">booking_fsm_contract.py</div>
            <pre class="p-4 overflow-x-auto text-sm"><code class="text-gray-300"># Single Source of Truth for transitions
FSM_TRANSITIONS = {
    "detect": {
        "discover_booking",   # Search existing appointment
        "discover_slots",     # Search available slots
        "await_confirmation", # Direct confirmation
        "clarification",      # Ask for more details
        "handover",           # Escalate to human
    },
    "discover_booking": {
        "await_selection",    # Multiple found
        "discover_slots",     # Needs slots
        "await_confirmation", # Single found
        "clarification",      # Needs details
        "handover",
    },
    "discover_slots": {
        "await_selection",    # Multiple slots
        "await_confirmation", # Single slot
        "clarification",
        "handover",
    },
    "await_selection": {
        "await_confirmation", # User selected
        "discover_slots",     # New search
        "discover_booking",   # Change booking
        "handover",
    },
    "await_confirmation": {
        "completed",          # ✅ ERP executed
        "discover_slots",     # User changed mind
        "discover_booking",
        "handover",
    },
    # Terminal states
    "completed": {"completed", "handover"},
    "handover": {"handover"},
}

def is_valid_transition(from_state: str, to_state: str) -> bool:
    """Validate if transition is allowed."""
    return to_state in FSM_TRANSITIONS.get(from_state, set())</code></pre>
          </div>

          <h3 class="text-xl font-semibold text-gray-200 mt-8 mb-4">{{ $t('cases.aiEngine.sections.fsm.operationsTitle') }}</h3>

          <div class="grid md:grid-cols-3 gap-4 my-6">
            <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
              <h4 class="font-semibold text-blue-400 mb-2">{{ $t('cases.aiEngine.sections.fsm.operations.schedule.title') }}</h4>
              <p class="text-sm text-gray-400">{{ $t('cases.aiEngine.sections.fsm.operations.schedule.description') }}</p>
            </div>
            <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
              <h4 class="font-semibold text-yellow-400 mb-2">{{ $t('cases.aiEngine.sections.fsm.operations.reschedule.title') }}</h4>
              <p class="text-sm text-gray-400">{{ $t('cases.aiEngine.sections.fsm.operations.reschedule.description') }}</p>
            </div>
            <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
              <h4 class="font-semibold text-red-400 mb-2">{{ $t('cases.aiEngine.sections.fsm.operations.cancel.title') }}</h4>
              <p class="text-sm text-gray-400">{{ $t('cases.aiEngine.sections.fsm.operations.cancel.description') }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Context Composer -->
      <section id="context-composer" class="mb-16">
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
          <span class="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center text-cyan-400">📝</span>
          {{ $t('cases.aiEngine.sections.contextComposer.title') }}
        </h2>

        <div class="prose prose-invert max-w-none">
          <p class="text-gray-300 leading-relaxed mb-6">
            {{ $t('cases.aiEngine.sections.contextComposer.intro') }}
          </p>

          <div class="bg-gray-900 rounded-lg overflow-hidden mb-6">
            <div class="bg-gray-800 px-4 py-2 text-sm text-gray-400 font-mono">context_composer.py</div>
            <pre class="p-4 overflow-x-auto text-sm"><code class="text-gray-300">class ContextComposer:
    """
    Composes unified context from multiple sources.
    
    Sources:
    - Memory Engine (handover state, customer memory)
    - Tenant Config (identity, rules)
    - Conversation History
    
    Features:
    - Budget management (CONTEXT_BUDGET_TOKENS=1200)
    - Priority-based truncation
    - Block-based format (never cuts IDENTITY, RULES, INPUT)
    """
    
    def __init__(self):
        self.budget_tokens = int(os.getenv("CONTEXT_BUDGET_TOKENS", "1200"))
        self.memory_engine_url = os.getenv("MEMORY_ENGINE_URL")
    
    async def compose(
        self,
        tenant_id: str,
        conversation_id: str,
        user_id: str,
        message: str,
        tenant_config: dict,
        existing_history: list | None = None,
    ) -> ContextContractV1:
        """
        Compose full context with budget enforcement.
        
        Block Priority (never truncated):
        1. IDENTITY - who the assistant is
        2. RULES - tenant business rules  
        3. INPUT - user message
        
        Truncatable (in priority order):
        4. MEMORY - customer memory
        5. HANDOVER - handover context
        6. FOCUS - focused context (RAG results)
        """
        # Fetch parallel (asyncio.gather)
        memory_ctx, handover_ctx = await asyncio.gather(
            self._fetch_memory(tenant_id, user_id),
            self._fetch_handover(tenant_id, conversation_id),
        )
        
        # Build identity from tenant config
        identity = self._build_identity(tenant_config)
        
        # Apply budget with priority truncation
        return self._apply_budget(
            identity=identity,
            memory=memory_ctx,
            handover=handover_ctx,
            message=message,
        )</code></pre>
          </div>

          <h3 class="text-xl font-semibold text-gray-200 mt-8 mb-4">{{ $t('cases.aiEngine.sections.contextComposer.budgetTitle') }}</h3>

          <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-6 my-6">
            <p class="text-gray-400 mb-4">
              {{ $t('cases.aiEngine.sections.contextComposer.budgetIntro') }}
            </p>
            <ul class="space-y-2 text-gray-400">
              <li class="flex items-start gap-3">
                <span class="text-cyan-400 mt-1">1.</span>
                <span><strong class="text-gray-200">{{ $t('cases.aiEngine.sections.contextComposer.budgetRules.untouchable.title') }}</strong> {{ $t('cases.aiEngine.sections.contextComposer.budgetRules.untouchable.content') }}</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-cyan-400 mt-1">2.</span>
                <span><strong class="text-gray-200">{{ $t('cases.aiEngine.sections.contextComposer.budgetRules.semantic.title') }}</strong> {{ $t('cases.aiEngine.sections.contextComposer.budgetRules.semantic.content') }}</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-cyan-400 mt-1">3.</span>
                <span><strong class="text-gray-200">{{ $t('cases.aiEngine.sections.contextComposer.budgetRules.priority.title') }}</strong> {{ $t('cases.aiEngine.sections.contextComposer.budgetRules.priority.content') }}</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Pricing Fast Lane -->
      <section id="fast-lane" class="mb-16">
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
          <span class="w-8 h-8 bg-yellow-500/20 rounded-lg flex items-center justify-center text-yellow-400">⚡</span>
          {{ $t('cases.aiEngine.sections.fastLane.title') }}
        </h2>

        <div class="prose prose-invert max-w-none">
          <p class="text-gray-300 leading-relaxed mb-6">
            {{ $t('cases.aiEngine.sections.fastLane.intro') }}
          </p>

          <div class="bg-gray-900 rounded-lg overflow-hidden mb-6">
            <div class="bg-gray-800 px-4 py-2 text-sm text-gray-400 font-mono">pricing_fast_lane.py</div>
            <pre class="p-4 overflow-x-auto text-sm"><code class="text-gray-300"># ==============================================================================
# 🔧 NOTE ON TOOL BUDGET (Tech Lead Review)
# ==============================================================================
# This module (pricing_fast_lane) is NOT subject to tool_budget because:
# 1. It's an OPTIMIZED path that executes tool directly
# 2. It's DETERMINISTIC - doesn't enter iteration loop
# 3. tool_budget is for controlling agent ITERATIONS
# 4. If fast lane fails, terminates without handover
# ==============================================================================

async def pricing_fast_lane_node(state: dict, service: Any, config: Any):
    """
    Optimized path for price queries.
    
    Flow:
    1. Check cache (intelligent_cache_service)
    2. If miss: RAG search via docling_semantic_search_tool
    3. Format response directly (no LLM)
    4. Return with fast_lane_executed=True
    """
    # Intelligent cache with coalescing
    cache_key = build_intelligent_cache_key(
        tenant_id=config.tenant_id,
        query_normalized=normalize_query(user_message),
    )
    
    cached = await get_or_compute_with_coalescing(
        key=cache_key,
        compute_fn=lambda: _do_rag_search(state, service),
        ttl_seconds=300,
    )
    
    if cached:
        return {
            "pricing_response": cached,
            "fast_lane_executed": True,
            "cache_hit": True,
        }
    
    # RAG search (deterministic)
    results = await docling_semantic_search(
        query=user_message,
        tenant_id=config.tenant_id,
        k=5,
        threshold=0.7,  # Adaptive threshold
    )
    
    # Format response (template-based, no LLM)
    response = format_pricing_response(results)
    
    return {
        "pricing_response": response,
        "fast_lane_executed": True,
    }</code></pre>
          </div>

          <div class="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 my-6">
            <h4 class="font-semibold text-yellow-400 mb-2">{{ $t('cases.aiEngine.sections.fastLane.resultTitle') }}</h4>
            <p class="text-sm text-gray-300">
              {{ $t('cases.aiEngine.sections.fastLane.resultContent') }}
            </p>
          </div>
        </div>
      </section>

      <!-- Booking Flow Reducer -->
      <section id="reducer" class="mb-16">
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
          <span class="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center text-green-400">🔒</span>
          {{ $t('cases.aiEngine.sections.reducer.title') }}
        </h2>

        <div class="prose prose-invert max-w-none">
          <p class="text-gray-300 leading-relaxed mb-6">
            {{ $t('cases.aiEngine.sections.reducer.intro') }}
          </p>

          <div class="bg-gray-900 rounded-lg overflow-hidden mb-6">
            <div class="bg-gray-800 px-4 py-2 text-sm text-gray-400 font-mono">booking_flow_reducer.py</div>
            <pre class="p-4 overflow-x-auto text-sm"><code class="text-gray-300"># Whitelist of allowed sources
ALLOWED_UPDATERS = {
    "booking_flow_router",      # Main state machine router
    "discover_booking_node",    # Booking discovery (IO task)
    "discover_slots_node",      # Slot discovery (IO task)
    "confirm_booking",          # Confirm booking node
    "confirm_reschedule",       # Confirm reschedule node
    "confirm_cancel",           # Confirm cancel node
    "task_create_appointment",  # ERP mutation task
    "memory_engine_sync",       # Memory Engine persistence
    "workflow_hygiene",         # Workflow hygiene reset
}

class BookingFlowUpdate:
    """
    Validated booking_flow update with all constraints checked.
    
    Constraints:
    1. Whitelist validation (source must be in ALLOWED_UPDATERS)
    2. Monotonicity check (turn_seq >= current)
    3. Immutability guards (stage transitions must be valid)
    4. Automatic normalization (version++, updated_at)
    """
    
    def __init__(self, update: dict, current: dict, source: str):
        # Whitelist check
        if source not in ALLOWED_UPDATERS:
            booking_flow_rejections_total.labels(reason="unauthorized_source").inc()
            raise BookingFlowUpdateError(
                f"Source '{source}' not authorized to update booking_flow"
            )
        
        # Monotonicity check
        new_seq = update.get("turn_seq", 0)
        current_seq = current.get("turn_seq", 0)
        if new_seq < current_seq:
            booking_flow_rejections_total.labels(reason="out_of_order").inc()
            raise BookingFlowUpdateError(
                f"Out-of-order update: {new_seq} < {current_seq}"
            )
        
        # Transition validation
        new_stage = update.get("stage")
        current_stage = current.get("stage", "detect")
        if new_stage and not is_valid_transition(current_stage, new_stage):
            booking_flow_rejections_total.labels(reason="invalid_transition").inc()
            raise BookingFlowUpdateError(
                f"Invalid transition: {current_stage} → {new_stage}"
            )</code></pre>
          </div>

          <h3 class="text-xl font-semibold text-gray-200 mt-8 mb-4">{{ $t('cases.aiEngine.sections.reducer.whyReducerTitle') }}</h3>

          <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-6 my-6">
            <ul class="space-y-3 text-gray-400">
              <li class="flex items-start gap-3">
                <span class="text-green-400 mt-1">✓</span>
                <span><strong class="text-gray-200">{{ $t('cases.aiEngine.sections.reducer.reasons.raceConditions.title') }}</strong> {{ $t('cases.aiEngine.sections.reducer.reasons.raceConditions.content') }}</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-green-400 mt-1">✓</span>
                <span><strong class="text-gray-200">{{ $t('cases.aiEngine.sections.reducer.reasons.audit.title') }}</strong> {{ $t('cases.aiEngine.sections.reducer.reasons.audit.content') }}</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-green-400 mt-1">✓</span>
                <span><strong class="text-gray-200">{{ $t('cases.aiEngine.sections.reducer.reasons.metrics.title') }}</strong> {{ $t('cases.aiEngine.sections.reducer.reasons.metrics.content') }}</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Retry Policies -->
      <section id="retry" class="mb-16">
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
          <span class="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center text-orange-400">🔁</span>
          {{ $t('cases.aiEngine.sections.retry.title') }}
        </h2>

        <div class="prose prose-invert max-w-none">
          <p class="text-gray-300 leading-relaxed mb-6">
            {{ $t('cases.aiEngine.sections.retry.intro') }}
          </p>

          <div class="bg-gray-900 rounded-lg overflow-hidden mb-6">
            <div class="bg-gray-800 px-4 py-2 text-sm text-gray-400 font-mono">graph_builder.py</div>
            <pre class="p-4 overflow-x-auto text-sm"><code class="text-gray-300"># SOTA FIX (December 2025): Transient vs Permanent Exceptions

TRANSIENT_EXCEPTIONS = (
    httpx.TimeoutException,
    httpx.ConnectError,
    httpx.ReadTimeout,
    openai.APIConnectionError,
    openai.RateLimitError,       # Retriable with backoff
    openai.APITimeoutError,
    ConnectionError,
    TimeoutError,
    asyncio.TimeoutError,
)

# Permanent exceptions should NOT be retried
PERMANENT_EXCEPTIONS = (
    openai.AuthenticationError,   # Invalid API key
    openai.BadRequestError,       # Malformed prompt
    openai.PermissionDeniedError, # No permission
    ValueError,
    TypeError,
    KeyError,
)

# RetryPolicy uses whitelist (retry_on), not blacklist
retry_policy = RetryPolicy(
    max_attempts=3,
    initial_interval=0.5,         # 500ms
    backoff_factor=2.0,           # 500ms → 1s → 2s
    retry_on=TRANSIENT_EXCEPTIONS,
)</code></pre>
          </div>

          <div class="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4 my-6">
            <h4 class="font-semibold text-orange-400 mb-2">{{ $t('cases.aiEngine.sections.retry.warningTitle') }}</h4>
            <p class="text-sm text-gray-300">
              {{ $t('cases.aiEngine.sections.retry.warningContent') }}
            </p>
          </div>
        </div>
      </section>

      <!-- Results -->
      <section id="resultados" class="mb-16">
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
          <span class="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center text-emerald-400">📊</span>
          {{ $t('cases.aiEngine.sections.results.title') }}
        </h2>

        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 rounded-lg p-6">
            <div class="text-3xl font-bold text-emerald-400 mb-2">{{ $t('cases.aiEngine.sections.results.metrics.bypass.value') }}</div>
            <div class="text-gray-400">{{ $t('cases.aiEngine.sections.results.metrics.bypass.label') }}</div>
          </div>
          <div class="bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 rounded-lg p-6">
            <div class="text-3xl font-bold text-emerald-400 mb-2">{{ $t('cases.aiEngine.sections.results.metrics.classification.value') }}</div>
            <div class="text-gray-400">{{ $t('cases.aiEngine.sections.results.metrics.classification.label') }}</div>
          </div>
          <div class="bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 rounded-lg p-6">
            <div class="text-3xl font-bold text-emerald-400 mb-2">{{ $t('cases.aiEngine.sections.results.metrics.transitions.value') }}</div>
            <div class="text-gray-400">{{ $t('cases.aiEngine.sections.results.metrics.transitions.label') }}</div>
          </div>
          <div class="bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 rounded-lg p-6">
            <div class="text-3xl font-bold text-emerald-400 mb-2">{{ $t('cases.aiEngine.sections.results.metrics.fastLane.value') }}</div>
            <div class="text-gray-400">{{ $t('cases.aiEngine.sections.results.metrics.fastLane.label') }}</div>
          </div>
        </div>

        <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-6 mt-8">
          <h3 class="text-xl font-semibold text-gray-200 mb-4">{{ $t('cases.aiEngine.sections.results.decisionsTitle') }}</h3>
          <ul class="space-y-3 text-gray-400">
            <li class="flex items-start gap-3">
              <span class="text-emerald-400 mt-1">→</span>
              <span><strong class="text-gray-200">{{ $t('cases.aiEngine.sections.results.decisions.fsmSeparated.title') }}</strong> {{ $t('cases.aiEngine.sections.results.decisions.fsmSeparated.content') }}</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="text-emerald-400 mt-1">→</span>
              <span><strong class="text-gray-200">{{ $t('cases.aiEngine.sections.results.decisions.semanticPreLlm.title') }}</strong> {{ $t('cases.aiEngine.sections.results.decisions.semanticPreLlm.content') }}</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="text-emerald-400 mt-1">→</span>
              <span><strong class="text-gray-200">{{ $t('cases.aiEngine.sections.results.decisions.reducerWhitelist.title') }}</strong> {{ $t('cases.aiEngine.sections.results.decisions.reducerWhitelist.content') }}</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="text-emerald-400 mt-1">→</span>
              <span><strong class="text-gray-200">{{ $t('cases.aiEngine.sections.results.decisions.retryWhitelist.title') }}</strong> {{ $t('cases.aiEngine.sections.results.decisions.retryWhitelist.content') }}</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="text-emerald-400 mt-1">→</span>
              <span><strong class="text-gray-200">{{ $t('cases.aiEngine.sections.results.decisions.fastLanes.title') }}</strong> {{ $t('cases.aiEngine.sections.results.decisions.fastLanes.content') }}</span>
            </li>
          </ul>
        </div>
      </section>

      <!-- Tech Stack -->
      <section class="mb-16">
        <h2 class="text-2xl font-bold mb-6">{{ $t('cases.aiEngine.techStack.title') }}</h2>
        <div class="flex flex-wrap gap-2">
          <span class="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">Python 3.12</span>
          <span class="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">LangGraph</span>
          <span class="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">LangChain</span>
          <span class="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">FastAPI</span>
          <span class="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">OpenAI GPT-4</span>
          <span class="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">Embeddings</span>
          <span class="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">Redis</span>
          <span class="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">PostgreSQL</span>
          <span class="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">Prometheus</span>
          <span class="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">structlog</span>
        </div>
      </section>

      <!-- CTA -->
      <section class="border-t border-gray-800 pt-12">
        <div class="text-center">
          <h2 class="text-2xl font-bold mb-4">{{ $t('cases.aiEngine.cta.title') }}</h2>
          <p class="text-gray-400 mb-8">{{ $t('cases.aiEngine.cta.description') }}</p>
          <div class="flex flex-wrap justify-center gap-4">
            <NuxtLink to="/projetos/rules-engine" class="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-gray-200 rounded-lg transition-colors">
              {{ $t('cases.aiEngine.cta.rulesEngine') }}
            </NuxtLink>
            <NuxtLink to="/projetos/memory-engine" class="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-gray-200 rounded-lg transition-colors">
              {{ $t('cases.aiEngine.cta.memoryEngine') }}
            </NuxtLink>
            <NuxtLink to="/projetos/llm-pool-management" class="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-gray-200 rounded-lg transition-colors">
              {{ $t('cases.aiEngine.cta.llmPool') }}
            </NuxtLink>
          </div>
        </div>
      </section>

    </main>

    <!-- Closing Note -->
    <section class="border-t border-gray-800 py-8 mt-12">
      <div class="max-w-4xl mx-auto px-4 text-center text-gray-500 text-sm">
        <p>{{ $t('cases.aiEngine.footer') }}</p>
      </div>
    </section>
  </div>
</template>

<script setup>
import { heroBlocksBySlug } from '~/data/project-heroes'

const heroConfig = heroBlocksBySlug.aiEngine
const { t } = useI18n()

useHead({
  title: t('cases.aiEngine.meta.title'),
  meta: [
    { name: 'description', content: t('cases.aiEngine.meta.description') }
  ]
})
</script>
