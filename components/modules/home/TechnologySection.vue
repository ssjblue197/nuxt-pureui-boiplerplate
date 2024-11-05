<template>
  <div
    class="w-full flex items-center justify-center relative bg-gray-iron-950 py-[60px] md:py-[80px]"
    id="technology"
  >
    <div
      class="w-full h-full absolute top-0 left-0 bg-[url('https://d1dif2dtw17xb9.cloudfront.net/images/technology-background.webp')] bg-center bg-contain bg-no-repeat opacity-[0.1]"
    ></div>
    <div
      class="main-content lg:h-screen flex flex-col items-center z-[1] gap-6 xl:gap-10 2xl:gap-20"
    >
      <div
        class="text-future text-xs md:text-xl lg:text-[32px] !leading-normal font-normal text-gray-iron-25 whitespace-nowrap"
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
        PRinting Technologies
      </div>
      <div
        class="w-full md:h-[550px] lg:h-[600px] 2xl:md:h-[700px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-10 grid-rows-2 gap-4"
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
          class="flex bg-[rgba(252,252,252,0.05)] border border-gray-iron-700 overflow-hidden"
          tabindex="0"
          v-for="(i, index) in local.blockList"
          :key="index"
          :class="twMerge(i?.classes)"
        >
          <div class="relative" :class="twMerge(i?.imgClass)">
            <p-lazy-image
              imgClass="w-full h-full object-cover"
              :imgSrc="i?.image"
              alt="img"
            ></p-lazy-image>
          </div>
          <div
            class="flex flex-col p-2 gap-2 2xl:p-4 2xl:gap-4"
            :class="twMerge(i?.textClass)"
          >
            <div
              class="text-future text-sm 2xl:text-base font-normal text-gray-iron-25"
            >
              {{ i?.title }}
            </div>
            <div
              class="text-ibm font-medium text-gray-iron-300 text-sm 2xl:text-base"
            >
              {{ i?.content }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { vAutoAnimate } from '@formkit/auto-animate';
import { twMerge } from 'tailwind-merge';

interface Technology {
  title?: string;
  content?: string;
  image?: string;
  classes?: string;
  imgClass?: string;
  textClass?: string;
}
interface Local {
  blockList: Array<Technology>;
}
const local: Local = reactive({
  currentIndex: 0,
  blockList: [
    {
      title: 'DTG printiNG',
      content:
        'We print intricate designs directly onto fabric with vibrant colors, perfect for small orders and detailed artwork.',
      image: 'dtg.webp',
      classes:
        'flex-col col-span-1 md:col-start-1 md:col-span-3 md:row-start-1 md:row-span-2',
      imgClass: 'w-full object-contain',
      textClass: 'w-full',
    },
    {
      title: 'DTF printing',
      content:
        'Transferring designs onto various surfaces using heat, we ensure durable prints on textiles, plastics, and more.',
      image: 'dtf.webp',
      classes:
        'flex-col-reverse justify-between col-span-1 md:col-start-4 md:col-span-4 md:row-start-1 md:row-span-1',
      imgClass: 'w-[180%] md:w-full  object-contain',
      textClass: 'w-full',
    },
    {
      title: 'UV LED',
      content:
        'Rapidly curing ink with UV light, we produce sharp and vibrant prints on materials like plastic and metal, perfect for signage and promotional items.',
      image: 'uv.webp',
      classes:
        'flex-row col-span-1 md:col-start-8 md:col-span-3 md:row-start-1 md:row-span-1',
      imgClass: 'h-full object-contain',
      textClass: 'w-[51%]',
    },
    {
      title: 'Screen PRinting',
      content:
        'With ink pushed through a stencil onto the printing surface, we deliver bold and durable prints, ideal for large orders.',
      image: 'screen.webp',
      classes: 'flex-row-reverse col-span-1 md:col-span-3 md:row-span-1',
      imgClass: 'h-full object-contain',
      textClass: 'basis-3/5',
    },
    {
      title: 'SUBLIMATION PRINTING',
      content:
        'Heat-transfer dye onto polyester fabric for vivid and long-lasting designs, offering a wide range of colors and durability.',
      image: 'sublimation.webp',
      classes: 'flex-col col-span-1 md:col-span-2 md:row-span-1',
      imgClass: 'w-full object-contain',
      textClass: 'w-full',
    },
    {
      title: 'Embroidery',
      content:
        'Elevating designs with stitched logos or artwork, our embroidery service adds a classy touch to garments and textiles.',
      image: 'embroidery.webp',
      classes: 'flex-col-reverse col-span-1 md:col-span-2 md:row-span-1',
      imgClass: 'w-full object-contain',
      textClass: 'w-full',
    },
  ],
});

onMounted(() => {});

onBeforeUnmount(() => {});
</script>

<style scoped></style>
