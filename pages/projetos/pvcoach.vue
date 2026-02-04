<template>
  <ProjectPage class="text-gray-100">
    <ProjectHeader back-label-key="nav.back" subtitle-key="cases.common.personalProject" />

    <ProjectHeroBlock :config="heroConfig" />

    <!-- Navigation -->
    <nav class="sticky top-16 z-40 bg-gray-950/90 backdrop-blur-sm border-b border-gray-800">
      <div class="max-w-4xl mx-auto px-4">
        <div class="flex gap-6 overflow-x-auto py-4 text-sm">
          <a href="#problema" class="text-gray-400 hover:text-amber-400 whitespace-nowrap transition-colors">{{ $t('cases.pvcoach.nav.problem') }}</a>
          <a href="#arquitetura" class="text-gray-400 hover:text-amber-400 whitespace-nowrap transition-colors">{{ $t('cases.pvcoach.nav.architecture') }}</a>
          <a href="#multipv" class="text-gray-400 hover:text-amber-400 whitespace-nowrap transition-colors">{{ $t('cases.pvcoach.nav.multipv') }}</a>
          <a href="#grounded" class="text-gray-400 hover:text-amber-400 whitespace-nowrap transition-colors">{{ $t('cases.pvcoach.nav.grounded') }}</a>
          <a href="#hints" class="text-gray-400 hover:text-amber-400 whitespace-nowrap transition-colors">{{ $t('cases.pvcoach.nav.hints') }}</a>
          <a href="#providers" class="text-gray-400 hover:text-amber-400 whitespace-nowrap transition-colors">{{ $t('cases.pvcoach.nav.providers') }}</a>
          <a href="#api" class="text-gray-400 hover:text-amber-400 whitespace-nowrap transition-colors">{{ $t('cases.pvcoach.nav.api') }}</a>
        </div>
      </div>
    </nav>

    <!-- Content -->
    <main class="max-w-4xl mx-auto px-4 py-12">
      
      <!-- Problema -->
      <section id="problema" class="mb-16">
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
          <span class="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center text-red-400">!</span>
          {{ $t('cases.pvcoach.problem.title') }}
        </h2>
        
        <div class="prose prose-invert max-w-none">
          <p class="text-gray-300 leading-relaxed mb-4" v-html="$t('cases.pvcoach.problem.intro')"></p>
          
          <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-6 my-6">
            <h4 class="text-lg font-semibold text-gray-200 mb-4">{{ $t('cases.pvcoach.problem.gapTitle') }}</h4>
            <ul class="space-y-3 text-gray-400">
              <li class="flex items-start gap-3">
                <span class="text-red-400 mt-1">✗</span>
                <span><strong class="text-gray-200">{{ $t('cases.pvcoach.problem.engineSays') }}</strong> {{ $t('cases.pvcoach.problem.engineExample') }}</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-red-400 mt-1">✗</span>
                <span><strong class="text-gray-200">{{ $t('cases.pvcoach.problem.llmHallucinates') }}</strong> {{ $t('cases.pvcoach.problem.llmExample') }}</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-red-400 mt-1">✗</span>
                <span><strong class="text-gray-200">{{ $t('cases.pvcoach.problem.humanExpensive') }}</strong> {{ $t('cases.pvcoach.problem.humanExample') }}</span>
              </li>
            </ul>
          </div>

          <p class="text-gray-300 leading-relaxed" v-html="$t('cases.pvcoach.problem.solution')"></p>
        </div>
      </section>

      <!-- Arquitetura -->
      <section id="arquitetura" class="mb-16">
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
          <span class="w-8 h-8 bg-amber-500/20 rounded-lg flex items-center justify-center text-amber-400">🏗️</span>
          {{ $t('cases.pvcoach.architecture.title') }}
        </h2>

        <div class="prose prose-invert max-w-none">
          <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-6 my-6">
            <h4 class="text-lg font-semibold text-gray-200 mb-4 text-center">{{ $t('cases.pvcoach.architecture.pipelineTitle') }}</h4>
            <div class="font-mono text-sm text-center">
              <div class="inline-block bg-gray-800 rounded-lg px-4 py-2 mb-4">
                <span class="text-amber-400">{{ $t('cases.pvcoach.architecture.fenPosition') }}</span>
              </div>
              <div class="text-amber-400 mb-2">↓</div>
              <div class="inline-block bg-blue-500/20 border border-blue-500/40 rounded-lg px-4 py-2 mb-4">
                <span class="text-blue-400">{{ $t('cases.pvcoach.architecture.stockfishMultipv') }}</span>
                <span class="text-gray-500 text-xs block">{{ $t('cases.pvcoach.architecture.depthMultipv') }}</span>
              </div>
              <div class="text-amber-400 mb-2">↓</div>
              <div class="flex justify-center gap-4 mb-4">
                <div class="bg-gray-800 rounded px-3 py-2">
                  <span class="text-green-400">1. e4</span>
                  <span class="text-gray-500 text-xs block">+0.35</span>
                </div>
                <div class="bg-gray-800 rounded px-3 py-2">
                  <span class="text-yellow-400">2. d4</span>
                  <span class="text-gray-500 text-xs block">+0.20</span>
                </div>
                <div class="bg-gray-800 rounded px-3 py-2">
                  <span class="text-orange-400">3. Nf3</span>
                  <span class="text-gray-500 text-xs block">+0.15</span>
                </div>
              </div>
              <div class="text-amber-400 mb-2">↓</div>
              <div class="inline-block bg-purple-500/20 border border-purple-500/40 rounded-lg px-4 py-2 mb-4">
                <span class="text-purple-400">{{ $t('cases.pvcoach.architecture.llmGrounded') }}</span>
                <span class="text-gray-500 text-xs block">{{ $t('cases.pvcoach.architecture.explanationPv') }}</span>
              </div>
              <div class="text-amber-400 mb-2">↓</div>
              <div class="inline-block bg-green-500/20 border border-green-500/40 rounded-lg px-4 py-2">
                <span class="text-green-400">{{ $t('cases.pvcoach.architecture.validation') }}</span>
                <span class="text-gray-500 text-xs block">{{ $t('cases.pvcoach.architecture.crossCheck') }}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- MultiPV -->
      <section id="multipv" class="mb-16">
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
          <span class="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-400">📊</span>
          {{ $t('cases.pvcoach.multipv.title') }}
        </h2>

        <div class="prose prose-invert max-w-none">
          <p class="text-gray-300 leading-relaxed mb-6" v-html="$t('cases.pvcoach.multipv.intro')"></p>

          <div class="bg-gray-900 rounded-lg overflow-hidden mb-6">
            <div class="bg-gray-800 px-4 py-2 text-sm text-gray-400 font-mono">stockfish_engine.py</div>
            <pre class="p-4 overflow-x-auto text-sm"><code class="text-gray-300">def evaluate_position_multipv(board: chess.Board, depth: int = 20, multipv: int = 3, pv_len: int = 6):
    """
    Avalia posição com MultiPV.
    
    Returns: [{
        rank: 1,
        move_uci: "e2e4",
        move_san: "e4",
        pv_san: ["e4", "e5", "Nf3", "Nc6", "Bb5", "a6"],
        cp: 35,           # centipawns
        mate: null,       # ou número de lances até mate
        delta_cp: 0       # diferença para o melhor
    }]
    """
    engine = chess.engine.SimpleEngine.popen_uci(STOCKFISH_PATH)
    info_list = engine.analyse(board, chess.engine.Limit(depth=depth), multipv=multipv)
    
    candidates = []
    for idx, info in enumerate(info_list):
        pv = info.get('pv', [])
        first_move = pv[0]
        pov = info['score'].pov(board.turn)
        
        candidates.append({
            'rank': idx + 1,
            'move_san': board.san(first_move),
            'pv_san': _format_pv_san(board, pv, pv_len),
            'cp': pov.score(),
            'mate': pov.mate() if pov.is_mate() else None,
        })
    
    # Calcula delta vs melhor lance
    best_cp = candidates[0]['cp']
    for c in candidates:
        c['delta_cp'] = best_cp - c['cp'] if c['cp'] else None
    
    return candidates</code></pre>
          </div>

          <div class="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 my-6">
            <h4 class="font-semibold text-blue-400 mb-2">💡 delta_cp</h4>
            <p class="text-sm text-gray-300" v-html="$t('cases.pvcoach.multipv.deltaExplanation')"></p>
          </div>
        </div>
      </section>

      <!-- Grounded Explanations -->
      <section id="grounded" class="mb-16">
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
          <span class="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center text-purple-400">📝</span>
          {{ $t('cases.pvcoach.grounded.title') }}
        </h2>

        <div class="prose prose-invert max-w-none">
          <p class="text-gray-300 leading-relaxed mb-6" v-html="$t('cases.pvcoach.grounded.intro')"></p>

          <div class="bg-gray-900 rounded-lg overflow-hidden mb-6">
            <div class="bg-gray-800 px-4 py-2 text-sm text-gray-400 font-mono">Prompt Template</div>
            <pre class="p-4 overflow-x-auto text-sm"><code class="text-gray-300">header = """
Você é um treinador de xadrez. Explique para um jogador {level} 
EM PORTUGUÊS DO BRASIL, de forma clara e concisa, por que o 
melhor lance é melhor que as outras opções.

Regras:
(1) SEMPRE cite lances específicos das PVs
(2) Foque em consequências concretas nas próximas 2-3 jogadas
(3) NÃO faça afirmações sem citar uma PV
(4) Use frases curtas e bullets quando fizer sentido
"""

# Formata candidatos para o prompt
body = """
Top candidates for this position:
1. e4 → +0.35 pawns → PV: e4 e5 Nf3 Nc6 Bb5 a6
2. d4 → +0.20 pawns (loses 0.15 pawns) → PV: d4 d5 c4 e6 Nc3 Nf6
3. Nf3 → +0.15 pawns (loses 0.20 pawns) → PV: Nf3 d5 d4 Nf6 c4 e6
"""</code></pre>
          </div>

          <h3 class="text-xl font-semibold text-gray-200 mt-8 mb-4">{{ $t('cases.pvcoach.grounded.validationTitle') }}</h3>

          <div class="bg-gray-900 rounded-lg overflow-hidden mb-6">
            <div class="bg-gray-800 px-4 py-2 text-sm text-gray-400 font-mono">api_server.py</div>
            <pre class="p-4 overflow-x-auto text-sm"><code class="text-gray-300">def validate_explanation(explanation: str, candidates: List[dict]) -> List[str]:
    """Valida se a explicação menciona lances corretos."""
    warnings = []
    
    # Extrai todos os lances das PVs
    pv_moves = set()
    for c in candidates:
        for san in c.get('pv_san', [])[:10]:
            pv_moves.add(san)
    
    # Extrai lances mencionados na explicação
    mentioned = extract_san_moves(explanation)
    
    # Verifica se lances mencionados existem nas PVs
    for mv in mentioned:
        if mv not in pv_moves:
            warnings.append(f"Move '{mv}' is not present in PVs.")
    
    # Garante que o melhor lance foi mencionado
    top_move = candidates[0].get('move_san')
    if top_move and top_move not in explanation:
        warnings.append(f"Top move '{top_move}' not referenced.")
    
    return warnings</code></pre>
          </div>

          <div class="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4 my-6">
            <h4 class="font-semibold text-purple-400 mb-2">🛡️ {{ $t('cases.pvcoach.grounded.resultTitle') }}</h4>
            <p class="text-sm text-gray-300">
              {{ $t('cases.pvcoach.grounded.resultText') }}
            </p>
          </div>
        </div>
      </section>

      <!-- Progressive Hints -->
      <section id="hints" class="mb-16">
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
          <span class="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center text-green-400">💡</span>
          {{ $t('cases.pvcoach.hints.title') }}
        </h2>

        <div class="prose prose-invert max-w-none">
          <p class="text-gray-300 leading-relaxed mb-6">
            {{ $t('cases.pvcoach.hints.intro') }}
          </p>

          <div class="grid md:grid-cols-3 gap-4 my-6">
            <div class="bg-gray-900/50 border border-green-500/30 rounded-lg p-4">
              <h4 class="font-semibold text-green-400 mb-2">{{ $t('cases.pvcoach.hints.level1Title') }}</h4>
              <p class="text-sm text-gray-400 mb-2">{{ $t('cases.pvcoach.hints.level1Example') }}</p>
              <p class="text-xs text-gray-500">{{ $t('cases.pvcoach.hints.level1Desc') }}</p>
            </div>
            <div class="bg-gray-900/50 border border-yellow-500/30 rounded-lg p-4">
              <h4 class="font-semibold text-yellow-400 mb-2">{{ $t('cases.pvcoach.hints.level2Title') }}</h4>
              <p class="text-sm text-gray-400 mb-2">{{ $t('cases.pvcoach.hints.level2Example') }}</p>
              <p class="text-xs text-gray-500">{{ $t('cases.pvcoach.hints.level2Desc') }}</p>
            </div>
            <div class="bg-gray-900/50 border border-red-500/30 rounded-lg p-4">
              <h4 class="font-semibold text-red-400 mb-2">{{ $t('cases.pvcoach.hints.level3Title') }}</h4>
              <p class="text-sm text-gray-400 mb-2">{{ $t('cases.pvcoach.hints.level3Example') }}</p>
              <p class="text-xs text-gray-500">{{ $t('cases.pvcoach.hints.level3Desc') }}</p>
            </div>
          </div>

          <div class="bg-gray-900 rounded-lg overflow-hidden mb-6">
            <div class="bg-gray-800 px-4 py-2 text-sm text-gray-400 font-mono">api_server.py</div>
            <pre class="p-4 overflow-x-auto text-sm"><code class="text-gray-300">def generate_progressive_hints_for_fen(fen: str, candidates: List[dict], level: int):
    best = candidates[0]
    piece_name = _piece_name_from_uci(fen, best['move_uci'])
    san = best['move_san']
    pv = best['pv_san']
    
    if level == 1:
        # Pista: foco na peça, sem revelar a casa
        hint = f"Think about moving your {piece_name}."
        if 'x' in san:
            hint += " It may involve a capture."
        if '+' in san:
            hint += " It creates a threat."
            
    elif level == 2:
        # Plano: revela o melhor lance + alternativas
        hint = {
            'best_move': san,
            'alternatives': [c['move_san'] for c in candidates[1:3]],
            'delta_cp': candidates[1].get('delta_cp'),
            'message': "Why is this more effective? Consider king safety."
        }
        
    else:
        # Variante completa
        hint = {
            'best_move': san,
            'pv_san': pv,
            'message': "This line keeps evaluation."
        }
    
    return hint</code></pre>
          </div>
        </div>
      </section>

      <!-- Multi-Provider -->
      <section id="providers" class="mb-16">
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
          <span class="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center text-cyan-400">🔌</span>
          {{ $t('cases.pvcoach.providers.title') }}
        </h2>

        <div class="prose prose-invert max-w-none">
          <p class="text-gray-300 leading-relaxed mb-6">
            {{ $t('cases.pvcoach.providers.intro') }}
          </p>

          <div class="grid md:grid-cols-2 gap-4 my-6">
            <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
              <h4 class="font-semibold text-cyan-400 mb-2">OpenAI</h4>
              <p class="text-sm text-gray-400">{{ $t('cases.pvcoach.providers.openai') }}</p>
            </div>
            <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
              <h4 class="font-semibold text-cyan-400 mb-2">Anthropic</h4>
              <p class="text-sm text-gray-400">{{ $t('cases.pvcoach.providers.anthropic') }}</p>
            </div>
            <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
              <h4 class="font-semibold text-cyan-400 mb-2">Google</h4>
              <p class="text-sm text-gray-400">{{ $t('cases.pvcoach.providers.google') }}</p>
            </div>
            <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
              <h4 class="font-semibold text-cyan-400 mb-2">OpenRouter</h4>
              <p class="text-sm text-gray-400">{{ $t('cases.pvcoach.providers.openrouter') }}</p>
            </div>
          </div>

          <div class="bg-gray-900 rounded-lg overflow-hidden mb-6">
            <div class="bg-gray-800 px-4 py-2 text-sm text-gray-400 font-mono">llm_providers.py</div>
            <pre class="p-4 overflow-x-auto text-sm"><code class="text-gray-300">def generate_completion_simple(prompt: str, provider: str = None, model: str = None):
    """Generate text using selected provider."""
    provider_name = (provider or os.getenv('LLM_PROVIDER') or 'openai').lower()
    
    if provider_name == 'openai':
        client = OpenAI()
        return client.chat.completions.create(
            model=model or os.getenv('OPENAI_MODEL'),
            messages=[{"role": "system", "content": prompt}]
        ).choices[0].message.content
    
    if provider_name == 'anthropic':
        client = Anthropic()
        return client.messages.create(
            model=model or os.getenv('ANTHROPIC_MODEL'),
            messages=[{"role": "user", "content": prompt}]
        ).content[0].text
    
    if provider_name == 'google':
        genai.configure(api_key=os.getenv('GOOGLE_API_KEY'))
        model_obj = genai.GenerativeModel(model or 'gemini-1.5-flash')
        return model_obj.generate_content(prompt).text
    
    # ... openrouter, glm</code></pre>
          </div>
        </div>
      </section>

      <!-- API -->
      <section id="api" class="mb-16">
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
          <span class="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center text-orange-400">🔗</span>
          {{ $t('cases.pvcoach.api.title') }}
        </h2>

        <div class="prose prose-invert max-w-none">
          <div class="space-y-4">
            <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
              <div class="flex items-center gap-2 mb-2">
                <span class="px-2 py-1 bg-green-500/20 text-green-400 rounded text-xs font-mono">POST</span>
                <span class="font-mono text-gray-300">/api/evaluate_position</span>
              </div>
              <p class="text-sm text-gray-400">{{ $t('cases.pvcoach.api.evaluatePosition') }}</p>
            </div>

            <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
              <div class="flex items-center gap-2 mb-2">
                <span class="px-2 py-1 bg-green-500/20 text-green-400 rounded text-xs font-mono">POST</span>
                <span class="font-mono text-gray-300">/api/explain_position</span>
              </div>
              <p class="text-sm text-gray-400">{{ $t('cases.pvcoach.api.explainPosition') }}</p>
            </div>

            <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
              <div class="flex items-center gap-2 mb-2">
                <span class="px-2 py-1 bg-green-500/20 text-green-400 rounded text-xs font-mono">POST</span>
                <span class="font-mono text-gray-300">/api/hints_position</span>
              </div>
              <p class="text-sm text-gray-400">{{ $t('cases.pvcoach.api.hintsPosition') }}</p>
            </div>

            <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
              <div class="flex items-center gap-2 mb-2">
                <span class="px-2 py-1 bg-green-500/20 text-green-400 rounded text-xs font-mono">POST</span>
                <span class="font-mono text-gray-300">/api/analyze</span>
              </div>
              <p class="text-sm text-gray-400">{{ $t('cases.pvcoach.api.analyze') }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Stack -->
      <section class="mb-16">
        <h2 class="text-2xl font-bold mb-6">{{ $t('cases.common.technicalStack') }}</h2>
        <div class="flex flex-wrap gap-2">
          <span class="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">Python</span>
          <span class="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">FastAPI</span>
          <span class="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">Stockfish</span>
          <span class="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">python-chess</span>
          <span class="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">OpenAI</span>
          <span class="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">Anthropic</span>
          <span class="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">Google AI</span>
          <span class="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">React</span>
          <span class="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">Lichess API</span>
        </div>
      </section>

      <!-- Results -->
      <section class="mb-16">
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
          <span class="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center text-emerald-400">📊</span>
          {{ $t('cases.common.results') }}
        </h2>

        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/20 rounded-lg p-6">
            <div class="text-3xl font-bold text-amber-400 mb-2">0</div>
            <div class="text-gray-400">{{ $t('cases.pvcoach.results.hallucinations') }}</div>
          </div>
          <div class="bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/20 rounded-lg p-6">
            <div class="text-3xl font-bold text-amber-400 mb-2">5</div>
            <div class="text-gray-400">{{ $t('cases.pvcoach.results.providers') }}</div>
          </div>
          <div class="bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/20 rounded-lg p-6">
            <div class="text-3xl font-bold text-amber-400 mb-2">Cache</div>
            <div class="text-gray-400">{{ $t('cases.pvcoach.results.cache') }}</div>
          </div>
          <div class="bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/20 rounded-lg p-6">
            <div class="text-3xl font-bold text-amber-400 mb-2">3</div>
            <div class="text-gray-400">{{ $t('cases.pvcoach.results.hintLevels') }}</div>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <ProjectCTA
        title-key="cases.pvcoach.cta.title"
        description-key="cases.pvcoach.cta.subtitle"
        section-class="border-t border-gray-800 pt-12"
        container-class="text-center"
        title-class="text-2xl font-bold mb-4"
      >
        <template #actions>
          <LocaleLink to="/projetos/automark" class="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-gray-200 rounded-lg transition-colors">
            AutoMark Platform →
          </LocaleLink>
          <LocaleLink to="/projetos/feed-rss" class="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-gray-200 rounded-lg transition-colors">
            Feed-RSS Monitor →
          </LocaleLink>
          <LocaleLink to="/projetos/ai-engine" class="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-gray-200 rounded-lg transition-colors">
            AI Conversation Engine →
          </LocaleLink>
        </template>
      </ProjectCTA>

    </main>

    <!-- Closing Note -->
    <section class="border-t border-gray-800 py-8 mt-12">
      <div class="max-w-4xl mx-auto px-4 text-center text-gray-500 text-sm">
        <p>{{ $t('cases.pvcoach.footer') }}</p>
      </div>
    </section>
  </ProjectPage>
</template>

<script setup>
import { heroBlocksBySlug } from '~/data/project-heroes'

const heroConfig = heroBlocksBySlug.pvcoach

useHead({
  title: 'PVCoach - Chess AI Coach | Marcelo Marleta',
  meta: [
    { name: 'description', content: 'Case study: Chess coach combining Stockfish with LLM. MultiPV analysis, grounded explanations, progressive hints, anti-hallucination validation.' }
  ]
})
</script>
