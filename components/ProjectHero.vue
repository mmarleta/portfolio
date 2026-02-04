<template>
  <section :class="sectionClass">
    <div :class="['absolute inset-0', config.gradientClass]"></div>
    <div :class="config.glowTopClass"></div>
    <div :class="config.glowBottomClass"></div>

    <div class="container mx-auto px-6 relative z-10" :class="config.contentClass">
      <NuxtLink :to="backTo" :class="backLinkClass">
        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
        {{ t(config.backLabelKey) }}
      </NuxtLink>

      <div v-if="badges.length" class="flex items-center gap-4 mb-6">
        <span v-for="badge in badges" :key="badge.text" :class="badge.class">
          {{ badge.text }}
        </span>
      </div>

      <h1 :class="titleClass">
        <span v-if="config.titleGradientClass" :class="titleGradientClass">
          {{ t(config.titleKey) }}
        </span>
        <span v-else :class="config.titleTextClass">
          {{ t(config.titleKey) }}
        </span>
        <span v-if="config.titleSuffix" :class="config.titleSuffixClass">{{ config.titleSuffix }}</span>
      </h1>

      <p v-if="config.descriptionHtml" :class="descriptionClass" v-html="t(config.descriptionKey)"></p>
      <p v-else :class="descriptionClass">
        {{ t(config.descriptionKey) }}
      </p>

      <div v-if="tags.length" class="flex flex-wrap gap-3">
        <span v-for="tag in tags" :key="tag" :class="tagClass">
          {{ tag }}
        </span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { ProjectHeroGradientConfig } from '~/types/projects'

const props = defineProps<{
  config: ProjectHeroGradientConfig
}>()

const { t } = useI18n()
const localePath = useLocalePath()

const badges = computed(() =>
  (props.config.badgeItems ?? [])
    .map((badge) => ({
      class: badge.class,
      text: badge.text ?? (badge.textKey ? t(badge.textKey) : '')
    }))
    .filter((badge) => badge.text)
)

const tags = computed(() => {
  const translated = props.config.tagKeys?.map((key) => t(key)) ?? []
  return [...translated, ...(props.config.tags ?? [])]
})

const backTo = computed(() => localePath(props.config.backTo))
const sectionClass = computed(() => props.config.sectionClass ?? 'relative py-20 overflow-hidden')
const backLinkClass = computed(
  () =>
    props.config.backLinkClass ??
    'inline-flex items-center text-emerald-400 hover:text-emerald-300 mb-8 transition-colors'
)
const titleClass = computed(() => props.config.titleClass ?? 'text-5xl md:text-6xl font-bold mb-6')
const titleGradientClass = computed(
  () => `bg-gradient-to-r ${props.config.titleGradientClass} bg-clip-text text-transparent`
)
const descriptionClass = computed(
  () => props.config.descriptionClass ?? 'text-xl text-gray-400 max-w-3xl mb-8'
)
const tagClass = computed(
  () => props.config.tagClass ?? 'px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300'
)
</script>
