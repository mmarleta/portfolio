<template>
  <div class="min-h-screen bg-gray-950 text-gray-100">
    <!-- Hero Section -->
    <section class="relative py-20 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-blue-950/50 via-gray-950 to-gray-950"></div>
      <div class="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div class="absolute bottom-10 right-10 w-96 h-96 bg-indigo-600/5 rounded-full blur-3xl"></div>
      
      <div class="container mx-auto px-6 relative z-10">
        <NuxtLink to="/" class="inline-flex items-center text-emerald-400 hover:text-emerald-300 mb-8 transition-colors">
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
          Voltar ao Portfolio
        </NuxtLink>
        
        <div class="flex items-center gap-4 mb-6">
          <span class="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium border border-blue-500/30">
            Optimus Platform
          </span>
          <span class="px-4 py-2 bg-gray-800 text-gray-300 rounded-full text-sm">
            User Interface
          </span>
        </div>
        
        <h1 class="text-5xl md:text-6xl font-bold mb-6">
          <span class="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
            Frontend Apps
          </span>
        </h1>
        
        <p class="text-xl text-gray-400 max-w-3xl mb-8">
          Duas aplicações Vue.js 3 especializadas: Admin Dashboard para operadores de cada tenant 
          e SuperAdmin Panel para gestão global da plataforma. WebSocket real-time, 
          handover management, e interfaces responsivas.
        </p>

        <div class="flex flex-wrap gap-3">
          <span class="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300">Vue.js 3</span>
          <span class="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300">Tailwind CSS</span>
          <span class="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300">WebSocket</span>
          <span class="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300">Real-time</span>
          <span class="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300">Multi-tenant</span>
          <span class="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300">RBAC</span>
        </div>
      </div>
    </section>

    <!-- Duas Aplicações -->
    <section class="py-16 border-t border-gray-800">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold mb-8">Arquitetura: 2 Apps, 2 Propósitos</h2>
        
        <div class="bg-gray-900/50 rounded-xl p-8 border border-gray-800 mb-12">
          <pre class="text-sm text-blue-400 overflow-x-auto"><code>┌─────────────────────────────────────────────────────────────────────────┐
│                      Frontend Architecture                               │
└─────────────────────────────────────────────────────────────────────────┘

                    ┌─────────────────────────────────────┐
                    │          Docker Container           │
                    │         (frontend service)          │
                    └─────────────────────────────────────┘
                                    │
                    ┌───────────────┴───────────────┐
                    │                               │
            ┌───────▼───────┐               ┌──────▼───────┐
            │  Admin App    │               │ SuperAdmin   │
            │  Port 3000    │               │  Port 3001   │
            └───────────────┘               └──────────────┘
                    │                               │
    ┌───────────────┼───────────────┐              │
    │               │               │              │
┌───▼───┐     ┌─────▼─────┐  ┌──────▼──────┐  ┌───▼────────────┐
│ Chat  │     │ Handover  │  │  Analytics  │  │  Tenant Mgmt   │
│ UI    │     │ Manager   │  │  Dashboard  │  │  Global Config │
└───────┘     └───────────┘  └─────────────┘  └────────────────┘

┌─────────────────────────────────────────────────────────────────────────┐
│  RBAC (Role-Based Access Control)                                       │
├─────────────────────────────────────────────────────────────────────────┤
│  admin      → Acesso ao Admin App (3000) do seu tenant                  │
│  superadmin → Acesso ao SuperAdmin (3001) + todos os tenants            │
└─────────────────────────────────────────────────────────────────────────┘</code></pre>
        </div>

        <div class="grid md:grid-cols-2 gap-8">
          <!-- Admin App -->
          <div class="bg-blue-950/20 rounded-xl p-6 border border-blue-900/30">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                <span class="text-2xl">🖥️</span>
              </div>
              <div>
                <h3 class="text-xl font-bold text-blue-400">Admin Dashboard</h3>
                <p class="text-sm text-gray-500">Porta 3000</p>
              </div>
            </div>
            
            <p class="text-gray-400 text-sm mb-4">
              Interface para <strong class="text-blue-300">operadores e administradores de cada tenant</strong>.
              Foco em atendimento ao cliente e gestão do dia-a-dia.
            </p>

            <h4 class="text-blue-300 font-bold mb-3">Features:</h4>
            <ul class="space-y-2 text-gray-400 text-sm">
              <li class="flex items-start gap-2">
                <span class="text-blue-400 mt-1">💬</span>
                <span>Chat real-time com clientes (WebSocket)</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-blue-400 mt-1">⏰</span>
                <span>Handover management (timer 30min auto-return)</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-blue-400 mt-1">📊</span>
                <span>Dashboard de métricas do tenant</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-blue-400 mt-1">👥</span>
                <span>Lista de conversas ativas</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-blue-400 mt-1">📋</span>
                <span>Histórico de atendimentos</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-blue-400 mt-1">🔔</span>
                <span>Notificações de novas mensagens</span>
              </li>
            </ul>
          </div>

          <!-- SuperAdmin Panel -->
          <div class="bg-purple-950/20 rounded-xl p-6 border border-purple-900/30">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                <span class="text-2xl">👑</span>
              </div>
              <div>
                <h3 class="text-xl font-bold text-purple-400">SuperAdmin Panel</h3>
                <p class="text-sm text-gray-500">Porta 3001</p>
              </div>
            </div>
            
            <p class="text-gray-400 text-sm mb-4">
              Interface para <strong class="text-purple-300">gestão global da plataforma</strong>.
              Configurações, provisioning de tenants, e monitoramento.
            </p>

            <h4 class="text-purple-300 font-bold mb-3">Features:</h4>
            <ul class="space-y-2 text-gray-400 text-sm">
              <li class="flex items-start gap-2">
                <span class="text-purple-400 mt-1">🏢</span>
                <span>Gestão de todos os tenants</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-purple-400 mt-1">✨</span>
                <span>Provisionamento de novos tenants</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-purple-400 mt-1">📝</span>
                <span>Configuração de prompts por tenant</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-purple-400 mt-1">🔑</span>
                <span>LLM Pools & Key Groups management</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-purple-400 mt-1">🚦</span>
                <span>Preflight panel (health checks)</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-purple-400 mt-1">⚙️</span>
                <span>System defaults (global configs)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Chat Real-time -->
    <section class="py-16 border-t border-gray-800 bg-gray-900/30">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold mb-8">💬 Chat Real-time com WebSocket</h2>
        
        <p class="text-gray-400 mb-8 max-w-3xl">
          A interface de chat usa WebSocket para atualizações em tempo real.
          Quando uma nova mensagem chega (WhatsApp, web, etc.), o operador 
          vê <strong class="text-blue-400">instantaneamente</strong> sem refresh.
        </p>

        <div class="grid md:grid-cols-2 gap-8 mb-12">
          <div class="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
            <h3 class="text-lg font-bold mb-4 text-blue-400">Fluxo WebSocket</h3>
            <div class="bg-gray-800 rounded-lg p-4">
              <pre class="text-sm text-gray-300 overflow-x-auto"><code>// Frontend conecta ao WebSocket
const ws = new WebSocket(
  'wss://api.webotify.io/api/conversations/ws'
);

ws.onmessage = (event) => {
  const data = JSON.parse(event.data);
  
  switch(data.type) {
    case 'new_message':
      // Adiciona mensagem na conversa
      conversations.addMessage(data.payload);
      break;
      
    case 'conversation_updated':
      // Atualiza status da conversa
      conversations.update(data.payload);
      break;
      
    case 'handover_started':
      // Mostra timer de handover
      handover.start(data.payload);
      break;
  }
};</code></pre>
            </div>
          </div>

          <div class="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
            <h3 class="text-lg font-bold mb-4 text-blue-400">Eventos Suportados</h3>
            <div class="space-y-3">
              <div class="flex items-center gap-3 p-3 bg-gray-800 rounded-lg">
                <span class="text-green-400">●</span>
                <div>
                  <div class="font-bold text-white text-sm">new_message</div>
                  <div class="text-xs text-gray-500">Nova mensagem na conversa</div>
                </div>
              </div>
              <div class="flex items-center gap-3 p-3 bg-gray-800 rounded-lg">
                <span class="text-yellow-400">●</span>
                <div>
                  <div class="font-bold text-white text-sm">conversation_updated</div>
                  <div class="text-xs text-gray-500">Status ou metadata alterados</div>
                </div>
              </div>
              <div class="flex items-center gap-3 p-3 bg-gray-800 rounded-lg">
                <span class="text-blue-400">●</span>
                <div>
                  <div class="font-bold text-white text-sm">handover_started</div>
                  <div class="text-xs text-gray-500">Operador assumiu conversa</div>
                </div>
              </div>
              <div class="flex items-center gap-3 p-3 bg-gray-800 rounded-lg">
                <span class="text-purple-400">●</span>
                <div>
                  <div class="font-bold text-white text-sm">handover_ended</div>
                  <div class="text-xs text-gray-500">Conversa retornou para IA</div>
                </div>
              </div>
              <div class="flex items-center gap-3 p-3 bg-gray-800 rounded-lg">
                <span class="text-red-400">●</span>
                <div>
                  <div class="font-bold text-white text-sm">typing</div>
                  <div class="text-xs text-gray-500">Cliente está digitando</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Handover Management -->
    <section class="py-16 border-t border-gray-800">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold mb-8">⏰ Handover Management</h2>
        
        <p class="text-gray-400 mb-8 max-w-3xl">
          Quando um operador assume uma conversa (handover), a UI mostra um timer
          de 30 minutos. Se não houver interação, a conversa 
          <strong class="text-blue-400">retorna automaticamente para a IA</strong>.
        </p>

        <div class="grid md:grid-cols-3 gap-6 mb-12">
          <div class="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
            <div class="text-3xl mb-4">🤖</div>
            <h3 class="text-lg font-bold mb-3 text-blue-400">1. IA Atendendo</h3>
            <p class="text-gray-400 text-sm">
              Estado normal. IA responde automaticamente. 
              Operador pode visualizar mas não intervém.
            </p>
          </div>

          <div class="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
            <div class="text-3xl mb-4">👤</div>
            <h3 class="text-lg font-bold mb-3 text-yellow-400">2. Handover Ativo</h3>
            <p class="text-gray-400 text-sm">
              Operador assumiu. Timer de 30 min visível.
              IA pausa, mensagens vão direto pro operador.
            </p>
          </div>

          <div class="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
            <div class="text-3xl mb-4">⏰</div>
            <h3 class="text-lg font-bold mb-3 text-red-400">3. Timer Expira</h3>
            <p class="text-gray-400 text-sm">
              Sem ação em 30min → auto-return para IA.
              Operador é notificado antes (warning em 5min).
            </p>
          </div>
        </div>

        <div class="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
          <h4 class="text-blue-400 font-bold mb-4">Timer UI Component</h4>
          <div class="bg-gray-800 rounded-lg p-4">
            <pre class="text-sm text-gray-300 overflow-x-auto"><code>&lt;template&gt;
  &lt;div class="handover-timer" :class="timerClass"&gt;
    &lt;div class="timer-display"&gt;
      {{ formattedTime }}
    &lt;/div&gt;
    &lt;div class="timer-label"&gt;
      {{ isWarning ? 'Retorno em breve!' : 'Tempo restante' }}
    &lt;/div&gt;
    &lt;button @click="extendHandover" v-if="canExtend"&gt;
      Estender +15min
    &lt;/button&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script setup&gt;
const props = defineProps(['handoverStartedAt', 'durationMinutes']);

const remainingSeconds = computed(() =&gt; {
  const elapsed = Date.now() - props.handoverStartedAt;
  return Math.max(0, props.durationMinutes * 60 - elapsed / 1000);
});

const isWarning = computed(() =&gt; remainingSeconds.value &lt; 300); // 5min
const timerClass = computed(() =&gt; isWarning.value ? 'warning' : 'normal');
&lt;/script&gt;</code></pre>
          </div>
        </div>
      </div>
    </section>

    <!-- SuperAdmin Features -->
    <section class="py-16 border-t border-gray-800 bg-gray-900/30">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold mb-8">👑 SuperAdmin: Gestão Global</h2>
        
        <div class="grid md:grid-cols-2 gap-8 mb-12">
          <!-- Tenant Management -->
          <div class="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
            <h3 class="text-lg font-bold mb-4 text-purple-400">🏢 Gestão de Tenants</h3>
            <ul class="space-y-3 text-gray-400 text-sm">
              <li class="flex items-start gap-2">
                <span class="text-purple-400">•</span>
                <span><strong class="text-white">Lista de tenants</strong> com status, vertical, e última atividade</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-purple-400">•</span>
                <span><strong class="text-white">Criar tenant</strong> via wizard (escolhe vertical, configura identity)</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-purple-400">•</span>
                <span><strong class="text-white">Editar tenant</strong> (nome, timezone, locale, features)</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-purple-400">•</span>
                <span><strong class="text-white">Desativar/Deletar</strong> com confirmação e soft-delete</span>
              </li>
            </ul>
          </div>

          <!-- Prompt Configuration -->
          <div class="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
            <h3 class="text-lg font-bold mb-4 text-purple-400">📝 Configuração de Prompts</h3>
            <ul class="space-y-3 text-gray-400 text-sm">
              <li class="flex items-start gap-2">
                <span class="text-purple-400">•</span>
                <span><strong class="text-white">System prompt</strong> customizado por tenant</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-purple-400">•</span>
                <span><strong class="text-white">Greeting message</strong> (primeira mensagem da IA)</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-purple-400">•</span>
                <span><strong class="text-white">Intent classification</strong> prompt</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-purple-400">•</span>
                <span><strong class="text-white">Handover context</strong> (resumo para operador)</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-purple-400">•</span>
                <span><strong class="text-white">Variables override</strong> (assistant_name, rules, etc.)</span>
              </li>
            </ul>
          </div>

          <!-- LLM Pools -->
          <div class="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
            <h3 class="text-lg font-bold mb-4 text-purple-400">🔑 LLM Pools & Keys</h3>
            <ul class="space-y-3 text-gray-400 text-sm">
              <li class="flex items-start gap-2">
                <span class="text-purple-400">•</span>
                <span><strong class="text-white">Pools globais</strong> (chat, tools, embeddings)</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-purple-400">•</span>
                <span><strong class="text-white">Key Groups</strong> com múltiplas API keys</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-purple-400">•</span>
                <span><strong class="text-white">Reveal protegido</strong> (só superadmin vê keys)</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-purple-400">•</span>
                <span><strong class="text-white">Health status</strong> de cada key/pool</span>
              </li>
            </ul>
          </div>

          <!-- Preflight Panel -->
          <div class="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
            <h3 class="text-lg font-bold mb-4 text-purple-400">🚦 Preflight Panel</h3>
            <ul class="space-y-3 text-gray-400 text-sm">
              <li class="flex items-start gap-2">
                <span class="text-green-400">●</span>
                <span><strong class="text-white">OK</strong> - Todas configs válidas</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-yellow-400">●</span>
                <span><strong class="text-white">Warning</strong> - Usando defaults genéricos</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-red-400">●</span>
                <span><strong class="text-white">Critical</strong> - Falta assistant_name ou template vazio</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-purple-400">•</span>
                <span><strong class="text-white">Source badges</strong> - Seeded vs Override vs Default</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Multi-tenant Dashboard -->
    <section class="py-16 border-t border-gray-800">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold mb-8">📊 Dashboard Multi-tenant</h2>
        
        <p class="text-gray-400 mb-8 max-w-3xl">
          O Admin Dashboard mostra métricas específicas do tenant logado.
          Conversas ativas, tempo médio de resposta, handovers, e mais.
        </p>

        <div class="grid md:grid-cols-4 gap-4 mb-12">
          <div class="bg-gray-800/50 rounded-xl p-6 text-center border border-gray-700">
            <div class="text-3xl font-bold text-blue-400 mb-2">247</div>
            <div class="text-gray-400 text-sm">Conversas Hoje</div>
          </div>
          <div class="bg-gray-800/50 rounded-xl p-6 text-center border border-gray-700">
            <div class="text-3xl font-bold text-green-400 mb-2">12</div>
            <div class="text-gray-400 text-sm">Ativas Agora</div>
          </div>
          <div class="bg-gray-800/50 rounded-xl p-6 text-center border border-gray-700">
            <div class="text-3xl font-bold text-yellow-400 mb-2">3</div>
            <div class="text-gray-400 text-sm">Em Handover</div>
          </div>
          <div class="bg-gray-800/50 rounded-xl p-6 text-center border border-gray-700">
            <div class="text-3xl font-bold text-purple-400 mb-2">1.2s</div>
            <div class="text-gray-400 text-sm">Tempo Resposta</div>
          </div>
        </div>

        <div class="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
          <h4 class="text-blue-400 font-bold mb-4">Lista de Conversas</h4>
          <div class="space-y-3">
            <div class="flex items-center justify-between p-4 bg-gray-800 rounded-lg">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center">
                  <span class="text-blue-400">JM</span>
                </div>
                <div>
                  <div class="font-bold text-white">João Maria</div>
                  <div class="text-xs text-gray-500">+55 11 99999-9999</div>
                </div>
              </div>
              <div class="text-right">
                <div class="text-sm text-gray-400">Última msg: 2min</div>
                <span class="text-xs px-2 py-1 bg-green-500/20 text-green-400 rounded">IA Respondendo</span>
              </div>
            </div>
            <div class="flex items-center justify-between p-4 bg-gray-800 rounded-lg border border-yellow-500/30">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 bg-yellow-500/20 rounded-full flex items-center justify-center">
                  <span class="text-yellow-400">AS</span>
                </div>
                <div>
                  <div class="font-bold text-white">Ana Silva</div>
                  <div class="text-xs text-gray-500">+55 21 88888-8888</div>
                </div>
              </div>
              <div class="text-right">
                <div class="text-sm text-gray-400">Handover: 12min</div>
                <span class="text-xs px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded">Operador: Carlos</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Stack Técnico -->
    <section class="py-16 border-t border-gray-800 bg-gray-900/30">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold mb-8">Stack Técnico</h2>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          <div class="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
            <div class="text-blue-400 font-bold mb-2">Framework</div>
            <p class="text-gray-400 text-sm">Vue.js 3 (Composition API)</p>
          </div>
          <div class="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
            <div class="text-blue-400 font-bold mb-2">Styling</div>
            <p class="text-gray-400 text-sm">Tailwind CSS</p>
          </div>
          <div class="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
            <div class="text-blue-400 font-bold mb-2">State</div>
            <p class="text-gray-400 text-sm">Pinia (Vue Store)</p>
          </div>
          <div class="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
            <div class="text-blue-400 font-bold mb-2">Real-time</div>
            <p class="text-gray-400 text-sm">WebSocket nativo</p>
          </div>
          <div class="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
            <div class="text-blue-400 font-bold mb-2">Router</div>
            <p class="text-gray-400 text-sm">Vue Router 4</p>
          </div>
          <div class="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
            <div class="text-blue-400 font-bold mb-2">HTTP</div>
            <p class="text-gray-400 text-sm">Axios / Fetch API</p>
          </div>
          <div class="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
            <div class="text-blue-400 font-bold mb-2">Build</div>
            <p class="text-gray-400 text-sm">Vite</p>
          </div>
          <div class="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
            <div class="text-blue-400 font-bold mb-2">Container</div>
            <p class="text-gray-400 text-sm">Docker (2 portas)</p>
          </div>
        </div>

        <!-- API Integration -->
        <div class="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
          <h4 class="text-blue-400 font-bold mb-4">Integração com Backend</h4>
          <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-gray-800 rounded-lg p-4">
              <div class="font-bold text-white mb-2">REST APIs</div>
              <code class="text-xs text-gray-400">
                GET /api/conversations<br>
                POST /api/chat<br>
                GET /api/tenant-configs/{id}<br>
                PUT /api/prompts/override/{tenant}/{prompt}
              </code>
            </div>
            <div class="bg-gray-800 rounded-lg p-4">
              <div class="font-bold text-white mb-2">WebSocket</div>
              <code class="text-xs text-gray-400">
                wss://api.webotify.io/api/conversations/ws<br>
                Events: new_message, handover_*, typing<br>
                Auth: JWT token in connection params
              </code>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Resultados -->
    <section class="py-16 border-t border-gray-800">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold mb-8">Resultados</h2>
        
        <div class="grid md:grid-cols-4 gap-6 mb-12">
          <div class="bg-gray-800/50 rounded-xl p-6 text-center border border-gray-700">
            <div class="text-4xl font-bold text-blue-400 mb-2">&lt;100ms</div>
            <div class="text-gray-400 text-sm">Latência WebSocket</div>
            <div class="text-gray-500 text-xs mt-1">Mensagens em tempo real</div>
          </div>
          <div class="bg-gray-800/50 rounded-xl p-6 text-center border border-gray-700">
            <div class="text-4xl font-bold text-blue-400 mb-2">2</div>
            <div class="text-gray-400 text-sm">Apps Especializadas</div>
            <div class="text-gray-500 text-xs mt-1">Admin + SuperAdmin</div>
          </div>
          <div class="bg-gray-800/50 rounded-xl p-6 text-center border border-gray-700">
            <div class="text-4xl font-bold text-blue-400 mb-2">RBAC</div>
            <div class="text-gray-400 text-sm">Controle de Acesso</div>
            <div class="text-gray-500 text-xs mt-1">admin vs superadmin</div>
          </div>
          <div class="bg-gray-800/50 rounded-xl p-6 text-center border border-gray-700">
            <div class="text-4xl font-bold text-blue-400 mb-2">30min</div>
            <div class="text-gray-400 text-sm">Auto-return Handover</div>
            <div class="text-gray-500 text-xs mt-1">Timer configurável</div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-16 border-t border-gray-800">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-3xl font-bold mb-4">Precisa de interfaces para SaaS multi-tenant?</h2>
        <p class="text-gray-400 mb-8">
          Vue.js, real-time, dashboards, separação de roles - 
          tenho experiência construindo interfaces enterprise.
        </p>
        <NuxtLink 
          to="/contato" 
          class="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg transition-colors"
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
  title: 'Frontend Apps - Vue.js 3, WebSocket Real-time, Multi-tenant | Marcelo Marleta',
  meta: [
    { 
      name: 'description', 
      content: 'Duas aplicações Vue.js 3: Admin Dashboard (3000) para operadores e SuperAdmin Panel (3001) para gestão global. WebSocket, Tailwind CSS, RBAC.' 
    }
  ]
})
</script>
