<template>
  <header>
    <div class="container">
      <div class="flex items-center border-b-4 border-neutral-200 py-6">
        <div class="text-2xl font-extrabold uppercase md:text-2xl">
          <NuxtLink to="/">Ace Visuall</NuxtLink>
        </div>

        <button class="ml-auto text-4xl md:hidden" @click="toggleMenu"><Icon name="solar:hamburger-menu-linear" /></button>
        <nav class="ml-auto hidden md:block">
          <ul class="flex items-center gap-5 text-sm font-semibold">
            <li v-for="{slug, name} in navBarItems" :key="`nav.bar.item.${slug.current}`">
              <NuxtLink
                class="text-black hover:underline [&.router-link-active]:text-gray-400 tracking-wide"
                :to="`/${slug.current}`"
                >{{ name }}</NuxtLink
              >
            </li>
            <li v-for="{name, slug} in staticItems" :key="`nav.bar.item.${slug.current}`">
              <NuxtLink
                class="text-black hover:underline [&.router-link-active]:text-gray-400 tracking-wide"
                :to="`/${slug.current}`"
                >{{ name }}</NuxtLink
              >
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
  <Teleport to="body">
    <Transition name="slide">
      <nav v-show="openMenu" class="z-50 fixed h-full bg-white top-0 right-0 shadow-lg w-2/3 md:hidden block">
        <header class="md:hidden px-8 pt-4 text-right">
          <button class="text-4xl" @click="toggleMenu"><Icon name="material-symbols-light:close" /></button>
        </header>
        <ul class="flex flex-col gap-6 text-lg max-md:p-8 font-semibold">
          <li v-for="{slug, name} in navBarItems" :key="`nav.bar.item.${slug.current}`">
            <NuxtLink
              @click="toggleMenu"
              class="text-black hover:underline [&.router-link-active]:text-gray-400 tracking-wide"
              :to="`/${slug.current}`"
              >{{ name }}</NuxtLink
            >
          </li>
          <li v-for="{name, slug} in staticItems" :key="`nav.bar.item.${slug.current}`">
            <NuxtLink
              @click="toggleMenu"
              class="text-black hover:underline [&.router-link-active]:text-gray-400 tracking-wide"
              :to="`/${slug.current}`"
              >{{ name }}</NuxtLink
            >
          </li>
        </ul>
      </nav>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { Teleport } from 'vue'
import * as siteSettingsQuery from '~/groq/siteSettings'
import type {SiteSettingsQuery} from '~/types/siteSettings'

const sanity = useSanity()

const openMenu = ref(false)

const toggleMenu = () => {
  openMenu.value = !openMenu.value
}

const {data: settings} = await useAsyncData<SiteSettingsQuery>('site-settings', () =>
  sanity.fetch(siteSettingsQuery.findAll()),
)

const navBarItems = computed(() => settings.value?.navBarItems)

const staticItems = [
  {name: 'About', slug: {current: 'about'}},
  {name: 'Contact', slug: {current: 'contact'}},
]
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease-out;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}
</style>
