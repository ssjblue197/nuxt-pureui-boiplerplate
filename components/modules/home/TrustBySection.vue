<template>
  <div
    class="w-full flex items-center justify-center relative bg-gray-iron-950 py-[60px]"
    id="trusted"
  >
    <div
      class="main-content max-w-[1000px] min-h-screen flex flex-col items-center z-[1] gap-20"
    >
      <div
        class="flex flex-col items-center"
        data-aos="fade-up"
        data-aos-offset="0"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-bottom"
      >
        <img
          :src="`${(nuxtApp.$environment as any)?.assetsCdn}/images/trust-background.webp`"
          alt="trust-background"
          class="w-auto lg:h-[500px]"
        />
        <span
          class="text-future text-xs md:text-xl lg:text-[32px] !leading-normal font-normal text-gray-iron-25 whitespace-nowrap"
          tabindex="0"
        >
          Trusted by
        </span>
      </div>
      <div
        class="w-full grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-8 lg:gap-4 pb-12"
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
          v-for="(i, index) in local.trustedList"
          :key="index"
          class="h-[112px] flex items-center justify-center col-span-1 cursor-pointer hover:scale-110 duration-300 transition-all"
          tabindex="0"
        >
          <p-lazy-image
            imgClass="w-full h-full object-contain"
            :imgSrc="`${(nuxtApp.$environment as any)?.assetsCdn}${i?.img}`"
            alt="img"
          ></p-lazy-image>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const nuxtApp = useNuxtApp();

interface Trusted {
  img?: string;
}
interface Local {
  trustedList: Array<Trusted>;
}
const local: Local = reactive({
  currentIndex: 0,
  trustedList: [
    {
      img: `/public/wb.png`,
    },
    {
      img: `/public/sega.png`,
    },
    {
      img: `/public/hbo.png`,
    },
    {
      img: `/public/century.png`,
    },
    {
      img: `/public/paramount.png`,
    },
    {
      img: `/public/metro.png`,
    },
    {
      img: `/public/nbcu.png`,
    },
    {
      img: `/public/cn.png`,
    },
    {
      img: `/public/dc.png`,
    },
    {
      img: `/public/blum.png`,
    },
    {
      img: `/public/sony.png`,
    },
    {
      img: `/public/more.png`,
    },
  ],
});
</script>

<style scoped></style>
