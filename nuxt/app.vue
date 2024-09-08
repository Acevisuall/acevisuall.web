<template>
  <div class="flex min-h-screen flex-col">
    <NuxtLoadingIndicator color="#000000" />

    <SiteHeader class="mb-8" />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
