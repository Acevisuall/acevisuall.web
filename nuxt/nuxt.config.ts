const sanityConfig = {
  projectId: 'yj5ogbk2',
  // dataset: process.env.NODE_ENV !== 'production' ? 'development' : 'production',
  dataset: 'development',
}

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: {enabled: true},
  css: ['video.js/dist/video-js.css'],
  modules: [
    '@nuxtjs/sanity',
    '@nuxtjs/tailwindcss',
    '@nuxt/eslint',
    'nuxt-swiper',
    '@nuxt/image',
    '@nuxt/fonts',
    '@nuxt/icon',
  ],
  sanity: sanityConfig,
  tailwindcss: {
    config: {
      theme: {
        container: {
          center: true,
          padding: '20px',
        },
        extend: {
          fontFamily: {
            poppings: ['"Poppins"', 'sans-serif'],
          },
        },
      },
    },
  },
  fonts: {
    defaults: {
      weights: [400, 500, 600],
    },
  },
  image: {
    provider: 'sanity',
    sanity: sanityConfig,
  },
})
