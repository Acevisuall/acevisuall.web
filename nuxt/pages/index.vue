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
import * as project from '~/groq/project'

const {data} = useSanityQuery<QueryProject[]>(project.findAllByCategory(), {
  category: 'portraits',
})
</script>
