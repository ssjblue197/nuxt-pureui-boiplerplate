<template>
  <div class="w-full relative">
    <img
      :src="`${(nuxtApp.$environment as any)?.assetsCdn}/images/service-item.webp`"
      alt="bg-item"
      class="w-full h-full absolute z-[-1]"
    />
    <div class="flex flex-col gap-2 relative p-4 lg:p-6">
      <img
        :src="props?.data?.image"
        alt="item-image"
        class="w-full h-auto object-cover object-center"
      />
      <div
        class="text-future text-sm 2xl:text-base font-normal text-gray-iron-25 mt-4 hover:underline"
      >
        {{ props?.data?.title }}
      </div>
      <div
        class="text-ibm text-sm 2xl:text-base leading-6 font-medium tracking-wide text-gray-iron-200"
      >
        {{ props?.data?.description }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const nuxtApp = useNuxtApp();

interface ServiceItem {
  title?: string;
  description?: string;
  image?: string;
  slug?: string;
}
interface Props {
  data?: ServiceItem;
}

const props = withDefaults(defineProps<Props>(), {
  data: undefined,
});
</script>

<style scoped></style>
