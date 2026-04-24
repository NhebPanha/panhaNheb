export default defineNuxtConfig({
  compatibilityDate: '2024-04-04', // Fixes the WARN in your terminal
  modules: ['@nuxtjs/tailwindcss'],
  tailwindcss: {
    config: {
      darkMode: 'class',
    }
  },
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined'
        },
        {
          rel: 'icon',
          type: 'image/png',   // ✅ add this
          href: '/logo_test.png'
        }
      ]
    }
  }
})