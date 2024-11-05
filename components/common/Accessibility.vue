<template>
  <div
    class="flex items-center h-[52px] rounded-full whitespace-nowrap w-fit fixed bottom-8 left-8 z-[9999] bg-gray-iron-50 shadow-xl group cursor-pointer select-none"
    @click="handleChangeAccessibility"
  >
    <div
      class="h-full aspect-square rounded-full bg-gray-iron-25 relative shadow"
    >
      <p-icon name="access" width="28px" height="28px" class="center"></p-icon>
      <p-icon
        name="close-access"
        width="12px"
        height="12px"
        class="absolute bottom-[10px] right-[10px]"
        v-if="!systemStore.accessibility"
      ></p-icon>
      <p-icon
        name="open-access"
        width="12px"
        height="12px"
        class="absolute bottom-[10px] right-[10px]"
        v-else
      ></p-icon>
    </div>
    <span
      class="text-gray-iron-950 font-semibold text-base underline max-w-[0] overflow-hidden md:group-hover:max-w-[240px] cursor-pointer transition-all duration-200 will-change-auto"
    >
      <span class="px-4">
        {{
          !systemStore.accessibility
            ? 'Enable accessibility'
            : 'Exit accessibility mode'
        }}
      </span>
    </span>
  </div>
</template>

<script setup lang="ts">
import { useSystemStore } from '@/store/system';
const systemStore = useSystemStore();

const handleChangeAccessibility = () => {
  if (document.body.classList.contains('access')) {
    document.body.classList.remove('access');
    systemStore.accessibility = false;
  } else {
    document.body.classList.add('access');
    systemStore.accessibility = true;
  }
};
</script>

<style scoped></style>
