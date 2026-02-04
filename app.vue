<template>
  <div class="min-h-screen bg-gray-950 text-gray-100">
    <!-- Header -->
    <header class="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-gray-950/80 border-b border-gray-800">
      <nav class="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <NuxtLink to="/" class="text-xl font-bold text-white hover:text-emerald-400 transition-colors">
          MM
        </NuxtLink>
        
        <div class="flex items-center gap-6 text-sm">
          <NuxtLink to="/#projetos" class="text-gray-400 hover:text-white transition-colors">
            Projetos
          </NuxtLink>
          <NuxtLink to="/sobre" class="text-gray-400 hover:text-white transition-colors">
            Sobre
          </NuxtLink>
          <a href="https://github.com/mmarleta" target="_blank" class="text-gray-400 hover:text-white transition-colors">
            GitHub
          </a>
        </div>
      </nav>
    </header>

    <main class="pt-16">
      <NuxtPage />
    </main>

    <!-- Footer -->
    <footer class="border-t border-gray-800 mt-20">
      <div class="max-w-5xl mx-auto px-6 py-8 flex justify-between items-center text-sm text-gray-500">
        <span>© 2026 Marcelo Marleta</span>
        <div class="flex gap-4">
          <a href="https://github.com/mmarleta" target="_blank" class="hover:text-white">GitHub</a>
          <a href="https://www.linkedin.com/in/marcelo-marleta-026403190/" target="_blank" class="hover:text-white">LinkedIn</a>
        </div>
      </div>
    </footer>
  </div>
</template>
