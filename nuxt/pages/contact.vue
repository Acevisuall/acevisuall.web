<template>
  <div class="container mb-8 mt-10" v-gsap.timeline>
    <div class="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-32">
      <div>
        <h1
          class="leading-tighter mb-4 text-5xl font-extrabold uppercase md:text-7xl"
          v-gsap.add.delay-500.animateText.slow
        >
          {{ title }}
        </h1>
        <div v-if="introText" v-gsap.add.delay-700.from="{opacity: 0}">{{ introText }}</div>
      </div>
      <ContactUsForm v-gsap.add.delay-700.withPrevious.from="{opacity: 0}" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type {ContactUs} from '~/types/schema'
import * as contactGroq from '~/groq/contact'

const {data} = await useSanityQuery<ContactUs>(contactGroq.findAll(), {})

const title = computed(() => data.value?.title)
const introText = computed(() => data.value?.intro)

useHead({
  title: 'Contact Us',
})
</script>
