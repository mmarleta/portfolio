<template>
  <div class="min-h-screen bg-gray-950 text-gray-100">
    <!-- Hero Section -->
    <section class="relative py-20 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-emerald-950/50 via-gray-950 to-gray-950"></div>
      <div class="absolute top-20 left-10 w-72 h-72 bg-green-500/10 rounded-full blur-3xl"></div>
      <div class="absolute bottom-10 right-10 w-96 h-96 bg-green-600/5 rounded-full blur-3xl"></div>
      
      <div class="container mx-auto px-6 relative z-10">
        <NuxtLink to="/" class="inline-flex items-center text-emerald-400 hover:text-emerald-300 mb-8 transition-colors">
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
          Voltar ao Portfolio
        </NuxtLink>
        
        <div class="flex items-center gap-4 mb-6">
          <span class="px-4 py-2 bg-green-500/20 text-green-400 rounded-full text-sm font-medium border border-green-500/30">
            Optimus Platform
          </span>
          <span class="px-4 py-2 bg-gray-800 text-gray-300 rounded-full text-sm">
            Messaging Infrastructure
          </span>
        </div>
        
        <h1 class="text-5xl md:text-6xl font-bold mb-6">
          <span class="bg-gradient-to-r from-green-400 via-green-300 to-emerald-400 bg-clip-text text-transparent">
            WhatsApp Integration
          </span>
        </h1>
        
        <p class="text-xl text-gray-400 max-w-3xl mb-8">
          Serviço enterprise para WhatsApp com Message Aggregator inteligente,
          Redis isolado, graceful degradation e integração bidirecional com Evolution API.
        </p>

        <div class="flex flex-wrap gap-3">
          <span class="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300">Message Aggregator</span>
          <span class="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300">5s Debounce</span>
          <span class="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300">Evolution API</span>
          <span class="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300">Redis Isolado</span>
          <span class="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300">Graceful Degradation</span>
          <span class="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300">WebSocket</span>
        </div>
      </div>
    </section>

    <!-- O Problema das Mensagens Fragmentadas -->
    <section class="py-16 border-t border-gray-800">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold mb-8 text-red-400">O Problema: "Split Messages" do WhatsApp</h2>
        
        <div class="grid md:grid-cols-2 gap-8 mb-12">
          <!-- O Problema -->
          <div class="bg-red-950/20 rounded-xl p-6 border border-red-900/30">
            <h3 class="text-xl font-bold mb-4 text-red-400">❌ Comportamento Natural dos Usuários</h3>
            
            <div class="bg-gray-900 rounded-lg p-4 mb-4">
              <div class="space-y-2 text-sm text-gray-300 font-mono">
                <div class="flex gap-2"><span class="text-gray-500">[14:32:01]</span> "Oi"</div>
                <div class="flex gap-2"><span class="text-gray-500">[14:32:03]</span> "tudo bem?"</div>
                <div class="flex gap-2"><span class="text-gray-500">[14:32:07]</span> "queria agendar"</div>
                <div class="flex gap-2"><span class="text-gray-500">[14:32:12]</span> "uma consulta"</div>
                <div class="flex gap-2"><span class="text-gray-500">[14:32:15]</span> "pra amanhã às 10h"</div>
              </div>
            </div>
            
            <p class="text-gray-400 text-sm mb-4">
              Usuários enviam pensamentos fragmentados em múltiplas mensagens rápidas.
              Isso é <strong class="text-red-300">comportamento normal</strong> no WhatsApp.
            </p>
            
            <h4 class="text-red-300 font-bold mb-2">Sem Agregação (caos):</h4>
            <ul class="space-y-2 text-gray-400 text-sm">
              <li class="flex items-start gap-2">
                <span class="text-red-400 mt-1">⚠️</span>
                <span>5 chamadas à API de IA para UMA intenção</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-red-400 mt-1">⚠️</span>
                <span>5 respostas confusas ("Oi!", "Bem!", "Agendar o quê?"...)</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-red-400 mt-1">⚠️</span>
                <span>Custo de tokens 5x maior</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-red-400 mt-1">⚠️</span>
                <span>UX horrível para o cliente</span>
              </li>
            </ul>
          </div>

          <!-- A Solução -->
          <div class="bg-green-950/20 rounded-xl p-6 border border-green-900/30">
            <h3 class="text-xl font-bold mb-4 text-green-400">✅ Message Aggregator (5s Debounce)</h3>
            
            <div class="bg-gray-900 rounded-lg p-4 mb-4">
              <div class="space-y-2 text-sm text-gray-300 font-mono">
                <div class="text-gray-500">// Mensagens recebidas em 14s...</div>
                <div class="text-green-400">// Agregadas em UMA mensagem:</div>
                <div class="mt-2">"Oi, tudo bem? Queria agendar uma consulta pra amanhã às 10h"</div>
              </div>
            </div>
            
            <p class="text-gray-400 text-sm mb-4">
              O Message Aggregator espera 5 segundos após cada mensagem.
              Se o usuário continua digitando, <strong class="text-green-300">estende o timeout</strong>.
            </p>
            
            <h4 class="text-green-300 font-bold mb-2">Com Agregação (elegante):</h4>
            <ul class="space-y-2 text-gray-400 text-sm">
              <li class="flex items-start gap-2">
                <span class="text-green-400 mt-1">✓</span>
                <span>1 chamada à API de IA com contexto completo</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-green-400 mt-1">✓</span>
                <span>1 resposta precisa ("Perfeito! Agendei para amanhã 10h.")</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-green-400 mt-1">✓</span>
                <span>Custo de tokens 5x menor</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-green-400 mt-1">✓</span>
                <span>UX natural e fluida</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Diagrama do Aggregator -->
        <div class="bg-gray-900/50 rounded-xl p-8 border border-gray-800">
          <h3 class="text-xl font-bold mb-6 text-green-400">📊 Fluxo do Message Aggregator</h3>
          
          <pre class="text-sm text-green-400 overflow-x-auto"><code>┌─────────────────────────────────────────────────────────────────────────┐
│                    Message Aggregator Timeline                           │
└─────────────────────────────────────────────────────────────────────────┘

  Mensagem 1        Mensagem 2        Mensagem 3        Timeout
      │                 │                 │                 │
      ▼                 ▼                 ▼                 ▼
   ┌──────┐          ┌──────┐          ┌──────┐          ┌──────┐
   │ "Oi" │          │"bem?"│          │"10h" │          │ENVIAR│
   └──┬───┘          └──┬───┘          └──┬───┘          └──┬───┘
      │                 │                 │                 │
      │    5s timer     │    RESET!       │    RESET!       │
      │────────────────▶│────────────────▶│────────────────▶│
      │                 │                 │                 │
      │         Timer estendido     Timer estendido    Timer expirou
      │                 │                 │                 │
      └─────────────────┴─────────────────┴─────────────────┘
                                                           │
                              ┌─────────────────────────────┘
                              │
                              ▼
                   ┌─────────────────────┐
                   │ Mensagem Agregada:  │
                   │ "Oi bem? 10h"       │
                   │                     │
                   │ → Backend Orch.     │
                   │ → AI Engine         │
                   └─────────────────────┘

┌─────────────────────────────────────────────────────────────────────────┐
│  CONFIG: MESSAGE_DEBOUNCE_SECONDS=5                                     │
│          AGGREGATOR_MAX_TIMEOUT_SECONDS=30                              │
│          AGGREGATOR_MAX_MESSAGES_PER_AGGREGATION=10                     │
└─────────────────────────────────────────────────────────────────────────┘</code></pre>
        </div>
      </div>
    </section>

    <!-- Typing Detection -->
    <section class="py-16 border-t border-gray-800 bg-gray-900/30">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold mb-8">🔄 Typing Detection: O Segredo da Fluidez</h2>
        
        <div class="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <p class="text-gray-400 mb-6">
              O WhatsApp envia eventos de "digitando..." via webhook. O Message Aggregator
              usa isso para <strong class="text-green-400">estender o timeout inteligentemente</strong>.
            </p>
            
            <div class="bg-gray-900 rounded-xl p-6 border border-gray-800 mb-6">
              <h4 class="text-green-400 font-bold mb-4">Cenário Real:</h4>
              <ol class="space-y-3 text-gray-400 text-sm">
                <li class="flex gap-3">
                  <span class="text-green-400 font-mono">t=0</span>
                  <span>Usuário envia "Oi" → timer 5s inicia</span>
                </li>
                <li class="flex gap-3">
                  <span class="text-green-400 font-mono">t=3</span>
                  <span>Webhook: "usuário digitando" → timer pausado</span>
                </li>
                <li class="flex gap-3">
                  <span class="text-green-400 font-mono">t=8</span>
                  <span>Usuário envia "quero agendar" → timer 5s reinicia</span>
                </li>
                <li class="flex gap-3">
                  <span class="text-green-400 font-mono">t=13</span>
                  <span>Sem typing, timer expira → mensagem agregada enviada</span>
                </li>
              </ol>
            </div>

            <div class="bg-green-950/20 rounded-lg p-4 border border-green-900/30">
              <p class="text-green-400 text-sm">
                <strong>Resultado:</strong> O usuário pode digitar no seu ritmo natural.
                O sistema "espera" inteligentemente até ele terminar o pensamento completo.
              </p>
            </div>
          </div>

          <div class="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
            <h4 class="text-green-400 font-bold mb-4">Limites de Segurança</h4>
            
            <div class="space-y-4">
              <div class="flex justify-between items-center p-3 bg-gray-900 rounded-lg">
                <span class="text-gray-400">Max Timeout Total</span>
                <span class="text-green-400 font-mono">30 segundos</span>
              </div>
              <div class="flex justify-between items-center p-3 bg-gray-900 rounded-lg">
                <span class="text-gray-400">Max Mensagens por Agregação</span>
                <span class="text-green-400 font-mono">10 mensagens</span>
              </div>
              <div class="flex justify-between items-center p-3 bg-gray-900 rounded-lg">
                <span class="text-gray-400">Debounce Base</span>
                <span class="text-green-400 font-mono">5 segundos</span>
              </div>
            </div>
            
            <p class="text-gray-500 text-sm mt-4">
              Esses limites previnem DoS e garantem que mensagens não fiquem
              "presas" indefinidamente se o usuário ficar digitando sem parar.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Redis Isolado -->
    <section class="py-16 border-t border-gray-800">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold mb-8">🔒 Redis Isolado: Separação de Tráfego</h2>
        
        <p class="text-gray-400 mb-8 max-w-3xl">
          WhatsApp gera <strong class="text-green-400">muito tráfego de webhook</strong> - 
          broadcasts para milhares de usuários, confirmações de leitura, status de delivery.
          Misturar isso com o Redis principal é receita para disaster.
        </p>

        <div class="bg-gray-900/50 rounded-xl p-8 border border-gray-800 mb-8">
          <pre class="text-sm text-green-400 overflow-x-auto"><code>┌─────────────────────────────────────────────────────────────────┐
│                   REDIS ISOLATED ARCHITECTURE                    │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  🔴 Redis Principal (Porta 6379/6380)                           │
│  ├─ AI Engine          ✅ Cache de conversas                    │
│  ├─ Backend Orchestrator ✅ Rate limiting, cache                │
│  ├─ Memory Engine      ✅ Hot/Warm storage                      │
│  ├─ Rules Engine       ✅ Cache de regras                       │
│  └─ Celery Workers     ✅ Task queues                           │
│                                                                 │
│  🟢 Redis WhatsApp (Porta 6382) - ISOLADO                       │
│  └─ WhatsApp Integration ONLY                                   │
│      ├─ Message buffers (agregação)                             │
│      ├─ Typing state tracking                                   │
│      ├─ Webhook deduplication                                   │
│      ├─ Instance → Tenant mapping                               │
│      └─ Delivery status cache                                   │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘

⚡ Benefícios:
   • WhatsApp broadcast não afeta cache de conversas
   • Falha no Redis WhatsApp não derruba sistema principal
   • Métricas separadas para debugging
   • Escala independente se necessário</code></pre>
        </div>

        <div class="grid md:grid-cols-3 gap-6">
          <div class="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
            <div class="text-3xl mb-4">🛡️</div>
            <h3 class="text-lg font-bold mb-3 text-green-400">Isolamento de Falhas</h3>
            <p class="text-gray-400 text-sm">
              Se Redis WhatsApp cair ou ficar lento, o sistema principal 
              (AI, Memory, Rules) continua funcionando normalmente.
            </p>
          </div>

          <div class="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
            <div class="text-3xl mb-4">📊</div>
            <h3 class="text-lg font-bold mb-3 text-green-400">Métricas Separadas</h3>
            <p class="text-gray-400 text-sm">
              Monitoring independente: latência do Redis WhatsApp não polui
              métricas do sistema core. Debug mais fácil.
            </p>
          </div>

          <div class="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
            <div class="text-3xl mb-4">📈</div>
            <h3 class="text-lg font-bold mb-3 text-green-400">Escala Independente</h3>
            <p class="text-gray-400 text-sm">
              Alta demanda de WhatsApp? Escala só o Redis WhatsApp.
              Não precisa mexer na infra principal.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Graceful Degradation -->
    <section class="py-16 border-t border-gray-800 bg-gray-900/30">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold mb-8">⚡ Graceful Degradation: Sistema que não cai</h2>
        
        <p class="text-gray-400 mb-8 max-w-3xl">
          Sob alta carga, o sistema <strong class="text-green-400">degrada features não-essenciais</strong>
          para manter o core funcionando. Níveis configuráveis de degradação.
        </p>

        <div class="grid md:grid-cols-3 gap-6 mb-12">
          <div class="bg-green-950/20 rounded-xl p-6 border border-green-900/30">
            <div class="text-green-400 font-bold text-sm mb-2">NORMAL</div>
            <h3 class="text-lg font-bold mb-3 text-white">Usuários &lt; 500</h3>
            <ul class="space-y-2 text-gray-400 text-sm">
              <li>✅ Full aggregation (5s)</li>
              <li>✅ Typing detection ativo</li>
              <li>✅ WebSocket real-time</li>
              <li>✅ Todas as features</li>
            </ul>
          </div>

          <div class="bg-yellow-950/20 rounded-xl p-6 border border-yellow-900/30">
            <div class="text-yellow-400 font-bold text-sm mb-2">DEGRADED_LOW</div>
            <h3 class="text-lg font-bold mb-3 text-white">500-2000 usuários</h3>
            <ul class="space-y-2 text-gray-400 text-sm">
              <li>⚠️ Aggregation reduzido (3s)</li>
              <li>⚠️ Typing detection limitado</li>
              <li>✅ WebSocket ativo</li>
              <li>⚠️ Métricas reduzidas</li>
            </ul>
          </div>

          <div class="bg-red-950/20 rounded-xl p-6 border border-red-900/30">
            <div class="text-red-400 font-bold text-sm mb-2">DEGRADED_HIGH</div>
            <h3 class="text-lg font-bold mb-3 text-white">&gt; 2000 usuários</h3>
            <ul class="space-y-2 text-gray-400 text-sm">
              <li>❌ Aggregation mínimo (1s)</li>
              <li>❌ Typing detection off</li>
              <li>⚠️ WebSocket pooled</li>
              <li>❌ Só métricas críticas</li>
            </ul>
          </div>
        </div>

        <div class="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
          <h4 class="text-green-400 font-bold mb-4">Thresholds Configuráveis</h4>
          <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-gray-900 rounded-lg p-4">
              <code class="text-sm text-gray-300">
                DEGRADATION_PENDING_USERS_THRESHOLD_LOW=500<br>
                DEGRADATION_PENDING_USERS_THRESHOLD_HIGH=2000<br>
                DEGRADATION_REDIS_LATENCY_THRESHOLD_LOW_MS=50<br>
                DEGRADATION_REDIS_LATENCY_THRESHOLD_HIGH_MS=150
              </code>
            </div>
            <div class="text-gray-400 text-sm">
              <p class="mb-2">Degradação baseada em:</p>
              <ul class="list-disc list-inside space-y-1">
                <li>Número de usuários pendentes</li>
                <li>Latência do Redis</li>
                <li>Taxa de erros de webhook</li>
                <li>Tamanho da fila de mensagens</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Deterministic Conversation ID -->
    <section class="py-16 border-t border-gray-800">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold mb-8">🎯 1 Conversa por Telefone (Deterministic ID)</h2>
        
        <p class="text-gray-400 mb-8 max-w-3xl">
          No WhatsApp, cada telefone = uma conversa. Não importa qual header chega,
          o sistema <strong class="text-green-400">sempre calcula o mesmo UUID</strong> para o mesmo telefone.
          Isso elimina sessões paralelas e cross-user pollution.
        </p>

        <div class="grid md:grid-cols-2 gap-8 mb-12">
          <div class="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
            <h3 class="text-lg font-bold mb-4 text-green-400">Cálculo Determinístico</h3>
            <div class="bg-gray-800 rounded-lg p-4 mb-4">
              <pre class="text-sm text-gray-300 overflow-x-auto"><code>conversation_id = UUID5(
    namespace=OPTIMUS_NAMESPACE,
    name=f"{tenant_id}:{normalized_phone}"
)

# Exemplo:
# tenant: "clinica_abc"
# phone: "+5511999999999"
# → UUID: "a1b2c3d4-e5f6-5a7b-8c9d-0e1f2a3b4c5d"

# SEMPRE o mesmo UUID para mesmos inputs
# Ignora headers externos completamente</code></pre>
            </div>
            <p class="text-gray-400 text-sm">
              Headers de X-Conversation-ID são <strong class="text-red-400">ignorados</strong>.
              Previne que um cliente malicioso "pule" para conversa de outro usuário.
            </p>
          </div>

          <div class="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
            <h3 class="text-lg font-bold mb-4 text-green-400">Normalização de Telefone</h3>
            <div class="bg-gray-800 rounded-lg p-4 mb-4">
              <pre class="text-sm text-gray-300 overflow-x-auto"><code>// Todos viram o MESMO UUID:
"+5511999999999"     → UUID_X
"5511999999999"      → UUID_X
"+55 11 999-999-999" → UUID_X
"+55 (11) 99999-9999" → UUID_X

// Phone é normalizado antes do hash:
// 1. Remove espaços, hífens, parênteses
// 2. Remove "+" prefix
// 3. Garante formato numérico puro</code></pre>
            </div>
            <p class="text-gray-400 text-sm">
              Não importa como o telefone chega (WhatsApp, Evolution, manual),
              a normalização garante consistência.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Handover Integration -->
    <section class="py-16 border-t border-gray-800 bg-gray-900/30">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold mb-8">👥 Integração com Handover</h2>
        
        <p class="text-gray-400 mb-8 max-w-3xl">
          Quando um atendente humano assume a conversa, o comportamento do 
          WhatsApp Integration muda para <strong class="text-green-400">suportar interação em tempo real</strong>.
        </p>

        <div class="grid md:grid-cols-2 gap-8">
          <div class="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
            <h3 class="text-lg font-bold mb-4 text-green-400">Durante Handover:</h3>
            <ul class="space-y-3">
              <li class="flex items-start gap-3">
                <span class="text-green-400 text-xl">⏸️</span>
                <div>
                  <div class="font-bold text-white">Aggregation Pausado</div>
                  <div class="text-gray-400 text-sm">
                    Mensagens do cliente vão direto pro operador, sem delay de 5s.
                  </div>
                </div>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-green-400 text-xl">⚡</span>
                <div>
                  <div class="font-bold text-white">Immediate Delivery</div>
                  <div class="text-gray-400 text-sm">
                    Respostas do operador são enviadas instantaneamente.
                  </div>
                </div>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-green-400 text-xl">🔄</span>
                <div>
                  <div class="font-bold text-white">WebSocket Real-time</div>
                  <div class="text-gray-400 text-sm">
                    Frontend do operador recebe mensagens em tempo real.
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div class="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
            <h4 class="text-green-400 font-bold mb-4">Configuração Handover</h4>
            <div class="space-y-3">
              <div class="flex justify-between items-center p-3 bg-gray-900 rounded-lg">
                <span class="text-gray-400 text-sm">HANDOVER_PAUSE_AGGREGATION</span>
                <span class="text-green-400 font-mono text-sm">true</span>
              </div>
              <div class="flex justify-between items-center p-3 bg-gray-900 rounded-lg">
                <span class="text-gray-400 text-sm">HANDOVER_IMMEDIATE_DELIVERY</span>
                <span class="text-green-400 font-mono text-sm">true</span>
              </div>
              <div class="flex justify-between items-center p-3 bg-gray-900 rounded-lg">
                <span class="text-gray-400 text-sm">HANDOVER_WEBSOCKET_ENABLED</span>
                <span class="text-green-400 font-mono text-sm">true</span>
              </div>
              <div class="flex justify-between items-center p-3 bg-gray-900 rounded-lg">
                <span class="text-gray-400 text-sm">HANDOVER_AUTO_RESUME_MINUTES</span>
                <span class="text-green-400 font-mono text-sm">30</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Evolution API Integration -->
    <section class="py-16 border-t border-gray-800">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold mb-8">🚀 Evolution API Integration</h2>
        
        <div class="grid md:grid-cols-2 gap-8 mb-12">
          <div class="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
            <h3 class="text-lg font-bold mb-4 text-green-400">Multi-tenant Instances</h3>
            <p class="text-gray-400 text-sm mb-4">
              Cada tenant pode ter múltiplas instâncias WhatsApp. O sistema resolve
              automaticamente qual tenant "dono" de cada instância via cache O(1).
            </p>
            <div class="bg-gray-800 rounded-lg p-4">
              <pre class="text-sm text-gray-300"><code>// Instance → Tenant mapping
{
  "clinica_sp": "Local - SP",
  "clinica_rj": "Local - RJ",
  "clinica_demo": "Local - Desenvolvimento"
}

// Lookup O(1) via Redis:
// GET instance:tenant:{instance_name}</code></pre>
            </div>
          </div>

          <div class="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
            <h3 class="text-lg font-bold mb-4 text-green-400">Webhook Security</h3>
            <p class="text-gray-400 text-sm mb-4">
              API keys são validadas via HMAC com secret dedicado.
              Hash do API key (não a key em si) é cacheada para lookups rápidos.
            </p>
            <div class="bg-gray-800 rounded-lg p-4">
              <pre class="text-sm text-gray-300"><code>// API Key validation flow:
1. Webhook chega com X-API-Key header
2. HMAC(apikey, EVOLUTION_SECRET) → hash
3. Redis lookup: apikeyhash:tenant:{hash}
4. Se match → autorizado
5. Se não → schema scan (fallback)</code></pre>
            </div>
          </div>
        </div>

        <!-- Audio Integration -->
        <div class="bg-green-950/20 rounded-xl p-8 border border-green-900/30">
          <h3 class="text-xl font-bold mb-6 text-green-400">🎤 Audio Message Support</h3>
          
          <div class="grid md:grid-cols-3 gap-6">
            <div class="text-center">
              <div class="text-4xl mb-3">🎙️</div>
              <div class="font-bold text-white mb-2">Voice Notes</div>
              <div class="text-sm text-gray-400">
                Cliente envia áudio → Audio Processor transcreve →
                Texto vai pro AI Engine
              </div>
            </div>
            <div class="text-center">
              <div class="text-4xl mb-3">🔊</div>
              <div class="font-bold text-white mb-2">Audio Reply</div>
              <div class="text-sm text-gray-400">
                Resposta do AI → TTS (Text-to-Speech) →
                Áudio enviado ao cliente
              </div>
            </div>
            <div class="text-center">
              <div class="text-4xl mb-3">📁</div>
              <div class="font-bold text-white mb-2">MinIO Storage</div>
              <div class="text-sm text-gray-400">
                Arquivos de áudio armazenados no MinIO
                para processamento assíncrono
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Resultados -->
    <section class="py-16 border-t border-gray-800 bg-gray-900/30">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold mb-8">Resultados em Produção</h2>
        
        <div class="grid md:grid-cols-4 gap-6 mb-12">
          <div class="bg-gray-800/50 rounded-xl p-6 text-center border border-gray-700">
            <div class="text-4xl font-bold text-green-400 mb-2">~80%</div>
            <div class="text-gray-400 text-sm">Redução de Chamadas IA</div>
            <div class="text-gray-500 text-xs mt-1">Via message aggregation</div>
          </div>
          <div class="bg-gray-800/50 rounded-xl p-6 text-center border border-gray-700">
            <div class="text-4xl font-bold text-green-400 mb-2">&lt;100ms</div>
            <div class="text-gray-400 text-sm">Latência Webhook</div>
            <div class="text-gray-500 text-xs mt-1">P95 end-to-end</div>
          </div>
          <div class="bg-gray-800/50 rounded-xl p-6 text-center border border-gray-700">
            <div class="text-4xl font-bold text-green-400 mb-2">100%</div>
            <div class="text-gray-400 text-sm">Isolamento Redis</div>
            <div class="text-gray-500 text-xs mt-1">Zero cross-pollution</div>
          </div>
          <div class="bg-gray-800/50 rounded-xl p-6 text-center border border-gray-700">
            <div class="text-4xl font-bold text-green-400 mb-2">2000+</div>
            <div class="text-gray-400 text-sm">Usuários Simultâneos</div>
            <div class="text-gray-500 text-xs mt-1">Antes de degradation</div>
          </div>
        </div>

        <!-- Stack -->
        <div class="bg-gray-900/50 rounded-xl p-8 border border-gray-800">
          <h3 class="text-xl font-bold mb-6 text-green-400">Stack Técnico</h3>
          
          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div class="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
              <div class="text-green-400 font-bold mb-2">Framework</div>
              <p class="text-gray-400 text-sm">FastAPI + Uvicorn</p>
            </div>
            <div class="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
              <div class="text-green-400 font-bold mb-2">Storage</div>
              <p class="text-gray-400 text-sm">Redis 8.2 (isolado) + MinIO</p>
            </div>
            <div class="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
              <div class="text-green-400 font-bold mb-2">Real-time</div>
              <p class="text-gray-400 text-sm">WebSocket (25 concurrent)</p>
            </div>
            <div class="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
              <div class="text-green-400 font-bold mb-2">WhatsApp API</div>
              <p class="text-gray-400 text-sm">Evolution API</p>
            </div>
            <div class="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
              <div class="text-green-400 font-bold mb-2">Audio</div>
              <p class="text-gray-400 text-sm">Audio Processor (STT/TTS)</p>
            </div>
            <div class="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
              <div class="text-green-400 font-bold mb-2">Observability</div>
              <p class="text-gray-400 text-sm">OpenTelemetry + Prometheus</p>
            </div>
            <div class="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
              <div class="text-green-400 font-bold mb-2">Rate Limiting</div>
              <p class="text-gray-400 text-sm">60 req/min configurável</p>
            </div>
            <div class="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
              <div class="text-green-400 font-bold mb-2">HTTP Client</div>
              <p class="text-gray-400 text-sm">HTTPX (30s timeout, 3 retries)</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-16 border-t border-gray-800">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-3xl font-bold mb-4">Interessado em integrações WhatsApp?</h2>
        <p class="text-gray-400 mb-8">
          Message aggregation, webhooks, multi-tenant instances - 
          tenho experiência prática com os desafios reais.
        </p>
        <NuxtLink 
          to="/contato" 
          class="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-500 text-white font-medium rounded-lg transition-colors"
        >
          Entrar em Contato
          <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'WhatsApp Integration - Message Aggregator, Redis Isolado | Marcelo Marleta',
  meta: [
    { 
      name: 'description', 
      content: 'Serviço WhatsApp enterprise com Message Aggregator (5s debounce), Redis isolado, graceful degradation e integração Evolution API.' 
    }
  ]
})
</script>
