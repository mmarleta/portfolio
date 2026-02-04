<template>
  <footer class="border-t border-gray-800 mt-20">
    <div
      class="max-w-5xl mx-auto px-6 py-8 flex justify-between items-center text-sm text-gray-500"
    >
      <span>© 2026 {{ SITE.name }}</span>
      <div class="flex gap-4">
        <a :href="SITE.githubUrl" target="_blank" rel="noopener" class="hover:text-white">GitHub</a>
        <a :href="SITE.linkedinUrl" target="_blank" rel="noopener" class="hover:text-white"
          >LinkedIn</a
        >
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { SITE } from '~/data/site'
</script>
