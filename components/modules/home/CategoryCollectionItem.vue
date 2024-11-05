<template>
  <div
    class="flex flex-col aspect-[4/3] items-center gap-4 group m-[1px] active:opacity-80 bg-[url('https://d1dif2dtw17xb9.cloudfront.net/images/collection-background.webp')] bg-center bg-no-repeat bg-contain"
    @click="openCollection"
  >
    <div
      class="w-[50%] aspect-square rounded-full flex justify-center items-center relative cursor-pointer transition-all hover:shadow-md hover:shadow-primary group-hover:scale-105 duration-200"
    >
      <img
        :src="props.data?.thumbnail_url ?? props.data?.full_url"
        alt="shirt-rotate"
        class="center w-full h-full object-cover rounded-full"
        loading="lazy"
      />
    </div>
    <div
      class="text-future text-center text-[8px] md:text-sm !leading-normal font-medium text-text-primary cursor-pointer"
    >
      {{ props.data?.name }}
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Collection } from '~/types/collection';

const router = useRouter();
interface Props {
  data?: Collection;
}

const props = withDefaults(defineProps<Props>(), {
  data: undefined,
});

const openCollection = () => {
  router.push({
    name: 'catalog-slug',
    params: { slug: props.data?.slug },
  });
};
</script>

<style scoped></style>
