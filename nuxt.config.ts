// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  vite: {
    server: {
      open: true
    }
  },

  devServer: {
    port: 2333,
    host: '127.0.0.1'
  },

  modules: ['@unocss/nuxt']
})
