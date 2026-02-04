export type HeroBadgeItem = {
  textKey?: string
  text?: string
  class: string
}

export type HeroMetricItem = {
  value?: string
  valueKey?: string
  labelKey: string
  valueClass?: string
  labelClass?: string
  cardClass?: string
}

export type ProjectHeroGradientConfig = {
  backTo: string
  backLabelKey: string
  backLinkClass?: string
  sectionClass?: string
  gradientClass: string
  glowTopClass: string
  glowBottomClass: string
  contentClass?: string
  badgeItems?: HeroBadgeItem[]
  titleKey: string
  titleClass?: string
  titleGradientClass?: string
  titleTextClass?: string
  titleSuffix?: string
  titleSuffixClass?: string
  descriptionKey: string
  descriptionClass?: string
  descriptionHtml?: boolean
  tagKeys?: string[]
  tags?: string[]
  tagClass?: string
}

export type ProjectHeroBlockConfig = {
  wrapperTag?: 'div' | 'section'
  wrapperClass?: string
  containerClass?: string
  heroWrapperClass?: string
  badgesWrapperClass?: string
  badgeItems?: HeroBadgeItem[]
  titleKey: string
  titleClass?: string
  titleHighlightKey?: string
  titleHighlightText?: string
  titleHighlightClass?: string
  titleSuffix?: string
  titleSuffixClass?: string
  descriptionKey: string
  descriptionClass?: string
  descriptionHtml?: boolean
  metrics?: HeroMetricItem[]
  metricsWrapperClass?: string
  metricCardClass?: string
  metricValueClass?: string
  metricLabelClass?: string
}
