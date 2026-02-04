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
        <span class="text-gray-500 text-sm">Optimus AI Platform</span>
      </div>
    </header>

    <!-- Hero Section -->
    <section class="py-16 px-4 border-b border-gray-800">
      <div class="max-w-4xl mx-auto">
        <div class="flex items-center gap-3 mb-6">
          <span class="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-sm font-medium">
            Core Service
          </span>
          <span class="px-3 py-1 bg-gray-800 text-gray-400 rounded-full text-sm">
            Arquitetura de IA
          </span>
        </div>
        
        <h1 class="text-4xl md:text-5xl font-bold mb-6">
          AI Conversation
          <span class="text-emerald-400"> Engine</span>
        </h1>
        
        <p class="text-xl text-gray-400 mb-8 leading-relaxed">
          Motor de conversação enterprise que separa lógica determinística de linguagem natural. 
          LangGraph orquestra 20+ nós especializados, FSM de 8 estados garante comportamentos 
          críticos, e Semantic Router decide em &lt;10ms quando o LLM pode ser bypassado.
        </p>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-4 text-center">
            <div class="text-2xl font-bold text-emerald-400">20+</div>
            <div class="text-sm text-gray-500">Nós LangGraph</div>
          </div>
          <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-4 text-center">
            <div class="text-2xl font-bold text-emerald-400">8</div>
            <div class="text-sm text-gray-500">Estados FSM</div>
          </div>
          <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-4 text-center">
            <div class="text-2xl font-bold text-emerald-400">&lt;10ms</div>
            <div class="text-sm text-gray-500">Semantic Routing</div>
          </div>
          <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-4 text-center">
            <div class="text-2xl font-bold text-emerald-400">99.9%</div>
            <div class="text-sm text-gray-500">Uptime</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Navigation -->
    <nav class="sticky top-16 z-40 bg-gray-950/90 backdrop-blur-sm border-b border-gray-800">
      <div class="max-w-4xl mx-auto px-4">
        <div class="flex gap-6 overflow-x-auto py-4 text-sm">
          <a href="#problema" class="text-gray-400 hover:text-emerald-400 whitespace-nowrap transition-colors">Problema</a>
          <a href="#arquitetura" class="text-gray-400 hover:text-emerald-400 whitespace-nowrap transition-colors">Arquitetura</a>
          <a href="#semantic-routing" class="text-gray-400 hover:text-emerald-400 whitespace-nowrap transition-colors">Semantic Routing</a>
          <a href="#fsm" class="text-gray-400 hover:text-emerald-400 whitespace-nowrap transition-colors">Booking FSM</a>
          <a href="#context-composer" class="text-gray-400 hover:text-emerald-400 whitespace-nowrap transition-colors">Context Composer</a>
          <a href="#fast-lane" class="text-gray-400 hover:text-emerald-400 whitespace-nowrap transition-colors">Pricing Fast Lane</a>
          <a href="#reducer" class="text-gray-400 hover:text-emerald-400 whitespace-nowrap transition-colors">Flow Reducer</a>
          <a href="#retry" class="text-gray-400 hover:text-emerald-400 whitespace-nowrap transition-colors">Retry Policies</a>
          <a href="#resultados" class="text-gray-400 hover:text-emerald-400 whitespace-nowrap transition-colors">Resultados</a>
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
            Chatbots baseados puramente em LLMs sofrem de um problema fundamental: 
            <strong class="text-white">não-determinismo</strong>. O mesmo input pode gerar outputs 
            diferentes, e decisões críticas de negócio ficam à mercê de "temperatura" e contexto 
            aleatório.
          </p>
          
          <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-6 my-6">
            <h4 class="text-lg font-semibold text-gray-200 mb-4">Cenários Inaceitáveis</h4>
            <ul class="space-y-3 text-gray-400">
              <li class="flex items-start gap-3">
                <span class="text-red-400 mt-1">✗</span>
                <span><strong class="text-gray-200">"Alucinação de horário":</strong> LLM confirma consulta às 14h quando o usuário disse 15h. Paciente perde consulta, clínica perde receita.</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-red-400 mt-1">✗</span>
                <span><strong class="text-gray-200">"Confirmação ambígua":</strong> Usuário diz "ok", LLM interpreta como confirmação. Mas era "ok, entendi" (acknowledgement), não "ok, confirma".</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-red-400 mt-1">✗</span>
                <span><strong class="text-gray-200">"Intent drift":</strong> Conversa sobre preço vira agendamento sem o usuário pedir. LLM "ajudando demais".</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-red-400 mt-1">✗</span>
                <span><strong class="text-gray-200">"Loop infinito":</strong> LLM chama ferramenta, falha, chama de novo, falha... até timeout ou custo explodir.</span>
              </li>
            </ul>
          </div>

          <p class="text-gray-300 leading-relaxed">
            Para um sistema de agendamento médico/odontológico enterprise, isso é inaceitável. 
            A solução não é "melhorar o prompt" — é separar o que precisa ser determinístico 
            (decisões de negócio) do que pode ser probabilístico (geração de linguagem natural).
          </p>
        </div>
      </section>

      <!-- Arquitetura -->
      <section id="arquitetura" class="mb-16">
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
          <span class="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center text-emerald-400">🏗️</span>
          Arquitetura Híbrida
        </h2>

        <div class="prose prose-invert max-w-none">
          <p class="text-gray-300 leading-relaxed mb-6">
            O AI Engine implementa uma arquitetura híbrida onde a <strong class="text-white">lógica de negócio 
            é 100% determinística</strong> (FSM + regras) e o LLM é usado apenas para 
            <strong class="text-white">tarefas onde criatividade é desejável</strong> (humanização, clarificação).
          </p>

          <!-- Architecture Diagram -->
          <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-6 my-6">
            <h4 class="text-lg font-semibold text-gray-200 mb-4 text-center">Fluxo de Execução</h4>
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
           [Alta Confiança]                        [Baixa Confiança]
                    │                                       │
                    ▼                                       ▼
┌───────────────────────────────┐       ┌─────────────────────────────────────┐
│     BYPASS LLM (Fast Path)    │       │   structured_analysis_node (LLM)    │
│     ~40% das requests         │       │   Intent + Entities Extraction      │
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

          <h3 class="text-xl font-semibold text-gray-200 mt-8 mb-4">LangGraph: Por que não chains simples?</h3>

          <div class="bg-gray-900 rounded-lg overflow-hidden mb-6">
            <div class="bg-gray-800 px-4 py-2 text-sm text-gray-400 font-mono">graph_builder.py</div>
            <pre class="p-4 overflow-x-auto text-sm"><code class="text-gray-300"># LangGraph oferece controle granular sobre fluxo
graph = StateGraph(
    state_schema=ConversationState,  # Estado tipado
    context_schema=ContextSchema,    # Contexto injetado
)

# Conditional edges baseados em estado
graph.add_conditional_edges(
    "semantic_routing",
    lambda state: route_by_intent(state),  # Função pura
    {
        "pricing": "pricing_fast_lane",
        "appointment": "booking_flow_router",
        "information": "agent_node",
        "greeting": "format_response",
    }
)

# RetryPolicy diferenciada por tipo de erro
retry_policy = RetryPolicy(
    max_attempts=3,
    initial_interval=0.5,
    backoff_factor=2.0,
    retry_on=TRANSIENT_EXCEPTIONS,  # Só transient!
)</code></pre>
          </div>

          <p class="text-gray-300 leading-relaxed">
            Chains são lineares — entrada → processamento → saída. Booking flow precisa de 
            ramificações complexas: usuário pode cancelar no meio de um reschedule, pedir 
            clarificação, ou escalar para humano a qualquer momento. LangGraph permite 
            modelar isso como um grafo real.
          </p>
        </div>
      </section>

      <!-- Semantic Routing -->
      <section id="semantic-routing" class="mb-16">
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
          <span class="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center text-purple-400">🎯</span>
          Semantic Routing
        </h2>

        <div class="prose prose-invert max-w-none">
          <p class="text-gray-300 leading-relaxed mb-6">
            Antes de chamar o LLM para análise estruturada (caro, ~200ms), o Semantic Router 
            tenta classificar o intent via embeddings (barato, &lt;10ms). Se a confiança for 
            alta, bypassa o LLM completamente.
          </p>

          <div class="bg-gray-900 rounded-lg overflow-hidden mb-6">
            <div class="bg-gray-800 px-4 py-2 text-sm text-gray-400 font-mono">semantic_routing.py</div>
            <pre class="p-4 overflow-x-auto text-sm"><code class="text-gray-300">async def semantic_routing_node(state: dict, service: Any, config: Any):
    """
    Roteamento Semântico (Pre-LLM).
    
    1. Verifica flags Priority-0 (Booking/Handover) → Se sim, ignora semantic
    2. Chama SemanticRouter.classify() via embeddings
    3. Se Alta Confiança:
       a. Cria structured_analysis sintético
       b. Valida via RoutingDecisionEngine (Policies/Circuit Breaker)
       c. Define routing_decision + fast_path_taken=True
    4. Se Baixa Confiança: adiciona hints, segue para LLM
    """
    
    # Priority-0: estados determinísticos têm prioridade absoluta
    pending_action = state.get("pending_action", "")
    if pending_action.startswith("confirm_"):
        # Usuário está confirmando algo - não reclassificar
        return {"skip_semantic": True, "reason": "pending_confirmation"}
    
    # Classificação via embeddings (~7ms p95)
    result = await semantic_router.classify(
        text=user_message,
        hybrid_alpha=0.7,        # 70% embedding, 30% keyword
        abstain_threshold=0.55,  # Abaixo disso → vai pro LLM
        bias_weight=0.03,        # Boost para intents prioritários
    )
    
    if result.confidence >= 0.85:
        # Alta confiança: bypass LLM
        return {
            "routing_decision": result.route,
            "fast_path_taken": True,
            "semantic_confidence": result.confidence,
        }
    else:
        # Baixa confiança: hints para o LLM
        return {
            "semantic_hints": result.top_routes,
            "fast_path_taken": False,
        }</code></pre>
          </div>

          <h3 class="text-xl font-semibold text-gray-200 mt-8 mb-4">Hybrid Alpha: Embeddings + Keywords</h3>

          <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-6 my-6">
            <p class="text-gray-400 mb-4">
              Embeddings puros falham em casos onde palavras-chave são críticas (ex: "cancelar" vs 
              "gostaria de remarcar"). O Semantic Router usa classificação híbrida:
            </p>
            <div class="font-mono text-sm bg-gray-800 rounded p-4">
              <span class="text-purple-400">score_final</span> = 
              <span class="text-emerald-400">0.7</span> × embedding_similarity + 
              <span class="text-emerald-400">0.3</span> × keyword_match
            </div>
            <p class="text-gray-500 text-sm mt-4">
              Configurável via env: <code>SEMANTIC_ROUTER_HYBRID_ALPHA=0.7</code>
            </p>
          </div>

          <div class="grid md:grid-cols-3 gap-4 my-6">
            <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
              <h4 class="font-semibold text-purple-400 mb-2">HYBRID_ALPHA</h4>
              <p class="text-sm text-gray-400">0.7 = 70% embeddings. Valores menores priorizam keywords.</p>
            </div>
            <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
              <h4 class="font-semibold text-purple-400 mb-2">ABSTAIN_THRESHOLD</h4>
              <p class="text-sm text-gray-400">0.55 = confiança mínima. Abaixo disso, passa pro LLM.</p>
            </div>
            <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
              <h4 class="font-semibold text-purple-400 mb-2">BIAS_WEIGHT</h4>
              <p class="text-sm text-gray-400">0.03 = boost para intents críticos (booking > greeting).</p>
            </div>
          </div>

          <div class="bg-green-500/10 border border-green-500/30 rounded-lg p-4 my-6">
            <h4 class="font-semibold text-green-400 mb-2">✓ Resultado</h4>
            <p class="text-sm text-gray-300">
              ~40% das requests são classificadas com alta confiança e bypassam o LLM completamente. 
              Economia de ~$0.002/request × 40% = redução significativa de custo OpenAI.
            </p>
          </div>
        </div>
      </section>

      <!-- Booking FSM -->
      <section id="fsm" class="mb-16">
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
          <span class="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-400">🔄</span>
          Booking State Machine
        </h2>

        <div class="prose prose-invert max-w-none">
          <p class="text-gray-300 leading-relaxed mb-6">
            O coração do booking flow é uma FSM (Finite State Machine) que define exatamente 
            quais transições são válidas. Não importa o que o LLM "ache" — se a transição não 
            está na tabela, não acontece.
          </p>

          <!-- FSM Diagram -->
          <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-6 my-6">
            <h4 class="text-lg font-semibold text-gray-200 mb-4 text-center">Estados e Transições</h4>
            <div class="font-mono text-xs overflow-x-auto">
              <pre class="text-gray-400 leading-relaxed">
                                    ┌──────────┐
                                    │  detect  │
                                    └────┬─────┘
                    ┌───────────────────┼───────────────────┐
                    ▼                   ▼                   ▼
          ┌─────────────────┐  ┌───────────────┐  ┌──────────────────┐
          │ discover_booking│  │ discover_slots│  │  clarification   │
          │ (busca existing)│  │ (busca slots) │  │ (pede detalhes)  │
          └────────┬────────┘  └───────┬───────┘  └────────┬─────────┘
                   │                   │                   │
                   └─────────┬─────────┘                   │
                             ▼                             │
                   ┌─────────────────────┐                 │
                   │   await_selection   │◄────────────────┘
                   │ (múltiplas opções)  │
                   └──────────┬──────────┘
                              ▼
                   ┌─────────────────────┐
                   │ await_confirmation  │
                   │ (usuário confirma)  │
                   └──────────┬──────────┘
                              │
              ┌───────────────┼───────────────┐
              ▼               ▼               ▼
        ┌───────────┐  ┌────────────┐  ┌─────────────┐
        │ completed │  │  handover  │  │ (back loop) │
        │ (sucesso) │  │ (humano)   │  │             │
        └───────────┘  └────────────┘  └─────────────┘</pre>
            </div>
          </div>

          <h3 class="text-xl font-semibold text-gray-200 mt-8 mb-4">Transições Válidas (SSoT)</h3>

          <div class="bg-gray-900 rounded-lg overflow-hidden mb-6">
            <div class="bg-gray-800 px-4 py-2 text-sm text-gray-400 font-mono">booking_fsm_contract.py</div>
            <pre class="p-4 overflow-x-auto text-sm"><code class="text-gray-300"># Single Source of Truth para transições
FSM_TRANSITIONS = {
    "detect": {
        "discover_booking",   # Buscar agendamento existente
        "discover_slots",     # Buscar horários disponíveis
        "await_confirmation", # Confirmação direta
        "clarification",      # Pedir mais detalhes
        "handover",           # Escalar para humano
    },
    "discover_booking": {
        "await_selection",    # Múltiplos encontrados
        "discover_slots",     # Precisa de slots
        "await_confirmation", # Único encontrado
        "clarification",      # Precisa de detalhes
        "handover",
    },
    "discover_slots": {
        "await_selection",    # Múltiplos slots
        "await_confirmation", # Slot único
        "clarification",
        "handover",
    },
    "await_selection": {
        "await_confirmation", # Usuário selecionou
        "discover_slots",     # Nova busca
        "discover_booking",   # Mudar booking
        "handover",
    },
    "await_confirmation": {
        "completed",          # ✅ ERP executado
        "discover_slots",     # Usuário mudou de ideia
        "discover_booking",
        "handover",
    },
    # Estados terminais
    "completed": {"completed", "handover"},
    "handover": {"handover"},
}

def is_valid_transition(from_state: str, to_state: str) -> bool:
    """Valida se transição é permitida."""
    return to_state in FSM_TRANSITIONS.get(from_state, set())</code></pre>
          </div>

          <h3 class="text-xl font-semibold text-gray-200 mt-8 mb-4">Operações Suportadas</h3>

          <div class="grid md:grid-cols-3 gap-4 my-6">
            <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
              <h4 class="font-semibold text-blue-400 mb-2">schedule</h4>
              <p class="text-sm text-gray-400">Novo agendamento. Busca slots → seleção → confirmação → ERP create.</p>
            </div>
            <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
              <h4 class="font-semibold text-yellow-400 mb-2">reschedule</h4>
              <p class="text-sm text-gray-400">Remarcar existente. Busca booking → slots → confirmação → ERP update.</p>
            </div>
            <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
              <h4 class="font-semibold text-red-400 mb-2">cancel</h4>
              <p class="text-sm text-gray-400">Cancelar existente. Busca booking → confirmação → ERP delete.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Context Composer -->
      <section id="context-composer" class="mb-16">
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
          <span class="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center text-cyan-400">📝</span>
          Context Composer (ECA)
        </h2>

        <div class="prose prose-invert max-w-none">
          <p class="text-gray-300 leading-relaxed mb-6">
            O Context Composer implementa a Enhanced Context Architecture (ECA) — um sistema 
            de montagem de contexto determinístico que busca dados de múltiplas fontes, aplica 
            budget de tokens, e formata em blocos ordenados para o LLM.
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
        1. IDENTITY - quem é o assistente
        2. RULES - regras de negócio do tenant  
        3. INPUT - mensagem do usuário
        
        Truncatable (em ordem de prioridade):
        4. MEMORY - memória do cliente
        5. HANDOVER - contexto de handover
        6. FOCUS - contexto focado (RAG results)
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

          <h3 class="text-xl font-semibold text-gray-200 mt-8 mb-4">Budget Management</h3>

          <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-6 my-6">
            <p class="text-gray-400 mb-4">
              Com contexto de 1200 tokens e múltiplas fontes, é fácil estourar o budget. 
              O Context Composer usa truncation inteligente:
            </p>
            <ul class="space-y-2 text-gray-400">
              <li class="flex items-start gap-3">
                <span class="text-cyan-400 mt-1">1.</span>
                <span><strong class="text-gray-200">Blocos intocáveis:</strong> IDENTITY, RULES, INPUT nunca são truncados</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-cyan-400 mt-1">2.</span>
                <span><strong class="text-gray-200">Compressão semântica:</strong> MEMORY pode ser comprimido (90% redução via Memory Engine)</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-cyan-400 mt-1">3.</span>
                <span><strong class="text-gray-200">Truncation por prioridade:</strong> FOCUS (RAG) é truncado primeiro se necessário</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Pricing Fast Lane -->
      <section id="fast-lane" class="mb-16">
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
          <span class="w-8 h-8 bg-yellow-500/20 rounded-lg flex items-center justify-center text-yellow-400">⚡</span>
          Pricing Fast Lane
        </h2>

        <div class="prose prose-invert max-w-none">
          <p class="text-gray-300 leading-relaxed mb-6">
            Consultas de preço são o caso de uso mais comum (~35% das mensagens) e têm um padrão 
            previsível: busca RAG + formatação. O Pricing Fast Lane executa isso diretamente, 
            sem passar pelo agent_node (que faz iterações LLM caras).
          </p>

          <div class="bg-gray-900 rounded-lg overflow-hidden mb-6">
            <div class="bg-gray-800 px-4 py-2 text-sm text-gray-400 font-mono">pricing_fast_lane.py</div>
            <pre class="p-4 overflow-x-auto text-sm"><code class="text-gray-300"># ==============================================================================
# 🔧 NOTA SOBRE TOOL BUDGET (Tech Lead Review)
# ==============================================================================
# Este módulo (pricing_fast_lane) NÃO está sujeito ao tool_budget porque:
# 1. É um caminho OTIMIZADO que executa tool diretamente
# 2. É DETERMINÍSTICO - não entra em loop de iterações
# 3. O tool_budget é para controlar ITERAÇÕES do agente
# 4. Se o fast lane falha, termina sem handover
# ==============================================================================

async def pricing_fast_lane_node(state: dict, service: Any, config: Any):
    """
    Caminho otimizado para consultas de preço.
    
    Fluxo:
    1. Check cache (intelligent_cache_service)
    2. Se miss: RAG search via docling_semantic_search_tool
    3. Formata resposta diretamente (sem LLM)
    4. Retorna com fast_lane_executed=True
    """
    # Intelligent cache com coalescing
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
            <h4 class="font-semibold text-yellow-400 mb-2">⚡ Resultado</h4>
            <p class="text-sm text-gray-300">
              Fast lane reduz latência de ~2s (agent iteration) para ~200ms (RAG direto). 
              Cache hit: &lt;50ms. Sem custo de tokens LLM para ~35% das requests.
            </p>
          </div>
        </div>
      </section>

      <!-- Booking Flow Reducer -->
      <section id="reducer" class="mb-16">
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
          <span class="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center text-green-400">🔒</span>
          Booking Flow Reducer
        </h2>

        <div class="prose prose-invert max-w-none">
          <p class="text-gray-300 leading-relaxed mb-6">
            O Reducer é o guardião do booking_flow state. Todo update passa por ele, que valida 
            whitelist de sources, monotonicity de turn_seq, e transições válidas. Se algo violar 
            as invariantes, o update é rejeitado.
          </p>

          <div class="bg-gray-900 rounded-lg overflow-hidden mb-6">
            <div class="bg-gray-800 px-4 py-2 text-sm text-gray-400 font-mono">booking_flow_reducer.py</div>
            <pre class="p-4 overflow-x-auto text-sm"><code class="text-gray-300"># Whitelist de sources permitidos
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

          <h3 class="text-xl font-semibold text-gray-200 mt-8 mb-4">Por que Reducer?</h3>

          <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-6 my-6">
            <ul class="space-y-3 text-gray-400">
              <li class="flex items-start gap-3">
                <span class="text-green-400 mt-1">✓</span>
                <span><strong class="text-gray-200">Previne race conditions:</strong> Múltiplos nós podem tentar atualizar o state simultaneamente. Reducer serializa e valida.</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-green-400 mt-1">✓</span>
                <span><strong class="text-gray-200">Auditoria:</strong> Cada update é logado com source, turn_seq, e transição. Facilita debugging.</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-green-400 mt-1">✓</span>
                <span><strong class="text-gray-200">Métricas:</strong> Prometheus counters para updates e rejections por reason.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Retry Policies -->
      <section id="retry" class="mb-16">
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
          <span class="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center text-orange-400">🔁</span>
          Retry Policies
        </h2>

        <div class="prose prose-invert max-w-none">
          <p class="text-gray-300 leading-relaxed mb-6">
            Nem todo erro merece retry. Erros transientes (timeout, rate limit) são retriáveis. 
            Erros permanentes (auth failure, bad request) não são — retry só gasta tempo e dinheiro.
          </p>

          <div class="bg-gray-900 rounded-lg overflow-hidden mb-6">
            <div class="bg-gray-800 px-4 py-2 text-sm text-gray-400 font-mono">graph_builder.py</div>
            <pre class="p-4 overflow-x-auto text-sm"><code class="text-gray-300"># SOTA FIX (Dezembro 2025): Transient vs Permanent Exceptions

TRANSIENT_EXCEPTIONS = (
    httpx.TimeoutException,
    httpx.ConnectError,
    httpx.ReadTimeout,
    openai.APIConnectionError,
    openai.RateLimitError,       # Retriável com backoff
    openai.APITimeoutError,
    ConnectionError,
    TimeoutError,
    asyncio.TimeoutError,
)

# Permanent exceptions should NOT be retried
PERMANENT_EXCEPTIONS = (
    openai.AuthenticationError,   # API key inválida
    openai.BadRequestError,       # Prompt malformado
    openai.PermissionDeniedError, # Sem permissão
    ValueError,
    TypeError,
    KeyError,
)

# RetryPolicy usa whitelist (retry_on), não blacklist
retry_policy = RetryPolicy(
    max_attempts=3,
    initial_interval=0.5,         # 500ms
    backoff_factor=2.0,           # 500ms → 1s → 2s
    retry_on=TRANSIENT_EXCEPTIONS,
)</code></pre>
          </div>

          <div class="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4 my-6">
            <h4 class="font-semibold text-orange-400 mb-2">⚠️ Por que whitelist e não blacklist?</h4>
            <p class="text-sm text-gray-300">
              Blacklist é perigosa: se um novo tipo de erro permanente aparecer (ex: nova exception 
              do OpenAI SDK), ele seria retriado por default. Whitelist é fail-safe: só retria o 
              que conhecemos como transiente.
            </p>
          </div>
        </div>
      </section>

      <!-- Results -->
      <section id="resultados" class="mb-16">
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
          <span class="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center text-emerald-400">📊</span>
          Resultados
        </h2>

        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 rounded-lg p-6">
            <div class="text-3xl font-bold text-emerald-400 mb-2">~40%</div>
            <div class="text-gray-400">Requests bypassam LLM via Semantic Routing</div>
          </div>
          <div class="bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 rounded-lg p-6">
            <div class="text-3xl font-bold text-emerald-400 mb-2">&lt;10ms</div>
            <div class="text-gray-400">Classificação via embeddings (p95)</div>
          </div>
          <div class="bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 rounded-lg p-6">
            <div class="text-3xl font-bold text-emerald-400 mb-2">0</div>
            <div class="text-gray-400">Transições inválidas de FSM em produção</div>
          </div>
          <div class="bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 rounded-lg p-6">
            <div class="text-3xl font-bold text-emerald-400 mb-2">~200ms</div>
            <div class="text-gray-400">Pricing Fast Lane (vs ~2s agent)</div>
          </div>
        </div>

        <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-6 mt-8">
          <h3 class="text-xl font-semibold text-gray-200 mb-4">Decisões Técnicas Chave</h3>
          <ul class="space-y-3 text-gray-400">
            <li class="flex items-start gap-3">
              <span class="text-emerald-400 mt-1">→</span>
              <span><strong class="text-gray-200">FSM separada do LLM:</strong> Decisões de negócio são determinísticas. LLM só humaniza.</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="text-emerald-400 mt-1">→</span>
              <span><strong class="text-gray-200">Semantic routing pre-LLM:</strong> Classificação barata antes de gastar tokens.</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="text-emerald-400 mt-1">→</span>
              <span><strong class="text-gray-200">Reducer com whitelist:</strong> Só sources autorizados atualizam estado crítico.</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="text-emerald-400 mt-1">→</span>
              <span><strong class="text-gray-200">Retry com whitelist:</strong> Só transient exceptions são retriadas.</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="text-emerald-400 mt-1">→</span>
              <span><strong class="text-gray-200">Fast lanes para padrões conhecidos:</strong> Pricing não precisa de iteração LLM.</span>
            </li>
          </ul>
        </div>
      </section>

      <!-- Tech Stack -->
      <section class="mb-16">
        <h2 class="text-2xl font-bold mb-6">Stack Técnico</h2>
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
          <h2 class="text-2xl font-bold mb-4">Explore Outros Case Studies</h2>
          <p class="text-gray-400 mb-8">Veja como outros componentes do Optimus foram construídos</p>
          <div class="flex flex-wrap justify-center gap-4">
            <NuxtLink to="/projetos/rules-engine" class="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-gray-200 rounded-lg transition-colors">
              Rules Engine →
            </NuxtLink>
            <NuxtLink to="/projetos/memory-engine" class="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-gray-200 rounded-lg transition-colors">
              Memory Engine →
            </NuxtLink>
            <NuxtLink to="/projetos/llm-pool-management" class="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-gray-200 rounded-lg transition-colors">
              LLM Pool Management →
            </NuxtLink>
          </div>
        </div>
      </section>

    </main>

    <!-- Footer -->
    <footer class="border-t border-gray-800 py-8 mt-12">
      <div class="max-w-4xl mx-auto px-4 text-center text-gray-500 text-sm">
        <p>Case Study: AI Conversation Engine — Optimus AI Platform</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
useHead({
  title: 'AI Conversation Engine - Optimus AI | Marcelo Marleta',
  meta: [
    { name: 'description', content: 'Case study: Motor de conversação enterprise com LangGraph, FSM de 8 estados, Semantic Routing sub-10ms, e separação entre lógica determinística e linguagem natural.' }
  ]
})
</script>
