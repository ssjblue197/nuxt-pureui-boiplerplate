<template>
  <div class="flex flex-col w-full items-center relative pt-[220px]">
    <p-button variant="primary">Hhe</p-button>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default',
});

onMounted(() => {
  setTimeout(() => {
    $('#main-layout')?.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, 0);
});
</script>

<style scoped lang="scss">
.transition {
}
</style>
