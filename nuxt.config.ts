export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  app: {
    head: {
      title: 'share with you'
    }
  },
  vite: {
    server: {
      open: true
    }
  },

  devServer: {
    port: 2333,
    host: '127.0.0.1'
  },

  modules: ['@unocss/nuxt', '@nuxt/content']
})
