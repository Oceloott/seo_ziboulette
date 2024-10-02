// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: [
    '@/assets/scss/main.scss',  // Styles globaux appliqués à toute l'application
  ],

  // vite: {
  //   css: {
  //     preprocessorOptions: {
  //       scss: {
  //         additionalData: '@import \'@/assets/scss/data.scss\';'
  //       },
  //     },
  //   },
  // },
})
