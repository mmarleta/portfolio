<template>
  <article class="max-w-3xl mx-auto px-6 py-20">
    <NuxtLink to="/#projetos" class="text-emerald-400 hover:text-emerald-300 text-sm">← Voltar</NuxtLink>
    
    <h1 class="text-4xl font-bold text-white mt-6 mb-4">Optimus</h1>
    <p class="text-xl text-gray-400 mb-12">Plataforma de Chatbots AI para Milhões de Usuários</p>

    <div class="space-y-8 text-gray-300 leading-relaxed">
      
      <section>
        <h2 class="text-xl font-bold text-white mb-4">O Problema</h2>
        <p>
          Uma empresa precisava de uma plataforma de chatbots que atendesse clínicas, e-commerces, 
          escritórios de advocacia — qualquer vertical de negócio. O sistema precisava escalar pra 
          milhões de usuários, manter contexto de conversas longas, e isolar completamente os dados entre clientes.
        </p>
        <p class="mt-4">
          Chatbots genéricos não resolvem. Eles esquecem o que você disse 5 mensagens atrás 
          e não entendem que "dente 36" numa clínica é informação crítica que não pode sumir.
        </p>
      </section>

      <section>
        <h2 class="text-xl font-bold text-white mb-4">A Solução</h2>
        <p class="mb-6">Arquitetura de microserviços do zero, pensada pra produção desde o dia um:</p>
        
        <div class="bg-gray-900 rounded-lg p-6 font-mono text-sm overflow-x-auto border border-gray-800">
          <pre class="text-gray-400">
┌─────────────┐  ┌─────────────┐  ┌─────────────┐
│  WhatsApp   │  │  Web/Mobile │  │   Outros    │
└──────┬──────┘  └──────┬──────┘  └──────┬──────┘
       └────────────────┼────────────────┘
                        │
           ┌────────────▼────────────┐
           │  Backend Orchestrator   │
           │  Rate limiting, cache   │
           └────────────┬────────────┘
                        │
    ┌───────────────────┼───────────────────┐
    │                   │                   │
┌───▼───┐         ┌─────▼─────┐       ┌─────▼─────┐
│  AI   │         │  Memory   │       │  Rules    │
│Engine │         │  Engine   │       │  Engine   │
└───────┘         └───────────┘       └───────────┘</pre>
        </div>

        <ul class="mt-6 space-y-2">
          <li><span class="text-emerald-400 font-medium">Backend Orchestrator</span> — Gateway único. Rate limiting, cache, circuit breaker.</li>
          <li><span class="text-emerald-400 font-medium">AI Engine</span> — Processa conversas com LangChain. Zero acesso a banco.</li>
          <li><span class="text-emerald-400 font-medium">Memory Engine</span> — Dono do PostgreSQL. Memória hierárquica (hot/warm/cold).</li>
          <li><span class="text-emerald-400 font-medium">Rules Engine</span> — Automações de negócio por vertical.</li>
        </ul>
      </section>

      <section>
        <h2 class="text-xl font-bold text-white mb-4">Multi-Tenancy de Verdade</h2>
        <p>
          Cada cliente tem seu próprio schema no PostgreSQL (<code class="text-emerald-400">t_clinica_abc</code>, 
          <code class="text-emerald-400">t_loja_xyz</code>). Não é só um tenant_id numa tabela compartilhada — 
          é isolamento real. Um bug no código de um tenant não vaza dados de outro.
        </p>
      </section>

      <section>
        <h2 class="text-xl font-bold text-white mb-4">O Problema do "Esquecimento"</h2>
        <p>
          Chatbots perdem contexto. Depois de 50 mensagens, esquecem que você marcou consulta pra terça às 14h.
        </p>
        <p class="mt-4">Resolvi com memória em três camadas:</p>
        <ul class="mt-4 space-y-2">
          <li><span class="text-white font-medium">Hot</span> — Redis, últimas mensagens, acesso instantâneo</li>
          <li><span class="text-white font-medium">Warm</span> — Redis, contexto recente, TTL maior</li>
          <li><span class="text-white font-medium">Cold</span> — PostgreSQL, histórico completo</li>
        </ul>
        <p class="mt-4">
          Quando um operador humano devolve pro bot, o sistema gera resumo via GPT-4 com templates 
          específicos por vertical. Numa clínica, ele sabe que "dente 36" e "amoxicilina 500mg" são críticos.
        </p>
      </section>

      <section>
        <h2 class="text-xl font-bold text-white mb-4">Números</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div class="bg-gray-900 rounded-lg p-4 text-center border border-gray-800">
            <p class="text-2xl font-bold text-emerald-400">&lt;500ms</p>
            <p class="text-xs text-gray-500 mt-1">Latência P95</p>
          </div>
          <div class="bg-gray-900 rounded-lg p-4 text-center border border-gray-800">
            <p class="text-2xl font-bold text-emerald-400">~90%</p>
            <p class="text-xs text-gray-500 mt-1">Cache hit</p>
          </div>
          <div class="bg-gray-900 rounded-lg p-4 text-center border border-gray-800">
            <p class="text-2xl font-bold text-emerald-400">99.9%</p>
            <p class="text-xs text-gray-500 mt-1">Uptime</p>
          </div>
          <div class="bg-gray-900 rounded-lg p-4 text-center border border-gray-800">
            <p class="text-2xl font-bold text-emerald-400">3k/s</p>
            <p class="text-xs text-gray-500 mt-1">Throughput</p>
          </div>
        </div>
      </section>

      <section>
        <h2 class="text-xl font-bold text-white mb-4">Stack</h2>
        <div class="flex flex-wrap gap-2">
          <span class="px-3 py-1 bg-gray-900 rounded text-sm border border-gray-800">Python</span>
          <span class="px-3 py-1 bg-gray-900 rounded text-sm border border-gray-800">FastAPI</span>
          <span class="px-3 py-1 bg-gray-900 rounded text-sm border border-gray-800">LangChain</span>
          <span class="px-3 py-1 bg-gray-900 rounded text-sm border border-gray-800">PostgreSQL</span>
          <span class="px-3 py-1 bg-gray-900 rounded text-sm border border-gray-800">Redis</span>
          <span class="px-3 py-1 bg-gray-900 rounded text-sm border border-gray-800">Docker</span>
          <span class="px-3 py-1 bg-gray-900 rounded text-sm border border-gray-800">Kubernetes</span>
          <span class="px-3 py-1 bg-gray-900 rounded text-sm border border-gray-800">OpenAI</span>
        </div>
      </section>

      <section>
        <h2 class="text-xl font-bold text-white mb-4">O que aprendi</h2>
        <p>
          <span class="text-white font-medium">Separação de responsabilidades não é frescura.</span> 
          Depois de 6 meses, quando você precisa mudar o cache sem quebrar o AI Engine, agradece.
        </p>
        <p class="mt-4">
          <span class="text-white font-medium">Multi-tenancy precisa ser pensado desde o dia um.</span> 
          Schema por tenant no PostgreSQL é mais trabalho inicial, mas dorme tranquilo.
        </p>
        <p class="mt-4">
          <span class="text-white font-medium">Memória de chatbot é subestimada.</span> 
          Todo mundo foca no modelo. Ninguém fala do que acontece com 200 mensagens.
        </p>
      </section>

    </div>

    <div class="mt-16 pt-8 border-t border-gray-800">
      <p class="text-gray-400 mb-4">Interessado em construir algo parecido?</p>
      <a href="mailto:contato@webotify.io" class="inline-block px-6 py-3 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors font-medium">
        Vamos conversar
      </a>
    </div>
  </article>
</template>
