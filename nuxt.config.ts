export default defineNuxtConfig({
  compatibilityDate: '2024-04-04', // Fixes the WARN in your terminal
  modules: ['@nuxtjs/tailwindcss'],
  ssr: false,
  tailwindcss: {
    config: {
      darkMode: 'class',
    }
  },
  css: ['~/assets/css/main.css'],
  runtimeConfig: {
    public: {
      telegramBotToken: process.env.NUXT_TELEGRAM_BOT_TOKEN,
      telegramChatId: process.env.NUXT_TELEGRAM_CHAT_ID,
    }
  },
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined'
        },
        {
          rel: 'icon',
          type: 'image/png',
          href: '/logo_test.png'
        }
      ]
    }
  }
})