<template>
  <header class="border-b border-gray-800 bg-gray-950/80 backdrop-blur-sm sticky top-0 z-50">
    <nav class="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
      <NuxtLink :to="localePath('/')" class="text-xl font-bold text-emerald-400">
        {{ SITE.brand }}
      </NuxtLink>
      <div class="flex items-center gap-6">
        <NuxtLink :to="localePath({ path: '/', hash: '#projetos' })" class="text-gray-400 hover:text-white transition-colors">
          {{ $t('nav.projects') }}
        </NuxtLink>
        <NuxtLink :to="localePath({ path: '/', hash: '#stack' })" class="text-gray-400 hover:text-white transition-colors">
          {{ $t('nav.stack') }}
        </NuxtLink>
        <NuxtLink :to="localePath('/sobre')" class="text-gray-400 hover:text-white transition-colors">
          {{ $t('nav.about') }}
        </NuxtLink>
        <LanguageSwitcher />
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { SITE } from '~/data/site'

const localePath = useLocalePath()
</script>
