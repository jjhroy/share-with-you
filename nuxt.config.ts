export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  app: {
    head: {
      title: 'share with you',
    },
  },

  devServer: {
    port: 2333,
    host: '0.0.0.0',
  },

  css: ['@unocss/reset/tailwind.css', './assets/css/global.css'],

  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@nuxt/content',
    '@nuxt/icon',
    'nuxt-radash',
    [
      '@pinia/nuxt',
      {
        autoImports: [
          // 自动引入 `defineStore()`
          'defineStore',
          // 自动引入 `defineStore()` 并重命名为 `definePiniaStore()`
          ['defineStore', 'definePiniaStore'],
        ],
      },
    ],
    'pinia-plugin-persistedstate/nuxt',
  ],
});
