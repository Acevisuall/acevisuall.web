<template>
  <div class="container mb-8">
    <figure
      class="relative after:absolute after:inset-0 after:bg-black after:opacity-40 after:content-['']"
    >
      <NuxtImg v-if="heroImage" :src="heroImage.asset?._ref" />

      <h1
        class="absolute left-1/2 top-1/2 z-20 w-full -translate-x-1/2 -translate-y-1/2 px-8 text-center text-5xl font-extrabold uppercase text-white"
      >
        {{ heroText }}
      </h1>
    </figure>
  </div>
</template>

<script setup lang="ts">
import type {Homepage} from '~/types/schema'
import * as homepageGroq from '~/groq/homepage'

const {data} = await useSanityQuery<Homepage>(homepageGroq.findAll(), {})

const heroImage = computed(() => data.value?.heroImage)
const heroText = computed(() => data.value?.heroText)
const introText = computed(() => data.value?.intro)
</script>
