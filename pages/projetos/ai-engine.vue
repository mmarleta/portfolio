<template>
  <div class="min-h-screen bg-gray-950 text-gray-100">
    <!-- Header -->
    <header class="border-b border-gray-800 bg-gray-950/80 backdrop-blur-sm sticky top-0 z-50">
      <nav class="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <NuxtLink to="/" class="text-xl font-bold text-emerald-400 hover:text-emerald-300 transition-colors">
          ← Voltar
        </NuxtLink>
      </nav>
    </header>

    <main class="max-w-4xl mx-auto px-6 py-16">
      <!-- Hero -->
      <div class="mb-16">
        <span class="inline-block px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded-full text-sm mb-4">
          Arquitetura de IA
        </span>
        <h1 class="text-4xl md:text-5xl font-bold mb-6">
          AI Conversation Engine
        </h1>
        <p class="text-xl text-gray-400 leading-relaxed">
          Motor de conversação enterprise com LangGraph, máquina de estados determinística 
          e separação explícita entre lógica de negócio e geração de linguagem natural.
        </p>
      </div>

      <!-- Métricas -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        <div class="bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center">
          <div class="text-3xl font-bold text-emerald-400">20+</div>
          <div class="text-sm text-gray-500 mt-1">Nós LangGraph</div>
        </div>
        <div class="bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center">
          <div class="text-3xl font-bold text-emerald-400">8</div>
          <div class="text-sm text-gray-500 mt-1">Estados FSM</div>
        </div>
        <div class="bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center">
          <div class="text-3xl font-bold text-emerald-400">&lt;200ms</div>
          <div class="text-sm text-gray-500 mt-1">Latência p95</div>
        </div>
        <div class="bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center">
          <div class="text-3xl font-bold text-emerald-400">99.9%</div>
          <div class="text-sm text-gray-500 mt-1">Uptime</div>
        </div>
      </div>

      <!-- Problema -->
      <section class="mb-16">
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
          <span class="text-red-400">⚡</span> O Problema
        </h2>
        <div class="bg-gray-900/30 border border-gray-800 rounded-xl p-8">
          <p class="text-gray-300 leading-relaxed mb-4">
            Chatbots tradicionais baseados apenas em LLMs sofrem de um problema fundamental: 
            <strong class="text-white">não-determinismo</strong>. O mesmo input pode gerar outputs diferentes, 
            tornando impossível garantir comportamentos críticos de negócio.
          </p>
          <p class="text-gray-300 leading-relaxed">
            Para um sistema de agendamento médico/odontológico, isso é inaceitável. 
            Um paciente não pode receber confirmações ambíguas ou ter seu horário trocado 
            por uma "alucinação" do modelo.
          </p>
        </div>
      </section>

      <!-- Solução -->
      <section class="mb-16">
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
          <span class="text-emerald-400">✨</span> A Solução
        </h2>
        <div class="space-y-6">
          <div class="bg-gray-900/30 border border-gray-800 rounded-xl p-8">
            <h3 class="text-xl font-semibold text-emerald-400 mb-4">Separação Lógica vs Linguagem</h3>
            <p class="text-gray-300 leading-relaxed mb-4">
              Arquitetura híbrida onde a <strong class="text-white">lógica de negócio é 100% determinística</strong> 
              (máquina de estados) e o LLM é usado apenas para <strong class="text-white">geração de linguagem natural</strong>.
            </p>
            <ul class="space-y-2 text-gray-400">
              <li class="flex items-start gap-2">
                <span class="text-emerald-400 mt-1">→</span>
                <span>FSM decide transições de estado (schedule → confirm → complete)</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-emerald-400 mt-1">→</span>
                <span>LLM renderiza respostas humanizadas a partir de templates</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-emerald-400 mt-1">→</span>
                <span>Zero ambiguidade em operações críticas</span>
              </li>
            </ul>
          </div>

          <div class="bg-gray-900/30 border border-gray-800 rounded-xl p-8">
            <h3 class="text-xl font-semibold text-emerald-400 mb-4">LangGraph Workflow</h3>
            <p class="text-gray-300 leading-relaxed mb-4">
              Grafo de execução com 20+ nós especializados, cada um com responsabilidade única:
            </p>
            <div class="grid md:grid-cols-2 gap-4 text-sm">
              <div class="bg-gray-800/50 rounded-lg p-4">
                <div class="text-emerald-400 font-mono mb-2">semantic_routing</div>
                <p class="text-gray-500">Classificação de intent via embeddings</p>
              </div>
              <div class="bg-gray-800/50 rounded-lg p-4">
                <div class="text-emerald-400 font-mono mb-2">booking_flow_router</div>
                <p class="text-gray-500">FSM de agendamento (SSoT)</p>
              </div>
              <div class="bg-gray-800/50 rounded-lg p-4">
                <div class="text-emerald-400 font-mono mb-2">pricing_fast_lane</div>
                <p class="text-gray-500">Bypass otimizado para consultas de preço</p>
              </div>
              <div class="bg-gray-800/50 rounded-lg p-4">
                <div class="text-emerald-400 font-mono mb-2">booking_response_renderer</div>
                <p class="text-gray-500">Humanização de respostas via LLM</p>
              </div>
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
│                    USER MESSAGE                              │
└─────────────────────────┬───────────────────────────────────┘
                          ▼
┌─────────────────────────────────────────────────────────────┐
│  workflow_hygiene → user_signal_node → semantic_routing     │
│  (TTL/Reset)         (Intent Extract)    (Route Decision)   │
└─────────────────────────┬───────────────────────────────────┘
                          ▼
          ┌───────────────┴───────────────┐
          ▼                               ▼
┌─────────────────────┐       ┌─────────────────────────────┐
│  PRICING FAST LANE  │       │     BOOKING STATE MACHINE   │
│  (Deterministic)    │       │     (FSM - 8 States)        │
│  - RAG Search       │       │     - detect                │
│  - Cache Check      │       │     - discover_slots        │
│  - Direct Response  │       │     - await_selection       │
└─────────┬───────────┘       │     - await_confirmation    │
          │                   │     - completed             │
          │                   └─────────────┬───────────────┘
          │                                 ▼
          │                   ┌─────────────────────────────┐
          │                   │  booking_response_renderer  │
          │                   │  (LLM Humanization)         │
          └───────────────────┴─────────────┬───────────────┘
                                            ▼
                              ┌─────────────────────────────┐
                              │      FINAL RESPONSE         │
                              └─────────────────────────────┘</pre>
        </div>
      </section>

      <!-- Decisões Técnicas -->
      <section class="mb-16">
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
          <span class="text-purple-400">🎯</span> Decisões Técnicas
        </h2>
        <div class="space-y-4">
          <div class="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
            <h3 class="font-semibold text-white mb-2">Por que LangGraph e não chains simples?</h3>
            <p class="text-gray-400 text-sm">
              LangGraph oferece controle granular sobre o fluxo de execução, permitindo 
              conditional edges baseados em estado. Chains são lineares; o booking flow 
              precisa de ramificações complexas (reschedule vs cancel vs new booking).
            </p>
          </div>
          <div class="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
            <h3 class="font-semibold text-white mb-2">Por que FSM separada do LLM?</h3>
            <p class="text-gray-400 text-sm">
              LLMs são probabilísticos. Para garantir que "sim" sempre confirme um agendamento 
              (e não seja interpretado como "talvez"), a decisão é da FSM. O LLM só formata 
              a resposta: "Perfeito! Seu horário está confirmado para..."
            </p>
          </div>
          <div class="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
            <h3 class="font-semibold text-white mb-2">Por que retry policies diferenciadas?</h3>
            <p class="text-gray-400 text-sm">
              Erros transientes (timeout, rate limit) são retriáveis. Erros permanentes 
              (auth, bad request) não são. Isso evita loops infinitos e reduz latência 
              em cenários de falha.
            </p>
          </div>
        </div>
      </section>

      <!-- Stack -->
      <section class="mb-16">
        <h2 class="text-2xl font-bold mb-6">Stack Técnica</h2>
        <div class="flex flex-wrap gap-3">
          <span class="px-4 py-2 bg-gray-800 rounded-lg text-sm">Python 3.12</span>
          <span class="px-4 py-2 bg-gray-800 rounded-lg text-sm">LangGraph</span>
          <span class="px-4 py-2 bg-gray-800 rounded-lg text-sm">LangChain</span>
          <span class="px-4 py-2 bg-gray-800 rounded-lg text-sm">FastAPI</span>
          <span class="px-4 py-2 bg-gray-800 rounded-lg text-sm">OpenAI GPT-4</span>
          <span class="px-4 py-2 bg-gray-800 rounded-lg text-sm">Redis</span>
          <span class="px-4 py-2 bg-gray-800 rounded-lg text-sm">PostgreSQL</span>
          <span class="px-4 py-2 bg-gray-800 rounded-lg text-sm">Prometheus</span>
        </div>
      </section>

      <!-- CTA -->
      <div class="text-center pt-8 border-t border-gray-800">
        <NuxtLink 
          to="/projetos/pricing-intelligence" 
          class="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-500 rounded-lg transition-colors"
        >
          Próximo: Pricing Intelligence →
        </NuxtLink>
      </div>
    </main>
  </div>
</template>
