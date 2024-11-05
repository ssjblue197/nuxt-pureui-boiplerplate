<template>
  <div
    id="service"
    class="w-full text-white flex items-center justify-center relative bg-gray-iron-950 py-[60px] md:py-[80px]"
  >
    <img
      :src="`${(nuxtApp.$environment as any)?.assetsCdn}/images/service-background.webp`"
      alt="img"
      class="absolute -bottom-12 left-0 w-full"
    />
    <div
      class="main-content lg:h-screen flex flex-col items-center z-[1] gap-6 xl:gap-10 2xl:gap-20"
    >
      <div
        class="flex w-full justify-between gap-5 text-gray-iron-25 items-center"
      >
        <span
          class="text-future text-sm lg:text-[32px] !leading-normal font-normal"
          data-aos="fade-up"
          data-aos-offset="0"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-bottom"
        >
          OUR SERVICES
        </span>
        <div
          class="flex flex-row-reverse gap-3"
          data-aos="fade-left"
          data-aos-offset="0"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          data-aos-anchor-placement="top-bottom"
        >
          <p-button
            variant="primary"
            outline
            class="relative h-12 border w-[64px] !font-medium tracking-wide uppercase"
          >
            <p-icon name="arrow-down" height="20px" class="-rotate-90"></p-icon>
          </p-button>
          <p-button
            variant="primary"
            outline
            class="relative h-12 border w-[64px] !font-medium tracking-wide uppercase"
          >
            <p-icon name="arrow-down" height="20px" class="rotate-90"></p-icon>
          </p-button>
        </div>
      </div>
      <div
        class="w-full relative"
        data-aos="zoom-in"
        data-aos-offset="0"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-bottom"
      >
        <transition-group appear name="list">
          <div
            class="w-full grid-cols-1 grid md:grid-cols-3 gap-6 text-text-primary"
          >
            <ServiceItem
              v-for="(item, index) in local.serviceList"
              :key="index"
              :data="item"
              class="col-span-1 cursor-pointer hover:scale-105 transition-all duration-200"
            />
          </div>
        </transition-group>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const nuxtApp = useNuxtApp();

const router = useRouter();

interface ServiceItem {
  title?: string;
  description?: string;
  image?: string;
  slug?: string;
}

interface Local {
  serviceList: ServiceItem[];
}

const local: Local = reactive({
  serviceList: [
    {
      title: 'Fulfillment',
      description: `We provide comprehensive fulfillment services, including receiving, processing, and delivering customer orders efficiently.`,
      image: 'fulfillment.webp',
    },
    {
      title: 'Amazon FBA',
      description: `We offer Amazon FBA services, where we handle storage, packaging, shipping, and customer service for your products through Amazon's fulfillment centers`,
      image: 'amazon.webp',
    },
    {
      title: 'Tiktok order',
      description: `We facilitate TikTok orders, enabling purchases directly through TikTok videos or live streams for a seamless e-commerce experience.`,
      image: `tiktok.webp`,
      slug: 'services',
    },
    // {
    //   title: 'Packing slip',
    //   description: `We now offer professional screen printing with over 30 years of experience. Our team delivers high-quality, vibrant, and durable prints for custom t-shirts, promotional materials, and apparel.`,
    //   image: `gang-sheet-online-builder.webp`,
    // },
  ],
});
</script>

<style scoped></style>
