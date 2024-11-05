<template>
  <div
    id="categories"
    class="w-full text-white flex items-center justify-center relative bg-white bg-center bg-cover bg-no-repeat py-[20px] md:py-[80px]"
  >
    <div
      class="main-content flex flex-col justify-center items-center gap-4 lg:gap-12 md:flex-row md:items-start"
    >
      <div
        class="w-full shrink-0 aspect-[4/3] md:flex-1 md:max-w-[580px] bg-[url('https://d1dif2dtw17xb9.cloudfront.net/images/collection-background.webp')] bg-center bg-no-repeat bg-contain text-sm lg:text-[28px] text-future !leading-normal text-icon-primary flex items-center justify-center text-center"
        data-aos="fade-right"
        data-aos-offset="0"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-bottom"
      >
        Shop for blanks by categories
      </div>

      <div
        class="w-full shrink-0 md:flex-1 grid grid-cols-2 gap-4 relative"
        data-aos="fade-left"
        data-aos-offset="0"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-bottom"
      >
        <CategoryCollectionItem
          v-for="item in local.data?.top_collections"
          :key="item.id"
          :data="item"
          class="col-span-1"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCollectionStore } from '~/store/collection';
const collectionStore = useCollectionStore();

interface BlankData {
  best_seller?: Array<Product>;
  hot_products?: Array<Product>;
  more_collections?: Array<Collection>;
  top_collections?: Array<Collection>;
}

interface Local {
  data?: BlankData;
  loading?: boolean;
}

const local: Local = reactive({
  data: undefined,
  loading: false,
});

const initialData = async () => {
  try {
    local.loading = true;
    const { data, error, execute, refresh } = await collectionStore.blank();

    if (!error.value) {
      local.data = data.value as BlankData | undefined;
    }
  } catch (error) {
    console.warn(error);
  } finally {
    local.loading = false;
  }
};

initialData();
</script>

<style scoped></style>
