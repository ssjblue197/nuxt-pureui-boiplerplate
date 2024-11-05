<template>
  <div
    id="main-layout"
    class="h-screen w-screen overflow-y-auto overflow-x-hidden bg-white relative"
  >
    <div class="w-full relative min-h-[80vh]">
      <slot />
    </div>

    <ScrollButton
      v-if="showScroll"
      class="z-999 fixed bottom-24 right-8"
      @click="scrollToTop"
      @keyup.enter="scrollToTop"
    />
  </div>
</template>

<script setup>
const showScroll = ref(false);
const { $AOS } = useNuxtApp();

onMounted(() => {
  const mainLayout = $('#main-layout');
  mainLayout.onscroll = (e) => {
    if (mainLayout.scrollTop > window.innerHeight) {
      showScroll.value = true;
    } else {
      showScroll.value = false;
    }
  };
  $AOS.init({
    once: true,
  });
});
onBeforeUnmount(() => {
  if ($('#main-layout')) {
    $('#main-layout').onscroll = () => {};
  }
});
</script>

<style lang="scss" scoped></style>
