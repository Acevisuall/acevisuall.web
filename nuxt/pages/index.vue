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

const query = groq`*[_type == 'project']`
const {data} = useSanityQuery<Project[]>(query, {topic: 'News'})
</script>
