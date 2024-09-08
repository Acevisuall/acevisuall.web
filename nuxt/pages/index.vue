<template>
  <div class="container">
    <ul class="flex flex-wrap gap-5">
      <li v-for="project in data" :key="`project-${project._id}`">
        <FeedProject :project="project" />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import type {QueryProject} from '~/types/project'
import * as projectGroq from '~/groq/project'

const {data} = await useSanityQuery<QueryProject[]>(projectGroq.findAllByCategory(), {
  category: 'portraits',
})
</script>
