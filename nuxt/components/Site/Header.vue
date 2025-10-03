<template>
  <header v-bind="$attrs">
    <div class="container">
      <div class="flex items-center border-b-4 border-neutral-200 py-6">
        <div class="text-2xl font-extrabold uppercase md:text-2xl">
          <NuxtLink to="/">Ace Visuall</NuxtLink>
        </div>

        <button class="ml-auto text-4xl md:hidden" @click="toggleMenu">
          <Icon name="solar:hamburger-menu-linear" />
        </button>
        <nav class="ml-auto hidden md:block">
          <ul class="flex items-center gap-5 text-sm font-semibold">
            <li v-for="{slug, name} in navBarItems" :key="`nav.bar.item.${slug.current}`">
              <NuxtLink
                class="tracking-wide text-black hover:underline [&.router-link-active]:text-gray-400"
                :to="`/${slug.current}`"
                >{{ name }}</NuxtLink
              >
            </li>
            <li v-for="{name, slug} in staticItems" :key="`nav.bar.item.${slug.current}`">
              <NuxtLink
                class="tracking-wide text-black hover:underline [&.router-link-active]:text-gray-400"
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
      <nav
        v-show="openMenu"
        class="fixed right-0 top-0 z-50 block h-full w-2/3 bg-white shadow-lg md:hidden"
      >
        <header class="px-8 pt-4 text-right md:hidden">
          <button class="text-4xl" @click="toggleMenu">
            <ClientOnly>
              <Icon name="material-symbols-light:close" />
            </ClientOnly>
          </button>
        </header>
        <ul class="flex flex-col gap-6 text-lg font-semibold max-md:p-8">
          <li v-for="{slug, name} in navBarItems" :key="`nav.bar.item.${slug.current}`">
            <NuxtLink
              @click="toggleMenu"
              class="tracking-wide text-black hover:underline [&.router-link-active]:text-gray-400"
              :to="`/${slug.current}`"
              >{{ name }}</NuxtLink
            >
          </li>
          <li v-for="{name, slug} in staticItems" :key="`nav.bar.item.${slug.current}`">
            <NuxtLink
              @click="toggleMenu"
              class="tracking-wide text-black hover:underline [&.router-link-active]:text-gray-400"
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
import {Teleport} from 'vue'
import * as siteSettingsQuery from '~/groq/siteSettings'
import type {SiteSettingsQuery} from '~/types/siteSettings'

defineOptions({
  inheritAttrs: false,
})

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
