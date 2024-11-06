<template>
  <div class="wrapper h-[100dvh]">
    <div class="relative flex h-full w-full flex-nowrap">
      <Sidebar />
      <div
        class="relative mt-3 h-[calc(100%-12px)] flex-1 overflow-y-auto rounded-tl-[40px] border-l border-t border-gray-200"
        ref="mainLayout"
      >
        <slot />
      </div>
    </div>
    <ScrollButton
      class="z-999 fixed bottom-20 right-8"
      v-if="showScroll"
      @click="scrollToTop"
    />
  </div>
</template>

<script lang="ts" setup>
const showScroll = ref(false);
const mainLayout = ref<HTMLDivElement | null>(null);

const scrollToTop = () => {
  mainLayout.value?.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

onMounted(() => {
  if (!mainLayout.value) return;
  mainLayout.value.onscroll = () => {
    if (Number(mainLayout.value?.scrollTop) > window.innerHeight) {
      showScroll.value = true;
    } else {
      showScroll.value = false;
    }
  };
});
onBeforeUnmount(() => {
  if (!mainLayout.value) return;
  if (mainLayout.value) {
    mainLayout.value.onscroll = () => {};
  }
});
</script>

<style lang="scss" scoped></style>
