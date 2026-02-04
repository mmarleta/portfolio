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
        <span class="inline-block px-3 py-1 bg-yellow-500/10 text-yellow-400 rounded-full text-sm mb-4">
          Otimização de Custos
        </span>
        <h1 class="text-4xl md:text-5xl font-bold mb-6">
          LLM Pool Management
        </h1>
        <p class="text-xl text-gray-400 leading-relaxed">
          Sistema de gerenciamento de pools de LLMs com separação tool-calling vs chat, 
          rotação automática de chaves, fallback inteligente e redução de 40% nos custos com latência otimizada.
        </p>
      </div>

      <!-- Métricas -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        <div class="bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center">
          <div class="text-3xl font-bold text-yellow-400">40%</div>
          <div class="text-sm text-gray-500 mt-1">Redução de Custos</div>
        </div>
        <div class="bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center">
          <div class="text-3xl font-bold text-yellow-400">&lt;200ms</div>
          <div class="text-sm text-gray-500 mt-1">Latência p95</div>
        </div>
        <div class="bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center">
          <div class="text-3xl font-bold text-yellow-400">99.9%</div>
          <div class="text-sm text-gray-500 mt-1">Disponibilidade</div>
        </div>
        <div class="bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center">
          <div class="text-3xl font-bold text-yellow-400">N</div>
          <div class="text-sm text-gray-500 mt-1">Providers Simultâneos</div>
        </div>
      </div>

      <!-- Problema -->
      <section class="mb-16">
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
          <span class="text-red-400">⚡</span> O Problema
        </h2>
        <div class="bg-gray-900/30 border border-gray-800 rounded-xl p-8">
          <p class="text-gray-300 leading-relaxed mb-4">
            Sistemas de IA conversacional enterprise enfrentam desafios críticos de custo e latência:
          </p>
          <ul class="space-y-3 text-gray-400">
            <li class="flex items-start gap-2">
              <span class="text-red-400 mt-1">✗</span>
              <span><strong class="text-white">Custos explosivos</strong>: GPT-4 para tudo é caro. Nem toda task precisa do modelo mais potente</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-red-400 mt-1">✗</span>
              <span><strong class="text-white">Tool-calling é caro</strong>: Modelos que suportam function calling custam mais que modelos simples</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-red-400 mt-1">✗</span>
              <span><strong class="text-white">Rate limits</strong>: Uma única API key atinge limite rapidamente em produção</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-red-400 mt-1">✗</span>
              <span><strong class="text-white">Vendor lock-in</strong>: Dependência de um único provider (OpenAI) é arriscado</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-red-400 mt-1">✗</span>
              <span><strong class="text-white">Gestão de chaves</strong>: API keys em código ou env vars é inseguro</span>
            </li>
          </ul>
        </div>
      </section>

      <!-- Solução -->
      <section class="mb-16">
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
          <span class="text-emerald-400">✨</span> A Solução
        </h2>
        <div class="space-y-6">
          <!-- Pool Architecture -->
          <div class="bg-gray-900/30 border border-gray-800 rounded-xl p-8">
            <h3 class="text-xl font-semibold text-yellow-400 mb-4">Arquitetura de Pools Separados</h3>
            <p class="text-gray-300 leading-relaxed mb-4">
              Sistema de pools com separação explícita entre <strong class="text-white">chat</strong> 
              (conversação) e <strong class="text-white">tools</strong> (function calling):
            </p>
            <div class="grid md:grid-cols-2 gap-4 mb-4">
              <div class="bg-gray-800/50 rounded-lg p-4">
                <div class="text-emerald-400 font-semibold mb-2">💬 Chat Pool</div>
                <ul class="text-gray-500 text-sm space-y-1">
                  <li>• Modelo otimizado para conversação</li>
                  <li>• <code class="text-yellow-400">supports_tools: false</code></li>
                  <li>• Custo mais baixo (gpt-4o-mini)</li>
                  <li>• Usado para respostas humanizadas</li>
                </ul>
              </div>
              <div class="bg-gray-800/50 rounded-lg p-4">
                <div class="text-purple-400 font-semibold mb-2">🔧 Tools Pool</div>
                <ul class="text-gray-500 text-sm space-y-1">
                  <li>• Modelo com function calling</li>
                  <li>• <code class="text-yellow-400">supports_tools: true</code></li>
                  <li>• Custo mais alto (gpt-4o)</li>
                  <li>• Usado só quando precisa chamar tools</li>
                </ul>
              </div>
            </div>
            <p class="text-gray-500 text-sm">
              <strong class="text-gray-300">Resultado</strong>: 40% de redução de custos usando modelo barato para chat 
              e modelo premium só para operações que realmente precisam de tool calling.
            </p>
          </div>

          <!-- Key Groups -->
          <div class="bg-gray-900/30 border border-gray-800 rounded-xl p-8">
            <h3 class="text-xl font-semibold text-yellow-400 mb-4">Key Groups — Vault de Chaves</h3>
            <p class="text-gray-300 leading-relaxed mb-4">
              Separação entre <strong class="text-white">pools</strong> (configuração de modelo) e 
              <strong class="text-white">key groups</strong> (vault de chaves):
            </p>
            <div class="bg-gray-800/50 rounded-lg p-4 font-mono text-sm overflow-x-auto mb-4">
              <pre class="text-gray-300">
Key Group: "openai-production"
├── provider_type: "openai"
├── base_url: "https://api.openai.com/v1"
└── keys: [
      {key_id: "k1", fingerprint: "sk-...7f2a", status: "valid"},
      {key_id: "k2", fingerprint: "sk-...9b3c", status: "valid"},
      {key_id: "k3", fingerprint: "sk-...4d1e", status: "invalid"}
    ]

Pool: "gpt4o-mini-chat"
├── key_group_id: "openai-production"  ← Referência
├── model: "gpt-4o-mini"
├── supports_tools: false
└── is_active: true
              </pre>
            </div>
            <ul class="space-y-2 text-gray-400 text-sm">
              <li class="flex items-start gap-2">
                <span class="text-emerald-400 mt-1">✓</span>
                <span><strong class="text-white">Criptografia Fernet</strong>: Chaves armazenadas criptografadas em repouso</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-emerald-400 mt-1">✓</span>
                <span><strong class="text-white">Fingerprint</strong>: UI mostra apenas fingerprint (sk-...7f2a), nunca a chave completa</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-emerald-400 mt-1">✓</span>
                <span><strong class="text-white">Validação automática</strong>: Sistema valida chaves periodicamente e marca status</span>
              </li>
            </ul>
          </div>

          <!-- Automatic Selection -->
          <div class="bg-gray-900/30 border border-gray-800 rounded-xl p-8">
            <h3 class="text-xl font-semibold text-yellow-400 mb-4">Seleção Automática de Chaves</h3>
            <p class="text-gray-300 leading-relaxed mb-4">
              O sistema rotaciona automaticamente entre chaves válidas do mesmo key group:
            </p>
            <div class="bg-gray-800/50 rounded-lg p-4 text-sm">
              <div class="flex items-center gap-2 mb-2">
                <span class="px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded text-xs">1</span>
                <span class="text-gray-300">Request chega para pool <code class="text-emerald-400">gpt4o-mini-chat</code></span>
              </div>
              <div class="flex items-center gap-2 mb-2">
                <span class="px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded text-xs">2</span>
                <span class="text-gray-300">Sistema busca key_group <code class="text-emerald-400">openai-production</code></span>
              </div>
              <div class="flex items-center gap-2 mb-2">
                <span class="px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded text-xs">3</span>
                <span class="text-gray-300">Filtra apenas chaves com <code class="text-emerald-400">status: valid|active</code></span>
              </div>
              <div class="flex items-center gap-2 mb-2">
                <span class="px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded text-xs">4</span>
                <span class="text-gray-300">Seleciona chave (round-robin ou random)</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded text-xs">5</span>
                <span class="text-gray-300">Se rate limit → marca cooldown → tenta próxima chave</span>
              </div>
            </div>
          </div>

          <!-- Global Defaults -->
          <div class="bg-gray-900/30 border border-gray-800 rounded-xl p-8">
            <h3 class="text-xl font-semibold text-yellow-400 mb-4">Global Defaults + Tenant Override</h3>
            <p class="text-gray-300 leading-relaxed mb-4">
              Hierarquia de configuração com fallback inteligente:
            </p>
            <div class="bg-gray-800/50 rounded-lg p-4 font-mono text-sm overflow-x-auto">
              <pre class="text-gray-300">
# Prioridade de resolução:
1. tenant.chat_provider_id    → Pool específico do tenant
2. global.chat_provider_id    → Pool default global
3. ❌ FAIL-FAST               → Erro (sem fallback hardcoded)

# Frontend pode:
- Selecionar pool específico para o tenant
- Deixar vazio para usar "Global Default"
- Badge "⚡ usando default" indica herança
              </pre>
            </div>
          </div>

          <!-- Cross-Pool Fallback -->
          <div class="bg-gray-900/30 border border-gray-800 rounded-xl p-8">
            <h3 class="text-xl font-semibold text-yellow-400 mb-4">Cross-Pool Fallback</h3>
            <p class="text-gray-300 leading-relaxed mb-4">
              Quando todas as chaves do pool primário estão em cooldown:
            </p>
            <div class="bg-gray-800/50 rounded-lg p-4 text-sm">
              <div class="flex items-center gap-2 mb-2">
                <span class="px-2 py-1 bg-red-500/20 text-red-400 rounded text-xs">!</span>
                <span class="text-gray-300">Chat pool exausto (todas as chaves em rate limit)</span>
              </div>
              <div class="flex items-center gap-2 mb-2">
                <span class="px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded text-xs">→</span>
                <span class="text-gray-300">Tenta tools_pool (se suporta chat)</span>
              </div>
              <div class="flex items-center gap-2 mb-2">
                <span class="px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded text-xs">→</span>
                <span class="text-gray-300">Tenta global defaults</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="px-2 py-1 bg-emerald-500/20 text-emerald-400 rounded text-xs">✓</span>
                <span class="text-gray-300">Request completa com latência mínima adicional</span>
              </div>
            </div>
            <p class="text-gray-500 text-sm mt-4">
              <strong class="text-gray-300">QuotaEnforcer</strong>: Tracked provider health com cooldown de 60s por chave.
            </p>
          </div>

          <!-- Frontend Integration -->
          <div class="bg-gray-900/30 border border-gray-800 rounded-xl p-8">
            <h3 class="text-xl font-semibold text-yellow-400 mb-4">Gestão via Frontend</h3>
            <p class="text-gray-300 leading-relaxed mb-4">
              Admin UI completo para gestão de pools e chaves:
            </p>
            <div class="grid md:grid-cols-2 gap-4">
              <div class="bg-gray-800/50 rounded-lg p-4">
                <div class="text-emerald-400 font-semibold mb-2">Pool Management</div>
                <ul class="text-gray-500 text-sm space-y-1">
                  <li>• CRUD de pools</li>
                  <li>• Toggle <code>supports_tools</code></li>
                  <li>• Toggle <code>is_active</code></li>
                  <li>• Seleção de key_group</li>
                </ul>
              </div>
              <div class="bg-gray-800/50 rounded-lg p-4">
                <div class="text-purple-400 font-semibold mb-2">Key Management</div>
                <ul class="text-gray-500 text-sm space-y-1">
                  <li>• Adicionar/remover chaves</li>
                  <li>• Reveal com vault password</li>
                  <li>• Validação em batch</li>
                  <li>• Status por chave (valid/invalid)</li>
                </ul>
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
│                    LLM POOL SYSTEM                          │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│   ┌─────────────────────────────────────────────────────┐  │
│   │                  KEY GROUPS (Vault)                 │  │
│   │  ┌──────────────┐  ┌──────────────┐                │  │
│   │  │ openai-prod  │  │ groq-prod    │                │  │
│   │  │ keys: [k1,k2]│  │ keys: [k3]   │                │  │
│   │  │ base_url:... │  │ base_url:... │                │  │
│   │  └──────┬───────┘  └──────┬───────┘                │  │
│   └─────────┼─────────────────┼─────────────────────────┘  │
│             │                 │                             │
│   ┌─────────▼─────────────────▼─────────────────────────┐  │
│   │                    POOLS                             │  │
│   │  ┌──────────────┐  ┌──────────────┐  ┌───────────┐ │  │
│   │  │ gpt4o-mini   │  │ gpt4o-tools  │  │ groq-fast │ │  │
│   │  │ chat only    │  │ tool calling │  │ chat only │ │  │
│   │  │ key_group:   │  │ key_group:   │  │ key_group:│ │  │
│   │  │ openai-prod  │  │ openai-prod  │  │ groq-prod │ │  │
│   │  └──────────────┘  └──────────────┘  └───────────┘ │  │
│   └─────────────────────────────────────────────────────┘  │
│                           │                                 │
│   ┌───────────────────────▼─────────────────────────────┐  │
│   │                 GLOBAL DEFAULTS                      │  │
│   │  chat_provider_id: "gpt4o-mini"                     │  │
│   │  tools_provider_id: "gpt4o-tools"                   │  │
│   └─────────────────────────────────────────────────────┘  │
│                           │                                 │
│   ┌───────────────────────▼─────────────────────────────┐  │
│   │              TENANT OVERRIDE (opcional)              │  │
│   │  tenant_A.chat_provider_id: "groq-fast" (override)  │  │
│   │  tenant_B.chat_provider_id: null (usa default)      │  │
│   └─────────────────────────────────────────────────────┘  │
│                                                             │
└─────────────────────────────────────────────────────────────┘</pre>
        </div>
      </section>

      <!-- Decisões Técnicas -->
      <section class="mb-16">
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
          <span class="text-purple-400">🎯</span> Decisões Técnicas
        </h2>
        <div class="space-y-4">
          <div class="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
            <h3 class="font-semibold text-white mb-2">Por que separar pools e key groups?</h3>
            <p class="text-gray-400 text-sm">
              Pools definem configuração de modelo (model, temperature, supports_tools). Key groups definem 
              credenciais (provider_type, base_url, keys). Essa separação permite reusar o mesmo vault de 
              chaves em múltiplos pools com modelos diferentes.
            </p>
          </div>
          <div class="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
            <h3 class="font-semibold text-white mb-2">Por que fail-fast e não fallback para env vars?</h3>
            <p class="text-gray-400 text-sm">
              Em produção, chaves em código/env vars são anti-pattern de segurança. Fail-fast força 
              configuração correta no sistema e evita "funciona na minha máquina" com chaves diferentes.
            </p>
          </div>
          <div class="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
            <h3 class="font-semibold text-white mb-2">Por que cache de 60s para provider configs?</h3>
            <p class="text-gray-400 text-sm">
              Balance entre consistência e performance. 60s é suficiente para propagar mudanças de 
              configuração sem bombardear Memory Engine a cada request. TTLCache com lock thread-safe.
            </p>
          </div>
          <div class="bg-gray-900/30 border border-gray-800 rounded-xl p-6">
            <h3 class="font-semibold text-white mb-2">Por que QuotaEnforcer com cooldown de 60s?</h3>
            <p class="text-gray-400 text-sm">
              Rate limits de providers (OpenAI, Groq) tipicamente resetam em 60s. Cooldown evita 
              retry storms que piorariam o rate limit. Cross-pool fallback garante continuidade.
            </p>
          </div>
        </div>
      </section>

      <!-- Stack -->
      <section class="mb-16">
        <h2 class="text-2xl font-bold mb-6">Stack Técnica</h2>
        <div class="flex flex-wrap gap-3">
          <span class="px-4 py-2 bg-gray-800 rounded-lg text-sm">Python 3.12</span>
          <span class="px-4 py-2 bg-gray-800 rounded-lg text-sm">FastAPI</span>
          <span class="px-4 py-2 bg-gray-800 rounded-lg text-sm">SQLAlchemy 2.0</span>
          <span class="px-4 py-2 bg-gray-800 rounded-lg text-sm">Fernet (AES)</span>
          <span class="px-4 py-2 bg-gray-800 rounded-lg text-sm">cachetools TTLCache</span>
          <span class="px-4 py-2 bg-gray-800 rounded-lg text-sm">HTTPX (async)</span>
          <span class="px-4 py-2 bg-gray-800 rounded-lg text-sm">LangChain</span>
          <span class="px-4 py-2 bg-gray-800 rounded-lg text-sm">Vue.js 3</span>
        </div>
      </section>

      <!-- CTA -->
      <div class="text-center pt-8 border-t border-gray-800">
        <NuxtLink 
          to="/projetos/ai-engine" 
          class="inline-flex items-center gap-2 px-6 py-3 bg-yellow-600 hover:bg-yellow-500 rounded-lg transition-colors"
        >
          Próximo: AI Conversation Engine →
        </NuxtLink>
      </div>
    </main>
  </div>
</template>
