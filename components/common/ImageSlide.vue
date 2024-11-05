<template>
  <Swiper
    :modules="[SwiperPagination, SwiperAutoplay, SwiperNavigation, SwiperA11y]"
    :navigation="{
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }"
    :centered-slides="true"
    :autoplay="{
      delay: 4000,
      disableOnInteraction: false,
    }"
    :loop="true"
    :slides-per-view="1"
    :pagination="{
      clickable: true,
      enabled: true,
      bulletActiveClass: 'swiper-pagination-bullet-active',
      renderBullet: renderBullet,
    }"
  >
    <SwiperSlide v-for="(slide, idx) in props?.items" :key="idx">
      <img
        :src="`${slide}`"
        alt="logo"
        class="h-full w-full object-cover object-center"
      />
    </SwiperSlide>
    <span
      name="swiper-button-next"
      class="swiper-button-next after:hidden !w-10 !h-10 rounded-full bg-white border border-divide-base shadow-md active:shadow-sm p-2 cursor-pointer"
    >
      <p-icon
        name="chevron-right"
        width="24px"
        height="24px"
        class="!text-text-active"
      ></p-icon>
    </span>
    <span
      name="swiper-button-prev"
      class="swiper-button-prev after:hidden !w-10 !h-10 rounded-full bg-white border border-divide-base shadow-md active:shadow-sm p-2 cursor-pointer"
    >
      <p-icon
        name="chevron-left"
        width="24px"
        height="24px"
        class="!text-text-active"
      ></p-icon>
    </span>
  </Swiper>
</template>

<script setup lang="ts">
interface Props {
  items?: string[];
  square?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  items: undefined,
  square: false,
});
const renderBullet = (index: number, className: string) => {
  return '<span class="' + className + ' !bg-white"></span>';
};
</script>

<style scoped></style>
