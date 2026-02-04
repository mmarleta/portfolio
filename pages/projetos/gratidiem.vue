<template>
  <div class="min-h-screen bg-gray-950">
    <!-- Hero Section -->
    <section class="relative py-24 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-amber-900/20 via-gray-950 to-purple-900/20"></div>
      <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
      <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      
      <div class="container mx-auto px-6 relative z-10">
        <NuxtLink to="/" class="inline-flex items-center text-gray-400 hover:text-emerald-400 mb-8 transition-colors">
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
          </svg>
          Voltar ao Portfolio
        </NuxtLink>
        
        <div class="max-w-4xl">
          <div class="flex items-center gap-4 mb-6">
            <span class="px-4 py-2 bg-amber-500/10 text-amber-400 rounded-full text-sm font-medium border border-amber-500/20">
              Flutter App
            </span>
            <span class="px-4 py-2 bg-purple-500/10 text-purple-400 rounded-full text-sm font-medium border border-purple-500/20">
              Multi-Platform
            </span>
            <span class="px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium border border-blue-500/20">
              Firebase
            </span>
          </div>
          
          <h1 class="text-5xl md:text-6xl font-bold text-white mb-6">
            GratiDiem
            <span class="text-amber-400">.</span>
          </h1>
          
          <p class="text-xl text-gray-300 mb-8 leading-relaxed">
            Aplicativo de gratidão e bem-estar com <span class="text-amber-400">508+ arquivos Dart</span>, 
            <span class="text-amber-400">35+ telas</span>, <span class="text-amber-400">86+ serviços</span>. 
            Clean Architecture com Riverpod, dual persistence (Hive + Firebase), IA integrada com Gemini, 
            e sistema de monetização ética gamificado.
          </p>
          
          <div class="flex flex-wrap gap-3">
            <span class="px-3 py-1 bg-gray-800/50 text-gray-300 rounded text-sm">Flutter 3.7+</span>
            <span class="px-3 py-1 bg-gray-800/50 text-gray-300 rounded text-sm">Riverpod</span>
            <span class="px-3 py-1 bg-gray-800/50 text-gray-300 rounded text-sm">Firebase</span>
            <span class="px-3 py-1 bg-gray-800/50 text-gray-300 rounded text-sm">Hive CE</span>
            <span class="px-3 py-1 bg-gray-800/50 text-gray-300 rounded text-sm">Google Gemini</span>
            <span class="px-3 py-1 bg-gray-800/50 text-gray-300 rounded text-sm">AdMob</span>
            <span class="px-3 py-1 bg-gray-800/50 text-gray-300 rounded text-sm">GoRouter</span>
            <span class="px-3 py-1 bg-gray-800/50 text-gray-300 rounded text-sm">i18n</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Visão Geral -->
    <section class="py-20 border-t border-gray-800">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold text-white mb-12">Visão Geral</h2>
        
        <div class="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 class="text-xl font-semibold text-amber-400 mb-4">O Produto</h3>
            <p class="text-gray-300 leading-relaxed mb-6">
              GratiDiem é um companheiro diário de gratidão — um aplicativo sofisticado que ajuda 
              usuários a cultivar bem-estar através de práticas de gratidão, meditação guiada, 
              desafios diários, e comunidade.
            </p>
            <p class="text-gray-300 leading-relaxed">
              O app suporta <strong class="text-white">6 plataformas</strong> (Android, iOS, Web, macOS, Windows, Linux), 
              <strong class="text-white">3 idiomas</strong> (PT, EN, ES), e é construído para escalar para milhões de usuários.
            </p>
          </div>
          
          <div>
            <h3 class="text-xl font-semibold text-amber-400 mb-4">Métricas do Codebase</h3>
            <div class="grid grid-cols-2 gap-4">
              <div class="bg-gray-900/50 rounded-lg p-4 border border-gray-800">
                <div class="text-3xl font-bold text-amber-400">508+</div>
                <div class="text-gray-400 text-sm">Arquivos Dart</div>
              </div>
              <div class="bg-gray-900/50 rounded-lg p-4 border border-gray-800">
                <div class="text-3xl font-bold text-amber-400">35+</div>
                <div class="text-gray-400 text-sm">Telas</div>
              </div>
              <div class="bg-gray-900/50 rounded-lg p-4 border border-gray-800">
                <div class="text-3xl font-bold text-amber-400">86+</div>
                <div class="text-gray-400 text-sm">Services</div>
              </div>
              <div class="bg-gray-900/50 rounded-lg p-4 border border-gray-800">
                <div class="text-3xl font-bold text-amber-400">126+</div>
                <div class="text-gray-400 text-sm">Models</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Arquitetura -->
    <section class="py-20 bg-gray-900/30 border-t border-gray-800">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold text-white mb-12">Arquitetura Clean + Riverpod</h2>
        
        <div class="bg-gray-900/50 rounded-xl border border-gray-800 p-8 mb-12">
          <pre class="text-sm text-gray-300 overflow-x-auto"><code>┌─────────────────────────────────────────────────────────────────────────┐
│                      PRESENTATION LAYER (UI)                            │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  ┌────────────┐  │
│  │    Home      │  │  Meditation  │  │   Circles    │  │  Settings  │  │
│  │   Screen     │  │   Player     │  │   (Tribes)   │  │   Admin    │  │
│  └──────────────┘  └──────────────┘  └──────────────┘  └────────────┘  │
│                         35+ screens, 62+ widgets                        │
└─────────────────────────────────────────────┬───────────────────────────┘
                                              │
┌─────────────────────────────────────────────▼───────────────────────────┐
│                    STATE MANAGEMENT (Riverpod)                          │
│  ┌──────────────────────────────────────────────────────────────────┐  │
│  │  31 Riverpod Providers (AsyncNotifier + StateNotifier patterns)  │  │
│  │  auth_provider  circle_provider  meditation_provider  ritual/...  │  │
│  └──────────────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────┬───────────────────────────┘
                                              │
┌─────────────────────────────────────────────▼───────────────────────────┐
│                      SERVICE LAYER (Business Logic)                     │
│  ┌──────────────────────────────────────────────────────────────────┐  │
│  │  86+ Services: Auth, Storage, Analytics, Monetization, Circle,   │  │
│  │  Gratitude, Meditation, Notification, Achievements, AI, etc.     │  │
│  └──────────────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────┬───────────────────────────┘
                                              │
┌─────────────────────────────────────────────▼───────────────────────────┐
│                         DATA LAYER (Dual Persistence)                   │
│  ┌──────────────────────────┐      ┌────────────────────────────────┐  │
│  │      Hive CE (Local)     │ ←──→ │    Firebase Firestore (Cloud)  │  │
│  │  126 models + adapters   │      │    Real-time sync + backup     │  │
│  │  Local-first, offline    │      │    Conflict resolution         │  │
│  └──────────────────────────┘      └────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────────────┘</code></pre>
        </div>
        
        <!-- Architecture Cards -->
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="bg-gray-900/50 rounded-xl border border-gray-800 p-6">
            <div class="w-12 h-12 bg-amber-500/10 rounded-lg flex items-center justify-center mb-4">
              <span class="text-2xl">📱</span>
            </div>
            <h3 class="text-lg font-semibold text-white mb-2">Presentation</h3>
            <p class="text-gray-400 text-sm">
              278+ arquivos, Material Design 3, responsive design, ConsumerWidget/ConsumerStatefulWidget
            </p>
          </div>
          
          <div class="bg-gray-900/50 rounded-xl border border-gray-800 p-6">
            <div class="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4">
              <span class="text-2xl">🔄</span>
            </div>
            <h3 class="text-lg font-semibold text-white mb-2">State Management</h3>
            <p class="text-gray-400 text-sm">
              Riverpod com AsyncNotifier/StateNotifier, stream subscriptions, real-time updates
            </p>
          </div>
          
          <div class="bg-gray-900/50 rounded-xl border border-gray-800 p-6">
            <div class="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
              <span class="text-2xl">⚙️</span>
            </div>
            <h3 class="text-lg font-semibold text-white mb-2">Business Logic</h3>
            <p class="text-gray-400 text-sm">
              Singleton services + Repository pattern, 113 arquivos com responsabilidades claras
            </p>
          </div>
          
          <div class="bg-gray-900/50 rounded-xl border border-gray-800 p-6">
            <div class="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-4">
              <span class="text-2xl">💾</span>
            </div>
            <h3 class="text-lg font-semibold text-white mb-2">Data Layer</h3>
            <p class="text-gray-400 text-sm">
              Dual persistence: Hive CE (local-first) + Firebase Firestore (cloud sync)
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Features -->
    <section class="py-20 border-t border-gray-800">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold text-white mb-12">Features do App</h2>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class="bg-gray-900/50 rounded-xl border border-gray-800 p-6">
            <h3 class="text-lg font-semibold text-amber-400 mb-3">🙏 Gratitude Journal</h3>
            <p class="text-gray-400 text-sm">
              Diário de gratidão com entradas diárias, categorias, tags, e busca full-text. 
              Suporte a imagens e compartilhamento social.
            </p>
          </div>
          
          <div class="bg-gray-900/50 rounded-xl border border-gray-800 p-6">
            <h3 class="text-lg font-semibold text-amber-400 mb-3">🧘 Meditação Guiada</h3>
            <p class="text-gray-400 text-sm">
              Player de áudio com sessões de meditação (manhã, dia, ansiedade, noite, profunda). 
              Just Audio + Audio Session para background playback.
            </p>
          </div>
          
          <div class="bg-gray-900/50 rounded-xl border border-gray-800 p-6">
            <h3 class="text-lg font-semibold text-amber-400 mb-3">⭕ Círculos (Tribos)</h3>
            <p class="text-gray-400 text-sm">
              Comunidades sociais com rituais em grupo, posts, desafios colaborativos, 
              gamificação, e sync real-time via Firestore.
            </p>
          </div>
          
          <div class="bg-gray-900/50 rounded-xl border border-gray-800 p-6">
            <h3 class="text-lg font-semibold text-amber-400 mb-3">🏆 Challenges & Progression</h3>
            <p class="text-gray-400 text-sm">
              Desafios diários, streaks, sistema de níveis, árvore de progressão, 
              achievements, e surprise rewards.
            </p>
          </div>
          
          <div class="bg-gray-900/50 rounded-xl border border-gray-800 p-6">
            <h3 class="text-lg font-semibold text-amber-400 mb-3">🌙 Night Ritual</h3>
            <p class="text-gray-400 text-sm">
              Ritual noturno guiado com meditação, reflexão, intenções para o próximo dia. 
              Scheduling com notificações locais.
            </p>
          </div>
          
          <div class="bg-gray-900/50 rounded-xl border border-gray-800 p-6">
            <h3 class="text-lg font-semibold text-amber-400 mb-3">💊 Adversity Support</h3>
            <p class="text-gray-400 text-sm">
              Módulo de saúde mental com jornada de adversidade, práticas terapêuticas, 
              histórias inspiradoras, recursos de emergência.
            </p>
          </div>
          
          <div class="bg-gray-900/50 rounded-xl border border-gray-800 p-6">
            <h3 class="text-lg font-semibold text-amber-400 mb-3">⏳ Time Capsule</h3>
            <p class="text-gray-400 text-sm">
              Cápsulas do tempo para guardar memórias e gratidões a serem abertas no futuro.
            </p>
          </div>
          
          <div class="bg-gray-900/50 rounded-xl border border-gray-800 p-6">
            <h3 class="text-lg font-semibold text-amber-400 mb-3">🎯 Values & Goals</h3>
            <p class="text-gray-400 text-sm">
              Definição de valores pessoais, visualização de metas, reviews periódicos.
            </p>
          </div>
          
          <div class="bg-gray-900/50 rounded-xl border border-gray-800 p-6">
            <h3 class="text-lg font-semibold text-amber-400 mb-3">📊 Wellbeing Analytics</h3>
            <p class="text-gray-400 text-sm">
              Assessments de bem-estar, gráficos de humor (fl_chart), calendário de atividades (table_calendar).
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- AI Integration -->
    <section class="py-20 bg-gray-900/30 border-t border-gray-800">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold text-white mb-4">Integração com IA</h2>
        <p class="text-gray-400 mb-12 max-w-3xl">
          Motor de IA multi-backend com Google Gemini, Hugging Face, e modelos on-device (TensorFlow Lite).
        </p>
        
        <div class="grid lg:grid-cols-2 gap-8">
          <div class="bg-gray-900/50 rounded-xl border border-gray-800 p-6">
            <h3 class="text-xl font-semibold text-amber-400 mb-4">AI Engine</h3>
            <div class="bg-gray-950 rounded-lg p-4 mb-4">
              <pre class="text-sm text-gray-300 overflow-x-auto"><code class="language-dart">class AIEngine {
  factory AIEngine() => _instance;
  static final AIEngine _instance = AIEngine._internal();

  final Map&lt;String, dynamic&gt; _config = {
    'ollama_url': 'http://localhost:11434',
    'huggingface_key': 'hf_free',
    'use_local_models': true,
    'gemini_key': '',
    'use_tensorflow': true,
  };

  // Backends disponíveis:
  // 1. Google Gemini (cloud)
  // 2. Hugging Face API (cloud)
  // 3. Ollama (local server)
  // 4. TensorFlow Lite (on-device)

  /// Análise de sentimento com cache
  Future&lt;double&gt; analyzeSentiment(String text) async {
    if (_sentimentCache.containsKey(text)) {
      return _sentimentCache[text]!;
    }
    // Tenta backends em ordem de preferência
    final result = await _tryBackends(text);
    _sentimentCache[text] = result;
    return result;
  }

  /// Geração de respostas contextuais
  Future&lt;String&gt; generateResponse({
    required String prompt,
    required AIResponseType type,
  }) async {
    // Templates específicos por tipo
    final template = AIPromptTemplates.getTemplate(type);
    return await _generate(template.format(prompt));
  }
}</code></pre>
            </div>
          </div>
          
          <div class="bg-gray-900/50 rounded-xl border border-gray-800 p-6">
            <h3 class="text-xl font-semibold text-amber-400 mb-4">Capacidades de IA</h3>
            <ul class="space-y-4">
              <li class="flex items-start gap-3">
                <span class="text-amber-400 mt-1">▸</span>
                <div>
                  <span class="text-white font-medium">Análise de Sentimentos</span>
                  <p class="text-gray-400 text-sm">Detecta emoções nas entradas de gratidão com cache para performance</p>
                </div>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-amber-400 mt-1">▸</span>
                <div>
                  <span class="text-white font-medium">Detecção de Temas</span>
                  <p class="text-gray-400 text-sm">Categoriza automaticamente entradas (família, trabalho, saúde, etc.)</p>
                </div>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-amber-400 mt-1">▸</span>
                <div>
                  <span class="text-white font-medium">Respostas Personalizadas</span>
                  <p class="text-gray-400 text-sm">Gera reflexões e sugestões baseadas no histórico do usuário</p>
                </div>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-amber-400 mt-1">▸</span>
                <div>
                  <span class="text-white font-medium">AI Premium Service</span>
                  <p class="text-gray-400 text-sm">Features avançadas para usuários premium com Gemini Pro</p>
                </div>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-amber-400 mt-1">▸</span>
                <div>
                  <span class="text-white font-medium">AI Analytics</span>
                  <p class="text-gray-400 text-sm">Insights e tendências derivados das práticas de gratidão</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Monetization System -->
    <section class="py-20 border-t border-gray-800">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold text-white mb-4">Sistema de Monetização Ética</h2>
        <p class="text-gray-400 mb-12 max-w-3xl">
          Transformando anúncios em "momentos de gratidão" — monetização integrada ao conceito do app, 
          criando experiência significativa ao invés de intrusiva.
        </p>
        
        <div class="grid lg:grid-cols-3 gap-6 mb-12">
          <div class="bg-gray-900/50 rounded-xl border border-amber-500/30 p-6">
            <h3 class="text-lg font-semibold text-amber-400 mb-3">🙏 Apelos Contextuais</h3>
            <p class="text-gray-400 text-sm mb-4">
              Mensagens de gratidão personalizadas baseadas no contexto do usuário.
            </p>
            <ul class="space-y-2 text-gray-400 text-sm">
              <li>• Pós-Ritual: "Se este app te ajudou..."</li>
              <li>• Streak: "7 dias de gratidão! Retribua..."</li>
              <li>• Alta Energia: "Sinta essa vibração positiva?"</li>
              <li>• Conquistas: "Conquista desbloqueada!"</li>
            </ul>
          </div>
          
          <div class="bg-gray-900/50 rounded-xl border border-gray-800 p-6">
            <h3 class="text-lg font-semibold text-amber-400 mb-3">🎮 Economia de Tokens</h3>
            <p class="text-gray-400 text-sm mb-4">
              Sistema gamificado com tokens que podem ser ganhos e usados no app.
            </p>
            <ul class="space-y-2 text-gray-400 text-sm">
              <li>• Daily bonus com multiplicadores</li>
              <li>• Streak multipliers</li>
              <li>• Achievement rewards</li>
              <li>• Challenge completion</li>
            </ul>
          </div>
          
          <div class="bg-gray-900/50 rounded-xl border border-gray-800 p-6">
            <h3 class="text-lg font-semibold text-amber-400 mb-3">📊 Firebase Remote Config</h3>
            <p class="text-gray-400 text-sm mb-4">
              Controle dinâmico de toda a monetização sem deploy.
            </p>
            <ul class="space-y-2 text-gray-400 text-sm">
              <li>• Frequência de anúncios</li>
              <li>• Cooldown periods</li>
              <li>• A/B testing de mensagens</li>
              <li>• Métricas de conversão</li>
            </ul>
          </div>
        </div>
        
        <div class="bg-gray-900/50 rounded-xl border border-gray-800 p-6">
          <h3 class="text-xl font-semibold text-amber-400 mb-4">Gratitude Triggers Service</h3>
          <div class="bg-gray-950 rounded-lg p-4">
            <pre class="text-sm text-gray-300 overflow-x-auto"><code class="language-dart">class GratitudeTriggersService {
  /// Detecta o momento ideal para exibir apelo de gratidão
  Future&lt;GratitudeTrigger?&gt; detectTrigger(BuildContext context) async {
    final userState = await _getUserState();
    
    // Verifica cooldown
    if (await _isInCooldown()) return null;
    
    // Detecta contexto emocional
    final emotionalState = await _emotionalStateDetector.detect();
    
    // Seleciona trigger baseado no contexto
    return _selectBestTrigger(
      userState: userState,
      emotionalState: emotionalState,
      recentActions: await _getRecentActions(),
    );
  }
  
  /// Tipos de triggers contextuais
  enum GratitudeTriggerType {
    postRitual,      // Após completar ritual
    streakAchieved,  // Conquista de streak
    highEnergy,      // Alta energia coletiva no círculo
    firstExperience, // Primeira vez em feature
    socialShare,     // Momento de compartilhamento
    achievementUnlocked,
  }
}</code></pre>
          </div>
        </div>
      </div>
    </section>

    <!-- Firebase Stack -->
    <section class="py-20 bg-gray-900/30 border-t border-gray-800">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold text-white mb-12">Firebase Full Stack</h2>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="bg-gray-900/50 rounded-xl border border-gray-800 p-6">
            <h3 class="text-lg font-semibold text-amber-400 mb-3">🔐 Authentication</h3>
            <ul class="space-y-2 text-gray-400 text-sm">
              <li>• Firebase Auth</li>
              <li>• Google Sign-In</li>
              <li>• Email/Password</li>
              <li>• Web Auth Bridge</li>
              <li>• Token Refresh Manager</li>
            </ul>
          </div>
          
          <div class="bg-gray-900/50 rounded-xl border border-gray-800 p-6">
            <h3 class="text-lg font-semibold text-amber-400 mb-3">📦 Storage</h3>
            <ul class="space-y-2 text-gray-400 text-sm">
              <li>• Cloud Firestore</li>
              <li>• Firebase Storage</li>
              <li>• Offline persistence</li>
              <li>• Real-time sync</li>
              <li>• Conflict resolution</li>
            </ul>
          </div>
          
          <div class="bg-gray-900/50 rounded-xl border border-gray-800 p-6">
            <h3 class="text-lg font-semibold text-amber-400 mb-3">📊 Analytics</h3>
            <ul class="space-y-2 text-gray-400 text-sm">
              <li>• Firebase Analytics</li>
              <li>• Crashlytics</li>
              <li>• Performance Monitoring</li>
              <li>• Custom events</li>
              <li>• User properties</li>
            </ul>
          </div>
          
          <div class="bg-gray-900/50 rounded-xl border border-gray-800 p-6">
            <h3 class="text-lg font-semibold text-amber-400 mb-3">🔔 Messaging</h3>
            <ul class="space-y-2 text-gray-400 text-sm">
              <li>• FCM Push Notifications</li>
              <li>• Local Notifications</li>
              <li>• Remote Config</li>
              <li>• App Check</li>
              <li>• Deep Linking</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Dual Persistence -->
    <section class="py-20 border-t border-gray-800">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold text-white mb-4">Dual Persistence: Local-First</h2>
        <p class="text-gray-400 mb-12 max-w-3xl">
          Arquitetura local-first com Hive CE para performance e offline, 
          sincronizando automaticamente com Firebase Firestore.
        </p>
        
        <div class="grid lg:grid-cols-2 gap-8">
          <div class="bg-gray-900/50 rounded-xl border border-gray-800 p-6">
            <h3 class="text-xl font-semibold text-amber-400 mb-4">Hive CE (Local)</h3>
            <div class="bg-gray-950 rounded-lg p-4 mb-4">
              <pre class="text-sm text-gray-300 overflow-x-auto"><code class="language-dart">// 126 models com TypeAdapters
@HiveType(typeId: HiveTypeIds.gratitudeEntry)
class GratitudeEntry extends HiveObject {
  @HiveField(0)
  late String id;
  
  @HiveField(1)
  late String content;
  
  @HiveField(2)
  late DateTime createdAt;
  
  @HiveField(3)
  List&lt;String&gt; tags = [];
  
  @HiveField(4)
  String? imageUrl;
  
  @HiveField(5)
  double? sentimentScore;
}

// hive_type_ids.dart - Registry centralizado
class HiveTypeIds {
  static const int gratitudeEntry = 0;
  static const int user = 1;
  static const int challenge = 2;
  // ... 197 entries
}</code></pre>
            </div>
            <p class="text-gray-400 text-sm">
              197 TypeIDs registrados, código gerado via build_runner, adapter registry centralizado.
            </p>
          </div>
          
          <div class="bg-gray-900/50 rounded-xl border border-gray-800 p-6">
            <h3 class="text-xl font-semibold text-amber-400 mb-4">Sync Strategy</h3>
            <div class="bg-gray-950 rounded-lg p-4 mb-4">
              <pre class="text-sm text-gray-300 overflow-x-auto"><code class="language-dart">class SyncService {
  /// Sync com conflict resolution
  Future&lt;void&gt; syncToCloud() async {
    final localChanges = await _getLocalChanges();
    
    for (final change in localChanges) {
      try {
        final serverVersion = await _getServerVersion(change.id);
        
        if (serverVersion == null) {
          // Novo item - push direto
          await _pushToServer(change);
        } else if (change.updatedAt > serverVersion.updatedAt) {
          // Local mais recente - push
          await _pushToServer(change);
        } else if (change.updatedAt < serverVersion.updatedAt) {
          // Server mais recente - pull
          await _pullFromServer(change.id);
        } else {
          // Conflito - merge strategy
          await _resolveConflict(change, serverVersion);
        }
      } catch (e) {
        // Queue for retry
        await _queueForRetry(change);
      }
    }
  }
}</code></pre>
            </div>
            <p class="text-gray-400 text-sm">
              Last-write-wins com detecção de conflitos, queue de retry para offline, 
              recovery service para reconexão.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Navigation -->
    <section class="py-20 bg-gray-900/30 border-t border-gray-800">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold text-white mb-4">Navegação com GoRouter</h2>
        <p class="text-gray-400 mb-12 max-w-3xl">
          100+ rotas declarativas com GoRouter, deep linking, redirect guards, e parâmetros tipados.
        </p>
        
        <div class="bg-gray-900/50 rounded-xl border border-gray-800 p-6">
          <div class="bg-gray-950 rounded-lg p-4">
            <pre class="text-sm text-gray-300 overflow-x-auto"><code class="language-dart">// app_router.dart - 31,941 bytes, 100+ routes
final goRouter = GoRouter(
  initialLocation: '/',
  redirect: (context, state) {
    final isAuthenticated = ref.read(authProvider).isAuthenticated;
    final isOnboarded = ref.read(userProvider).hasCompletedOnboarding;
    
    // Public routes (bypass auth)
    if (state.matchedLocation.startsWith('/join/')) return null;
    
    // Auth redirect
    if (!isAuthenticated) return '/login';
    if (!isOnboarded) return '/onboarding';
    
    return null;
  },
  routes: [
    GoRoute(
      path: '/',
      builder: (context, state) => const HomeScreen(),
    ),
    GoRoute(
      path: '/meditation',
      builder: (context, state) => const MeditationListScreen(),
      routes: [
        GoRoute(
          path: 'player',
          builder: (context, state) {
            final meditation = state.extra as Meditation?;
            return MeditationPlayerScreen(meditation: meditation);
          },
        ),
      ],
    ),
    GoRoute(
      path: '/circles/:circleId',
      builder: (context, state) {
        final circleId = state.pathParameters['circleId']!;
        return CircleDetailScreen(circleId: circleId);
      },
    ),
    // ... 100+ more routes
  ],
);</code></pre>
          </div>
        </div>
      </div>
    </section>

    <!-- Internationalization -->
    <section class="py-20 border-t border-gray-800">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold text-white mb-12">Internacionalização</h2>
        
        <div class="grid md:grid-cols-3 gap-6">
          <div class="bg-gray-900/50 rounded-xl border border-gray-800 p-6 text-center">
            <div class="text-4xl mb-4">🇧🇷</div>
            <h3 class="text-lg font-semibold text-white mb-2">Português</h3>
            <p class="text-gray-400 text-sm">Idioma base (app_pt.arb)</p>
          </div>
          
          <div class="bg-gray-900/50 rounded-xl border border-gray-800 p-6 text-center">
            <div class="text-4xl mb-4">🇺🇸</div>
            <h3 class="text-lg font-semibold text-white mb-2">English</h3>
            <p class="text-gray-400 text-sm">app_en.arb</p>
          </div>
          
          <div class="bg-gray-900/50 rounded-xl border border-gray-800 p-6 text-center">
            <div class="text-4xl mb-4">🇪🇸</div>
            <h3 class="text-lg font-semibold text-white mb-2">Español</h3>
            <p class="text-gray-400 text-sm">app_es.arb</p>
          </div>
        </div>
        
        <div class="mt-8 bg-gray-900/50 rounded-xl border border-gray-800 p-6">
          <p class="text-gray-400 text-sm">
            <strong class="text-white">200+ strings</strong> traduzidas usando ARB format (Application Resource Bundle), 
            geração automática via <code class="text-amber-400">flutter gen-l10n</code>, 
            script Python para tradução em lote.
          </p>
        </div>
      </div>
    </section>

    <!-- Platforms -->
    <section class="py-20 bg-gray-900/30 border-t border-gray-800">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold text-white mb-12">6 Plataformas Suportadas</h2>
        
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <div class="bg-gray-900/50 rounded-lg p-4 text-center border border-gray-800">
            <div class="text-3xl mb-2">🤖</div>
            <div class="text-white font-medium">Android</div>
          </div>
          <div class="bg-gray-900/50 rounded-lg p-4 text-center border border-gray-800">
            <div class="text-3xl mb-2">🍎</div>
            <div class="text-white font-medium">iOS</div>
          </div>
          <div class="bg-gray-900/50 rounded-lg p-4 text-center border border-gray-800">
            <div class="text-3xl mb-2">🌐</div>
            <div class="text-white font-medium">Web</div>
          </div>
          <div class="bg-gray-900/50 rounded-lg p-4 text-center border border-gray-800">
            <div class="text-3xl mb-2">💻</div>
            <div class="text-white font-medium">macOS</div>
          </div>
          <div class="bg-gray-900/50 rounded-lg p-4 text-center border border-gray-800">
            <div class="text-3xl mb-2">🪟</div>
            <div class="text-white font-medium">Windows</div>
          </div>
          <div class="bg-gray-900/50 rounded-lg p-4 text-center border border-gray-800">
            <div class="text-3xl mb-2">🐧</div>
            <div class="text-white font-medium">Linux</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testing -->
    <section class="py-20 border-t border-gray-800">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold text-white mb-12">Testing & Quality</h2>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="bg-gray-900/50 rounded-xl border border-gray-800 p-6">
            <h3 class="text-lg font-semibold text-amber-400 mb-3">Unit Tests</h3>
            <ul class="space-y-2 text-gray-400 text-sm">
              <li>• flutter_test</li>
              <li>• mockito + mocktail</li>
              <li>• fake_async</li>
              <li>• coverage reports</li>
            </ul>
          </div>
          
          <div class="bg-gray-900/50 rounded-xl border border-gray-800 p-6">
            <h3 class="text-lg font-semibold text-amber-400 mb-3">Widget Tests</h3>
            <ul class="space-y-2 text-gray-400 text-sm">
              <li>• alchemist (golden tests)</li>
              <li>• bloc_test</li>
              <li>• network_image_mock</li>
            </ul>
          </div>
          
          <div class="bg-gray-900/50 rounded-xl border border-gray-800 p-6">
            <h3 class="text-lg font-semibold text-amber-400 mb-3">Integration Tests</h3>
            <ul class="space-y-2 text-gray-400 text-sm">
              <li>• integration_test</li>
              <li>• flutter_driver</li>
              <li>• patrol (E2E)</li>
            </ul>
          </div>
          
          <div class="bg-gray-900/50 rounded-xl border border-gray-800 p-6">
            <h3 class="text-lg font-semibold text-amber-400 mb-3">Code Quality</h3>
            <ul class="space-y-2 text-gray-400 text-sm">
              <li>• flutter analyze</li>
              <li>• very_good_analysis</li>
              <li>• dart fix --apply</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Stack -->
    <section class="py-20 bg-gray-900/30 border-t border-gray-800">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold text-white mb-12">Stack Completa</h2>
        
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <div class="bg-gray-900/50 rounded-lg p-4 text-center border border-gray-800">
            <div class="text-2xl mb-2">💙</div>
            <div class="text-white font-medium text-sm">Flutter 3.7+</div>
          </div>
          <div class="bg-gray-900/50 rounded-lg p-4 text-center border border-gray-800">
            <div class="text-2xl mb-2">🔄</div>
            <div class="text-white font-medium text-sm">Riverpod</div>
          </div>
          <div class="bg-gray-900/50 rounded-lg p-4 text-center border border-gray-800">
            <div class="text-2xl mb-2">🔥</div>
            <div class="text-white font-medium text-sm">Firebase</div>
          </div>
          <div class="bg-gray-900/50 rounded-lg p-4 text-center border border-gray-800">
            <div class="text-2xl mb-2">📦</div>
            <div class="text-white font-medium text-sm">Hive CE</div>
          </div>
          <div class="bg-gray-900/50 rounded-lg p-4 text-center border border-gray-800">
            <div class="text-2xl mb-2">🤖</div>
            <div class="text-white font-medium text-sm">Google Gemini</div>
          </div>
          <div class="bg-gray-900/50 rounded-lg p-4 text-center border border-gray-800">
            <div class="text-2xl mb-2">💰</div>
            <div class="text-white font-medium text-sm">AdMob</div>
          </div>
          <div class="bg-gray-900/50 rounded-lg p-4 text-center border border-gray-800">
            <div class="text-2xl mb-2">🧭</div>
            <div class="text-white font-medium text-sm">GoRouter</div>
          </div>
          <div class="bg-gray-900/50 rounded-lg p-4 text-center border border-gray-800">
            <div class="text-2xl mb-2">🎵</div>
            <div class="text-white font-medium text-sm">Just Audio</div>
          </div>
          <div class="bg-gray-900/50 rounded-lg p-4 text-center border border-gray-800">
            <div class="text-2xl mb-2">📊</div>
            <div class="text-white font-medium text-sm">fl_chart</div>
          </div>
          <div class="bg-gray-900/50 rounded-lg p-4 text-center border border-gray-800">
            <div class="text-2xl mb-2">📅</div>
            <div class="text-white font-medium text-sm">table_calendar</div>
          </div>
          <div class="bg-gray-900/50 rounded-lg p-4 text-center border border-gray-800">
            <div class="text-2xl mb-2">🎨</div>
            <div class="text-white font-medium text-sm">Lottie</div>
          </div>
          <div class="bg-gray-900/50 rounded-lg p-4 text-center border border-gray-800">
            <div class="text-2xl mb-2">🌐</div>
            <div class="text-white font-medium text-sm">i18n ARB</div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-20 border-t border-gray-800">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-3xl font-bold text-white mb-6">Quer ver mais projetos?</h2>
        <p class="text-gray-400 mb-8 max-w-2xl mx-auto">
          Este é um dos meus projetos pessoais mais completos em Flutter. 
          Explore também o iContei (rede social de contadores) e os projetos do Optimus.
        </p>
        <NuxtLink 
          to="/" 
          class="inline-flex items-center px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg transition-colors"
        >
          Ver Todos os Projetos
          <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
          </svg>
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'GratiDiem - App de Gratidão Flutter | Marcelo Marleta',
  meta: [
    { name: 'description', content: 'Case study: App Flutter multi-plataforma de gratidão com Clean Architecture, Riverpod, Firebase, IA integrada com Gemini, e sistema de monetização ética.' }
  ]
})
</script>
