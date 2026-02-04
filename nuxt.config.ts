import { resolve } from 'pathe'

export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/i18n'],

  app: {
    head: {
      title: 'Marcelo Marleta | Full-Stack Developer',
      meta: [
        {
          name: 'description',
          content:
            'Full-Stack Developer especializado em sistemas AI/LLM e arquiteturas escaláveis.',
        },
      ],
    },
  },

  i18n: {
    restructureDir: '.',
    locales: [
      { code: 'pt', name: 'Português', file: 'pt.json' },
      { code: 'en', name: 'English', file: 'en.json' },
      { code: 'es', name: 'Español', file: 'es.json' },
    ],
    defaultLocale: 'pt',
    lazy: true,
    langDir: 'locales',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_locale',
      fallbackLocale: 'pt',
    },
    compilation: {
      strictMessage: false,
      escapeHtml: false,
    },
  },

  tailwindcss: {
    config: {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            primary: {
              400: '#34d399',
              500: '#10b981',
              600: '#059669',
            },
          },
        },
      },
    },
  },

  vite: {
    resolve: {
      alias: {
        '#app-manifest': resolve('./app.manifest.json'),
      },
    },
  },

  compatibilityDate: '2024-04-03',
})
