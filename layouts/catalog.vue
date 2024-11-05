<template>
  <div
    id="main-layout"
    class="h-screen w-screen overflow-y-auto overflow-x-hidden bg-white relative"
  >
    <PageHeader />
    <div
      class="px-4 sm:px-6 lg:px-8 main-content relative py-8 mx-auto pt-[100px]"
    >
      <slot />
    </div>

    <PageFooter />
    <ScrollButton v-if="showScroll" class="z-999 fixed bottom-20 right-8" />
  </div>
</template>

<script setup>
const showScroll = ref(false);

onMounted(() => {
  const mainLayout = $('#main-layout');
  mainLayout.onscroll = (e) => {
    if (mainLayout.scrollTop > window.innerHeight) {
      showScroll.value = true;
    } else {
      showScroll.value = false;
    }
  };
});
onBeforeUnmount(() => {
  if ($('#main-layout')) {
    $('#main-layout').onscroll = () => {};
  }
});
</script>

<style lang="scss" scoped></style>
