<template>
  <div class="flex min-h-screen flex-col">
    <NuxtLoadingIndicator color="#000000" />

    <SiteHeader class="mb-8" />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Ace Visuall',
  titleTemplate: '%s | Ace Visuall',
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { hid: 'description', name: 'description', content: 'Ace Visuall is a creative agency specializing in visual storytelling and brand identity.' },
  ],
})
</script>
