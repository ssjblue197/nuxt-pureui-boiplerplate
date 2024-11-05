<template>
  <div
    class="w-full flex flex-col gap-4 p-4 !bg-[rgba(0,0,0,0.5)] backdrop-blur-[4px]"
  >
    <div class="flex flex-col gap-4 p-6 rounded-xl bg-white">
      <span class="text-sm leading-7 font-semibold text-future"
        >DTF transfer</span
      >
      <div class="flex flex-row gap-4">
        <template v-if="!local.loading">
          <div
            class="flex flex-col gap-2 cursor-pointer group w-[200px]"
            v-for="(item, idx) in local.productDTF"
            :key="idx"
          >
            <div
              class="rounded-xl aspect-square overflow-hidden bg-gray-100 shadow-xs group-hover:scale-105 transition-all group-hover:shadow-primary group-hover:shadow-md active:opacity-80 select-none"
              @click="openProductDetail(item)"
            >
              <img
                :src="
                  item?.product_medias?.[0]?.thumbnail_url ??
                  item?.product_medias?.[0]?.full_url
                "
                alt="example"
                loading="lazy"
                class="w-full h-full object-cover"
              />
            </div>
            <div
              class="text-sm font-semibold mx-auto text-left line-clamp-2 mt-1"
            >
              {{ item?.name }}
            </div>
          </div>
        </template>
        <template v-else>
          <div
            class="flex flex-col gap-2 cursor-pointer group w-[200px]"
            v-for="sI in 3"
            :key="sI"
          >
            <div
              class="animate-pulse rounded-xl aspect-square bg-gray-100 shadow-xs group-hover:scale-105 transition-all group-hover:shadow-secondary group-hover:shadow-md active:opacity-80 select-none"
            ></div>
            <div
              class="animate-pulse text-sm mx-auto mt-1 bg-gray-100 h-4 w-[60%] rounded-lg"
            ></div>
          </div>
        </template>
      </div>
    </div>
    <div class="flex flex-col gap-4 p-6 rounded-xl bg-white">
      <span class="text-sm leading-7 font-semibold text-future"
        >UV DTF 3d Permastickers</span
      >
      <div class="flex flex-row gap-4">
        <template v-if="!local.loading">
          <div
            class="flex flex-col gap-2 cursor-pointer group w-[200px]"
            v-for="(i, index) in local.productUVDTF"
            :key="index"
          >
            <div
              class="rounded-xl aspect-square overflow-hidden bg-gray-100 shadow-xs group-hover:scale-105 transition-all group-hover:shadow-primary group-hover:shadow-md active:opacity-80 select-none"
              @click="openProductDetail(i)"
            >
              <img
                :src="
                  i?.product_medias?.[0]?.thumbnail_url ??
                  i?.product_medias?.[0]?.full_url
                "
                alt="example"
                loading="lazy"
                class="w-full h-full object-cover"
              />
            </div>
            <div
              class="text-sm font-semibold mx-auto text-left line-clamp-2 mt-1"
            >
              {{ i?.name }}
            </div>
          </div>
        </template>
        <template v-else>
          <div
            class="flex flex-col gap-2 cursor-pointer group w-[200px]"
            v-for="sI in 3"
            :key="sI"
          >
            <div
              class="animate-pulse rounded-xl aspect-square bg-gray-100 shadow-xs group-hover:scale-105 transition-all group-hover:shadow-primary group-hover:shadow-md active:opacity-80 select-none"
            ></div>
            <div
              class="animate-pulse text-sm mx-auto mt-1 bg-gray-100 h-4 w-[60%] rounded-lg"
            ></div>
          </div>
        </template>
      </div>
    </div>
  </div>
  <!-- <Card
    class="select-none !gap-0 flex flex-col text-icon-primary !p-0 !bg-transparent"
  >
  </Card> -->
</template>

<script setup lang="ts">
import { useProductStore } from '~/store/product';

const productStore = useProductStore();
const router = useRouter();

interface ProductDTF {
  slug?: string;
  name?: string;
  product_medias?: ProductMedia[];
}

interface Local {
  productDTF: ProductDTF[];
  productUVDTF: ProductDTF[];
  loading: boolean;
}

const local: Local = reactive({
  productDTF: [],
  productUVDTF: [],
  loading: false,
});

const loadProductDTF = async () => {
  try {
    local.loading = true;
    const { data, error } = await productStore.dtf();
    if (!error.value) {
      local.productDTF =
        (data.value as ProductDTF[]).filter(
          (p: ProductDTF) => !String(p.name).toLowerCase().includes('uv'),
        ) || [];
      local.productUVDTF =
        (data.value as ProductDTF[])
          .filter((p: ProductDTF) =>
            String(p.name).toLowerCase().includes('uv'),
          )
          .reverse() || [];
    }
  } catch (error) {
    console.log(error);
  } finally {
    local.loading = false;
  }
};

const openProductDetail = (p?: ProductDTF) => {
  if (!p) return;
  router.push({
    name: 'product-slug',
    params: {
      slug: p?.slug,
    },
  });
};

onMounted(() => {
  loadProductDTF();
});
</script>

<style scoped></style>
