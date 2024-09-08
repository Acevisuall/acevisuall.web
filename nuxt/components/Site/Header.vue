<template>
  <header>
    <div class="container">
      <div class="flex items-center border-b-4 border-neutral-200 py-6 md:px-8 md:py-11">
        <div class="text-2xl font-semibold uppercase underline md:text-4xl">
          <NuxtLink to="/">Ace Visuall</NuxtLink>
        </div>

        <nav class="ml-auto max-md:hidden">
          <ul class="flex items-center gap-5 text-sm font-semibold uppercase">
            <li class="text-gray-400">Category 1</li>
            <li>Category 2</li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts"></script>
