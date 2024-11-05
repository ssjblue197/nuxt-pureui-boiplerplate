<template>
  <div
    class="w-auto flex flex-nowrap gap-2 items-start cursor-pointer relative group"
    @click="selectMenuItem"
  >
    <p-icon
      v-show="
        !props.data?.parent_id ||
        (props.data?.parent_id &&
          Array.isArray(props.data?.children) &&
          props.data?.children?.length > 0)
      "
      name="down"
      width="24px"
      height="24px"
      class="group-hover:text-alien-900 relative will-change-auto transition-transform"
      :class="{
        'rotate-180': props.data?.showChildren,
      }"
    />
    <span
      class="text-[#515961] leading-[155%] text-sm group-hover:text-alien-900"
      :class="{
        'text-base': !props.data?.parent_id,
        'font-semibold':
          !props.data?.parent_id ||
          (props.data?.parent_id &&
            Array.isArray(props.data?.children) &&
            props.data?.children?.length > 0),
        'font-semibold text-alien-700': props.data?.slug === route.query?.page,
        'group-hover:!text-alien-700':
          Array.isArray(props.data?.children) &&
          props.data?.children?.length === 0,
      }"
    >
      {{ props.data?.name }}
    </span>
  </div>
  <div
    v-if="
      Array.isArray(props.data?.children) &&
      props.data?.children?.length > 0 &&
      props.data?.showChildren
    "
    class="w-auto pl-8"
  >
    <div class="flex flex-col gap-3">
      <HelpMenu
        v-for="(menu, index) in props.data?.children"
        :key="index"
        :data="menu"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const router = useRouter();
const route = useRoute();

interface Props {
  data: any;
}

const props = withDefaults(defineProps<Props>(), {
  data: null,
});

interface Local {}

const local = reactive<Local>({});

const selectMenuItem = () => {
  if (Array.isArray(props.data?.children) && props.data?.children?.length > 0) {
    // eslint-disable-next-line vue/no-mutating-props
    props.data.showChildren = !props.data?.showChildren;
  }
  if (props.data?.slug && props.data?.link_to == 'page') {
    router.push({
      name: 'help-center',
      query: {
        page: props.data?.slug,
      },
    });
  } else if (props.data?.link_to == 'url' && props.data?.url) {
    window.open(props.data?.url, '_blank');
  }
};
</script>

<style scoped></style>
