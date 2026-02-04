<template>
  <div class="min-h-screen bg-gray-950 text-gray-100">
    <!-- Header -->
    <header class="border-b border-gray-800 bg-gray-950/80 backdrop-blur-sm sticky top-0 z-50">
      <div class="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <NuxtLink to="/" class="text-emerald-400 hover:text-emerald-300 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd" />
          </svg>
          Voltar
        </NuxtLink>
        <span class="text-gray-500 text-sm">Optimus AI Platform</span>
      </div>
    </header>

    <!-- Hero Section -->
    <section class="py-16 px-4 border-b border-gray-800">
      <div class="max-w-4xl mx-auto">
        <div class="flex items-center gap-3 mb-6">
          <span class="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm font-medium">
            Quality Assurance
          </span>
          <span class="px-3 py-1 bg-gray-800 text-gray-400 rounded-full text-sm">
            AI Testing
          </span>
        </div>
        
        <h1 class="text-4xl md:text-5xl font-bold mb-6">
          AI Testing
          <span class="text-purple-400"> Tools</span>
        </h1>
        
        <p class="text-xl text-gray-400 mb-8 leading-relaxed">
          Suite completa de testes para AI conversacional: interface de simulação multi-canal, 
          detector de alucinações, quality scorer multi-dimensional, e cenários realísticos 
          com personalidades de cliente configuráveis.
        </p>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-4 text-center">
            <div class="text-2xl font-bold text-purple-400">5</div>
            <div class="text-sm text-gray-500">Analyzers</div>
          </div>
          <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-4 text-center">
            <div class="text-2xl font-bold text-purple-400">4</div>
            <div class="text-sm text-gray-500">Personalidades</div>
          </div>
          <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-4 text-center">
            <div class="text-2xl font-bold text-purple-400">Real-time</div>
            <div class="text-sm text-gray-500">WebSocket</div>
          </div>
          <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-4 text-center">
            <div class="text-2xl font-bold text-purple-400">Multi</div>
            <div class="text-sm text-gray-500">Channel</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Navigation -->
    <nav class="sticky top-16 z-40 bg-gray-950/90 backdrop-blur-sm border-b border-gray-800">
      <div class="max-w-4xl mx-auto px-4">
        <div class="flex gap-6 overflow-x-auto py-4 text-sm">
          <a href="#problema" class="text-gray-400 hover:text-purple-400 whitespace-nowrap transition-colors">Problema</a>
          <a href="#interface" class="text-gray-400 hover:text-purple-400 whitespace-nowrap transition-colors">Interface</a>
          <a href="#hallucination" class="text-gray-400 hover:text-purple-400 whitespace-nowrap transition-colors">Hallucination Detector</a>
          <a href="#quality" class="text-gray-400 hover:text-purple-400 whitespace-nowrap transition-colors">Quality Scorer</a>
          <a href="#scenarios" class="text-gray-400 hover:text-purple-400 whitespace-nowrap transition-colors">Cenários</a>
          <a href="#runner" class="text-gray-400 hover:text-purple-400 whitespace-nowrap transition-colors">Test Runner</a>
        </div>
      </div>
    </nav>

    <!-- Content -->
    <main class="max-w-4xl mx-auto px-4 py-12">
      
      <!-- Problema -->
      <section id="problema" class="mb-16">
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
          <span class="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center text-red-400">!</span>
          O Problema
        </h2>
        
        <div class="prose prose-invert max-w-none">
          <p class="text-gray-300 leading-relaxed mb-4">
            Testar sistemas de AI conversacional é fundamentalmente diferente de testar software 
            tradicional. Outputs são probabilísticos, contexto importa, e "correto" é subjetivo.
          </p>
          
          <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-6 my-6">
            <h4 class="text-lg font-semibold text-gray-200 mb-4">Desafios Específicos de AI Testing</h4>
            <ul class="space-y-3 text-gray-400">
              <li class="flex items-start gap-3">
                <span class="text-red-400 mt-1">✗</span>
                <span><strong class="text-gray-200">Alucinações:</strong> AI inventa informações que parecem plausíveis mas são falsas. Em contexto médico/dental, isso é perigoso.</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-red-400 mt-1">✗</span>
                <span><strong class="text-gray-200">Consistência:</strong> Mesma pergunta pode gerar respostas diferentes. Como testar isso?</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-red-400 mt-1">✗</span>
                <span><strong class="text-gray-200">Contexto multi-turno:</strong> Resposta do turno 5 depende dos turnos 1-4. Testes isolados não capturam isso.</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-red-400 mt-1">✗</span>
                <span><strong class="text-gray-200">Subjetividade:</strong> "Resposta boa" depende de tom, empatia, completude — métricas difíceis de quantificar.</span>
              </li>
            </ul>
          </div>

          <p class="text-gray-300 leading-relaxed">
            A solução foi criar uma suite de ferramentas especializadas: interface de simulação 
            para testes manuais, analyzers automáticos para detecção de problemas, e um framework 
            de cenários realísticos para testes de regressão.
          </p>
        </div>
      </section>

      <!-- Interface de Testes -->
      <section id="interface" class="mb-16">
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
          <span class="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center text-purple-400">🎭</span>
          Interface de Simulação
        </h2>

        <div class="prose prose-invert max-w-none">
          <p class="text-gray-300 leading-relaxed mb-6">
            Interface web Flask + SocketIO para testes manuais interativos. Simula diferentes 
            canais (WhatsApp, Web, API) com headers corretos, gerencia handover, e mostra 
            métricas em tempo real.
          </p>

          <div class="grid md:grid-cols-2 gap-4 my-6">
            <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
              <h4 class="font-semibold text-purple-400 mb-2">🎭 Channel Profiles</h4>
              <p class="text-sm text-gray-400">WhatsApp, Web, API — cada um com headers específicos (X-Request-Source).</p>
            </div>
            <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
              <h4 class="font-semibold text-purple-400 mb-2">🤝 Handover Management</h4>
              <p class="text-sm text-gray-400">Takeover, Return to AI, Operator Messages — testa fluxo completo.</p>
            </div>
            <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
              <h4 class="font-semibold text-purple-400 mb-2">📱 Multi-Session</h4>
              <p class="text-sm text-gray-400">Múltiplas sessões simultâneas para simular carga.</p>
            </div>
            <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
              <h4 class="font-semibold text-purple-400 mb-2">⚡ Real-time</h4>
              <p class="text-sm text-gray-400">WebSocket para feedback instantâneo de respostas.</p>
            </div>
          </div>

          <div class="bg-gray-900 rounded-lg overflow-hidden mb-6">
            <div class="bg-gray-800 px-4 py-2 text-sm text-gray-400 font-mono">app_enhanced.py</div>
            <pre class="p-4 overflow-x-auto text-sm"><code class="text-gray-300">@dataclass
class TestSession:
    """Test session data structure."""
    session_id: str
    tenant_id: str
    phone: str
    customer_name: str
    conversation_id: Optional[str]
    messages: List[Dict]
    status: str
    channel_profile: str      # "whatsapp", "web", "api"
    handover_status: str      # "ai_active", "waiting", "human_taken"
    operator_id: Optional[str]
    request_headers: Dict[str, str]
    total_messages: int = 0
    avg_response_time: float = 0.0

def _get_channel_headers(self, session: TestSession, sender_type: str):
    """Generate headers based on channel profile."""
    headers = {"X-Tenant-ID": session.tenant_id}
    
    if session.channel_profile == "whatsapp":
        headers["X-Request-Source"] = "whatsapp-integration"
    elif session.channel_profile == "web":
        headers["X-Request-Source"] = "web"
    else:
        headers["X-Request-Source"] = "api"
    
    return headers</code></pre>
          </div>

          <h3 class="text-xl font-semibold text-gray-200 mt-8 mb-4">Test Scenarios Pré-definidos</h3>

          <div class="bg-gray-900 rounded-lg overflow-hidden mb-6">
            <div class="bg-gray-800 px-4 py-2 text-sm text-gray-400 font-mono">Cenários Built-in</div>
            <pre class="p-4 overflow-x-auto text-sm"><code class="text-gray-300">scenarios = [
    TestScenario(
        name="Saudação Básica",
        messages=["Olá!", "Meu nome é João Silva", "Gostaria de agendar"],
        expected_intents=["greeting", "introduction", "appointment.request"]
    ),
    TestScenario(
        name="Emergência Dental",
        messages=["Socorro! Dor de dente!", "A dor é muito forte"],
        expected_intents=["emergency.dental", "emergency.pain"]
    ),
    TestScenario(
        name="Cancelamento",
        messages=["Preciso cancelar minha consulta", "É para amanhã às 14h"],
        expected_intents=["appointment.cancel", "appointment.details"]
    ),
]</code></pre>
          </div>
        </div>
      </section>

      <!-- Hallucination Detector -->
      <section id="hallucination" class="mb-16">
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
          <span class="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center text-red-400">🚨</span>
          Hallucination Detector
        </h2>

        <div class="prose prose-invert max-w-none">
          <p class="text-gray-300 leading-relaxed mb-6">
            Detecta alucinações e erros factuais em respostas. Crítico para contexto médico/dental 
            onde informações falsas podem causar danos reais.
          </p>

          <div class="bg-gray-900 rounded-lg overflow-hidden mb-6">
            <div class="bg-gray-800 px-4 py-2 text-sm text-gray-400 font-mono">analyzers/hallucination_detector.py</div>
            <pre class="p-4 overflow-x-auto text-sm"><code class="text-gray-300">@dataclass
class HallucinationInstance:
    """A detected hallucination instance."""
    type: str       # 'factual_error', 'invented_info', 'impossible_claim'
    severity: str   # 'low', 'medium', 'high', 'critical'
    description: str
    evidence: str
    confidence: float
    response_snippet: str

@dataclass
class HallucinationAnalysisResult:
    """Results of hallucination analysis."""
    response_text: str
    hallucination_score: float   # 0.0 = clean, 1.0 = high risk
    detected_hallucinations: List[HallucinationInstance]
    factual_accuracy_score: float
    plausibility_score: float
    consistency_score: float
    safety_score: float
    warnings: List[str]</code></pre>
          </div>

          <h3 class="text-xl font-semibold text-gray-200 mt-8 mb-4">Tipos de Alucinação Detectados</h3>

          <div class="grid md:grid-cols-2 gap-4 my-6">
            <div class="bg-gray-900/50 border border-red-500/30 rounded-lg p-4">
              <h4 class="font-semibold text-red-400 mb-2">factual_error</h4>
              <p class="text-sm text-gray-400">Informação contradiz fatos conhecidos (ex: "limpeza custa R$5000").</p>
            </div>
            <div class="bg-gray-900/50 border border-orange-500/30 rounded-lg p-4">
              <h4 class="font-semibold text-orange-400 mb-2">invented_info</h4>
              <p class="text-sm text-gray-400">AI inventa detalhes específicos não fornecidos (ex: nome do dentista).</p>
            </div>
            <div class="bg-gray-900/50 border border-yellow-500/30 rounded-lg p-4">
              <h4 class="font-semibold text-yellow-400 mb-2">impossible_claim</h4>
              <p class="text-sm text-gray-400">Afirmações logicamente impossíveis (ex: "consulta de 5 minutos").</p>
            </div>
            <div class="bg-gray-900/50 border border-red-500/30 rounded-lg p-4">
              <h4 class="font-semibold text-red-400 mb-2">medical_misinformation</h4>
              <p class="text-sm text-gray-400">Informações médicas incorretas ou perigosas.</p>
            </div>
          </div>

          <div class="bg-gray-900 rounded-lg overflow-hidden mb-6">
            <div class="bg-gray-800 px-4 py-2 text-sm text-gray-400 font-mono">Knowledge Base para Validação</div>
            <pre class="p-4 overflow-x-auto text-sm"><code class="text-gray-300"># Fatos dentais conhecidos para validação
dental_facts = {
    "pricing": {
        "ranges": {
            "consulta": (50, 300),      # R$50-300 é plausível
            "limpeza": (80, 250),
            "canal": (300, 1500),
            "implante": (1500, 5000),
        }
    },
    "timing": {
        "consultation": "30-60 minutos",
        "cleaning": "45-90 minutos",
        "root_canal": "60-120 minutos",
    },
    "medical_constraints": [
        "diagnóstico apenas com exame clínico",
        "receita apenas por dentista",
    ]
}</code></pre>
          </div>
        </div>
      </section>

      <!-- Quality Scorer -->
      <section id="quality" class="mb-16">
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
          <span class="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center text-green-400">📊</span>
          Quality Scorer
        </h2>

        <div class="prose prose-invert max-w-none">
          <p class="text-gray-300 leading-relaxed mb-6">
            Avalia qualidade de respostas em múltiplas dimensões. Não é só "certo ou errado" — 
            é readability, relevância, empatia, completude, tom.
          </p>

          <div class="bg-gray-900 rounded-lg overflow-hidden mb-6">
            <div class="bg-gray-800 px-4 py-2 text-sm text-gray-400 font-mono">analyzers/quality_scorer.py</div>
            <pre class="p-4 overflow-x-auto text-sm"><code class="text-gray-300">@dataclass
class QualityMetrics:
    """Quality metrics for an AI response."""
    overall_score: float        # 0.0 - 1.0
    readability_score: float    # Flesch-Kincaid
    relevance_score: float      # Responde a pergunta?
    helpfulness_score: float    # Ajuda o usuário?
    accuracy_score: float       # Informações corretas?
    completeness_score: float   # Resposta completa?
    tone_score: float           # Tom apropriado?
    safety_score: float         # Seguro para o contexto?
    warnings: List[str]
    recommendations: List[str]</code></pre>
          </div>

          <h3 class="text-xl font-semibold text-gray-200 mt-8 mb-4">Dimensões de Qualidade</h3>

          <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-6 my-6">
            <ul class="space-y-3 text-gray-400">
              <li class="flex items-start gap-3">
                <span class="text-green-400 font-bold">Readability</span>
                <span>Flesch-Kincaid grade level. Respostas devem ser acessíveis ao público geral.</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-green-400 font-bold">Empathy</span>
                <span>Detecta indicadores de empatia: "entendo", "compreendo", "lamento".</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-green-400 font-bold">Call-to-Action</span>
                <span>Resposta leva a próximo passo? "agendar", "ligar", "visitar".</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-green-400 font-bold">Professional Language</span>
                <span>Uso de termos profissionais: "consulta", "tratamento", "procedimento".</span>
              </li>
            </ul>
          </div>

          <div class="bg-gray-900 rounded-lg overflow-hidden mb-6">
            <div class="bg-gray-800 px-4 py-2 text-sm text-gray-400 font-mono">Quality Detractors (reduzem score)</div>
            <pre class="p-4 overflow-x-auto text-sm"><code class="text-gray-300">quality_detractors = {
    "vague_responses": [
        r"\btalvez\b",
        r"\bpossível\b",
        r"\bdepende\b",  # Sem contexto adicional
    ],
    "overpromising": [
        r"\bgarantido\b",
        r"\bsem dor\b",
        r"\b100%\b",
    ],
    "unprofessional": [
        r"\bgíria\b",
        r"\bemoji excessivo\b",
    ]
}</code></pre>
          </div>
        </div>
      </section>

      <!-- Realistic Scenarios -->
      <section id="scenarios" class="mb-16">
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
          <span class="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-400">🎭</span>
          Cenários Realísticos
        </h2>

        <div class="prose prose-invert max-w-none">
          <p class="text-gray-300 leading-relaxed mb-6">
            Geração de cenários de teste com diferentes níveis de complexidade e personalidades 
            de cliente. Permite testar edge cases e regressões de forma sistemática.
          </p>

          <div class="bg-gray-900 rounded-lg overflow-hidden mb-6">
            <div class="bg-gray-800 px-4 py-2 text-sm text-gray-400 font-mono">suites/integration/test_realistic_scenarios.py</div>
            <pre class="p-4 overflow-x-auto text-sm"><code class="text-gray-300">class ScenarioComplexity(Enum):
    SIMPLE = "simple"       # 2-3 turnos, intent direto
    MEDIUM = "medium"       # 4-6 turnos, mudança de contexto
    COMPLEX = "complex"     # 7+ turnos, handover, edge cases

class CustomerPersonality(Enum):
    POLITE = "polite"       # Educado, segue fluxo
    URGENT = "urgent"       # Pressa, interrompe
    CONFUSED = "confused"   # Perguntas vagas, muda de assunto
    DETAILED = "detailed"   # Muitas perguntas específicas
    ANXIOUS = "anxious"     # Preocupado, precisa de reassurance

# Uso
scenario = generator.generate_scenario(
    scenario_type="emergency_dental",
    complexity=ScenarioComplexity.COMPLEX,
    personality=CustomerPersonality.ANXIOUS
)</code></pre>
          </div>

          <h3 class="text-xl font-semibold text-gray-200 mt-8 mb-4">Validações por Cenário</h3>

          <div class="bg-gray-900 rounded-lg overflow-hidden mb-6">
            <div class="bg-gray-800 px-4 py-2 text-sm text-gray-400 font-mono">Assertions de Cenário</div>
            <pre class="p-4 overflow-x-auto text-sm"><code class="text-gray-300">def test_complex_emergency_scenario(self):
    """Test complex emergency dental scenario."""
    scenario = generator.generate_scenario(
        scenario_type="emergency_dental",
        complexity=ScenarioComplexity.COMPLEX,
        personality=CustomerPersonality.ANXIOUS
    )
    
    with self.debugger.debug_session("emergency_scenario"):
        results = self._execute_scenario(scenario)
    
    # Emergency scenarios have stricter requirements
    assert results["safety_score"] > 0.9      # MUITO alto
    assert results["empathy_score"] > 0.7     # Deve mostrar empatia
    assert results["avg_response_time"] < 3000  # &lt;3s
    assert len(results["critical_errors"]) == 0</code></pre>
          </div>
        </div>
      </section>

      <!-- Test Runner -->
      <section id="runner" class="mb-16">
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
          <span class="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center text-cyan-400">🏃</span>
          Test Suite Runner
        </h2>

        <div class="prose prose-invert max-w-none">
          <p class="text-gray-300 leading-relaxed mb-6">
            Orquestrador de testes com suporte a paralelização, coverage, e relatórios HTML. 
            Integra com pytest e oferece CLI rica via Rich.
          </p>

          <div class="bg-gray-900 rounded-lg overflow-hidden mb-6">
            <div class="bg-gray-800 px-4 py-2 text-sm text-gray-400 font-mono">run_tests.py</div>
            <pre class="p-4 overflow-x-auto text-sm"><code class="text-gray-300">class TestSuiteRunner:
    def run_test_suite(
        self,
        suite: str = "all",        # all, functional, integration
        markers: str = None,       # slow, ai_quality, security
        parallel: bool = True,
        coverage: bool = True,
        html_report: bool = True
    ) -> Dict:
        """Run test suite with specified options."""
        
        cmd = ["python", "-m", "pytest"]
        
        if suite == "all":
            cmd.append("suites/")
        elif suite == "functional":
            cmd.append("suites/functional/")
        elif suite == "integration":
            cmd.append("suites/integration/")
        
        if parallel:
            cmd.extend(["-n", "auto"])  # pytest-xdist
        
        if coverage:
            cmd.extend(["--cov=.", "--cov-report=html"])
        
        if html_report:
            cmd.extend(["--html=reports/report.html"])
        
        return subprocess.run(cmd)</code></pre>
          </div>

          <h3 class="text-xl font-semibold text-gray-200 mt-8 mb-4">Custom Pytest Markers</h3>

          <div class="grid md:grid-cols-2 gap-4 my-6">
            <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
              <h4 class="font-semibold text-cyan-400 mb-2">@pytest.mark.slow</h4>
              <p class="text-sm text-gray-400">Testes lentos, skipped por default. Use --runslow para incluir.</p>
            </div>
            <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
              <h4 class="font-semibold text-cyan-400 mb-2">@pytest.mark.integration</h4>
              <p class="text-sm text-gray-400">Testes que precisam de services rodando.</p>
            </div>
            <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
              <h4 class="font-semibold text-cyan-400 mb-2">@pytest.mark.ai_quality</h4>
              <p class="text-sm text-gray-400">Testes de qualidade de AI (hallucination, quality score).</p>
            </div>
            <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
              <h4 class="font-semibold text-cyan-400 mb-2">@pytest.mark.security</h4>
              <p class="text-sm text-gray-400">Testes de segurança (SQL injection, XSS).</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Stack -->
      <section class="mb-16">
        <h2 class="text-2xl font-bold mb-6">Stack Técnico</h2>
        <div class="flex flex-wrap gap-2">
          <span class="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">Python 3.12</span>
          <span class="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">Flask</span>
          <span class="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">Flask-SocketIO</span>
          <span class="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">pytest</span>
          <span class="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">pytest-xdist</span>
          <span class="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">Rich</span>
          <span class="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">httpx</span>
          <span class="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">textstat</span>
          <span class="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">PostgreSQL</span>
        </div>
      </section>

      <!-- Results -->
      <section class="mb-16">
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
          <span class="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center text-emerald-400">📊</span>
          Resultados
        </h2>

        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-lg p-6">
            <div class="text-3xl font-bold text-purple-400 mb-2">5</div>
            <div class="text-gray-400">Analyzers especializados</div>
          </div>
          <div class="bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-lg p-6">
            <div class="text-3xl font-bold text-purple-400 mb-2">100%</div>
            <div class="text-gray-400">Cobertura de cenários críticos</div>
          </div>
          <div class="bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-lg p-6">
            <div class="text-3xl font-bold text-purple-400 mb-2">&lt;0.1%</div>
            <div class="text-gray-400">Alucinações em produção</div>
          </div>
          <div class="bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-lg p-6">
            <div class="text-3xl font-bold text-purple-400 mb-2">Real-time</div>
            <div class="text-gray-400">Feedback via WebSocket</div>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="border-t border-gray-800 pt-12">
        <div class="text-center">
          <h2 class="text-2xl font-bold mb-4">Explore Outros Case Studies</h2>
          <p class="text-gray-400 mb-8">Veja como outros componentes do Optimus foram construídos</p>
          <div class="flex flex-wrap justify-center gap-4">
            <NuxtLink to="/projetos/ai-engine" class="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-gray-200 rounded-lg transition-colors">
              AI Conversation Engine →
            </NuxtLink>
            <NuxtLink to="/projetos/observability" class="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-gray-200 rounded-lg transition-colors">
              Observability Stack →
            </NuxtLink>
            <NuxtLink to="/projetos/rules-engine" class="px-6 py-3 bg-gray-800 hover:bg-gray-700 text-gray-200 rounded-lg transition-colors">
              Rules Engine →
            </NuxtLink>
          </div>
        </div>
      </section>

    </main>

    <!-- Footer -->
    <footer class="border-t border-gray-800 py-8 mt-12">
      <div class="max-w-4xl mx-auto px-4 text-center text-gray-500 text-sm">
        <p>Case Study: AI Testing Tools — Optimus AI Platform</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
useHead({
  title: 'AI Testing Tools - Optimus AI | Marcelo Marleta',
  meta: [
    { name: 'description', content: 'Case study: Suite de testes para AI conversacional com hallucination detector, quality scorer, cenários realísticos e interface de simulação multi-canal.' }
  ]
})
</script>
