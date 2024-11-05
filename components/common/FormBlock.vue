<template>
  <div
    class="w-full relative rounded-lg border border-gray-iron-200 flex flex-col divide-y divide-gray-iron-200"
  >
    <div
      class="w-full py-2 md:py-3 px-4 md:px-6 font-semibold text-gray-iron-950 text-base md:text-lg"
    >
      {{ props?.title }}
    </div>
    <div class="w-full relative py-3 md:py-4 px-4 md:px-6">
      <slot name="body" />
    </div>
    <slot name="expand" />
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    title?: string;
  }>(),
  {
    title: undefined,
  },
);
</script>

<style scoped></style>
