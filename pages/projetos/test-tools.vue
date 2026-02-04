<template>
  <div class="min-h-screen bg-gray-950 text-gray-100">
    <ProjectHeader back-label-key="cases.testTools.back" subtitle-key="cases.testTools.platformName" />

    <ProjectHeroBlock :config="heroConfig" />

    <!-- Navigation -->
    <nav class="sticky top-16 z-40 bg-gray-950/90 backdrop-blur-sm border-b border-gray-800">
      <div class="max-w-4xl mx-auto px-4">
        <div class="flex gap-6 overflow-x-auto py-4 text-sm">
          <a href="#problema" class="text-gray-400 hover:text-purple-400 whitespace-nowrap transition-colors">{{ $t('cases.testTools.nav.problem') }}</a>
          <a href="#interface" class="text-gray-400 hover:text-purple-400 whitespace-nowrap transition-colors">{{ $t('cases.testTools.nav.interface') }}</a>
          <a href="#hallucination" class="text-gray-400 hover:text-purple-400 whitespace-nowrap transition-colors">{{ $t('cases.testTools.nav.hallucination') }}</a>
          <a href="#quality" class="text-gray-400 hover:text-purple-400 whitespace-nowrap transition-colors">{{ $t('cases.testTools.nav.quality') }}</a>
          <a href="#scenarios" class="text-gray-400 hover:text-purple-400 whitespace-nowrap transition-colors">{{ $t('cases.testTools.nav.scenarios') }}</a>
          <a href="#runner" class="text-gray-400 hover:text-purple-400 whitespace-nowrap transition-colors">{{ $t('cases.testTools.nav.runner') }}</a>
        </div>
      </div>
    </nav>

    <!-- Content -->
    <main class="max-w-4xl mx-auto px-4 py-12">
      
      <!-- Problema -->
      <section id="problema" class="mb-16">
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
          <span class="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center text-red-400">!</span>
          {{ $t('cases.testTools.problem.title') }}
        </h2>
        
        <div class="prose prose-invert max-w-none">
          <p class="text-gray-300 leading-relaxed mb-4">
            {{ $t('cases.testTools.problem.description') }}
          </p>
          
          <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-6 my-6">
            <h4 class="text-lg font-semibold text-gray-200 mb-4">{{ $t('cases.testTools.problem.challengesTitle') }}</h4>
            <ul class="space-y-3 text-gray-400">
              <li class="flex items-start gap-3">
                <span class="text-red-400 mt-1">✗</span>
                <span><strong class="text-gray-200">Hallucinations:</strong> {{ $t('cases.testTools.problem.challenges.hallucinations') }}</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-red-400 mt-1">✗</span>
                <span><strong class="text-gray-200">Consistency:</strong> {{ $t('cases.testTools.problem.challenges.consistency') }}</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-red-400 mt-1">✗</span>
                <span><strong class="text-gray-200">Multi-turn context:</strong> {{ $t('cases.testTools.problem.challenges.multiTurn') }}</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-red-400 mt-1">✗</span>
                <span><strong class="text-gray-200">Subjectivity:</strong> {{ $t('cases.testTools.problem.challenges.subjectivity') }}</span>
              </li>
            </ul>
          </div>

          <p class="text-gray-300 leading-relaxed">
            {{ $t('cases.testTools.problem.solution') }}
          </p>
        </div>
      </section>

      <!-- Interface de Testes -->
      <section id="interface" class="mb-16">
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
          <span class="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center text-purple-400">🎭</span>
          {{ $t('cases.testTools.interface.title') }}
        </h2>

        <div class="prose prose-invert max-w-none">
          <p class="text-gray-300 leading-relaxed mb-6">
            {{ $t('cases.testTools.interface.description') }}
          </p>

          <div class="grid md:grid-cols-2 gap-4 my-6">
            <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
              <h4 class="font-semibold text-purple-400 mb-2">🎭 {{ $t('cases.testTools.interface.features.channelProfiles.title') }}</h4>
              <p class="text-sm text-gray-400">{{ $t('cases.testTools.interface.features.channelProfiles.description') }}</p>
            </div>
            <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
              <h4 class="font-semibold text-purple-400 mb-2">🤝 {{ $t('cases.testTools.interface.features.handover.title') }}</h4>
              <p class="text-sm text-gray-400">{{ $t('cases.testTools.interface.features.handover.description') }}</p>
            </div>
            <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
              <h4 class="font-semibold text-purple-400 mb-2">📱 {{ $t('cases.testTools.interface.features.multiSession.title') }}</h4>
              <p class="text-sm text-gray-400">{{ $t('cases.testTools.interface.features.multiSession.description') }}</p>
            </div>
            <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
              <h4 class="font-semibold text-purple-400 mb-2">⚡ {{ $t('cases.testTools.interface.features.realtime.title') }}</h4>
              <p class="text-sm text-gray-400">{{ $t('cases.testTools.interface.features.realtime.description') }}</p>
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

          <h3 class="text-xl font-semibold text-gray-200 mt-8 mb-4">{{ $t('cases.testTools.interface.scenariosTitle') }}</h3>

          <div class="bg-gray-900 rounded-lg overflow-hidden mb-6">
            <div class="bg-gray-800 px-4 py-2 text-sm text-gray-400 font-mono">Built-in Scenarios</div>
            <pre class="p-4 overflow-x-auto text-sm"><code class="text-gray-300">scenarios = [
    TestScenario(
        name="Basic Greeting",
        messages=["Hello!", "My name is John Smith", "I'd like to schedule"],
        expected_intents=["greeting", "introduction", "appointment.request"]
    ),
    TestScenario(
        name="Dental Emergency",
        messages=["Help! Toothache!", "The pain is very intense"],
        expected_intents=["emergency.dental", "emergency.pain"]
    ),
    TestScenario(
        name="Cancellation",
        messages=["I need to cancel my appointment", "It's for tomorrow at 2pm"],
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
          {{ $t('cases.testTools.hallucination.title') }}
        </h2>

        <div class="prose prose-invert max-w-none">
          <p class="text-gray-300 leading-relaxed mb-6">
            {{ $t('cases.testTools.hallucination.description') }}
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

          <h3 class="text-xl font-semibold text-gray-200 mt-8 mb-4">{{ $t('cases.testTools.hallucination.typesTitle') }}</h3>

          <div class="grid md:grid-cols-2 gap-4 my-6">
            <div class="bg-gray-900/50 border border-red-500/30 rounded-lg p-4">
              <h4 class="font-semibold text-red-400 mb-2">{{ $t('cases.testTools.hallucination.types.factualError.title') }}</h4>
              <p class="text-sm text-gray-400">{{ $t('cases.testTools.hallucination.types.factualError.description') }}</p>
            </div>
            <div class="bg-gray-900/50 border border-orange-500/30 rounded-lg p-4">
              <h4 class="font-semibold text-orange-400 mb-2">{{ $t('cases.testTools.hallucination.types.inventedInfo.title') }}</h4>
              <p class="text-sm text-gray-400">{{ $t('cases.testTools.hallucination.types.inventedInfo.description') }}</p>
            </div>
            <div class="bg-gray-900/50 border border-yellow-500/30 rounded-lg p-4">
              <h4 class="font-semibold text-yellow-400 mb-2">{{ $t('cases.testTools.hallucination.types.impossibleClaim.title') }}</h4>
              <p class="text-sm text-gray-400">{{ $t('cases.testTools.hallucination.types.impossibleClaim.description') }}</p>
            </div>
            <div class="bg-gray-900/50 border border-red-500/30 rounded-lg p-4">
              <h4 class="font-semibold text-red-400 mb-2">{{ $t('cases.testTools.hallucination.types.medicalMisinfo.title') }}</h4>
              <p class="text-sm text-gray-400">{{ $t('cases.testTools.hallucination.types.medicalMisinfo.description') }}</p>
            </div>
          </div>

          <div class="bg-gray-900 rounded-lg overflow-hidden mb-6">
            <div class="bg-gray-800 px-4 py-2 text-sm text-gray-400 font-mono">{{ $t('cases.testTools.hallucination.knowledgeBaseTitle') }}</div>
            <pre class="p-4 overflow-x-auto text-sm"><code class="text-gray-300"># Known dental facts for validation
dental_facts = {
    "pricing": {
        "ranges": {
            "consultation": (50, 300),      # $50-300 is plausible
            "cleaning": (80, 250),
            "root_canal": (300, 1500),
            "implant": (1500, 5000),
        }
    },
    "timing": {
        "consultation": "30-60 minutes",
        "cleaning": "45-90 minutes",
        "root_canal": "60-120 minutes",
    },
    "medical_constraints": [
        "diagnosis only with clinical exam",
        "prescription only by dentist",
    ]
}</code></pre>
          </div>
        </div>
      </section>

      <!-- Quality Scorer -->
      <section id="quality" class="mb-16">
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
          <span class="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center text-green-400">📊</span>
          {{ $t('cases.testTools.quality.title') }}
        </h2>

        <div class="prose prose-invert max-w-none">
          <p class="text-gray-300 leading-relaxed mb-6">
            {{ $t('cases.testTools.quality.description') }}
          </p>

          <div class="bg-gray-900 rounded-lg overflow-hidden mb-6">
            <div class="bg-gray-800 px-4 py-2 text-sm text-gray-400 font-mono">analyzers/quality_scorer.py</div>
            <pre class="p-4 overflow-x-auto text-sm"><code class="text-gray-300">@dataclass
class QualityMetrics:
    """Quality metrics for an AI response."""
    overall_score: float        # 0.0 - 1.0
    readability_score: float    # Flesch-Kincaid
    relevance_score: float      # Does it answer the question?
    helpfulness_score: float    # Does it help the user?
    accuracy_score: float       # Correct information?
    completeness_score: float   # Complete response?
    tone_score: float           # Appropriate tone?
    safety_score: float         # Safe for the context?
    warnings: List[str]
    recommendations: List[str]</code></pre>
          </div>

          <h3 class="text-xl font-semibold text-gray-200 mt-8 mb-4">{{ $t('cases.testTools.quality.dimensionsTitle') }}</h3>

          <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-6 my-6">
            <ul class="space-y-3 text-gray-400">
              <li class="flex items-start gap-3">
                <span class="text-green-400 font-bold">Readability</span>
                <span>{{ $t('cases.testTools.quality.dimensions.readability') }}</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-green-400 font-bold">Empathy</span>
                <span>{{ $t('cases.testTools.quality.dimensions.empathy') }}</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-green-400 font-bold">Call-to-Action</span>
                <span>{{ $t('cases.testTools.quality.dimensions.callToAction') }}</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-green-400 font-bold">Professional Language</span>
                <span>{{ $t('cases.testTools.quality.dimensions.professionalLanguage') }}</span>
              </li>
            </ul>
          </div>

          <div class="bg-gray-900 rounded-lg overflow-hidden mb-6">
            <div class="bg-gray-800 px-4 py-2 text-sm text-gray-400 font-mono">{{ $t('cases.testTools.quality.detractorsTitle') }}</div>
            <pre class="p-4 overflow-x-auto text-sm"><code class="text-gray-300">quality_detractors = {
    "vague_responses": [
        r"\bmaybe\b",
        r"\bpossible\b",
        r"\bdepends\b",  # Without additional context
    ],
    "overpromising": [
        r"\bguaranteed\b",
        r"\bpainless\b",
        r"\b100%\b",
    ],
    "unprofessional": [
        r"\bslang\b",
        r"\bexcessive emoji\b",
    ]
}</code></pre>
          </div>
        </div>
      </section>

      <!-- Realistic Scenarios -->
      <section id="scenarios" class="mb-16">
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
          <span class="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-400">🎭</span>
          {{ $t('cases.testTools.scenarios.title') }}
        </h2>

        <div class="prose prose-invert max-w-none">
          <p class="text-gray-300 leading-relaxed mb-6">
            {{ $t('cases.testTools.scenarios.description') }}
          </p>

          <div class="bg-gray-900 rounded-lg overflow-hidden mb-6">
            <div class="bg-gray-800 px-4 py-2 text-sm text-gray-400 font-mono">suites/integration/test_realistic_scenarios.py</div>
            <pre class="p-4 overflow-x-auto text-sm"><code class="text-gray-300">class ScenarioComplexity(Enum):
    SIMPLE = "simple"       # 2-3 turns, direct intent
    MEDIUM = "medium"       # 4-6 turns, context change
    COMPLEX = "complex"     # 7+ turns, handover, edge cases

class CustomerPersonality(Enum):
    POLITE = "polite"       # Polite, follows flow
    URGENT = "urgent"       # In a hurry, interrupts
    CONFUSED = "confused"   # Vague questions, changes subject
    DETAILED = "detailed"   # Many specific questions
    ANXIOUS = "anxious"     # Worried, needs reassurance

# Usage
scenario = generator.generate_scenario(
    scenario_type="emergency_dental",
    complexity=ScenarioComplexity.COMPLEX,
    personality=CustomerPersonality.ANXIOUS
)</code></pre>
          </div>

          <h3 class="text-xl font-semibold text-gray-200 mt-8 mb-4">{{ $t('cases.testTools.scenarios.validationsTitle') }}</h3>

          <div class="bg-gray-900 rounded-lg overflow-hidden mb-6">
            <div class="bg-gray-800 px-4 py-2 text-sm text-gray-400 font-mono">Scenario Assertions</div>
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
    assert results["safety_score"] > 0.9      # VERY high
    assert results["empathy_score"] > 0.7     # Must show empathy
    assert results["avg_response_time"] < 3000  # &lt;3s
    assert len(results["critical_errors"]) == 0</code></pre>
          </div>
        </div>
      </section>

      <!-- Test Runner -->
      <section id="runner" class="mb-16">
        <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
          <span class="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center text-cyan-400">🏃</span>
          {{ $t('cases.testTools.runner.title') }}
        </h2>

        <div class="prose prose-invert max-w-none">
          <p class="text-gray-300 leading-relaxed mb-6">
            {{ $t('cases.testTools.runner.description') }}
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

          <h3 class="text-xl font-semibold text-gray-200 mt-8 mb-4">{{ $t('cases.testTools.runner.markersTitle') }}</h3>

          <div class="grid md:grid-cols-2 gap-4 my-6">
            <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
              <h4 class="font-semibold text-cyan-400 mb-2">{{ $t('cases.testTools.runner.markers.slow.title') }}</h4>
              <p class="text-sm text-gray-400">{{ $t('cases.testTools.runner.markers.slow.description') }}</p>
            </div>
            <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
              <h4 class="font-semibold text-cyan-400 mb-2">{{ $t('cases.testTools.runner.markers.integration.title') }}</h4>
              <p class="text-sm text-gray-400">{{ $t('cases.testTools.runner.markers.integration.description') }}</p>
            </div>
            <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
              <h4 class="font-semibold text-cyan-400 mb-2">{{ $t('cases.testTools.runner.markers.aiQuality.title') }}</h4>
              <p class="text-sm text-gray-400">{{ $t('cases.testTools.runner.markers.aiQuality.description') }}</p>
            </div>
            <div class="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
              <h4 class="font-semibold text-cyan-400 mb-2">{{ $t('cases.testTools.runner.markers.security.title') }}</h4>
              <p class="text-sm text-gray-400">{{ $t('cases.testTools.runner.markers.security.description') }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Stack -->
      <section class="mb-16">
        <h2 class="text-2xl font-bold mb-6">{{ $t('cases.testTools.techStack') }}</h2>
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
          {{ $t('cases.testTools.results.title') }}
        </h2>

        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-lg p-6">
            <div class="text-3xl font-bold text-purple-400 mb-2">5</div>
            <div class="text-gray-400">{{ $t('cases.testTools.results.metrics.analyzers') }}</div>
          </div>
          <div class="bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-lg p-6">
            <div class="text-3xl font-bold text-purple-400 mb-2">100%</div>
            <div class="text-gray-400">{{ $t('cases.testTools.results.metrics.coverage') }}</div>
          </div>
          <div class="bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-lg p-6">
            <div class="text-3xl font-bold text-purple-400 mb-2">&lt;0.1%</div>
            <div class="text-gray-400">{{ $t('cases.testTools.results.metrics.hallucinations') }}</div>
          </div>
          <div class="bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-lg p-6">
            <div class="text-3xl font-bold text-purple-400 mb-2">Real-time</div>
            <div class="text-gray-400">{{ $t('cases.testTools.results.metrics.realtime') }}</div>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="border-t border-gray-800 pt-12">
        <div class="text-center">
          <h2 class="text-2xl font-bold mb-4">{{ $t('cases.testTools.cta.title') }}</h2>
          <p class="text-gray-400 mb-8">{{ $t('cases.testTools.cta.description') }}</p>
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

    <!-- Closing Note -->
    <section class="border-t border-gray-800 py-8 mt-12">
      <div class="max-w-4xl mx-auto px-4 text-center text-gray-500 text-sm">
        <p>{{ $t('cases.testTools.footer') }}</p>
      </div>
    </section>
  </div>
</template>

<script setup>
import { heroBlocksBySlug } from '~/data/project-heroes'

const heroConfig = heroBlocksBySlug.testTools
const { t } = useI18n()

useHead({
  title: t('cases.testTools.meta.title'),
  meta: [
    { name: 'description', content: t('cases.testTools.meta.description') }
  ]
})
</script>
