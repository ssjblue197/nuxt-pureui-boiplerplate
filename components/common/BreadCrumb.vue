<template>
  <div
    class="w-full flex items-center gap-8 line-clamp-1"
    v-if="Array.isArray(props.data) && props.data?.length > 0"
  >
    <!-- last:bg-gray-iron-50 last:rounded-md last:text-gray-iron-700 last:px-2 last:py-1 -->
    <span class="relative" v-for="(item, idx) in props.data" :key="item?.name">
      <span
        :class="
          twMerge(
            props?.light
              ? `first:text-gray-iron-400  text-gray-iron-300  hover:text-gray-iron-200 active:text-gray-iron-200`
              : `first:text-gray-iron-600  text-gray-iron-600  hover:text-gray-iron-950 active:text-gray-iron-950`,
            `text-ibm text-sm relative font-medium cursor-pointer hover:underline select-none active:opacity-80 whitespace-nowrap`,
          )
        "
        @click="() => router.push({ name: item?.name, params: item?.params })"
        @keyup.enter="
          () => router.push({ name: item?.name, params: item?.params })
        "
        tabindex="0"
      >
        <span v-if="item?.name !== 'index'">{{ item?.label }}</span>
        <p-icon v-else name="home-line" width="20px" height="20px"></p-icon>
      </span>
      <p-icon
        v-if="idx !== 0"
        name="right"
        class="absolute top-[50%] -left-10 translate-x-[50%] translate-y-[-50%] text-gray-iron-300"
      ></p-icon>
    </span>
  </div>
</template>

<script setup lang="ts">
import { twMerge } from 'tailwind-merge';
const router = useRouter();
interface BreadcrumbItem {
  label: string;
  name: string;
  params: {
    [key: string]: string | number;
  };
}
interface Props {
  data?: Array<BreadcrumbItem>;
  light?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  data: undefined,
  light: false,
});
</script>

<style scoped></style>
