<template>
  <div
    class="w-full flex items-center justify-center relative bg-gray-iron-950 py-[60px] md:py-[80px]"
    id="technology"
  >
    <img
      :src="`${(nuxtApp.$environment as any)?.assetsCdn}/images/solution-background.webp`"
      alt="img"
      class="absolute bottom-0 left-0 w-full"
    />
    <div
      class="main-content lg:h-screen flex flex-col items-center z-[1] gap-6 xl:gap-10 2xl:gap-20"
    >
      <div
        class="text-future text-xs md:text-xl lg:text-[32px] !leading-normal font-normal text-gray-iron-25 text-center"
        data-aos="fade-up"
        data-aos-offset="0"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-bottom"
        tabindex="0"
      >
        Comprehensive Printing Solutions
      </div>
      <div
        class="w-full grid grid-cols-2 lg:grid-cols-4 gap-4"
        v-auto-animate="{ duration: 300 }"
        data-aos="zoom-in"
        data-aos-offset="0"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-bottom"
      >
        <div
          v-for="(i, index) in local.solutionList"
          :key="index"
          class="bg-[rgba(252,252,252,0.05)] border border-gray-iron-700 overflow-hidden flex flex-col items-start p-4 min-h-[240px] 2xl:min-h-[300px] md:h-auto gap-3 md:gap-4"
          tabindex="0"
        >
          <span class="p-1 border border-gray-iron-700 text-gray-iron-25">
            <p-icon :name="String(i?.icon)" width="24px" height="24px"></p-icon>
          </span>
          <div
            class="w-full text-future text-[10px] md:text-sm 2xl:text-base font-normal text-gray-iron-25"
          >
            {{ i?.title }}
          </div>
          <div
            class="w-full text-ibm text-sm 2xl:text-base font-medium text-gray-iron-300"
          >
            {{ i?.content }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { vAutoAnimate } from '@formkit/auto-animate';
import { twMerge } from 'tailwind-merge';
const nuxtApp = useNuxtApp();

interface Solution {
  title?: string;
  content?: string;
  icon?: string;
}
interface Local {
  solutionList: Array<Solution>;
}
const local: Local = reactive({
  currentIndex: 0,
  solutionList: [
    {
      title: 'One-stop-shop to e-commerce',
      content: 'Everything you need here.',
      icon: 'shopping-cart',
    },
    {
      title: 'FLEXIBLE CAPACITY',
      content: 'From one to thousands per day.',
      icon: 'line-chart-up',
    },
    {
      title: 'WIDE VARIETY OF STYLES',
      content:
        'Discover endless possibilites with our wide range of styles for your custom prints.',
      icon: 'line-chart-up',
    },
    {
      title: 'TESTED & PROVEN QUALITY',
      content: 'Trusted by top licensees',
      icon: 'award',
    },
    {
      title: 'ULTRA FAST SPEED',
      content: 'Ships within 1 business day or less.',
      icon: 'rocket',
    },
    {
      title: 'PRODUCTION DAYS',
      content:
        'Most orders are shipped within 1 - 8 business days after the order is submitted',
      icon: 'clock',
    },
    {
      title: 'MULTIPLE LOCATIONS',
      content:
        'Conveniently serving you in multiple locations so you can get your custom prints anytime, anywhere',
      icon: 'globe',
    },
    {
      title: 'PRICE COMPETITIVE',
      content:
        'Top-quality custom printing at unbeatable prices - we make it easy to get the best for less',
      icon: 'dollar',
    },
  ],
});

onMounted(() => {});

onBeforeUnmount(() => {});
</script>

<style scoped></style>
