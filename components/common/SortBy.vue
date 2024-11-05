<template>
  <span
    ref="currentSelect"
    class="w-[218px] h-[42px] px-4 flex items-center justify-between cursor-pointer select-none rounded-full border border-border-base active:opacity-80 relative"
    @click.stop="
      () => {
        local.open = !local.open;
      }
    "
  >
    <span class="text-sm leading-5 font-normal text-text-active">
      {{ currentLabel }}
    </span>
    <p-icon name="down" width="16px" height="16px" />
    <transition name="fade">
      <div
        class="flex flex-col w-full absolute top-[calc(100%+16px)] left-0 rounded-2xl bg-white z-10 border border-border-base overflow-hidden divide-y divide-border-base"
        v-if="local.open"
      >
        <div
          class="w-full px-4 py-3 hover:bg-gray-100 flex items-center text-sm leading-5 font-normal text-text-active"
          v-for="item in SORT_LIST"
          :key="item.label"
          @click="
            () => {
              emit('update:modelValue', {
                sort: item.sort,
                sort_order: item.sort_order,
              });
            }
          "
        >
          {{ item.label }}
        </div>
      </div>
    </transition>
  </span>
</template>

<script setup lang="ts">
import type { Sort } from '~/types/sort';
import { SORT_LIST } from '~/const/sort';
import { CONSTANTS } from '~/const/index';
interface Props {
  modelValue?: Sort;
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: undefined,
});

const emit = defineEmits(['update:modelValue']);

interface Local {
  open: boolean;
}

const local: Local = reactive({
  open: false,
});

const currentLabel = computed(() => {
  if (props.modelValue) {
    return SORT_LIST.find(
      (item) =>
        item.sort === props.modelValue?.sort &&
        item.sort_order === props.modelValue?.sort_order,
    )?.label;
  }
});

const currentSelect = ref();
const handleClickOutside = function (event: Event) {
  if (!currentSelect.value) return;
  const isClickInsideModal = currentSelect.value.contains(event.target);
  if (!isClickInsideModal) {
    local.open = false;
  }
};

onMounted(() => {
  window.document.addEventListener('click', handleClickOutside);
});

onBeforeMount(() => {
  window.document.removeEventListener('click', handleClickOutside);
});
</script>

<style scoped></style>
