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
          <SliderVideo v-if="item._type === 'video'" :item="item" />
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>

<script setup lang="ts">
import * as projectGroq from '~/groq/project'
import type {QueryProject} from '~/types/project'

const route = useRoute()

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
