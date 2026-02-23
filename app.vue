<template>
  <div class="min-h-screen bg-gray-950 text-gray-100">
    <AppHeader v-if="showGlobalHeader" />
    <div>
      <NuxtPage />
    </div>
    <AppFooter />
    <Analytics />
  </div>
</template>

<script setup lang="ts">
import { Analytics } from '@vercel/analytics/nuxt'

const route = useRoute()
const showGlobalHeader = computed(() => !/(^|\/)projetos(\/|$)/.test(route.path))
</script>
