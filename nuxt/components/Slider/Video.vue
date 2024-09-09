<template>
  <div class="relative h-full">
    <NuxtImg class="h-full" :src="item.placeholder.asset?._ref" />
    <div class="overlay absolute inset-0 flex items-center justify-center">
      <button @click="open = true">
        <Icon name="octicon:play-24" class="text-6xl hover:opacity-60" />
      </button>
    </div>

    <Teleport to="body">
      <div
        v-if="open"
        class="overlay fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60"
        @click="open = false"
      >
        <div class="w-full max-w-[80%]" @click.stop>
          <SanityFile v-if="item.file.asset" :asset-id="item.file.asset?._ref">
            <template #default="{src}">
              <VideoPlayer
                class="vjs-16-9"
                :src="src"
                :poster="urlFor(item.placeholder.asset?._ref)"
                controls
                :autoplay="true"
                :volume="0.6"
                :fluid="true"
                :playsline="true"
              />
            </template>
          </SanityFile>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import type {GalleryVideo} from '~/types/galleryVideo'
import type {SanityClientLike} from '@sanity/image-url/lib/types/types'
import imageUrlBuilder from '@sanity/image-url'

defineProps<{
  item: GalleryVideo
}>()

const open = ref(false)

const builder = imageUrlBuilder(useSanity().config as SanityClientLike)

const urlFor = (source?: string): string | undefined => {
  return source ? builder.image(source).auto('format').url() : undefined
}
</script>
