<template>
  <div class="flex flex-col w-full items-center relative pt-[220px]">
    <p-button variant="primary">Hhe</p-button>
    <p-calendar
      class="calendar-range-selection w-[300px]"
      type="range"
    ></p-calendar>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'main',
});

onMounted(() => {});
</script>

<style scoped lang="scss">
.transition {
}
</style>
