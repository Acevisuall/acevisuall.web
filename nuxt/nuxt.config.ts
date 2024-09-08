// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: {enabled: true},
  modules: ['@nuxtjs/sanity', '@nuxtjs/tailwindcss', '@nuxt/eslint', 'nuxt-swiper'],
  sanity: {
    projectId: 'yj5ogbk2',
    dataset: process.env.NODE_ENV !== 'production' ? 'development' : 'production',
  },
  tailwindcss: {
    config: {
      theme: {
        container: {
          center: true,
          padding: '20px',
        },
      },
    },
  },
})
