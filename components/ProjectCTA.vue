<template>
  <section :class="sectionClass">
    <div :class="containerClass">
      <h2 v-if="titleKey" :class="titleClass">{{ t(titleKey) }}</h2>
      <p v-if="descriptionKey && descriptionHtml" :class="descriptionClass" v-html="t(descriptionKey)"></p>
      <p v-else-if="descriptionKey" :class="descriptionClass">{{ t(descriptionKey) }}</p>
      <div v-if="$slots.actions" :class="actionsClass">
        <slot name="actions" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const props = defineProps<{
  titleKey?: string
  descriptionKey?: string
  descriptionHtml?: boolean
  sectionClass?: string
  containerClass?: string
  titleClass?: string
  descriptionClass?: string
  actionsClass?: string
}>()

const { t } = useI18n()

const sectionClass = computed(() => props.sectionClass ?? 'py-16 border-t border-gray-800')
const containerClass = computed(() => props.containerClass ?? 'container mx-auto px-6 text-center')
const titleClass = computed(() => props.titleClass ?? 'text-3xl font-bold mb-4')
const descriptionClass = computed(() => props.descriptionClass ?? 'text-gray-400 mb-8')
const actionsClass = computed(() => props.actionsClass ?? 'flex flex-wrap justify-center gap-4')
</script>
