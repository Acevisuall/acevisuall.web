<template>
  <div v-gsap.timeline class="container mb-8">
    <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
      <figure v-gsap.add.delay-500.from="{opacity: 0}">
        <NuxtImg v-if="heroImage" :src="heroImage.asset?._ref" loading="eager" />
      </figure>
      <div class="flex flex-col justify-center">
        <h1
          class="leading-tighter mb-4 text-5xl font-extrabold uppercase md:text-8xl"
          v-gsap.add.animateText.slow
        >
          {{ title }}
        </h1>
        <div v-if="introText" v-gsap.add.delay-500.from="{opacity: 0}">{{ introText }}</div>
        <div v-if="ctaText && ctaLink" class="mt-16">
          <NuxtLink
            :to="ctaLink"
            class="rounded-full bg-black px-16 py-4 text-base uppercase text-white hover:bg-gray-800"
            >{{ ctaText }}</NuxtLink
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type {About} from '~/types/schema'
import * as aboutGroq from '~/groq/about'

const {data} = await useSanityQuery<About>(aboutGroq.findAll(), {})

const heroImage = computed(() => data.value?.heroImage)
const title = computed(() => data.value?.title)
const introText = computed(() => data.value?.intro)
const ctaText = computed(() => data.value?.ctaText)
const ctaLink = computed(() => data.value?.ctaLink)

useHead({
  title: 'About Us',
})
</script>
