<template>
  <div
    class="shrink-0 flex flex-col items-center justify-center rounded-lg px-6 pt-8 pb-12 gap-3 md:gap-4 relative bg-[url('https://d1dif2dtw17xb9.cloudfront.net/images/slider-item-background.webp')] bg-center bg-contain bg-no-repeat cursor-pointer select-none"
  >
    <img
      :src="props.data?.image"
      alt="slider-1"
      class="w-[calc(100%-16px)] sm:w-[calc(100%-32px)] lg:w-[calc(100%-48px)] h-auto"
    />
    <div
      class="w-full px-2 sm:px-4 lg:px-6 text-start text-[8px] md:text-xs lg:text-sm text-future text-icon-primary"
    >
      {{ props?.data?.title }}
    </div>
    <div
      class="w-full px-2 sm:px-4 lg:px-6 text-start text-xs md:text-sm lg:text-base leading-4 lg:leading-6 font-light lg:font-medium text-icon-secondary"
    >
      {{ props?.data?.content }}
    </div>
  </div>
</template>

<script setup lang="ts">
interface CommitmentSlide {
  title?: string;
  content?: string;
  image?: string;
}
interface Props {
  data?: CommitmentSlide;
}

const props = withDefaults(defineProps<Props>(), {
  data: undefined,
});
</script>

<style scoped></style>
