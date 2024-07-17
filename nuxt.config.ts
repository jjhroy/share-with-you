export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/device',
    '@nuxt/image',
    'nuxt-lodash',
    '@pinia/nuxt',
    '@unocss/nuxt',
    '@nuxt/icon',
  ],
  // tailwindcss: {
  //   config: {
  //     corePlugins: {
  //       preflight: false,
  //     },
  //   },
  // },
});
