<template>
  <component :is="wrapperTag" :class="wrapperClass">
    <div :class="containerClass">
      <div :class="heroWrapperClass">
        <div v-if="badges.length" :class="badgesWrapperClass">
          <span v-for="badge in badges" :key="badge.text" :class="badge.class">
            {{ badge.text }}
          </span>
        </div>

        <h1 :class="titleClass">
          {{ t(config.titleKey) }}
          <span v-if="config.titleHighlightKey" :class="config.titleHighlightClass">
            {{ t(config.titleHighlightKey) }}
          </span>
          <span v-else-if="config.titleHighlightText" :class="config.titleHighlightClass">
            {{ config.titleHighlightText }}
          </span>
          <span v-if="config.titleSuffix" :class="config.titleSuffixClass">
            {{ config.titleSuffix }}
          </span>
        </h1>

        <p v-if="config.descriptionHtml" :class="descriptionClass" v-html="t(config.descriptionKey)"></p>
        <p v-else :class="descriptionClass">
          {{ t(config.descriptionKey) }}
        </p>
      </div>

      <div v-if="metrics.length" :class="metricsWrapperClass">
        <div v-for="metric in metrics" :key="metric.label" :class="metric.cardClass">
          <div :class="metric.valueClass">{{ metric.value }}</div>
          <div :class="metric.labelClass">{{ metric.label }}</div>
        </div>
      </div>
    </div>
  </component>
</template>

<script setup lang="ts">
import type { ProjectHeroBlockConfig } from '~/types/projects'

const props = defineProps<{
  config: ProjectHeroBlockConfig
}>()

const { t } = useI18n()

const wrapperTag = computed(() => props.config.wrapperTag ?? 'div')
const wrapperClass = computed(() => props.config.wrapperClass ?? '')
const containerClass = computed(() => props.config.containerClass ?? '')
const badgesWrapperClass = computed(() => props.config.badgesWrapperClass ?? 'flex items-center gap-3 mb-6')
const titleClass = computed(() => props.config.titleClass ?? 'text-4xl md:text-5xl font-bold mb-6')
const descriptionClass = computed(
  () => props.config.descriptionClass ?? 'text-xl text-gray-400 leading-relaxed'
)
const heroWrapperClass = computed(() => props.config.heroWrapperClass ?? 'mb-16')
const metricsWrapperClass = computed(
  () => props.config.metricsWrapperClass ?? 'grid grid-cols-2 md:grid-cols-4 gap-6 mb-16'
)

const badges = computed(() =>
  (props.config.badgeItems ?? [])
    .map((badge) => ({
      class: badge.class,
      text: badge.text ?? (badge.textKey ? t(badge.textKey) : '')
    }))
    .filter((badge) => badge.text)
)

const metrics = computed(() =>
  (props.config.metrics ?? []).map((metric) => ({
    value:
      metric.value ??
      (metric.valueKey ? t(metric.valueKey) : ''),
    label: t(metric.labelKey),
    valueClass: metric.valueClass ?? props.config.metricValueClass ?? 'text-3xl font-bold text-gray-200',
    labelClass: metric.labelClass ?? props.config.metricLabelClass ?? 'text-sm text-gray-500 mt-1',
    cardClass: metric.cardClass ?? props.config.metricCardClass ?? 'bg-gray-900/50 border border-gray-800 rounded-xl p-6 text-center'
  }))
)
</script>
