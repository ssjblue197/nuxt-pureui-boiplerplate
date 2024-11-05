<template>
  <div
    id="introduction"
    class="flex flex-col w-full items-center relative bg-gray-iron-950"
  >
    <div
      class="w-full h-full absolute top-0 left-0 bg-[url('https://d1dif2dtw17xb9.cloudfront.net/images/intro-background.webp')] bg-center bg-cover bg-no-repeat opacity-[0.06]"
    ></div>
    <div class="w-full text-white flex items-center justify-center relative">
      <div
        class="main-content h-screen text-white flex justify-between items-center z-[2] py-[160px] pb-[60px] md:py-[240px] gap-4 relative"
      >
        <div
          class="w-full flex flex-col md:flex-row items-center justify-between"
        >
          <div
            class="flex-1 z-[1] flex flex-col gap-6 relative top-16 md:-top-6"
          >
            <span
              class="text-gray-iron-25 !text-future font-normal text-xl sm:text-2xl md:text-[32px] lg:text-[40px] leading-[40px] md:!leading-[56px] lg:!leading-[60px] max-w-[600px]"
              data-aos="fade-right"
              tabindex="0"
            >
              E-commerce Made Easy
            </span>
            <div
              class="text-ibm text-gray-iron-200 font-medium text-sm md:text-base lg:text-[24px] leading-6 lg:leading-8 w-full max-w-[600px]"
              data-aos="fade-right"
              tabindex="0"
            >
              SwiftPOD is your gateway to rapid fast fulfillment minus the steep
              investment.
            </div>

            <div
              class="flex flex-col items-center w-full md:w-auto md:flex-row gap-5 justify-start mt-4"
              data-aos="fade-up"
            >
              <nuxt-link to="/catalog" class="text-center">
                <p-button
                  variant="primary"
                  outline
                  class="!bg-gray-iron-25 !text-gray-iron-950 border border-gray-iron-300 text-base leading-6 !font-medium h-12 w-[calc(100vw-60px)] md:w-[200px] uppercase"
                >
                  <span class="flex items gap-1">
                    <p-icon
                      name="tag"
                      class="!text-gray-iron-950"
                      width="24px"
                      height="24px"
                    ></p-icon>
                    VIEW CATALOGS
                  </span>
                </p-button>
              </nuxt-link>
              <nuxt-link to="/services" class="text-center">
                <p-button
                  variant="primary"
                  outline
                  class="!bg-transparent !border-gray-iron-100 !text-gray-iron-25 text-base leading-6 !font-medium h-12 w-[calc(100vw-60px)] md:w-[188px] uppercase"
                >
                  <span class="flex items gap-1">
                    <p-icon
                      name="layer"
                      class="text-gray-iron-25"
                      width="24px"
                      height="24px"
                    ></p-icon>
                    OUR SERVICES
                  </span>
                </p-button>
              </nuxt-link>
            </div>
          </div>
          <div
            class="flex-1 flex justify-center absolute md:relative left-[50%] md:left-0 z-0 opacity-80 lg:opacity-100 top-[40px] translate-y-[-50%] lg:translate-y-0"
            data-aos="fade-left"
          >
            <IntroStackImage />
          </div>
        </div>
      </div>
    </div>
    <div class="w-full flex justify-center absolute z-[10] bottom-12 left-0">
      <div
        class="w-[100px] aspect-square rounded-full border border-gray-iron-700 cursor-pointer hover:animate-suspended !duration-1000 relative"
        @click="scrollToElement('#about-us')"
      >
        <img
          :src="`${(nuxtApp.$environment as any)?.assetsCdn}/images/curve-text.png`"
          alt="curve-text"
          class="w-full h-full object-cover cursor-pointer animate-slow-spin !duration-5000"
        />
        <div
          class="center w-[calc(100%-40px)] aspect-square rounded-full border border-gray-iron-700"
        >
          <span class="center">
            <p-icon name="arrow-down" width="24px" height="24px"></p-icon>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { $AOS } = useNuxtApp();
const nuxtApp = useNuxtApp();

const handleAnimate = () => {
  $AOS.init();
};

const scrollToElement = (query: string) => {
  setTimeout(() => {
    const element: any = $(query);
    $('#main-layout')?.scrollTo({
      top: element?.offsetTop + window.innerHeight,
      behavior: 'smooth',
    });
  }, 100);
};

onMounted(() => {
  $AOS.init();
  const mainLayout = $('#main-layout');
  if (mainLayout) {
    mainLayout.addEventListener('scroll', handleAnimate);
  }
});

onBeforeUnmount(() => {
  const mainLayout = $('#main-layout');
  if (mainLayout) {
    mainLayout.removeEventListener('scroll', handleAnimate);
  }
});
</script>

<style lang="scss" scoped></style>
