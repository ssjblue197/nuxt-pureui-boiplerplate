<template>
  <div
    id="step"
    class="w-full text-white flex items-center justify-center relative bg-white pb-[60px] md:pb-[80px]"
  >
    <div class="main-content flex flex-col gap-10 lg:gap-[60px] items-center">
      <div
        class="flex flex-col text-center md:gap-2 text-text-primary items-center"
      >
        <span
          class="text-future text-xs md:text-sm lg:text-[28px] !leading-normal font-bold"
          data-aos="fade-up"
          data-aos-offset="0"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-bottom"
        >
          3 steps for using heatpress
        </span>
      </div>
      <div
        class="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 divide-border-base divide-y-[1px] md:divide-y-0 md:gap-10"
        data-aos="fade-up"
        data-aos-offset="0"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-bottom"
      >
        <div
          v-for="(i, index) in local.stepList"
          :key="index"
          class="flex-1 flex flex-col items-center gap-6 text-text-primary col-span-1"
        >
          <div
            class="w-full text-2xl text-center text-future font-medium relative"
          >
            <img
              :src="`${(nuxtApp.$environment as any)?.assetsCdn}/images/step-label-background.png`"
              alt="step-label-background"
              class="w-full h-auto"
            />
            <span class="center z-[1]">
              {{ i?.title }}
            </span>
          </div>
          <div class="w-full relative">
            <img
              :src="`${(nuxtApp.$environment as any)?.assetsCdn}/images/step-background.png`"
              alt="step-background"
              class="w-full h-auto"
            />
            <div
              class="w-full h-full absolute z-[1] flex flex-col justify-center items-center gap-4 top-0 left-0"
            >
              <img
                :src="i.image"
                :alt="`image-step-${i}`"
                class="h-auto mx-auto w-[70%]"
                loading="lazy"
              />

              <div
                class="w-[80%] text-ibm text-sm leading-5 font-medium tracking-wide uppercase text-text-note md:mt-2"
              >
                {{ i?.description }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const nuxtApp = useNuxtApp();

interface Local {
  stepList: Array<any>;
}

const local: Local = reactive({
  stepList: [
    {
      image: 'step1.webp',
      title: 'Place',
      description: `Position your DTF (Direct to Film) Transfer on top of your product`,
    },
    {
      image: 'step2.webp',
      title: 'Press',
      description: `Press with medium pressure for 15 seconds. We recommend 320°F / 160°C`,
    },
    {
      image: 'step3.webp',
      title: 'Peel',
      description: `Let transfer cool for at least 15 seconds and peel`,
    },
  ],
});
</script>

<style scoped></style>
