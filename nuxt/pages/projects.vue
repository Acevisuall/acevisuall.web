<template>
  <div class="container">
    <MasonryWall
      v-if="data?.length"
      :items="data"
      :ssr-columns="1"
      :column-width="[300]"
      :gap="16"
      :max-columns="3"
      class="mb-8"
    >
      <template #default="{item}">
        <FeedProject :project="item" />
      </template>
    </MasonryWall>
  </div>
</template>

<script setup lang="ts">
import type {QueryProject} from '~/types/project'
import * as projectGroq from '~/groq/project'

const {data} = await useSanityQuery<QueryProject[]>(projectGroq.findAllByCategory(), {
  category: 'portrait',
})
</script>
