<template>
  <div class="container">
    <FeedGrid v-if="data?.length" :items="data" />
  </div>
</template>

<script setup lang="ts">
import type {QueryProject} from '~/types/project'
import * as projectGroq from '~/groq/project'

const route = useRoute()

const {data} = await useSanityQuery<QueryProject[]>(projectGroq.findAllByCategory(), {
  category: route.params.category,
})

const categoryName = computed(() => {
  return data.value && data.value.length ? data.value[0].category.name : 'Projects'
})

useHead({
  title: categoryName.value,
})
</script>
