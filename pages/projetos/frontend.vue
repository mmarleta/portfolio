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
          {{ $t('cases.frontend.backToPortfolio') }}
        </NuxtLink>
        
        <div class="flex items-center gap-4 mb-6">
          <span class="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium border border-blue-500/30">
            Optimus Platform
          </span>
          <span class="px-4 py-2 bg-gray-800 text-gray-300 rounded-full text-sm">
            {{ $t('cases.frontend.badge') }}
          </span>
        </div>
        
        <h1 class="text-5xl md:text-6xl font-bold mb-6">
          <span class="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
            {{ $t('cases.frontend.title') }}
          </span>
        </h1>
        
        <p class="text-xl text-gray-400 max-w-3xl mb-8">
          {{ $t('cases.frontend.description') }}
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
        <h2 class="text-3xl font-bold mb-8">{{ $t('cases.frontend.architectureTitle') }}</h2>
        
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
│  {{ $t('cases.frontend.rbac.title') }}                                       │
├─────────────────────────────────────────────────────────────────────────┤
│  {{ $t('cases.frontend.rbac.admin') }}                  │
│  {{ $t('cases.frontend.rbac.superadmin') }}            │
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
                <h3 class="text-xl font-bold text-blue-400">{{ $t('cases.frontend.adminDashboard.title') }}</h3>
                <p class="text-sm text-gray-500">{{ $t('cases.frontend.adminDashboard.port') }}</p>
              </div>
            </div>
            
            <p class="text-gray-400 text-sm mb-4">
              {{ $t('cases.frontend.adminDashboard.description') }}
            </p>

            <h4 class="text-blue-300 font-bold mb-3">{{ $t('cases.frontend.adminDashboard.featuresTitle') }}</h4>
            <ul class="space-y-2 text-gray-400 text-sm">
              <li class="flex items-start gap-2">
                <span class="text-blue-400 mt-1">💬</span>
                <span>{{ $t('cases.frontend.adminDashboard.features.chat') }}</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-blue-400 mt-1">⏰</span>
                <span>{{ $t('cases.frontend.adminDashboard.features.handover') }}</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-blue-400 mt-1">📊</span>
                <span>{{ $t('cases.frontend.adminDashboard.features.dashboard') }}</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-blue-400 mt-1">👥</span>
                <span>{{ $t('cases.frontend.adminDashboard.features.conversations') }}</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-blue-400 mt-1">📋</span>
                <span>{{ $t('cases.frontend.adminDashboard.features.history') }}</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-blue-400 mt-1">🔔</span>
                <span>{{ $t('cases.frontend.adminDashboard.features.notifications') }}</span>
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
                <h3 class="text-xl font-bold text-purple-400">{{ $t('cases.frontend.superAdminPanel.title') }}</h3>
                <p class="text-sm text-gray-500">{{ $t('cases.frontend.superAdminPanel.port') }}</p>
              </div>
            </div>
            
            <p class="text-gray-400 text-sm mb-4">
              {{ $t('cases.frontend.superAdminPanel.description') }}
            </p>

            <h4 class="text-purple-300 font-bold mb-3">{{ $t('cases.frontend.superAdminPanel.featuresTitle') }}</h4>
            <ul class="space-y-2 text-gray-400 text-sm">
              <li class="flex items-start gap-2">
                <span class="text-purple-400 mt-1">🏢</span>
                <span>{{ $t('cases.frontend.superAdminPanel.features.tenants') }}</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-purple-400 mt-1">✨</span>
                <span>{{ $t('cases.frontend.superAdminPanel.features.provisioning') }}</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-purple-400 mt-1">📝</span>
                <span>{{ $t('cases.frontend.superAdminPanel.features.prompts') }}</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-purple-400 mt-1">🔑</span>
                <span>{{ $t('cases.frontend.superAdminPanel.features.llmPools') }}</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-purple-400 mt-1">🚦</span>
                <span>{{ $t('cases.frontend.superAdminPanel.features.preflight') }}</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-purple-400 mt-1">⚙️</span>
                <span>{{ $t('cases.frontend.superAdminPanel.features.defaults') }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Chat Real-time -->
    <section class="py-16 border-t border-gray-800 bg-gray-900/30">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold mb-8">💬 {{ $t('cases.frontend.chatRealtime.title') }}</h2>
        
        <p class="text-gray-400 mb-8 max-w-3xl">
          {{ $t('cases.frontend.chatRealtime.description') }}
        </p>

        <div class="grid md:grid-cols-2 gap-8 mb-12">
          <div class="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
            <h3 class="text-lg font-bold mb-4 text-blue-400">{{ $t('cases.frontend.chatRealtime.flowTitle') }}</h3>
            <div class="bg-gray-800 rounded-lg p-4">
              <pre class="text-sm text-gray-300 overflow-x-auto"><code>// Frontend connects to WebSocket
const ws = new WebSocket(
  'wss://api.webotify.io/api/conversations/ws'
);

ws.onmessage = (event) => {
  const data = JSON.parse(event.data);
  
  switch(data.type) {
    case 'new_message':
      // Add message to conversation
      conversations.addMessage(data.payload);
      break;
      
    case 'conversation_updated':
      // Update conversation status
      conversations.update(data.payload);
      break;
      
    case 'handover_started':
      // Show handover timer
      handover.start(data.payload);
      break;
  }
};</code></pre>
            </div>
          </div>

          <div class="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
            <h3 class="text-lg font-bold mb-4 text-blue-400">{{ $t('cases.frontend.chatRealtime.eventsTitle') }}</h3>
            <div class="space-y-3">
              <div class="flex items-center gap-3 p-3 bg-gray-800 rounded-lg">
                <span class="text-green-400">●</span>
                <div>
                  <div class="font-bold text-white text-sm">new_message</div>
                  <div class="text-xs text-gray-500">{{ $t('cases.frontend.chatRealtime.events.newMessage') }}</div>
                </div>
              </div>
              <div class="flex items-center gap-3 p-3 bg-gray-800 rounded-lg">
                <span class="text-yellow-400">●</span>
                <div>
                  <div class="font-bold text-white text-sm">conversation_updated</div>
                  <div class="text-xs text-gray-500">{{ $t('cases.frontend.chatRealtime.events.conversationUpdated') }}</div>
                </div>
              </div>
              <div class="flex items-center gap-3 p-3 bg-gray-800 rounded-lg">
                <span class="text-blue-400">●</span>
                <div>
                  <div class="font-bold text-white text-sm">handover_started</div>
                  <div class="text-xs text-gray-500">{{ $t('cases.frontend.chatRealtime.events.handoverStarted') }}</div>
                </div>
              </div>
              <div class="flex items-center gap-3 p-3 bg-gray-800 rounded-lg">
                <span class="text-purple-400">●</span>
                <div>
                  <div class="font-bold text-white text-sm">handover_ended</div>
                  <div class="text-xs text-gray-500">{{ $t('cases.frontend.chatRealtime.events.handoverEnded') }}</div>
                </div>
              </div>
              <div class="flex items-center gap-3 p-3 bg-gray-800 rounded-lg">
                <span class="text-red-400">●</span>
                <div>
                  <div class="font-bold text-white text-sm">typing</div>
                  <div class="text-xs text-gray-500">{{ $t('cases.frontend.chatRealtime.events.typing') }}</div>
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
        <h2 class="text-3xl font-bold mb-8">⏰ {{ $t('cases.frontend.handoverManagement.title') }}</h2>
        
        <p class="text-gray-400 mb-8 max-w-3xl">
          {{ $t('cases.frontend.handoverManagement.description') }}
        </p>

        <div class="grid md:grid-cols-3 gap-6 mb-12">
          <div class="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
            <div class="text-3xl mb-4">🤖</div>
            <h3 class="text-lg font-bold mb-3 text-blue-400">{{ $t('cases.frontend.handoverManagement.states.aiServing.title') }}</h3>
            <p class="text-gray-400 text-sm">
              {{ $t('cases.frontend.handoverManagement.states.aiServing.description') }}
            </p>
          </div>

          <div class="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
            <div class="text-3xl mb-4">👤</div>
            <h3 class="text-lg font-bold mb-3 text-yellow-400">{{ $t('cases.frontend.handoverManagement.states.handoverActive.title') }}</h3>
            <p class="text-gray-400 text-sm">
              {{ $t('cases.frontend.handoverManagement.states.handoverActive.description') }}
            </p>
          </div>

          <div class="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
            <div class="text-3xl mb-4">⏰</div>
            <h3 class="text-lg font-bold mb-3 text-red-400">{{ $t('cases.frontend.handoverManagement.states.timerExpires.title') }}</h3>
            <p class="text-gray-400 text-sm">
              {{ $t('cases.frontend.handoverManagement.states.timerExpires.description') }}
            </p>
          </div>
        </div>

        <div class="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
          <h4 class="text-blue-400 font-bold mb-4">{{ $t('cases.frontend.handoverManagement.timerUiTitle') }}</h4>
          <div class="bg-gray-800 rounded-lg p-4">
            <pre class="text-sm text-gray-300 overflow-x-auto"><code>&lt;template&gt;
  &lt;div class="handover-timer" :class="timerClass"&gt;
    &lt;div class="timer-display"&gt;
      {{ '\{\{ formattedTime \}\}' }}
    &lt;/div&gt;
    &lt;div class="timer-label"&gt;
      {{ '\{\{ isWarning ? \'' }}{{ $t('cases.frontend.handoverManagement.returningSoon') }}{{ '\' : \'' }}{{ $t('cases.frontend.handoverManagement.timeRemaining') }}{{ '\' \}\}' }}
    &lt;/div&gt;
    &lt;button @click="extendHandover" v-if="canExtend"&gt;
      {{ $t('cases.frontend.handoverManagement.extend') }}
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
        <h2 class="text-3xl font-bold mb-8">👑 {{ $t('cases.frontend.superAdminFeatures.title') }}</h2>
        
        <div class="grid md:grid-cols-2 gap-8 mb-12">
          <!-- Tenant Management -->
          <div class="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
            <h3 class="text-lg font-bold mb-4 text-purple-400">🏢 {{ $t('cases.frontend.superAdminFeatures.tenantManagement.title') }}</h3>
            <ul class="space-y-3 text-gray-400 text-sm">
              <li class="flex items-start gap-2">
                <span class="text-purple-400">•</span>
                <span><strong class="text-white">{{ $t('cases.frontend.superAdminFeatures.tenantManagement.list') }}</strong></span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-purple-400">•</span>
                <span><strong class="text-white">{{ $t('cases.frontend.superAdminFeatures.tenantManagement.create') }}</strong></span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-purple-400">•</span>
                <span><strong class="text-white">{{ $t('cases.frontend.superAdminFeatures.tenantManagement.edit') }}</strong></span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-purple-400">•</span>
                <span><strong class="text-white">{{ $t('cases.frontend.superAdminFeatures.tenantManagement.deactivate') }}</strong></span>
              </li>
            </ul>
          </div>

          <!-- Prompt Configuration -->
          <div class="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
            <h3 class="text-lg font-bold mb-4 text-purple-400">📝 {{ $t('cases.frontend.superAdminFeatures.promptConfig.title') }}</h3>
            <ul class="space-y-3 text-gray-400 text-sm">
              <li class="flex items-start gap-2">
                <span class="text-purple-400">•</span>
                <span><strong class="text-white">{{ $t('cases.frontend.superAdminFeatures.promptConfig.systemPrompt') }}</strong></span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-purple-400">•</span>
                <span><strong class="text-white">{{ $t('cases.frontend.superAdminFeatures.promptConfig.greeting') }}</strong></span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-purple-400">•</span>
                <span><strong class="text-white">{{ $t('cases.frontend.superAdminFeatures.promptConfig.intent') }}</strong></span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-purple-400">•</span>
                <span><strong class="text-white">{{ $t('cases.frontend.superAdminFeatures.promptConfig.handoverContext') }}</strong></span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-purple-400">•</span>
                <span><strong class="text-white">{{ $t('cases.frontend.superAdminFeatures.promptConfig.variables') }}</strong></span>
              </li>
            </ul>
          </div>

          <!-- LLM Pools -->
          <div class="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
            <h3 class="text-lg font-bold mb-4 text-purple-400">🔑 {{ $t('cases.frontend.superAdminFeatures.llmPools.title') }}</h3>
            <ul class="space-y-3 text-gray-400 text-sm">
              <li class="flex items-start gap-2">
                <span class="text-purple-400">•</span>
                <span><strong class="text-white">{{ $t('cases.frontend.superAdminFeatures.llmPools.globalPools') }}</strong></span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-purple-400">•</span>
                <span><strong class="text-white">{{ $t('cases.frontend.superAdminFeatures.llmPools.keyGroups') }}</strong></span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-purple-400">•</span>
                <span><strong class="text-white">{{ $t('cases.frontend.superAdminFeatures.llmPools.reveal') }}</strong></span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-purple-400">•</span>
                <span><strong class="text-white">{{ $t('cases.frontend.superAdminFeatures.llmPools.health') }}</strong></span>
              </li>
            </ul>
          </div>

          <!-- Preflight Panel -->
          <div class="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
            <h3 class="text-lg font-bold mb-4 text-purple-400">🚦 {{ $t('cases.frontend.superAdminFeatures.preflightPanel.title') }}</h3>
            <ul class="space-y-3 text-gray-400 text-sm">
              <li class="flex items-start gap-2">
                <span class="text-green-400">●</span>
                <span><strong class="text-white">{{ $t('cases.frontend.superAdminFeatures.preflightPanel.ok') }}</strong></span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-yellow-400">●</span>
                <span><strong class="text-white">{{ $t('cases.frontend.superAdminFeatures.preflightPanel.warning') }}</strong></span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-red-400">●</span>
                <span><strong class="text-white">{{ $t('cases.frontend.superAdminFeatures.preflightPanel.critical') }}</strong></span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-purple-400">•</span>
                <span><strong class="text-white">{{ $t('cases.frontend.superAdminFeatures.preflightPanel.sourceBadges') }}</strong></span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Multi-tenant Dashboard -->
    <section class="py-16 border-t border-gray-800">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold mb-8">📊 {{ $t('cases.frontend.dashboard.title') }}</h2>
        
        <p class="text-gray-400 mb-8 max-w-3xl">
          {{ $t('cases.frontend.dashboard.description') }}
        </p>

        <div class="grid md:grid-cols-4 gap-4 mb-12">
          <div class="bg-gray-800/50 rounded-xl p-6 text-center border border-gray-700">
            <div class="text-3xl font-bold text-blue-400 mb-2">247</div>
            <div class="text-gray-400 text-sm">{{ $t('cases.frontend.dashboard.metrics.conversationsToday') }}</div>
          </div>
          <div class="bg-gray-800/50 rounded-xl p-6 text-center border border-gray-700">
            <div class="text-3xl font-bold text-green-400 mb-2">12</div>
            <div class="text-gray-400 text-sm">{{ $t('cases.frontend.dashboard.metrics.activeNow') }}</div>
          </div>
          <div class="bg-gray-800/50 rounded-xl p-6 text-center border border-gray-700">
            <div class="text-3xl font-bold text-yellow-400 mb-2">3</div>
            <div class="text-gray-400 text-sm">{{ $t('cases.frontend.dashboard.metrics.inHandover') }}</div>
          </div>
          <div class="bg-gray-800/50 rounded-xl p-6 text-center border border-gray-700">
            <div class="text-3xl font-bold text-purple-400 mb-2">1.2s</div>
            <div class="text-gray-400 text-sm">{{ $t('cases.frontend.dashboard.metrics.responseTime') }}</div>
          </div>
        </div>

        <div class="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
          <h4 class="text-blue-400 font-bold mb-4">{{ $t('cases.frontend.dashboard.conversationsList.title') }}</h4>
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
                <div class="text-sm text-gray-400">{{ $t('cases.frontend.dashboard.conversationsList.lastMsg') }}: 2min</div>
                <span class="text-xs px-2 py-1 bg-green-500/20 text-green-400 rounded">{{ $t('cases.frontend.dashboard.conversationsList.aiResponding') }}</span>
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
                <div class="text-sm text-gray-400">{{ $t('cases.frontend.dashboard.conversationsList.handover') }}: 12min</div>
                <span class="text-xs px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded">{{ $t('cases.frontend.dashboard.conversationsList.operator') }}: Carlos</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Stack Técnico -->
    <section class="py-16 border-t border-gray-800 bg-gray-900/30">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold mb-8">{{ $t('cases.frontend.techStack.title') }}</h2>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          <div class="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
            <div class="text-blue-400 font-bold mb-2">{{ $t('cases.frontend.techStack.framework') }}</div>
            <p class="text-gray-400 text-sm">Vue.js 3 (Composition API)</p>
          </div>
          <div class="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
            <div class="text-blue-400 font-bold mb-2">{{ $t('cases.frontend.techStack.styling') }}</div>
            <p class="text-gray-400 text-sm">Tailwind CSS</p>
          </div>
          <div class="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
            <div class="text-blue-400 font-bold mb-2">{{ $t('cases.frontend.techStack.state') }}</div>
            <p class="text-gray-400 text-sm">Pinia (Vue Store)</p>
          </div>
          <div class="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
            <div class="text-blue-400 font-bold mb-2">{{ $t('cases.frontend.techStack.realtime') }}</div>
            <p class="text-gray-400 text-sm">WebSocket</p>
          </div>
          <div class="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
            <div class="text-blue-400 font-bold mb-2">{{ $t('cases.frontend.techStack.router') }}</div>
            <p class="text-gray-400 text-sm">Vue Router 4</p>
          </div>
          <div class="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
            <div class="text-blue-400 font-bold mb-2">{{ $t('cases.frontend.techStack.http') }}</div>
            <p class="text-gray-400 text-sm">Axios / Fetch API</p>
          </div>
          <div class="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
            <div class="text-blue-400 font-bold mb-2">{{ $t('cases.frontend.techStack.build') }}</div>
            <p class="text-gray-400 text-sm">Vite</p>
          </div>
          <div class="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
            <div class="text-blue-400 font-bold mb-2">{{ $t('cases.frontend.techStack.container') }}</div>
            <p class="text-gray-400 text-sm">Docker (2 ports)</p>
          </div>
        </div>

        <!-- API Integration -->
        <div class="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
          <h4 class="text-blue-400 font-bold mb-4">{{ $t('cases.frontend.techStack.backendIntegration.title') }}</h4>
          <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-gray-800 rounded-lg p-4">
              <div class="font-bold text-white mb-2">{{ $t('cases.frontend.techStack.backendIntegration.restApis') }}</div>
              <code class="text-xs text-gray-400">
                GET /api/conversations<br>
                POST /api/chat<br>
                GET /api/tenant-configs/{id}<br>
                PUT /api/prompts/override/{tenant}/{prompt}
              </code>
            </div>
            <div class="bg-gray-800 rounded-lg p-4">
              <div class="font-bold text-white mb-2">{{ $t('cases.frontend.techStack.backendIntegration.websocket') }}</div>
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
        <h2 class="text-3xl font-bold mb-8">{{ $t('cases.frontend.results.title') }}</h2>
        
        <div class="grid md:grid-cols-4 gap-6 mb-12">
          <div class="bg-gray-800/50 rounded-xl p-6 text-center border border-gray-700">
            <div class="text-4xl font-bold text-blue-400 mb-2">&lt;100ms</div>
            <div class="text-gray-400 text-sm">{{ $t('cases.frontend.results.websocketLatency') }}</div>
            <div class="text-gray-500 text-xs mt-1">{{ $t('cases.frontend.results.websocketLatencyDesc') }}</div>
          </div>
          <div class="bg-gray-800/50 rounded-xl p-6 text-center border border-gray-700">
            <div class="text-4xl font-bold text-blue-400 mb-2">2</div>
            <div class="text-gray-400 text-sm">{{ $t('cases.frontend.results.specializedApps') }}</div>
            <div class="text-gray-500 text-xs mt-1">{{ $t('cases.frontend.results.specializedAppsDesc') }}</div>
          </div>
          <div class="bg-gray-800/50 rounded-xl p-6 text-center border border-gray-700">
            <div class="text-4xl font-bold text-blue-400 mb-2">RBAC</div>
            <div class="text-gray-400 text-sm">{{ $t('cases.frontend.results.accessControl') }}</div>
            <div class="text-gray-500 text-xs mt-1">{{ $t('cases.frontend.results.accessControlDesc') }}</div>
          </div>
          <div class="bg-gray-800/50 rounded-xl p-6 text-center border border-gray-700">
            <div class="text-4xl font-bold text-blue-400 mb-2">30min</div>
            <div class="text-gray-400 text-sm">{{ $t('cases.frontend.results.autoReturnHandover') }}</div>
            <div class="text-gray-500 text-xs mt-1">{{ $t('cases.frontend.results.autoReturnHandoverDesc') }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-16 border-t border-gray-800">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-3xl font-bold mb-4">{{ $t('cases.frontend.cta.title') }}</h2>
        <p class="text-gray-400 mb-8">
          {{ $t('cases.frontend.cta.description') }}
        </p>
        <NuxtLink 
          to="/contato" 
          class="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg transition-colors"
        >
          {{ $t('cases.frontend.cta.button') }}
          <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup>
const { t } = useI18n()

useHead({
  title: t('cases.frontend.meta.title'),
  meta: [
    { 
      name: 'description', 
      content: t('cases.frontend.meta.description')
    }
  ]
})
</script>
