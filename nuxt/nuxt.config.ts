import tailwindcss from '@tailwindcss/vite'

const sanityConfig = {
  projectId: 'yj5ogbk2',
  // dataset: process.env.NODE_ENV !== 'production' ? 'development' : 'production',
  dataset: 'production',
}

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: {enabled: true},
  css: ['~/assets/css/main.css', 'video.js/dist/video-js.css'],
  modules: [
    '@nuxtjs/sanity',
    '@nuxt/eslint',
    'nuxt-swiper',
    '@nuxt/image',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@formkit/nuxt',
  ],
  sanity: sanityConfig,
  fonts: {
    defaults: {
      weights: [400, 500, 600, 800],
    },
  },
  image: {
    provider: 'sanity',
    sanity: sanityConfig,
  },
  vite: {
    plugins: [tailwindcss()],
  },
})
