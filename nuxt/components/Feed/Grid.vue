<template>
  <MasonryWall
    :items="items"
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
</template>

<script setup lang="ts">
import type { QueryProject } from '~/types/project';

const props = defineProps<{
  items: QueryProject[]
}>()

const { items } = toRefs(props)
</script>
