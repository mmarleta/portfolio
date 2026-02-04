<template>
  <div class="relative">
    <button
      class="flex items-center gap-2 px-3 py-2 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-gray-800/50"
      @click="isOpen = !isOpen"
    >
      <span class="text-lg">{{ currentFlag }}</span>
      <span class="text-sm hidden sm:inline">{{ currentLocale?.name }}</span>
      <svg 
        class="w-4 h-4 transition-transform" 
        :class="{ 'rotate-180': isOpen }"
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
      </svg>
    </button>
    
    <Transition
      enter-active-class="transition ease-out duration-100"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <div 
        v-if="isOpen" 
        class="absolute right-0 mt-2 w-40 bg-gray-900 border border-gray-800 rounded-lg shadow-xl z-50 overflow-hidden"
      >
        <button
          v-for="locale in availableLocales"
          :key="locale.code"
          class="w-full flex items-center gap-3 px-4 py-3 text-left text-gray-300 hover:bg-gray-800 hover:text-white transition-colors"
          :class="{ 'bg-gray-800/50 text-emerald-400': locale.code === $i18n.locale }"
          @click="switchLocale(locale.code)"
        >
          <span class="text-lg">{{ getFlag(locale.code) }}</span>
          <span class="text-sm">{{ locale.name }}</span>
        </button>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const { locale, locales, setLocale } = useI18n()
const isOpen = ref(false)

const availableLocales = computed(() => locales.value)

const currentLocale = computed(() => 
  locales.value.find(l => l.code === locale.value)
)

const flags = {
  pt: '🇧🇷',
  en: '🇺🇸',
  es: '🇪🇸'
}

const currentFlag = computed(() => flags[locale.value] || '🌐')

const getFlag = (code) => flags[code] || '🌐'

const switchLocale = async (code) => {
  await setLocale(code)
  isOpen.value = false
}

// Close dropdown when clicking outside
const closeOnClickOutside = (e) => {
  if (!e.target.closest('.relative')) {
    isOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', closeOnClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', closeOnClickOutside)
})
</script>
