<template>
  <div>
    <!-- Hero -->
    <section class="min-h-[85vh] flex items-center">
      <div class="max-w-5xl mx-auto px-6">
        <p class="text-emerald-400 font-mono text-sm mb-4">Olá, eu sou</p>
        <h1 class="text-5xl md:text-6xl font-bold text-white mb-4">Marcelo Marleta</h1>
        <h2 class="text-2xl md:text-3xl text-gray-400 mb-6">Construo sistemas que escalam.</h2>
        <p class="text-gray-400 max-w-xl mb-8 leading-relaxed">
          Full-Stack Developer com foco em arquiteturas escaláveis, integrações AI/LLM 
          e plataformas multi-tenant.
        </p>
        <div class="flex gap-4">
          <a href="#projetos" class="px-6 py-3 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors font-medium">
            Ver projetos
          </a>
          <a href="mailto:contato@webotify.io" class="px-6 py-3 border border-gray-700 text-gray-300 rounded-lg hover:border-gray-500 transition-colors">
            Contato
          </a>
        </div>
      </div>
    </section>

    <!-- Stack -->
    <section class="py-20 border-t border-gray-800">
      <div class="max-w-5xl mx-auto px-6">
        <h2 class="text-2xl font-bold text-white mb-10">Stack</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 class="text-emerald-400 font-medium mb-3 text-sm uppercase tracking-wide">Backend</h3>
            <ul class="space-y-2 text-gray-400 text-sm">
              <li>Python / FastAPI</li>
              <li>PostgreSQL</li>
              <li>Redis</li>
              <li>Celery</li>
            </ul>
          </div>
          <div>
            <h3 class="text-emerald-400 font-medium mb-3 text-sm uppercase tracking-wide">Frontend</h3>
            <ul class="space-y-2 text-gray-400 text-sm">
              <li>TypeScript</li>
              <li>Vue.js / Nuxt</li>
              <li>TailwindCSS</li>
            </ul>
          </div>
          <div>
            <h3 class="text-emerald-400 font-medium mb-3 text-sm uppercase tracking-wide">AI / LLM</h3>
            <ul class="space-y-2 text-gray-400 text-sm">
              <li>OpenAI GPT-4</li>
              <li>LangChain</li>
              <li>MCP Protocol</li>
            </ul>
          </div>
          <div>
            <h3 class="text-emerald-400 font-medium mb-3 text-sm uppercase tracking-wide">DevOps</h3>
            <ul class="space-y-2 text-gray-400 text-sm">
              <li>Docker / K8s</li>
              <li>CI/CD</li>
              <li>Prometheus</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Projetos -->
    <section id="projetos" class="py-20 border-t border-gray-800">
      <div class="max-w-5xl mx-auto px-6">
        <h2 class="text-2xl font-bold text-white mb-3">Projetos</h2>
        <p class="text-gray-400 mb-10">Arquiteturas reais, decisões técnicas, problemas resolvidos.</p>
        
        <div class="grid md:grid-cols-2 gap-6">
          <!-- Optimus -->
          <NuxtLink to="/projetos/optimus" class="group block bg-gray-900 rounded-xl border border-gray-800 p-6 hover:border-emerald-500/50 transition-all">
            <div class="flex justify-between items-start mb-3">
              <h3 class="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">Optimus</h3>
              <span class="text-gray-600 group-hover:text-emerald-400 transition-colors">→</span>
            </div>
            <p class="text-gray-400 text-sm mb-4">
              Plataforma de chatbots AI multi-tenant para milhões de usuários. Microserviços, memória hierárquica, WhatsApp.
            </p>
            <div class="flex flex-wrap gap-2">
              <span class="px-2 py-1 bg-gray-800 rounded text-xs text-gray-400">Python</span>
              <span class="px-2 py-1 bg-gray-800 rounded text-xs text-gray-400">FastAPI</span>
              <span class="px-2 py-1 bg-gray-800 rounded text-xs text-gray-400">LangChain</span>
              <span class="px-2 py-1 bg-gray-800 rounded text-xs text-gray-400">Redis</span>
            </div>
          </NuxtLink>

          <!-- MCP -->
          <a href="https://github.com/mmarleta/mcp_servers" target="_blank" class="group block bg-gray-900 rounded-xl border border-gray-800 p-6 hover:border-emerald-500/50 transition-all">
            <div class="flex justify-between items-start mb-3">
              <h3 class="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">MCP Servers</h3>
              <span class="text-gray-600 group-hover:text-emerald-400 transition-colors">↗</span>
            </div>
            <p class="text-gray-400 text-sm mb-4">
              Servidores MCP para estender o Claude com ferramentas que entendem arquitetura e convenções do projeto.
            </p>
            <div class="flex flex-wrap gap-2">
              <span class="px-2 py-1 bg-gray-800 rounded text-xs text-gray-400">Python</span>
              <span class="px-2 py-1 bg-gray-800 rounded text-xs text-gray-400">MCP</span>
              <span class="px-2 py-1 bg-gray-800 rounded text-xs text-gray-400">Claude</span>
            </div>
          </a>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-20 border-t border-gray-800">
      <div class="max-w-5xl mx-auto px-6 text-center">
        <h2 class="text-2xl font-bold text-white mb-3">Vamos conversar?</h2>
        <p class="text-gray-400 mb-6">Procurando um desenvolvedor para sistemas escaláveis ou integração AI?</p>
        <a href="mailto:contato@webotify.io" class="inline-block px-6 py-3 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors font-medium">
          Entrar em contato
        </a>
      </div>
    </section>
  </div>
</template>
