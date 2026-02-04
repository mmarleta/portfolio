<template>
  <header class="border-b border-gray-800 bg-gray-950/80 backdrop-blur-sm sticky top-0 z-50">
    <div class="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
      <LocaleLink :to="backTo" :class="backLinkClass">
        <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path
            fill-rule="evenodd"
            d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
            clip-rule="evenodd"
          />
        </svg>
        {{ backLabel }}
      </LocaleLink>
      <a
        v-if="rightLink"
        :href="rightLink.href"
        target="_blank"
        rel="noopener"
        class="text-gray-400 hover:text-white transition-colors"
      >
        {{ rightLink.label }}
      </a>
      <span v-else-if="subtitle" class="text-gray-500 text-sm">{{ subtitle }}</span>
    </div>
  </header>
</template>

<script setup lang="ts">
const props = defineProps<{
  backTo?: string
  backLabelKey: string
  subtitleKey?: string
  subtitle?: string
  backLinkClass?: string
  rightLabelKey?: string
  rightLabel?: string
  rightHref?: string
}>()

const { t } = useI18n()
const backTo = computed(() => props.backTo ?? '/')
const backLabel = computed(() => t(props.backLabelKey))
const subtitle = computed(() => props.subtitle ?? (props.subtitleKey ? t(props.subtitleKey) : ''))
const backLinkClass = computed(
  () => props.backLinkClass ?? 'text-emerald-400 hover:text-emerald-300 flex items-center gap-2'
)
const rightLink = computed(() => {
  if (!props.rightHref) return null
  const label = props.rightLabel ?? (props.rightLabelKey ? t(props.rightLabelKey) : '')
  if (!label) return null
  return { href: props.rightHref, label }
})
</script>
