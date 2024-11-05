<template>
  <span
    class="rounded-full border border-divide-base p-1 cursor-pointer select-none hover:border-[#111827] active:opacity-80 relative hover:shadow-[0_4px_6px_-2px_rgba(0,0,0,0.06),0_10px_15px_-3px_rgba(0,0,0,0.1)] group"
    :class="{
      '!border-[#111827]': props.active,
    }"
  >
    <div
      :class="
        twMerge(
          `
      currentColor  rounded-full
      `,
          props.small ? 'w-6 h-6' : 'w-7 h-7',
        )
      "
    ></div>
    <span
      v-if="props.name"
      class="hidden group-hover:block absolute bottom-[calc(100%+14px)] left-[50%] translate-x-[-50%] p-3 rounded-lg text-white bg-icon-primary text-sm leading-5 font-normal whitespace-nowrap z-10 after:block after:h-0 after:w-0 after:border-t-[10px] after:border-l-[8px] after:border-r-[8px] after:border-icon-primary after:absolute after:top-[calc(100%-2px)] after:left-[50%] after:translate-x-[-50%] after:border-l-transparent after:border-r-transparent after:border-b-transparent transition-all"
      >{{ props.name }}</span
    >
  </span>
</template>

<script setup lang="ts">
import { twMerge } from 'tailwind-merge';
interface Props {
  color: string;
  name?: string;
  active?: boolean;
  small?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  color: 'fff',
  active: false,
  small: false,
});
</script>

<style scoped>
.currentColor {
  background: v-bind(props.color);
  border: 1px solid v-bind(props.color);
}
</style>
