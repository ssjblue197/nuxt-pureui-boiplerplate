<template>
  <div
    class="w-full flex items-center justify-center relative bg-gray-iron-950 py-[60px] md:py-[80px]"
    id="partner"
  >
    <div
      class="main-content min-h-screen flex flex-col items-center z-[1] gap-6 xl:gap-10 2xl:gap-20"
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
      >
        OUR PARTNERS
      </div>
      <div
        class="w-full relative overflow-hidden"
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
          class="w-full grid grid-cols-2 md:grid-cols-3 divide-x divide-y divide-gray-iron-700/50 scale-[1.01]"
        >
          <div
            v-for="(i, index) in local.partnerList"
            :key="index"
            class="flex items-center justify-center p-4 min-h-[200px] 2xl:min-h-[260px] md:h-auto gap-3 md:gap-4 cursor-pointer group hover:!bg-gray-iron-800/80 transition-all duration-200"
            :title="i?.title"
          >
            <img
              :src="i?.image"
              :alt="i?.title"
              class="group-hover:scale-105 transition-all duration-200 max-h-[40%] max-w-[60%]"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Partner {
  title?: string;
  image?: string;
  url?: string;
}
interface Local {
  partnerList: Array<Partner>;
}
const local: Local = reactive({
  currentIndex: 0,
  partnerList: [
    {
      title: 'Printify',
      image: 'printify.webp',
    },
    {
      title: 'USPS',
      image: 'usps.webp',
    },
    {
      title: 'DHL',
      image: 'dhl.webp',
    },
    {
      title: 'Asendia',
      image: 'asendia.webp',
    },
    {
      title: 'EasyPost',
      image: 'easypost.webp',
    },
    {
      title: 'ShipStation',
      image: 'shipstation.webp',
    },
    {
      title: 'ShutterStock',
      image: 'shutterstock.webp',
    },
    {
      title: 'UPS',
      image: 'ups.webp',
    },
    {
      title: 'Orderdesk',
      image: 'orderdesk.webp',
    },
  ],
});

onMounted(() => {});

onBeforeUnmount(() => {});
</script>

<style scoped></style>
