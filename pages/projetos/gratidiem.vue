<template>
  <ProjectPage>
    <ProjectHero :config="heroConfig" />

    <!-- Visão Geral -->
    <section class="py-20 border-t border-gray-800">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold text-white mb-12">{{ $t('cases.gratidiem.overview.title') }}</h2>
        
        <div class="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 class="text-xl font-semibold text-amber-400 mb-4">{{ $t('cases.gratidiem.overview.productTitle') }}</h3>
            <p class="text-gray-300 leading-relaxed mb-6">
              {{ $t('cases.gratidiem.overview.productDesc1') }}
            </p>
            <p class="text-gray-300 leading-relaxed">
              {{ $t('cases.gratidiem.overview.productDesc2') }}
            </p>
          </div>
          
          <div>
            <h3 class="text-xl font-semibold text-amber-400 mb-4">{{ $t('cases.gratidiem.overview.metricsTitle') }}</h3>
            <div class="grid grid-cols-2 gap-4">
              <div class="bg-gray-900/50 rounded-lg p-4 border border-gray-800">
                <div class="text-3xl font-bold text-amber-400">{{ $t('cases.gratidiem.overview.metricFilesValue') }}</div>
                <div class="text-gray-400 text-sm">{{ $t('cases.gratidiem.overview.metricFilesLabel') }}</div>
              </div>
              <div class="bg-gray-900/50 rounded-lg p-4 border border-gray-800">
                <div class="text-3xl font-bold text-amber-400">{{ $t('cases.gratidiem.overview.metricScreensValue') }}</div>
                <div class="text-gray-400 text-sm">{{ $t('cases.gratidiem.overview.metricScreensLabel') }}</div>
              </div>
              <div class="bg-gray-900/50 rounded-lg p-4 border border-gray-800">
                <div class="text-3xl font-bold text-amber-400">{{ $t('cases.gratidiem.overview.metricServicesValue') }}</div>
                <div class="text-gray-400 text-sm">{{ $t('cases.gratidiem.overview.metricServicesLabel') }}</div>
              </div>
              <div class="bg-gray-900/50 rounded-lg p-4 border border-gray-800">
                <div class="text-3xl font-bold text-amber-400">{{ $t('cases.gratidiem.overview.metricModelsValue') }}</div>
                <div class="text-gray-400 text-sm">{{ $t('cases.gratidiem.overview.metricModelsLabel') }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Arquitetura -->
    <section class="py-20 bg-gray-900/30 border-t border-gray-800">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold text-white mb-12">{{ $t('cases.gratidiem.architecture.title') }}</h2>
        
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
            <h3 class="text-lg font-semibold text-white mb-2">{{ $t('cases.gratidiem.architecture.presentationTitle') }}</h3>
            <p class="text-gray-400 text-sm">
              {{ $t('cases.gratidiem.architecture.presentationDesc') }}
            </p>
          </div>
          
          <div class="bg-gray-900/50 rounded-xl border border-gray-800 p-6">
            <div class="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4">
              <span class="text-2xl">🔄</span>
            </div>
            <h3 class="text-lg font-semibold text-white mb-2">{{ $t('cases.gratidiem.architecture.stateTitle') }}</h3>
            <p class="text-gray-400 text-sm">
              {{ $t('cases.gratidiem.architecture.stateDesc') }}
            </p>
          </div>
          
          <div class="bg-gray-900/50 rounded-xl border border-gray-800 p-6">
            <div class="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-4">
              <span class="text-2xl">⚙️</span>
            </div>
            <h3 class="text-lg font-semibold text-white mb-2">{{ $t('cases.gratidiem.architecture.businessTitle') }}</h3>
            <p class="text-gray-400 text-sm">
              {{ $t('cases.gratidiem.architecture.businessDesc') }}
            </p>
          </div>
          
          <div class="bg-gray-900/50 rounded-xl border border-gray-800 p-6">
            <div class="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center mb-4">
              <span class="text-2xl">💾</span>
            </div>
            <h3 class="text-lg font-semibold text-white mb-2">{{ $t('cases.gratidiem.architecture.dataTitle') }}</h3>
            <p class="text-gray-400 text-sm">
              {{ $t('cases.gratidiem.architecture.dataDesc') }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Features -->
    <section class="py-20 border-t border-gray-800">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold text-white mb-12">{{ $t('cases.gratidiem.features.title') }}</h2>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class="bg-gray-900/50 rounded-xl border border-gray-800 p-6">
            <h3 class="text-lg font-semibold text-amber-400 mb-3">{{ $t('cases.gratidiem.features.gratitudeTitle') }}</h3>
            <p class="text-gray-400 text-sm">
              {{ $t('cases.gratidiem.features.gratitudeDesc') }}
            </p>
          </div>
          
          <div class="bg-gray-900/50 rounded-xl border border-gray-800 p-6">
            <h3 class="text-lg font-semibold text-amber-400 mb-3">{{ $t('cases.gratidiem.features.meditationTitle') }}</h3>
            <p class="text-gray-400 text-sm">
              {{ $t('cases.gratidiem.features.meditationDesc') }}
            </p>
          </div>
          
          <div class="bg-gray-900/50 rounded-xl border border-gray-800 p-6">
            <h3 class="text-lg font-semibold text-amber-400 mb-3">{{ $t('cases.gratidiem.features.circlesTitle') }}</h3>
            <p class="text-gray-400 text-sm">
              {{ $t('cases.gratidiem.features.circlesDesc') }}
            </p>
          </div>
          
          <div class="bg-gray-900/50 rounded-xl border border-gray-800 p-6">
            <h3 class="text-lg font-semibold text-amber-400 mb-3">{{ $t('cases.gratidiem.features.challengesTitle') }}</h3>
            <p class="text-gray-400 text-sm">
              {{ $t('cases.gratidiem.features.challengesDesc') }}
            </p>
          </div>
          
          <div class="bg-gray-900/50 rounded-xl border border-gray-800 p-6">
            <h3 class="text-lg font-semibold text-amber-400 mb-3">{{ $t('cases.gratidiem.features.nightRitualTitle') }}</h3>
            <p class="text-gray-400 text-sm">
              {{ $t('cases.gratidiem.features.nightRitualDesc') }}
            </p>
          </div>
          
          <div class="bg-gray-900/50 rounded-xl border border-gray-800 p-6">
            <h3 class="text-lg font-semibold text-amber-400 mb-3">{{ $t('cases.gratidiem.features.adversityTitle') }}</h3>
            <p class="text-gray-400 text-sm">
              {{ $t('cases.gratidiem.features.adversityDesc') }}
            </p>
          </div>
          
          <div class="bg-gray-900/50 rounded-xl border border-gray-800 p-6">
            <h3 class="text-lg font-semibold text-amber-400 mb-3">{{ $t('cases.gratidiem.features.timeCapsuleTitle') }}</h3>
            <p class="text-gray-400 text-sm">
              {{ $t('cases.gratidiem.features.timeCapsuleDesc') }}
            </p>
          </div>
          
          <div class="bg-gray-900/50 rounded-xl border border-gray-800 p-6">
            <h3 class="text-lg font-semibold text-amber-400 mb-3">{{ $t('cases.gratidiem.features.valuesTitle') }}</h3>
            <p class="text-gray-400 text-sm">
              {{ $t('cases.gratidiem.features.valuesDesc') }}
            </p>
          </div>
          
          <div class="bg-gray-900/50 rounded-xl border border-gray-800 p-6">
            <h3 class="text-lg font-semibold text-amber-400 mb-3">{{ $t('cases.gratidiem.features.analyticsTitle') }}</h3>
            <p class="text-gray-400 text-sm">
              {{ $t('cases.gratidiem.features.analyticsDesc') }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- AI Integration -->
    <section class="py-20 bg-gray-900/30 border-t border-gray-800">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold text-white mb-4">{{ $t('cases.gratidiem.ai.title') }}</h2>
        <p class="text-gray-400 mb-12 max-w-3xl">
          {{ $t('cases.gratidiem.ai.description') }}
        </p>
        
        <div class="grid lg:grid-cols-2 gap-8">
          <div class="bg-gray-900/50 rounded-xl border border-gray-800 p-6">
            <h3 class="text-xl font-semibold text-amber-400 mb-4">{{ $t('cases.gratidiem.ai.engineTitle') }}</h3>
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
            <h3 class="text-xl font-semibold text-amber-400 mb-4">{{ $t('cases.gratidiem.ai.capabilitiesTitle') }}</h3>
            <ul class="space-y-4">
              <li class="flex items-start gap-3">
                <span class="text-amber-400 mt-1">▸</span>
                <div>
                  <span class="text-white font-medium">{{ $t('cases.gratidiem.ai.sentimentTitle') }}</span>
                  <p class="text-gray-400 text-sm">{{ $t('cases.gratidiem.ai.sentimentDesc') }}</p>
                </div>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-amber-400 mt-1">▸</span>
                <div>
                  <span class="text-white font-medium">{{ $t('cases.gratidiem.ai.themesTitle') }}</span>
                  <p class="text-gray-400 text-sm">{{ $t('cases.gratidiem.ai.themesDesc') }}</p>
                </div>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-amber-400 mt-1">▸</span>
                <div>
                  <span class="text-white font-medium">{{ $t('cases.gratidiem.ai.responsesTitle') }}</span>
                  <p class="text-gray-400 text-sm">{{ $t('cases.gratidiem.ai.responsesDesc') }}</p>
                </div>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-amber-400 mt-1">▸</span>
                <div>
                  <span class="text-white font-medium">{{ $t('cases.gratidiem.ai.premiumTitle') }}</span>
                  <p class="text-gray-400 text-sm">{{ $t('cases.gratidiem.ai.premiumDesc') }}</p>
                </div>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-amber-400 mt-1">▸</span>
                <div>
                  <span class="text-white font-medium">{{ $t('cases.gratidiem.ai.aiAnalyticsTitle') }}</span>
                  <p class="text-gray-400 text-sm">{{ $t('cases.gratidiem.ai.aiAnalyticsDesc') }}</p>
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
        <h2 class="text-3xl font-bold text-white mb-4">{{ $t('cases.gratidiem.monetization.title') }}</h2>
        <p class="text-gray-400 mb-12 max-w-3xl">
          {{ $t('cases.gratidiem.monetization.description') }}
        </p>
        
        <div class="grid lg:grid-cols-3 gap-6 mb-12">
          <div class="bg-gray-900/50 rounded-xl border border-amber-500/30 p-6">
            <h3 class="text-lg font-semibold text-amber-400 mb-3">{{ $t('cases.gratidiem.monetization.appealsTitle') }}</h3>
            <p class="text-gray-400 text-sm mb-4">
              {{ $t('cases.gratidiem.monetization.appealsDesc') }}
            </p>
            <ul class="space-y-2 text-gray-400 text-sm">
              <li>• {{ $t('cases.gratidiem.monetization.appealsExample1') }}</li>
              <li>• {{ $t('cases.gratidiem.monetization.appealsExample2') }}</li>
              <li>• {{ $t('cases.gratidiem.monetization.appealsExample3') }}</li>
              <li>• {{ $t('cases.gratidiem.monetization.appealsExample4') }}</li>
            </ul>
          </div>
          
          <div class="bg-gray-900/50 rounded-xl border border-gray-800 p-6">
            <h3 class="text-lg font-semibold text-amber-400 mb-3">{{ $t('cases.gratidiem.monetization.tokensTitle') }}</h3>
            <p class="text-gray-400 text-sm mb-4">
              {{ $t('cases.gratidiem.monetization.tokensDesc') }}
            </p>
            <ul class="space-y-2 text-gray-400 text-sm">
              <li>• {{ $t('cases.gratidiem.monetization.tokensExample1') }}</li>
              <li>• {{ $t('cases.gratidiem.monetization.tokensExample2') }}</li>
              <li>• {{ $t('cases.gratidiem.monetization.tokensExample3') }}</li>
              <li>• {{ $t('cases.gratidiem.monetization.tokensExample4') }}</li>
            </ul>
          </div>
          
          <div class="bg-gray-900/50 rounded-xl border border-gray-800 p-6">
            <h3 class="text-lg font-semibold text-amber-400 mb-3">{{ $t('cases.gratidiem.monetization.remoteConfigTitle') }}</h3>
            <p class="text-gray-400 text-sm mb-4">
              {{ $t('cases.gratidiem.monetization.remoteConfigDesc') }}
            </p>
            <ul class="space-y-2 text-gray-400 text-sm">
              <li>• {{ $t('cases.gratidiem.monetization.remoteConfigExample1') }}</li>
              <li>• {{ $t('cases.gratidiem.monetization.remoteConfigExample2') }}</li>
              <li>• {{ $t('cases.gratidiem.monetization.remoteConfigExample3') }}</li>
              <li>• {{ $t('cases.gratidiem.monetization.remoteConfigExample4') }}</li>
            </ul>
          </div>
        </div>
        
        <div class="bg-gray-900/50 rounded-xl border border-gray-800 p-6">
          <h3 class="text-xl font-semibold text-amber-400 mb-4">{{ $t('cases.gratidiem.monetization.triggersTitle') }}</h3>
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
        <h2 class="text-3xl font-bold text-white mb-12">{{ $t('cases.gratidiem.firebase.title') }}</h2>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="bg-gray-900/50 rounded-xl border border-gray-800 p-6">
            <h3 class="text-lg font-semibold text-amber-400 mb-3">{{ $t('cases.gratidiem.firebase.authTitle') }}</h3>
            <ul class="space-y-2 text-gray-400 text-sm">
              <li>• Firebase Auth</li>
              <li>• Google Sign-In</li>
              <li>• Email/Password</li>
              <li>• Web Auth Bridge</li>
              <li>• Token Refresh Manager</li>
            </ul>
          </div>
          
          <div class="bg-gray-900/50 rounded-xl border border-gray-800 p-6">
            <h3 class="text-lg font-semibold text-amber-400 mb-3">{{ $t('cases.gratidiem.firebase.storageTitle') }}</h3>
            <ul class="space-y-2 text-gray-400 text-sm">
              <li>• Cloud Firestore</li>
              <li>• Firebase Storage</li>
              <li>• Offline persistence</li>
              <li>• Real-time sync</li>
              <li>• Conflict resolution</li>
            </ul>
          </div>
          
          <div class="bg-gray-900/50 rounded-xl border border-gray-800 p-6">
            <h3 class="text-lg font-semibold text-amber-400 mb-3">{{ $t('cases.gratidiem.firebase.analyticsTitle') }}</h3>
            <ul class="space-y-2 text-gray-400 text-sm">
              <li>• Firebase Analytics</li>
              <li>• Crashlytics</li>
              <li>• Performance Monitoring</li>
              <li>• Custom events</li>
              <li>• User properties</li>
            </ul>
          </div>
          
          <div class="bg-gray-900/50 rounded-xl border border-gray-800 p-6">
            <h3 class="text-lg font-semibold text-amber-400 mb-3">{{ $t('cases.gratidiem.firebase.messagingTitle') }}</h3>
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
        <h2 class="text-3xl font-bold text-white mb-4">{{ $t('cases.gratidiem.persistence.title') }}</h2>
        <p class="text-gray-400 mb-12 max-w-3xl">
          {{ $t('cases.gratidiem.persistence.description') }}
        </p>
        
        <div class="grid lg:grid-cols-2 gap-8">
          <div class="bg-gray-900/50 rounded-xl border border-gray-800 p-6">
            <h3 class="text-xl font-semibold text-amber-400 mb-4">{{ $t('cases.gratidiem.persistence.hiveTitle') }}</h3>
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
              {{ $t('cases.gratidiem.persistence.hiveDesc') }}
            </p>
          </div>
          
          <div class="bg-gray-900/50 rounded-xl border border-gray-800 p-6">
            <h3 class="text-xl font-semibold text-amber-400 mb-4">{{ $t('cases.gratidiem.persistence.syncTitle') }}</h3>
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
              {{ $t('cases.gratidiem.persistence.syncDesc') }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Navigation -->
    <section class="py-20 bg-gray-900/30 border-t border-gray-800">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold text-white mb-4">{{ $t('cases.gratidiem.navigation.title') }}</h2>
        <p class="text-gray-400 mb-12 max-w-3xl">
          {{ $t('cases.gratidiem.navigation.description') }}
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
        <h2 class="text-3xl font-bold text-white mb-12">{{ $t('cases.gratidiem.i18n.title') }}</h2>
        
        <div class="grid md:grid-cols-3 gap-6">
          <div class="bg-gray-900/50 rounded-xl border border-gray-800 p-6 text-center">
            <div class="text-4xl mb-4">🇧🇷</div>
            <h3 class="text-lg font-semibold text-white mb-2">{{ $t('cases.gratidiem.i18n.portuguese') }}</h3>
            <p class="text-gray-400 text-sm">{{ $t('cases.gratidiem.i18n.portugueseDesc') }}</p>
          </div>
          
          <div class="bg-gray-900/50 rounded-xl border border-gray-800 p-6 text-center">
            <div class="text-4xl mb-4">🇺🇸</div>
            <h3 class="text-lg font-semibold text-white mb-2">{{ $t('cases.gratidiem.i18n.english') }}</h3>
            <p class="text-gray-400 text-sm">{{ $t('cases.gratidiem.i18n.englishDesc') }}</p>
          </div>
          
          <div class="bg-gray-900/50 rounded-xl border border-gray-800 p-6 text-center">
            <div class="text-4xl mb-4">🇪🇸</div>
            <h3 class="text-lg font-semibold text-white mb-2">{{ $t('cases.gratidiem.i18n.spanish') }}</h3>
            <p class="text-gray-400 text-sm">{{ $t('cases.gratidiem.i18n.spanishDesc') }}</p>
          </div>
        </div>
        
        <div class="mt-8 bg-gray-900/50 rounded-xl border border-gray-800 p-6">
          <p class="text-gray-400 text-sm">
            {{ $t('cases.gratidiem.i18n.summary') }}
          </p>
        </div>
      </div>
    </section>

    <!-- Platforms -->
    <section class="py-20 bg-gray-900/30 border-t border-gray-800">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold text-white mb-12">{{ $t('cases.gratidiem.platforms.title') }}</h2>
        
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <div class="bg-gray-900/50 rounded-lg p-4 text-center border border-gray-800">
            <div class="text-3xl mb-2">🤖</div>
            <div class="text-white font-medium">{{ $t('cases.gratidiem.platforms.android') }}</div>
          </div>
          <div class="bg-gray-900/50 rounded-lg p-4 text-center border border-gray-800">
            <div class="text-3xl mb-2">🍎</div>
            <div class="text-white font-medium">{{ $t('cases.gratidiem.platforms.ios') }}</div>
          </div>
          <div class="bg-gray-900/50 rounded-lg p-4 text-center border border-gray-800">
            <div class="text-3xl mb-2">🌐</div>
            <div class="text-white font-medium">{{ $t('cases.gratidiem.platforms.web') }}</div>
          </div>
          <div class="bg-gray-900/50 rounded-lg p-4 text-center border border-gray-800">
            <div class="text-3xl mb-2">💻</div>
            <div class="text-white font-medium">{{ $t('cases.gratidiem.platforms.macos') }}</div>
          </div>
          <div class="bg-gray-900/50 rounded-lg p-4 text-center border border-gray-800">
            <div class="text-3xl mb-2">🪟</div>
            <div class="text-white font-medium">{{ $t('cases.gratidiem.platforms.windows') }}</div>
          </div>
          <div class="bg-gray-900/50 rounded-lg p-4 text-center border border-gray-800">
            <div class="text-3xl mb-2">🐧</div>
            <div class="text-white font-medium">{{ $t('cases.gratidiem.platforms.linux') }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testing -->
    <section class="py-20 border-t border-gray-800">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold text-white mb-12">{{ $t('cases.gratidiem.testing.title') }}</h2>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="bg-gray-900/50 rounded-xl border border-gray-800 p-6">
            <h3 class="text-lg font-semibold text-amber-400 mb-3">{{ $t('cases.gratidiem.testing.unitTitle') }}</h3>
            <ul class="space-y-2 text-gray-400 text-sm">
              <li>• flutter_test</li>
              <li>• mockito + mocktail</li>
              <li>• fake_async</li>
              <li>• coverage reports</li>
            </ul>
          </div>
          
          <div class="bg-gray-900/50 rounded-xl border border-gray-800 p-6">
            <h3 class="text-lg font-semibold text-amber-400 mb-3">{{ $t('cases.gratidiem.testing.widgetTitle') }}</h3>
            <ul class="space-y-2 text-gray-400 text-sm">
              <li>• alchemist (golden tests)</li>
              <li>• bloc_test</li>
              <li>• network_image_mock</li>
            </ul>
          </div>
          
          <div class="bg-gray-900/50 rounded-xl border border-gray-800 p-6">
            <h3 class="text-lg font-semibold text-amber-400 mb-3">{{ $t('cases.gratidiem.testing.integrationTitle') }}</h3>
            <ul class="space-y-2 text-gray-400 text-sm">
              <li>• integration_test</li>
              <li>• flutter_driver</li>
              <li>• patrol (E2E)</li>
            </ul>
          </div>
          
          <div class="bg-gray-900/50 rounded-xl border border-gray-800 p-6">
            <h3 class="text-lg font-semibold text-amber-400 mb-3">{{ $t('cases.gratidiem.testing.qualityTitle') }}</h3>
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
        <h2 class="text-3xl font-bold text-white mb-12">{{ $t('cases.gratidiem.stackSection.title') }}</h2>
        
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
    <ProjectCTA
      title-key="cases.gratidiem.cta.title"
      description-key="cases.gratidiem.cta.description"
      section-class="py-20 border-t border-gray-800"
      container-class="container mx-auto px-6 text-center"
      title-class="text-3xl font-bold text-white mb-6"
      description-class="text-gray-400 mb-8 max-w-2xl mx-auto"
    >
      <template #actions>
        <LocaleLink 
          to="/" 
          class="inline-flex items-center px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-lg transition-colors"
        >
          {{ $t('common.viewAllProjects') }}
          <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
          </svg>
        </LocaleLink>
      </template>
    </ProjectCTA>
  </ProjectPage>
</template>

<script setup>
import { heroGradientBySlug } from '~/data/project-heroes'

const heroConfig = heroGradientBySlug.gratidiem
const { t } = useI18n()

useHead({
  title: t('cases.gratidiem.meta.title'),
  meta: [
    { name: 'description', content: t('cases.gratidiem.meta.description') }
  ]
})
</script>
