<template>
  <div class="min-h-screen bg-gray-950 text-gray-100">
    <!-- Header -->
    <header class="border-b border-gray-800 bg-gray-950/80 backdrop-blur-sm sticky top-0 z-50">
      <nav class="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <NuxtLink to="/" class="text-xl font-bold text-emerald-400 hover:text-emerald-300 transition-colors">
          ← Voltar
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
          Developer Tools
        </span>
        <h1 class="text-4xl md:text-5xl font-bold mb-6">
          MCP Servers
        </h1>
        <p class="text-xl text-gray-400 leading-relaxed">
          Servidores Model Context Protocol customizados para desenvolvimento com Claude Code. 
          Ferramentas de debugging, validação arquitetural e navegação inteligente de codebase.
        </p>
      </div>

      <!-- O que é MCP -->
      <section class="mb-16">
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
          <span class="text-cyan-400">💡</span> O que é MCP?
        </h2>
        <div class="bg-gray-900/30 border border-gray-800 rounded-xl p-8">
          <p class="text-gray-300 leading-relaxed mb-4">
            <strong class="text-white">Model Context Protocol</strong> é um padrão da Anthropic 
            que permite estender assistentes de IA (como Claude) com ferramentas customizadas. 
            Em vez do AI "adivinhar" sobre seu codebase, você dá a ele acesso real à sua 
            arquitetura, contratos e convenções.
          </p>
          <div class="bg-gray-800/50 rounded-lg p-4 font-mono text-sm">
            <span class="text-gray-500"># Adicionar servidor MCP ao Claude Code</span><br/>
            <span class="text-cyan-400">claude mcp add</span> optimus --scope user \<br/>
            <span class="pl-4">--env PYTHONPATH=/path/to/project \</span><br/>
            <span class="pl-4">-- python -m mcp_servers.optimus_project_mcp.stdio_server</span>
          </div>
        </div>
      </section>

      <!-- Servidores -->
      <section class="mb-16">
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
          <span class="text-emerald-400">🛠️</span> Servidores Disponíveis
        </h2>
        <div class="space-y-6">
          <div class="bg-gray-900/30 border border-gray-800 rounded-xl p-8">
            <h3 class="text-xl font-semibold text-cyan-400 mb-4">backend_orchestrator_mcp</h3>
            <p class="text-gray-300 leading-relaxed mb-4">
              Ferramentas de debugging para o Backend Orchestrator:
            </p>
            <div class="grid md:grid-cols-2 gap-3 text-sm">
              <div class="bg-gray-800/50 rounded-lg p-3">
                <div class="text-cyan-400 font-mono">diagnose_gateway_health</div>
                <p class="text-gray-500 text-xs mt-1">Health check completo do gateway</p>
              </div>
              <div class="bg-gray-800/50 rounded-lg p-3">
                <div class="text-cyan-400 font-mono">analyze_cache_coherence</div>
                <p class="text-gray-500 text-xs mt-1">Performance do cache PubSub</p>
              </div>
              <div class="bg-gray-800/50 rounded-lg p-3">
                <div class="text-cyan-400 font-mono">analyze_rate_limiting</div>
                <p class="text-gray-500 text-xs mt-1">Status de rate limiting por tenant</p>
              </div>
              <div class="bg-gray-800/50 rounded-lg p-3">
                <div class="text-cyan-400 font-mono">generate_enterprise_router</div>
                <p class="text-gray-500 text-xs mt-1">Template de router seguindo padrões</p>
              </div>
            </div>
          </div>

          <div class="bg-gray-900/30 border border-gray-800 rounded-xl p-8">
            <h3 class="text-xl font-semibold text-cyan-400 mb-4">optimus_project_mcp</h3>
            <p class="text-gray-300 leading-relaxed mb-4">
              12 ferramentas para navegação inteligente do codebase:
            </p>
            <div class="grid md:grid-cols-2 gap-3 text-sm">
              <div class="bg-gray-800/50 rounded-lg p-3">
                <div class="text-cyan-400 font-mono">system_overview</div>
                <p class="text-gray-500 text-xs mt-1">Visão geral da arquitetura</p>
              </div>
              <div class="bg-gray-800/50 rounded-lg p-3">
                <div class="text-cyan-400 font-mono">service_contract</div>
                <p class="text-gray-500 text-xs mt-1">Contratos de cada microserviço</p>
              </div>
              <div class="bg-gray-800/50 rounded-lg p-3">
                <div class="text-cyan-400 font-mono">validate_diff</div>
                <p class="text-gray-500 text-xs mt-1">Validar mudanças contra guardrails</p>
              </div>
              <div class="bg-gray-800/50 rounded-lg p-3">
                <div class="text-cyan-400 font-mono">plan_change</div>
                <p class="text-gray-500 text-xs mt-1">Orientações arquiteturais para mudanças</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Validate Diff -->
      <section class="mb-16">
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
          <span class="text-yellow-400">🛡️</span> Validação Arquitetural
        </h2>
        <div class="bg-gray-900/30 border border-gray-800 rounded-xl p-8">
          <p class="text-gray-300 leading-relaxed mb-4">
            O <code class="text-cyan-400">validate_diff</code> verifica se um diff respeita 
            os guardrails arquiteturais do projeto:
          </p>
          <div class="space-y-4">
            <div class="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
              <div class="text-red-400 font-semibold text-sm mb-2">❌ Violação Detectada</div>
              <div class="text-gray-500 text-sm font-mono">
                ai-engine/src/service.py: Line 42<br/>
                "import sqlalchemy" ← AI Engine não pode acessar DB diretamente!<br/>
                Guardrail: "All data operations must go through Memory Engine APIs"
              </div>
            </div>
            <div class="bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-4">
              <div class="text-emerald-400 font-semibold text-sm mb-2">✅ Diff Válido</div>
              <div class="text-gray-500 text-sm font-mono">
                ai-engine/src/service.py: Line 42<br/>
                "await memory_engine_client.get_data(...)"<br/>
                ✓ Respects Memory Engine API boundary
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Hot Reload -->
      <section class="mb-16">
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
          <span class="text-purple-400">🔄</span> Hot Reload
        </h2>
        <div class="bg-gray-900/30 border border-gray-800 rounded-xl p-8">
          <p class="text-gray-300 leading-relaxed mb-4">
            Módulos são recarregados sem reiniciar o servidor MCP:
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
        <h2 class="text-2xl font-bold mb-6">Stack Técnica</h2>
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
          Próximo: Feed-RSS Monitor →
        </NuxtLink>
      </div>
    </main>
  </div>
</template>
