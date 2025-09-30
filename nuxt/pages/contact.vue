<template>
  <div class="container mt-10 mb-8">
    <div class="grid grid-cols-2 gap-32">
      <div>
        <h1 class="leading-tighter mb-4 text-7xl font-extrabold uppercase">{{ title }}</h1>
        <div v-if="introText">{{ introText }}</div>
      </div>
      <ContactUsForm />
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
