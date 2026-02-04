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
        <span class="inline-block px-3 py-1 bg-orange-500/10 text-orange-400 rounded-full text-sm mb-4">
          Document AI
        </span>
        <h1 class="text-4xl md:text-5xl font-bold mb-6">
          Document Processing Pipeline
        </h1>
        <p class="text-xl text-gray-400 leading-relaxed">
          Pipeline de processamento de documentos com detecção automática de tabelas de preço, 
          chunking estratégico e geração automática de catálogos para RAG.
        </p>
      </div>

      <!-- Métricas -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
        <div class="bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center">
          <div class="text-3xl font-bold text-orange-400">100%</div>
          <div class="text-sm text-gray-500 mt-1">Auto-detect Tables</div>
        </div>
        <div class="bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center">
          <div class="text-3xl font-bold text-orange-400">0</div>
          <div class="text-sm text-gray-500 mt-1">Broken Price Chunks</div>
        </div>
        <div class="bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center">
          <div class="text-3xl font-bold text-orange-400">&lt;5min</div>
          <div class="text-sm text-gray-500 mt-1">Index Update</div>
        </div>
        <div class="bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center">
          <div class="text-3xl font-bold text-orange-400">Multi</div>
          <div class="text-sm text-gray-500 mt-1">Tenant Isolated</div>
        </div>
      </div>

      <!-- Problema -->
      <section class="mb-16">
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
          <span class="text-red-400">⚡</span> O Problema
        </h2>
        <div class="bg-gray-900/30 border border-gray-800 rounded-xl p-8">
          <p class="text-gray-300 leading-relaxed mb-4">
            Clínicas enviam tabelas de preço em formatos diversos (PDF, Excel, Word). 
            Chunking tradicional quebra tabelas no meio, destruindo a relação entre 
            procedimento e preço:
          </p>
          <div class="bg-red-500/10 border border-red-500/20 rounded-lg p-4 mt-4 font-mono text-sm">
            <div class="text-red-400 mb-2">❌ Chunk quebrado no meio da tabela:</div>
            <div class="text-gray-500">
              "...Limpeza dental R$ 150,00<br/>
              Clareamento R$ 800,00<br/>
              Extração simples R$..."<br/>
              <span class="text-red-400">--- FIM DO CHUNK ---</span><br/>
              "...250,00<br/>
              Canal R$ 600,00..."
            </div>
          </div>
        </div>
      </section>

      <!-- Solução -->
      <section class="mb-16">
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
          <span class="text-emerald-400">✨</span> A Solução
        </h2>
        <div class="space-y-6">
          <div class="bg-gray-900/30 border border-gray-800 rounded-xl p-8">
            <h3 class="text-xl font-semibold text-orange-400 mb-4">Detecção Automática de Tabelas (Docling)</h3>
            <p class="text-gray-300 leading-relaxed mb-4">
              Análise estrutural do documento para identificar tabelas de preço 
              vs texto corrido (FAQ, políticas):
            </p>
            <ul class="space-y-2 text-gray-400 text-sm">
              <li class="flex items-start gap-2">
                <span class="text-orange-400 mt-1">→</span>
                <span>Heurísticas de layout (colunas, bordas, alinhamento)</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-orange-400 mt-1">→</span>
                <span>Detecção de padrões monetários (R$, $, €)</span>
              </li>
              <li class="flex items-start gap-2">
                <span class="text-orange-400 mt-1">→</span>
                <span>Headers típicos ("Procedimento", "Valor", "Preço")</span>
              </li>
            </ul>
          </div>

          <div class="bg-gray-900/30 border border-gray-800 rounded-xl p-8">
            <h3 class="text-xl font-semibold text-orange-400 mb-4">Chunking Estratégico</h3>
            <p class="text-gray-300 leading-relaxed mb-4">
              Estratégias diferentes para tipos de conteúdo diferentes:
            </p>
            <div class="grid md:grid-cols-2 gap-4">
              <div class="bg-gray-800/50 rounded-lg p-4">
                <div class="text-orange-400 font-semibold mb-2">📊 Tabelas de Preço</div>
                <p class="text-gray-500 text-sm">
                  <strong class="text-white">TableRow Strategy:</strong> Cada linha da tabela 
                  vira um chunk atômico. Nunca quebra no meio de um preço.
                </p>
              </div>
              <div class="bg-gray-800/50 rounded-lg p-4">
                <div class="text-orange-400 font-semibold mb-2">📝 FAQ / Políticas</div>
                <p class="text-gray-500 text-sm">
                  <strong class="text-white">Semantic Chunking:</strong> Chunks por parágrafo 
                  ou seção semântica, com overlap para contexto.
                </p>
              </div>
            </div>
          </div>

          <div class="bg-gray-900/30 border border-gray-800 rounded-xl p-8">
            <h3 class="text-xl font-semibold text-orange-400 mb-4">Catálogo Automático</h3>
            <p class="text-gray-300 leading-relaxed mb-4">
              Extração estruturada gera catálogo JSON pronto para busca:
            </p>
            <div class="bg-gray-800/50 rounded-lg p-4 font-mono text-sm">
              <pre class="text-gray-400">{
  "catalog_id": "clinica_demo_pricing",
  "items": [
    {
      "name": "Limpeza Dental",
      "aliases": ["profilaxia", "limpeza"],
      "payments": [
        { "method": "pix", "value": 150.00 },
        { "method": "cartao", "value": 165.00 }
      ],
      "metadata": { "category": "preventivo" }
    }
  ],
  "match": { "min_score": 0.82 }
}</pre>
            </div>
          </div>
        </div>
      </section>

      <!-- Pipeline -->
      <section class="mb-16">
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
          <span class="text-blue-400">🏗️</span> Pipeline de Processamento
        </h2>
        <div class="bg-gray-900/30 border border-gray-800 rounded-xl p-8 overflow-x-auto">
          <pre class="text-sm text-gray-400 font-mono leading-relaxed">
┌─────────────────────────────────────────────────────────────┐
│                    DOCUMENTO UPLOAD                         │
│                   (PDF, Excel, Word)                        │
└─────────────────────────┬───────────────────────────────────┘
                          ▼
┌─────────────────────────────────────────────────────────────┐
│  1. HASH CHECK                                              │
│     - Verifica duplicados via SHA-256                       │
│     - Skip se já processado                                 │
└─────────────────────────┬───────────────────────────────────┘
                          ▼
┌─────────────────────────────────────────────────────────────┐
│  2. DOCLING ANALYSIS                                        │
│     - Detecta tipo de conteúdo (tabela vs texto)            │
│     - Extrai estrutura do documento                         │
└─────────────────────────┬───────────────────────────────────┘
                          ▼
          ┌───────────────┴───────────────┐
          ▼                               ▼
┌─────────────────────┐       ┌─────────────────────────────┐
│  PRICING TABLE      │       │     TEXT CONTENT            │
│  - TableRow chunks  │       │     - Semantic chunks       │
│  - Catalog extract  │       │     - Overlap for context   │
└─────────┬───────────┘       └─────────────┬───────────────┘
          │                                 │
          └───────────────┬─────────────────┘
                          ▼
┌─────────────────────────────────────────────────────────────┐
│  3. EMBEDDING GENERATION                                    │
│     - OpenAI text-embedding-3-large (3072d)                 │
│     - Batch processing para eficiência                      │
└─────────────────────────┬───────────────────────────────────┘
                          ▼
┌─────────────────────────────────────────────────────────────┐
│  4. STORAGE (Memory Engine)                                 │
│     - Chunks → pgvector                                     │
│     - Catalog → pricing_catalogs table                      │
│     - HNSW index update (async via Celery)                  │
└─────────────────────────────────────────────────────────────┘</pre>
        </div>
      </section>

      <!-- HNSW Index -->
      <section class="mb-16">
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
          <span class="text-cyan-400">⚡</span> HNSW Index Auto-Update
        </h2>
        <div class="bg-gray-900/30 border border-gray-800 rounded-xl p-8">
          <p class="text-gray-300 leading-relaxed mb-4">
            Índices HNSW são atualizados automaticamente via Celery workers, 
            garantindo que novos documentos estejam disponíveis para busca em minutos:
          </p>
          <ul class="space-y-2 text-gray-400 text-sm">
            <li class="flex items-start gap-2">
              <span class="text-cyan-400 mt-1">→</span>
              <span><strong class="text-white">Trigger:</strong> Upload de documento ou schedule periódico</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-cyan-400 mt-1">→</span>
              <span><strong class="text-white">Rebuild:</strong> Incremental quando possível, full rebuild se necessário</span>
            </li>
            <li class="flex items-start gap-2">
              <span class="text-cyan-400 mt-1">→</span>
              <span><strong class="text-white">Zero-downtime:</strong> Novo índice é criado em paralelo, swap atômico</span>
            </li>
          </ul>
        </div>
      </section>

      <!-- Stack -->
      <section class="mb-16">
        <h2 class="text-2xl font-bold mb-6">Stack Técnica</h2>
        <div class="flex flex-wrap gap-3">
          <span class="px-4 py-2 bg-gray-800 rounded-lg text-sm">Docling</span>
          <span class="px-4 py-2 bg-gray-800 rounded-lg text-sm">Celery</span>
          <span class="px-4 py-2 bg-gray-800 rounded-lg text-sm">Redis Queue</span>
          <span class="px-4 py-2 bg-gray-800 rounded-lg text-sm">pgvector</span>
          <span class="px-4 py-2 bg-gray-800 rounded-lg text-sm">HNSW</span>
          <span class="px-4 py-2 bg-gray-800 rounded-lg text-sm">OpenAI Embeddings</span>
          <span class="px-4 py-2 bg-gray-800 rounded-lg text-sm">FastAPI</span>
        </div>
      </section>

      <!-- CTA -->
      <div class="text-center pt-8 border-t border-gray-800">
        <NuxtLink 
          to="/projetos/mcp-servers" 
          class="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-500 rounded-lg transition-colors"
        >
          Próximo: MCP Servers →
        </NuxtLink>
      </div>
    </main>
  </div>
</template>
