<template>
  <header>
    <div class="container">
      <div class="flex items-center border-b-4 border-neutral-200 py-6">
        <div class="text-2xl font-extrabold uppercase md:text-2xl">
          <NuxtLink to="/">Ace Visuall</NuxtLink>
        </div>

        <nav class="ml-auto max-md:hidden">
          <ul class="flex items-center gap-5 text-sm font-semibold">
            <li v-for="{slug, name} in navBarItems" :key="`nav.bar.item.${slug.current}`">
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
</template>

<script setup lang="ts">
import * as siteSettingsQuery from '~/groq/siteSettings'
import type {SiteSettingsQuery} from '~/types/siteSettings'

const sanity = useSanity()

const {data: settings} = await useAsyncData<SiteSettingsQuery>('site-settings', () =>
  sanity.fetch(siteSettingsQuery.findAll()),
)

const navBarItems = computed(() => settings.value?.navBarItems)
</script>
