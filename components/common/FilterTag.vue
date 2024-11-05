<template>
  <span
    class="flex items-center gap-1 rounded-lg border border-gray-iron-300 text-gray-iron-700 text-xs md:text-sm font-medium text-ibm py-1 px-2 shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] hover:shadow-none"
  >
    {{ props.data?.label || props.data?.value }}
    <span class="text-gray-iron-400 cursor-pointer" @click="emit('close')"
      ><p-icon name="close" width="20px" height="20px"></p-icon
    ></span>
  </span>
</template>

<script setup lang="ts">
const emit = defineEmits(['close']);

interface Props {
  data?: FilterValue;
}

const props = withDefaults(defineProps<Props>(), {
  data: undefined,
});
</script>

<style scoped></style>
