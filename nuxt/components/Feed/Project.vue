<template>
  <div class="group relative">
    <NuxtLink :to="permalink">
      <NuxtImg
        :src="featuredImage?.asset?._ref"
        fit="cover"
        :modifiers="{
          hotspot: featuredImage?.hotspot,
          crop: featuredImage?.crop,
        }"
        sizes="100vw sm:50vw md:400px"
        class="w-full"
      />
    </NuxtLink>
    <div
      class="pointer-events-none absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
    >
      <p class="text-xl font-semibold uppercase text-white">{{ title }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type {QueryProject} from '~/types/project'

const props = defineProps<{
  project: QueryProject
}>()

const {title, featuredImage, permalink} = useProject(props.project)
</script>
