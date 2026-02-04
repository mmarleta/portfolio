export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  
  app: {
    head: {
      title: 'Marcelo Marleta | Full-Stack Developer',
      meta: [
        { name: 'description', content: 'Full-Stack Developer especializado em sistemas AI/LLM e arquiteturas escaláveis.' },
      ],
    }
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
            }
          }
        }
      }
    }
  },

  compatibilityDate: '2024-04-03'
})
