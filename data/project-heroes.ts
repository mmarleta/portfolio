import type { ProjectHeroBlockConfig, ProjectHeroGradientConfig } from '~/types/projects'

export const heroGradientBySlug: Record<string, ProjectHeroGradientConfig> = {
  whatsappIntegration: {
    backTo: '/',
    backLabelKey: 'cases.whatsapp.backToPortfolio',
    backLinkClass: 'inline-flex items-center text-emerald-400 hover:text-emerald-300 mb-8 transition-colors',
    sectionClass: 'relative py-20 overflow-hidden',
    gradientClass: 'bg-gradient-to-br from-emerald-950/50 via-gray-950 to-gray-950',
    glowTopClass: 'absolute top-20 left-10 w-72 h-72 bg-green-500/10 rounded-full blur-3xl',
    glowBottomClass: 'absolute bottom-10 right-10 w-96 h-96 bg-green-600/5 rounded-full blur-3xl',
    badgeItems: [
      {
        text: 'Optimus Platform',
        class: 'px-4 py-2 bg-green-500/20 text-green-400 rounded-full text-sm font-medium border border-green-500/30'
      },
      {
        textKey: 'cases.whatsapp.badge',
        class: 'px-4 py-2 bg-gray-800 text-gray-300 rounded-full text-sm'
      }
    ],
    titleKey: 'cases.whatsapp.title',
    titleGradientClass: 'from-green-400 via-green-300 to-emerald-400',
    descriptionKey: 'cases.whatsapp.description',
    tagKeys: [
      'cases.whatsapp.tags.aggregator',
      'cases.whatsapp.tags.debounce',
      'cases.whatsapp.tags.evolution',
      'cases.whatsapp.tags.redis',
      'cases.whatsapp.tags.degradation',
      'cases.whatsapp.tags.websocket'
    ]
  },
  audioProcessor: {
    backTo: '/',
    backLabelKey: 'cases.audio.backToPortfolio',
    backLinkClass: 'inline-flex items-center text-emerald-400 hover:text-emerald-300 mb-8 transition-colors',
    sectionClass: 'relative py-20 overflow-hidden',
    gradientClass: 'bg-gradient-to-br from-purple-950/50 via-gray-950 to-gray-950',
    glowTopClass: 'absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl',
    glowBottomClass: 'absolute bottom-10 right-10 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl',
    badgeItems: [
      {
        text: 'Optimus Platform',
        class: 'px-4 py-2 bg-purple-500/20 text-purple-400 rounded-full text-sm font-medium border border-purple-500/30'
      },
      {
        textKey: 'cases.audio.badge',
        class: 'px-4 py-2 bg-gray-800 text-gray-300 rounded-full text-sm'
      }
    ],
    titleKey: 'cases.audio.title',
    titleGradientClass: 'from-purple-400 via-purple-300 to-pink-400',
    descriptionKey: 'cases.audio.description',
    tagKeys: [
      'cases.audio.tags.multiProvider',
      'cases.audio.tags.groqWhisper',
      'cases.audio.tags.elevenLabs',
      'cases.audio.tags.celery',
      'cases.audio.tags.minio',
      'cases.audio.tags.formats'
    ]
  },
  frontend: {
    backTo: '/',
    backLabelKey: 'cases.frontend.backToPortfolio',
    backLinkClass: 'inline-flex items-center text-emerald-400 hover:text-emerald-300 mb-8 transition-colors',
    sectionClass: 'relative py-20 overflow-hidden',
    gradientClass: 'bg-gradient-to-br from-blue-950/50 via-gray-950 to-gray-950',
    glowTopClass: 'absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl',
    glowBottomClass: 'absolute bottom-10 right-10 w-96 h-96 bg-indigo-600/5 rounded-full blur-3xl',
    badgeItems: [
      {
        text: 'Optimus Platform',
        class: 'px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium border border-blue-500/30'
      },
      {
        textKey: 'cases.frontend.badge',
        class: 'px-4 py-2 bg-gray-800 text-gray-300 rounded-full text-sm'
      }
    ],
    titleKey: 'cases.frontend.title',
    titleGradientClass: 'from-blue-400 via-indigo-300 to-purple-400',
    descriptionKey: 'cases.frontend.description',
    tags: ['Vue.js 3', 'Tailwind CSS', 'WebSocket', 'Real-time', 'Multi-tenant', 'RBAC']
  },
  rulesEngine: {
    backTo: '/',
    backLabelKey: 'nav.backToPortfolio',
    backLinkClass: 'inline-flex items-center text-emerald-400 hover:text-emerald-300 mb-8 transition-colors',
    sectionClass: 'relative py-20 overflow-hidden',
    gradientClass: 'bg-gradient-to-br from-emerald-950/50 via-gray-950 to-gray-950',
    glowTopClass: 'absolute top-20 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl',
    glowBottomClass: 'absolute bottom-10 right-10 w-96 h-96 bg-emerald-600/5 rounded-full blur-3xl',
    badgeItems: [
      {
        textKey: 'cases.rules.badge',
        class: 'px-4 py-2 bg-emerald-500/20 text-emerald-400 rounded-full text-sm font-medium border border-emerald-500/30'
      },
      {
        textKey: 'cases.rules.badgeSecondary',
        class: 'px-4 py-2 bg-gray-800 text-gray-300 rounded-full text-sm'
      }
    ],
    titleKey: 'cases.rules.title',
    titleGradientClass: 'from-emerald-400 via-emerald-300 to-teal-400',
    descriptionKey: 'cases.rules.description',
    tagKeys: [
      'cases.rules.tags.pythonLambda',
      'cases.rules.tags.subMillisecond',
      'cases.rules.tags.multiTenant',
      'cases.rules.tags.eventDriven',
      'cases.rules.tags.typeSafe',
      'cases.rules.tags.cacheCoherence'
    ]
  },
  icontei: {
    backTo: '/',
    backLabelKey: 'nav.backToPortfolio',
    backLinkClass: 'inline-flex items-center text-gray-400 hover:text-emerald-400 mb-8 transition-colors',
    sectionClass: 'relative py-24 overflow-hidden',
    gradientClass: 'bg-gradient-to-br from-emerald-900/20 via-gray-950 to-purple-900/20',
    glowTopClass: 'absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl',
    glowBottomClass: 'absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl',
    contentClass: 'max-w-4xl',
    badgeItems: [
      {
        textKey: 'cases.icontei.hero.tag1',
        class: 'px-4 py-2 bg-emerald-500/10 text-emerald-400 rounded-full text-sm font-medium border border-emerald-500/20'
      },
      {
        textKey: 'cases.icontei.hero.tag2',
        class: 'px-4 py-2 bg-purple-500/10 text-purple-400 rounded-full text-sm font-medium border border-purple-500/20'
      },
      {
        textKey: 'cases.icontei.hero.tag3',
        class: 'px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium border border-blue-500/20'
      }
    ],
    titleKey: 'cases.icontei.hero.title',
    titleClass: 'text-5xl md:text-6xl font-bold text-white mb-6',
    titleTextClass: 'text-white',
    titleSuffix: '.',
    titleSuffixClass: 'text-emerald-400',
    descriptionKey: 'cases.icontei.hero.description',
    descriptionClass: 'text-xl text-gray-300 mb-8 leading-relaxed',
    descriptionHtml: true,
    tags: ['Next.js 16', 'React 19', 'FastAPI', 'PostgreSQL', 'Redis', 'WebSocket', 'OpenAI/Groq', 'Prometheus'],
    tagClass: 'px-3 py-1 bg-gray-800/50 text-gray-300 rounded text-sm'
  },
  gratidiem: {
    backTo: '/',
    backLabelKey: 'nav.backToPortfolio',
    backLinkClass: 'inline-flex items-center text-gray-400 hover:text-emerald-400 mb-8 transition-colors',
    sectionClass: 'relative py-24 overflow-hidden',
    gradientClass: 'bg-gradient-to-br from-amber-900/20 via-gray-950 to-purple-900/20',
    glowTopClass: 'absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl',
    glowBottomClass: 'absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl',
    contentClass: 'max-w-4xl',
    badgeItems: [
      {
        textKey: 'cases.gratidiem.hero.tag1',
        class: 'px-4 py-2 bg-amber-500/10 text-amber-400 rounded-full text-sm font-medium border border-amber-500/20'
      },
      {
        textKey: 'cases.gratidiem.hero.tag2',
        class: 'px-4 py-2 bg-purple-500/10 text-purple-400 rounded-full text-sm font-medium border border-purple-500/20'
      },
      {
        textKey: 'cases.gratidiem.hero.tag3',
        class: 'px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium border border-blue-500/20'
      }
    ],
    titleKey: 'cases.gratidiem.hero.title',
    titleClass: 'text-5xl md:text-6xl font-bold text-white mb-6',
    titleTextClass: 'text-white',
    titleSuffix: '.',
    titleSuffixClass: 'text-amber-400',
    descriptionKey: 'cases.gratidiem.hero.description',
    descriptionClass: 'text-xl text-gray-300 mb-8 leading-relaxed',
    tags: ['Flutter 3.7+', 'Riverpod', 'Firebase', 'Hive CE', 'Google Gemini', 'AdMob', 'GoRouter', 'i18n'],
    tagClass: 'px-3 py-1 bg-gray-800/50 text-gray-300 rounded text-sm'
  }
}

export const heroBlocksBySlug: Record<string, ProjectHeroBlockConfig> = {
  aiEngine: {
    wrapperTag: 'section',
    wrapperClass: 'py-16 px-4 border-b border-gray-800',
    containerClass: 'max-w-4xl mx-auto',
    heroWrapperClass: '',
    badgesWrapperClass: 'flex items-center gap-3 mb-6',
    badgeItems: [
      {
        textKey: 'cases.aiEngine.badge1',
        class: 'px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-sm font-medium'
      },
      {
        textKey: 'cases.aiEngine.badge2',
        class: 'px-3 py-1 bg-gray-800 text-gray-400 rounded-full text-sm'
      }
    ],
    titleKey: 'cases.aiEngine.title',
    titleClass: 'text-4xl md:text-5xl font-bold mb-6',
    titleHighlightKey: 'cases.aiEngine.titleHighlight',
    titleHighlightClass: 'text-emerald-400',
    descriptionKey: 'cases.aiEngine.subtitle',
    descriptionClass: 'text-xl text-gray-400 mb-8 leading-relaxed',
    metricsWrapperClass: 'grid grid-cols-2 md:grid-cols-4 gap-4',
    metricCardClass: 'bg-gray-900/50 border border-gray-800 rounded-lg p-4 text-center',
    metricValueClass: 'text-2xl font-bold text-emerald-400',
    metricLabelClass: 'text-sm text-gray-500',
    metrics: [
      { value: '20+', labelKey: 'cases.aiEngine.stats.nodes' },
      { value: '8', labelKey: 'cases.aiEngine.stats.states' },
      { value: '<10ms', labelKey: 'cases.aiEngine.stats.routing' },
      { value: '99.9%', labelKey: 'cases.aiEngine.stats.uptime' }
    ]
  },
  infraDevops: {
    wrapperTag: 'section',
    wrapperClass: 'py-16 px-4 border-b border-gray-800',
    containerClass: 'max-w-4xl mx-auto',
    heroWrapperClass: '',
    badgesWrapperClass: 'flex items-center gap-3 mb-6',
    badgeItems: [
      {
        textKey: 'cases.infraDevops.badge',
        class: 'px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-medium'
      },
      {
        textKey: 'cases.infraDevops.badgeSecondary',
        class: 'px-3 py-1 bg-gray-800 text-gray-400 rounded-full text-sm'
      }
    ],
    titleKey: 'cases.infraDevops.title',
    titleClass: 'text-4xl md:text-5xl font-bold mb-6',
    titleHighlightKey: 'cases.infraDevops.titleHighlight',
    titleHighlightClass: 'text-cyan-400',
    descriptionKey: 'cases.infraDevops.description',
    descriptionClass: 'text-xl text-gray-400 mb-8 leading-relaxed',
    metricsWrapperClass: 'grid grid-cols-2 md:grid-cols-4 gap-4',
    metricCardClass: 'bg-gray-900/50 border border-gray-800 rounded-lg p-4 text-center',
    metricValueClass: 'text-2xl font-bold text-cyan-400',
    metricLabelClass: 'text-sm text-gray-500',
    metrics: [
      { value: '15+', labelKey: 'cases.infraDevops.metrics.microservices' },
      { value: '6', labelKey: 'cases.infraDevops.metrics.composeOverlays' },
      { value: '3', labelKey: 'cases.infraDevops.metrics.sentinelsHa' },
      { value: '12', labelKey: 'cases.infraDevops.metrics.workflowsCicd' }
    ]
  },
  testTools: {
    wrapperTag: 'section',
    wrapperClass: 'py-16 px-4 border-b border-gray-800',
    containerClass: 'max-w-4xl mx-auto',
    heroWrapperClass: '',
    badgesWrapperClass: 'flex items-center gap-3 mb-6',
    badgeItems: [
      {
        textKey: 'cases.testTools.badge',
        class: 'px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm font-medium'
      },
      {
        textKey: 'cases.testTools.badgeSecondary',
        class: 'px-3 py-1 bg-gray-800 text-gray-400 rounded-full text-sm'
      }
    ],
    titleKey: 'cases.testTools.title',
    titleClass: 'text-4xl md:text-5xl font-bold mb-6',
    titleHighlightKey: 'cases.testTools.titleHighlight',
    titleHighlightClass: 'text-purple-400',
    descriptionKey: 'cases.testTools.description',
    descriptionClass: 'text-xl text-gray-400 mb-8 leading-relaxed',
    metricsWrapperClass: 'grid grid-cols-2 md:grid-cols-4 gap-4',
    metricCardClass: 'bg-gray-900/50 border border-gray-800 rounded-lg p-4 text-center',
    metricValueClass: 'text-2xl font-bold text-purple-400',
    metricLabelClass: 'text-sm text-gray-500',
    metrics: [
      { value: '5', labelKey: 'cases.testTools.metrics.analyzers' },
      { value: '4', labelKey: 'cases.testTools.metrics.personalities' },
      { valueKey: 'cases.testTools.metrics.realtime', labelKey: 'cases.testTools.metrics.websocket' },
      { valueKey: 'cases.testTools.metrics.multichannel', labelKey: 'cases.testTools.metrics.channel' }
    ]
  },
  pvcoach: {
    wrapperTag: 'section',
    wrapperClass: 'py-16 px-4 border-b border-gray-800',
    containerClass: 'max-w-4xl mx-auto',
    heroWrapperClass: '',
    badgesWrapperClass: 'flex items-center gap-3 mb-6',
    badgeItems: [
      {
        textKey: 'cases.pvcoach.tag',
        class: 'px-3 py-1 bg-amber-500/20 text-amber-400 rounded-full text-sm font-medium'
      },
      {
        textKey: 'cases.pvcoach.tagSecondary',
        class: 'px-3 py-1 bg-gray-800 text-gray-400 rounded-full text-sm'
      }
    ],
    titleKey: 'cases.pvcoach.title',
    titleClass: 'text-4xl md:text-5xl font-bold mb-6',
    titleSuffix: ' ♔',
    titleSuffixClass: 'text-amber-400',
    descriptionKey: 'cases.pvcoach.description',
    descriptionClass: 'text-xl text-gray-400 mb-8 leading-relaxed',
    metricsWrapperClass: 'grid grid-cols-2 md:grid-cols-4 gap-4',
    metricCardClass: 'bg-gray-900/50 border border-gray-800 rounded-lg p-4 text-center',
    metricValueClass: 'text-2xl font-bold text-amber-400',
    metricLabelClass: 'text-sm text-gray-500',
    metrics: [
      { value: '5', labelKey: 'cases.pvcoach.stats.llmProviders' },
      { value: 'MultiPV', labelKey: 'cases.pvcoach.stats.topNAnalysis' },
      { value: '3', labelKey: 'cases.pvcoach.stats.hintLevels' },
      { value: 'Grounded', labelKey: 'cases.pvcoach.stats.groundedExplanations' }
    ]
  },
  automark: {
    wrapperTag: 'section',
    wrapperClass: 'py-16 px-4 border-b border-gray-800',
    containerClass: 'max-w-4xl mx-auto',
    heroWrapperClass: '',
    badgesWrapperClass: 'flex items-center gap-3 mb-6',
    badgeItems: [
      {
        textKey: 'cases.automark.hero.tag1',
        class: 'px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm font-medium'
      },
      {
        textKey: 'cases.automark.hero.tag2',
        class: 'px-3 py-1 bg-gray-800 text-gray-400 rounded-full text-sm'
      }
    ],
    titleKey: 'cases.automark.hero.title',
    titleClass: 'text-4xl md:text-5xl font-bold mb-6',
    titleHighlightKey: 'cases.automark.hero.titleHighlight',
    titleHighlightClass: 'text-orange-400',
    descriptionKey: 'cases.automark.hero.description',
    descriptionClass: 'text-xl text-gray-400 mb-8 leading-relaxed',
    metricsWrapperClass: 'grid grid-cols-2 md:grid-cols-4 gap-4',
    metricCardClass: 'bg-gray-900/50 border border-gray-800 rounded-lg p-4 text-center',
    metricValueClass: 'text-2xl font-bold text-orange-400',
    metricLabelClass: 'text-sm text-gray-500',
    metrics: [
      { valueKey: 'cases.automark.hero.stat1Value', labelKey: 'cases.automark.hero.stat1Label' },
      { valueKey: 'cases.automark.hero.stat2Value', labelKey: 'cases.automark.hero.stat2Label' },
      { valueKey: 'cases.automark.hero.stat3Value', labelKey: 'cases.automark.hero.stat3Label' },
      { valueKey: 'cases.automark.hero.stat4Value', labelKey: 'cases.automark.hero.stat4Label' }
    ]
  },
  documentProcessing: {
    wrapperTag: 'div',
    wrapperClass: '',
    badgesWrapperClass: 'mb-4',
    badgeItems: [
      {
        textKey: 'cases.documentProcessing.tag',
        class: 'inline-block px-3 py-1 bg-orange-500/10 text-orange-400 rounded-full text-sm'
      }
    ],
    titleKey: 'cases.documentProcessing.title',
    titleClass: 'text-4xl md:text-5xl font-bold mb-6',
    descriptionKey: 'cases.documentProcessing.description',
    descriptionClass: 'text-xl text-gray-400 leading-relaxed',
    metricsWrapperClass: 'grid grid-cols-2 md:grid-cols-4 gap-6 mb-16',
    metricCardClass: 'bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center',
    metricValueClass: 'text-3xl font-bold text-orange-400',
    metricLabelClass: 'text-sm text-gray-500 mt-1',
    metrics: [
      { value: '100%', labelKey: 'cases.documentProcessing.stats.autoDetect' },
      { value: '0', labelKey: 'cases.documentProcessing.stats.brokenChunks' },
      { value: '<5min', labelKey: 'cases.documentProcessing.stats.indexUpdate' },
      { value: 'Multi', labelKey: 'cases.documentProcessing.stats.multiTenant' }
    ]
  },
  observability: {
    wrapperTag: 'div',
    wrapperClass: '',
    badgesWrapperClass: 'mb-4',
    badgeItems: [
      {
        textKey: 'cases.observability.badge',
        class: 'inline-block px-3 py-1 bg-green-500/10 text-green-400 rounded-full text-sm'
      }
    ],
    titleKey: 'cases.observability.title',
    titleClass: 'text-4xl md:text-5xl font-bold mb-6',
    descriptionKey: 'cases.observability.description',
    descriptionClass: 'text-xl text-gray-400 leading-relaxed',
    metricsWrapperClass: 'grid grid-cols-2 md:grid-cols-4 gap-6 mb-16',
    metricCardClass: 'bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center',
    metricValueClass: 'text-3xl font-bold text-green-400',
    metricLabelClass: 'text-sm text-gray-500 mt-1',
    metrics: [
      { valueKey: 'cases.observability.metrics.meltPillars', labelKey: 'cases.observability.metrics.meltPillarsLabel' },
      { valueKey: 'cases.observability.metrics.customMetrics', labelKey: 'cases.observability.metrics.customMetricsLabel' },
      { valueKey: 'cases.observability.metrics.traceCoverage', labelKey: 'cases.observability.metrics.traceCoverageLabel' },
      { valueKey: 'cases.observability.metrics.mttrDebug', labelKey: 'cases.observability.metrics.mttrDebugLabel' }
    ]
  },
  llmPool: {
    wrapperTag: 'div',
    wrapperClass: '',
    badgesWrapperClass: 'mb-4',
    badgeItems: [
      {
        textKey: 'cases.llmPool.badge',
        class: 'inline-block px-3 py-1 bg-yellow-500/10 text-yellow-400 rounded-full text-sm'
      }
    ],
    titleKey: 'cases.llmPool.title',
    titleClass: 'text-4xl md:text-5xl font-bold mb-6',
    descriptionKey: 'cases.llmPool.description',
    descriptionClass: 'text-xl text-gray-400 leading-relaxed',
    metricsWrapperClass: 'grid grid-cols-2 md:grid-cols-4 gap-6 mb-16',
    metricCardClass: 'bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center',
    metricValueClass: 'text-3xl font-bold text-yellow-400',
    metricLabelClass: 'text-sm text-gray-500 mt-1',
    metrics: [
      { value: '40%', labelKey: 'cases.llmPool.metrics.costReduction' },
      { value: '<200ms', labelKey: 'cases.llmPool.metrics.latencyP95' },
      { value: '99.9%', labelKey: 'cases.llmPool.metrics.availability' },
      { value: 'N', labelKey: 'cases.llmPool.metrics.simultaneousProviders' }
    ]
  },
  memoryEngine: {
    wrapperTag: 'div',
    wrapperClass: '',
    badgesWrapperClass: 'mb-4',
    badgeItems: [
      {
        textKey: 'cases.memory.badge',
        class: 'inline-block px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded-full text-sm'
      }
    ],
    titleKey: 'cases.memory.title',
    titleClass: 'text-4xl md:text-5xl font-bold mb-6',
    descriptionKey: 'cases.memory.description',
    descriptionClass: 'text-xl text-gray-400 leading-relaxed',
    metricsWrapperClass: 'grid grid-cols-2 md:grid-cols-4 gap-6 mb-16',
    metricCardClass: 'bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center',
    metricValueClass: 'text-3xl font-bold text-emerald-400',
    metricLabelClass: 'text-sm text-gray-500 mt-1',
    metrics: [
      { value: '<100ms', labelKey: 'cases.memory.metrics.latency' },
      { value: '90%', labelKey: 'cases.memory.metrics.tokenReduction' },
      { value: '6', labelKey: 'cases.memory.metrics.complianceRules' },
      { value: '99.9%', labelKey: 'cases.memory.metrics.durability' }
    ]
  },
  pricingIntelligence: {
    wrapperTag: 'div',
    wrapperClass: '',
    badgesWrapperClass: 'mb-4',
    badgeItems: [
      {
        textKey: 'cases.pricing.badge',
        class: 'inline-block px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-sm'
      }
    ],
    titleKey: 'cases.pricing.title',
    titleClass: 'text-4xl md:text-5xl font-bold mb-6',
    descriptionKey: 'cases.pricing.description',
    descriptionClass: 'text-xl text-gray-400 leading-relaxed',
    metricsWrapperClass: 'grid grid-cols-2 md:grid-cols-4 gap-6 mb-16',
    metricCardClass: 'bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center',
    metricValueClass: 'text-3xl font-bold text-purple-400',
    metricLabelClass: 'text-sm text-gray-500 mt-1',
    metrics: [
      { value: '95%', labelKey: 'cases.pricing.metrics.precision' },
      { value: '<100ms', labelKey: 'cases.pricing.metrics.cacheHit' },
      { value: '80%', labelKey: 'cases.pricing.metrics.cacheRate' },
      { value: '3072d', labelKey: 'cases.pricing.metrics.embeddingDim' }
    ]
  },
  backendOrchestrator: {
    wrapperTag: 'div',
    wrapperClass: '',
    badgesWrapperClass: 'mb-4',
    badgeItems: [
      {
        textKey: 'cases.backend.badge',
        class: 'inline-block px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm'
      }
    ],
    titleKey: 'cases.backend.title',
    titleClass: 'text-4xl md:text-5xl font-bold mb-6',
    descriptionKey: 'cases.backend.description',
    descriptionClass: 'text-xl text-gray-400 leading-relaxed',
    metricsWrapperClass: 'grid grid-cols-2 md:grid-cols-4 gap-6 mb-16',
    metricCardClass: 'bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center',
    metricValueClass: 'text-3xl font-bold text-blue-400',
    metricLabelClass: 'text-sm text-gray-500 mt-1',
    metrics: [
      { value: '<50ms', labelKey: 'cases.backend.metrics.gatewayLatency' },
      { value: '100k+', labelKey: 'cases.backend.metrics.reqPerMinTenant' },
      { value: '3', labelKey: 'cases.backend.metrics.retryStrategies' },
      { value: '99.9%', labelKey: 'cases.backend.metrics.uptime' }
    ]
  },
  feedRss: {
    wrapperTag: 'div',
    wrapperClass: '',
    badgesWrapperClass: 'mb-4',
    badgeItems: [
      {
        textKey: 'cases.feedRss.tag',
        class: 'inline-block px-3 py-1 bg-pink-500/10 text-pink-400 rounded-full text-sm'
      }
    ],
    titleKey: 'cases.feedRss.title',
    titleClass: 'text-4xl md:text-5xl font-bold mb-6',
    descriptionKey: 'cases.feedRss.description',
    descriptionClass: 'text-xl text-gray-400 leading-relaxed',
    metricsWrapperClass: 'grid grid-cols-2 md:grid-cols-3 gap-6 mb-16',
    metricCardClass: 'bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center',
    metricValueClass: 'text-3xl font-bold text-pink-400',
    metricLabelClass: 'text-sm text-gray-500 mt-1',
    metrics: [
      { value: '6+', labelKey: 'cases.feedRss.stats.monitoredFeeds' },
      { value: '15+', labelKey: 'cases.feedRss.stats.aiKeywords' },
      { value: 'Async', labelKey: 'cases.feedRss.stats.asyncPipeline' }
    ]
  },
  mcpServers: {
    wrapperTag: 'div',
    wrapperClass: '',
    badgesWrapperClass: 'mb-4',
    badgeItems: [
      {
        textKey: 'cases.mcpServers.tag',
        class: 'inline-block px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full text-sm'
      }
    ],
    titleKey: 'cases.mcpServers.title',
    titleClass: 'text-4xl md:text-5xl font-bold mb-6',
    descriptionKey: 'cases.mcpServers.description',
    descriptionClass: 'text-xl text-gray-400 leading-relaxed'
  }
}
