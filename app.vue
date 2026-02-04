<template>
  <div class="min-h-screen bg-gray-950 text-gray-100">
    <AppHeader v-if="showGlobalHeader" />
    <div>
      <NuxtPage />
    </div>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const showGlobalHeader = computed(() => !/(^|\/)projetos(\/|$)/.test(route.path))
</script>
