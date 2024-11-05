<template>
  <span class="text-sm leading-5 font-normal text-text-active">
    Showing 1 - {{ props.data?.count }} of {{ props.data?.total }} products
  </span>
</template>

<script setup lang="ts">
interface Props {
  data?: PaginateInfo;
}

const props = withDefaults(defineProps<Props>(), {
  data: undefined,
});
</script>

<style scoped></style>
