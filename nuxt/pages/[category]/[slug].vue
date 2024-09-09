<template>
  <div>
    <div class="container mb-8">
      <h1 class="text-2xl font-semibold uppercase">{{ title }}</h1>
    </div>

    <div class="container">
      <Swiper
        :slides-per-view="1"
        :space-between="20"
        :modules="[SwiperNavigation, SwiperPagination, SwiperFreeMode, SwiperMousewheel]"
        :navigation="true"
        :pagination="{
          dynamicBullets: true,
        }"
        :free-mode="{
          enabled: true,
        }"
        :mousewheel="{
          forceToAxis: true,
        }"
        :breakpoints="{
          768: {
            slidesPerView: 'auto',
          },
        }"
        class="opacity-0 transition-opacity duration-200 [&.swiper-initialized]:opacity-100"
      >
        <SwiperSlide v-for="(item, index) in gallery" :key="`gallery.item.${index}`" class="slide">
          <NuxtImg v-if="item._type === 'image'" class="h-full" :src="item.asset?._ref" />
          <SanityFile
            v-if="item._type === 'video' && item.file.asset"
            :asset-id="item.file.asset?._ref"
          >
            <template #default="{src}">
              <video
                class="h-full"
                :src="src"
                :placeholder="urlFor(item.placeholder.asset?._ref)"
                playsinline="true"
                muted="false"
                autoplay="true"
                loop="true"
              />
            </template>
          </SanityFile>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>

<script setup lang="ts">
import * as projectGroq from '~/groq/project'
import type {QueryProject} from '~/types/project'
import type {SanityClientLike} from '@sanity/image-url/lib/types/types'
import imageUrlBuilder from '@sanity/image-url'

const route = useRoute()
const builder = imageUrlBuilder(useSanity().config as SanityClientLike)

const {data} = await useSanityQuery<QueryProject>(projectGroq.findOneByCategoryAndSlug(), {
  category: route.params.category,
  slug: route.params.slug,
})

if (!data.value) {
  throw showError({
    status: 404,
    message: 'Project not found',
  })
}

const {title, gallery} = useProject(data.value)

const urlFor = (source?: string): string | undefined => {
  return source ? builder.image(source).auto('format').url() : undefined
}
</script>

<style scoped>
.swiper {
  --swiper-navigation-color: #fff;
  --swiper-navigation-size: 40px;
  --swiper-pagination-color: #000;
}

.swiper :deep(.swiper-pagination) {
  @apply static mx-auto mt-3 transform-none;
}

.slide {
  @apply flex h-auto items-center md:h-[400px] md:w-auto;
}
</style>
