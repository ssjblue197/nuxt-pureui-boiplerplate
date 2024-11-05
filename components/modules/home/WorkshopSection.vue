<template>
  <div
    id="process"
    class="w-full text-white shrink-0 flex items-center justify-center relative bg-white bg-center bg-cover bg-no-repeat pb-[60px] md:pb-[80px]"
  >
    <div class="main-content flex justify-center items-center">
      <div
        class="w-full text-neutral-900 flex items-center justify-center py-[40px] md:py-[80px]"
      >
        <div class="main-content flex flex-col gap-8">
          <div
            class="w-full relative p-3 lg:p-4"
            data-aos="fade-up"
            data-aos-offset="0"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-bottom"
          >
            <Swiper
              :height="200"
              :modules="[
                SwiperPagination,
                SwiperAutoplay,
                SwiperNavigation,
                SwiperA11y,
              ]"
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
              <SwiperSlide v-for="(slide, idx) in local.slideList" :key="idx">
                <div
                  class="flex items-center justify-start w-full bg-transparent aspect-[2/1] md:aspect-[5/2] shadow-md hover:shadow-sm relative rounded-lg overflow-hidden"
                >
                  <img
                    :src="`${slide}`"
                    alt="logo"
                    class="h-full w-full object-cover rounded-lg object-center overflow-hidden"
                    loading="lazy"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
            <div
              class="w-full py-2 md:py-4 lg:py-8 flex flex-col lg:flex-row items-start lg:items-center gap-2 md:gap-4 lg:gap-12 relative"
            >
              <div
                class="flex items-center gap-2 sm:gap-4 lg:gap-6 text-xs lg:text-[28px] text-icon-primary text-future"
              >
                <span> Workshop </span>
                <img
                  :src="`${(nuxtApp.$environment as any)?.assetsCdn}/images/workshop-divide.png`"
                  alt="workshop-divide"
                  class="h-[24px] lg:h-auto"
                />
                <span> Ability </span>
              </div>
              <div
                class="text-xs md:text-sm lg:text-base leading-6 font-normal md:font-medium tracking-wide uppercase text-text-note"
              >
                Our printing workshop has over 100 state-of-the-art printers,
                ready to meet all of our customers' printing needs. We take
                pride in our uniqueness, with no competitors to compare in terms
                of quality and capability.
              </div>
            </div>

            <img
              :src="`${(nuxtApp.$environment as any)?.assetsCdn}/images/workshop-top-left.png`"
              alt="workshop-top-left"
              class="absolute top-0 left-0"
            />
            <img
              :src="`${(nuxtApp.$environment as any)?.assetsCdn}/images/workshop-top-right.png`"
              alt="workshop-top-left"
              class="absolute top-0 right-0"
            />
            <img
              :src="`${(nuxtApp.$environment as any)?.assetsCdn}/images/workshop-bottom-left.png`"
              alt="workshop-top-left"
              class="absolute bottom-0 left-0"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const nuxtApp = useNuxtApp();

interface Local {
  slideList: Array<any>;
}

const local: Local = reactive({
  slideList: ['slide1.webp', 'slide2.webp', 'slide3.webp'],
});

const renderBullet = (index: number, className: string) => {
  return '<span class="' + className + ' !bg-primary"></span>';
};
</script>

<style lang="scss" scoped></style>
