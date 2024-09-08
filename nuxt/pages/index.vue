<template>
  <div class="container">
    Hello world

    <ul>
      <li v-for="project in data" :key="`project-${project._id}`">
        {{ project.title }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import type {Project} from '~/types/schema'
import * as project from '~/groq/project'

const {data} = useSanityQuery<Project[]>(project.findAllByCategory(), {
  category: 'portraits',
})
</script>
