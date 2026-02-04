<template>
  <div class="min-h-screen bg-gray-950 text-gray-100">
    <!-- Header -->
    <header class="border-b border-gray-800 bg-gray-950/80 backdrop-blur-sm sticky top-0 z-50">
      <nav class="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <NuxtLink to="/" class="text-xl font-bold text-emerald-400 hover:text-emerald-300 transition-colors">
          ← {{ $t('nav.back') }}
        </NuxtLink>
        <a 
          href="https://github.com/mmarleta/mcp_servers" 
          target="_blank"
          class="text-gray-400 hover:text-white transition-colors"
        >
          GitHub →
        </a>
      </nav>
    </header>

    <main class="max-w-4xl mx-auto px-6 py-16">
      <!-- Hero -->
      <div class="mb-16">
        <span class="inline-block px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full text-sm mb-4">
          {{ $t('cases.mcpServers.tag') }}
        </span>
        <h1 class="text-4xl md:text-5xl font-bold mb-6">
          {{ $t('cases.mcpServers.title') }}
        </h1>
        <p class="text-xl text-gray-400 leading-relaxed">
          {{ $t('cases.mcpServers.description') }}
        </p>
      </div>

      <!-- O que é MCP -->
      <section class="mb-16">
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
          <span class="text-cyan-400">💡</span> {{ $t('cases.mcpServers.whatIsMcp.title') }}
        </h2>
        <div class="bg-gray-900/30 border border-gray-800 rounded-xl p-8">
          <p class="text-gray-300 leading-relaxed mb-4" v-html="$t('cases.mcpServers.whatIsMcp.intro')"></p>
          <div class="bg-gray-800/50 rounded-lg p-4 font-mono text-sm">
            <span class="text-gray-500">{{ $t('cases.mcpServers.whatIsMcp.comment') }}</span><br/>
            <span class="text-cyan-400">claude mcp add</span> optimus --scope user \<br/>
            <span class="pl-4">--env PYTHONPATH=/path/to/project \</span><br/>
            <span class="pl-4">-- python -m mcp_servers.optimus_project_mcp.stdio_server</span>
          </div>
        </div>
      </section>

      <!-- Servidores -->
      <section class="mb-16">
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
          <span class="text-emerald-400">🛠️</span> {{ $t('cases.mcpServers.servers.title') }}
        </h2>
        <div class="space-y-6">
          <div class="bg-gray-900/30 border border-gray-800 rounded-xl p-8">
            <h3 class="text-xl font-semibold text-cyan-400 mb-4">{{ $t('cases.mcpServers.servers.orchestrator.title') }}</h3>
            <p class="text-gray-300 leading-relaxed mb-4">
              {{ $t('cases.mcpServers.servers.orchestrator.intro') }}
            </p>
            <div class="grid md:grid-cols-2 gap-3 text-sm">
              <div class="bg-gray-800/50 rounded-lg p-3">
                <div class="text-cyan-400 font-mono">diagnose_gateway_health</div>
                <p class="text-gray-500 text-xs mt-1">{{ $t('cases.mcpServers.servers.orchestrator.diagnoseGateway') }}</p>
              </div>
              <div class="bg-gray-800/50 rounded-lg p-3">
                <div class="text-cyan-400 font-mono">analyze_cache_coherence</div>
                <p class="text-gray-500 text-xs mt-1">{{ $t('cases.mcpServers.servers.orchestrator.analyzeCache') }}</p>
              </div>
              <div class="bg-gray-800/50 rounded-lg p-3">
                <div class="text-cyan-400 font-mono">analyze_rate_limiting</div>
                <p class="text-gray-500 text-xs mt-1">{{ $t('cases.mcpServers.servers.orchestrator.analyzeRateLimiting') }}</p>
              </div>
              <div class="bg-gray-800/50 rounded-lg p-3">
                <div class="text-cyan-400 font-mono">generate_enterprise_router</div>
                <p class="text-gray-500 text-xs mt-1">{{ $t('cases.mcpServers.servers.orchestrator.generateRouter') }}</p>
              </div>
            </div>
          </div>

          <div class="bg-gray-900/30 border border-gray-800 rounded-xl p-8">
            <h3 class="text-xl font-semibold text-cyan-400 mb-4">{{ $t('cases.mcpServers.servers.optimus.title') }}</h3>
            <p class="text-gray-300 leading-relaxed mb-4">
              {{ $t('cases.mcpServers.servers.optimus.intro') }}
            </p>
            <div class="grid md:grid-cols-2 gap-3 text-sm">
              <div class="bg-gray-800/50 rounded-lg p-3">
                <div class="text-cyan-400 font-mono">system_overview</div>
                <p class="text-gray-500 text-xs mt-1">{{ $t('cases.mcpServers.servers.optimus.systemOverview') }}</p>
              </div>
              <div class="bg-gray-800/50 rounded-lg p-3">
                <div class="text-cyan-400 font-mono">service_contract</div>
                <p class="text-gray-500 text-xs mt-1">{{ $t('cases.mcpServers.servers.optimus.serviceContract') }}</p>
              </div>
              <div class="bg-gray-800/50 rounded-lg p-3">
                <div class="text-cyan-400 font-mono">validate_diff</div>
                <p class="text-gray-500 text-xs mt-1">{{ $t('cases.mcpServers.servers.optimus.validateDiff') }}</p>
              </div>
              <div class="bg-gray-800/50 rounded-lg p-3">
                <div class="text-cyan-400 font-mono">plan_change</div>
                <p class="text-gray-500 text-xs mt-1">{{ $t('cases.mcpServers.servers.optimus.planChange') }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Validate Diff -->
      <section class="mb-16">
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
          <span class="text-yellow-400">🛡️</span> {{ $t('cases.mcpServers.validation.title') }}
        </h2>
        <div class="bg-gray-900/30 border border-gray-800 rounded-xl p-8">
          <p class="text-gray-300 leading-relaxed mb-4" v-html="$t('cases.mcpServers.validation.intro')"></p>
          <div class="space-y-4">
            <div class="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
              <div class="text-red-400 font-semibold text-sm mb-2">{{ $t('cases.mcpServers.validation.violationDetected') }}</div>
              <div class="text-gray-500 text-sm font-mono whitespace-pre-line">{{ $t('cases.mcpServers.validation.violationExample') }}</div>
            </div>
            <div class="bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-4">
              <div class="text-emerald-400 font-semibold text-sm mb-2">{{ $t('cases.mcpServers.validation.validDiff') }}</div>
              <div class="text-gray-500 text-sm font-mono whitespace-pre-line">{{ $t('cases.mcpServers.validation.validExample') }}</div>
            </div>
          </div>
        </div>
      </section>

      <!-- Hot Reload -->
      <section class="mb-16">
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
          <span class="text-purple-400">🔄</span> {{ $t('cases.mcpServers.hotReload.title') }}
        </h2>
        <div class="bg-gray-900/30 border border-gray-800 rounded-xl p-8">
          <p class="text-gray-300 leading-relaxed mb-4">
            {{ $t('cases.mcpServers.hotReload.intro') }}
          </p>
          <div class="bg-gray-800/50 rounded-lg p-4 font-mono text-sm text-gray-400">
            <span class="text-green-400">@mcp.tool()</span><br/>
            <span class="text-blue-400">def</span> <span class="text-yellow-400">refresh</span>() -> Dict[str, str]:<br/>
            <span class="pl-4 text-gray-500">"""Reload policy/docs/compose and rebuild validator."""</span><br/>
            <span class="pl-4">importlib.reload(validator_module)</span><br/>
            <span class="pl-4">indexer.refresh()</span><br/>
            <span class="pl-4 text-blue-400">return</span> {"status": "refreshed"}
          </div>
        </div>
      </section>

      <!-- Stack -->
      <section class="mb-16">
        <h2 class="text-2xl font-bold mb-6">{{ $t('cases.mcpServers.stack.title') }}</h2>
        <div class="flex flex-wrap gap-3">
          <span class="px-4 py-2 bg-gray-800 rounded-lg text-sm">Python 3.12</span>
          <span class="px-4 py-2 bg-gray-800 rounded-lg text-sm">FastMCP</span>
          <span class="px-4 py-2 bg-gray-800 rounded-lg text-sm">HTTPX</span>
          <span class="px-4 py-2 bg-gray-800 rounded-lg text-sm">Redis</span>
          <span class="px-4 py-2 bg-gray-800 rounded-lg text-sm">YAML</span>
          <span class="px-4 py-2 bg-gray-800 rounded-lg text-sm">Claude Code</span>
        </div>
      </section>

      <!-- CTA -->
      <div class="text-center pt-8 border-t border-gray-800">
        <NuxtLink 
          to="/projetos/feed-rss" 
          class="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-500 rounded-lg transition-colors"
        >
          {{ $t('cases.mcpServers.cta.next') }}
        </NuxtLink>
      </div>
    </main>
  </div>
</template>
