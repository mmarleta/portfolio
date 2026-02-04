<template>
  <NuxtLink :to="localizedTo" v-bind="attrs">
    <slot />
  </NuxtLink>
</template>

<script setup lang="ts">
import type { RouteLocationRaw } from 'vue-router'

defineOptions({ inheritAttrs: false })

const props = defineProps<{
  to: RouteLocationRaw
}>()

const attrs = useAttrs()
const localePath = useLocalePath()

const localizedTo = computed(() => localePath(props.to))
</script>
