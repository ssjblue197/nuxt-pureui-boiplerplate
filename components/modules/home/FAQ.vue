<template>
  <div
    v-auto-animate
    class="w-full flex flex-col p-3 md:p-6 bg-white rounded-xl md:rounded-3xl shadow-sm hover:shadow-md gap-1 md:gap-3 border border-border-base items-start text-text-note cursor-pointer hover:bg-secondary active:bg-primary select-none transition-all hover:text-text-primary hover:shadow-secondary"
    :class="`${
      data.isOpen ? '!bg-primary !max-h-[100vh] text-text-primary' : 'bg-white'
    }`"
  >
    <div class="flex flex-row items-center gap-3 transition-all">
      <p-icon v-if="!data.isOpen" name="plus" width="14px" height="14px" />
      <p-icon v-else name="dash" width="14px" height="14px" />
      <div
        class="w-full whitespace-nowrap text-sm sm:text-base md:text-xl leading-7 font-semibold"
      >
        {{ data?.question }}
      </div>
    </div>
    <div v-if="data.isOpen" class="text-sm leading-5 font-normal pl-6">
      {{ data?.answer }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { vAutoAnimate } from '@formkit/auto-animate';

interface Props {
  data: any;
}

const props = withDefaults(defineProps<Props>(), {
  data: null,
});
</script>

<style scoped>
.test {
}
</style>
