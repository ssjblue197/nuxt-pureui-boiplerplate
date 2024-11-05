<template>
  <div
    class="select-none p-6 flex !flex-row flex-nowrap gap-12 text-icon-primary !w-fit absolute top-[calc(100%+16px)] left-[50%] translate-x-[-35%] !bg-white overflow-hidden shadow-[0_1px_2px_0_rgba(0,0,0,0.06),0_1px_3px_0_rgba(0,0,0,0.1)] rounded-[20px]"
    v-if="route.name !== 'blank'"
  >
    <span
      class="flex flex-col gap-3 items-start"
      v-for="menu in local.menuList"
      :key="menu.id"
    >
      <span
        class="text-lg leading-8 font-semibold text-icon-primary whitespace-nowrap hover:underline active:opacity-80 hover:text-alien-700 cursor-pointer"
        @click="redirectTo(menu)"
        >{{ menu.name }}
      </span>
      <template v-if="Array.isArray(menu.children) && menu.children.length > 0">
        <span
          v-for="child in menu.children"
          :key="child.id"
          class="text-sm leading-5 font-normal text-icon-secondary whitespace-nowrap cursor-pointer hover:underline active:opacity-80 hover:text-alien-700"
          @click="redirectTo(child)"
        >
          {{ child?.name }}
        </span>
      </template>
    </span>
  </div>
</template>

<script setup lang="ts">
import type { MenuItem as MenuItemType } from '@/types/menu';
import { useNavigationStore } from '~/store/navigation';

const navigationStore = useNavigationStore();
const router = useRouter();
const route = useRoute();
interface Local {
  menuList: Array<MenuItemType>;
}

const local: Local = reactive({
  menuList: [],
});

const redirectTo = (data?: MenuItem) => {
  if (data?.link_to == 'collection') {
    router.push({
      name: 'catalog-slug',
      params: { slug: data?.slug },
    });
  } else if (data?.link_to == 'brand') {
    router.push({
      name: 'brand-slug',
      params: { slug: data?.slug },
    });
  }
  //TODO: handle other type of link_to
};

const loadMenuList = async () => {
  try {
    const { data, error } = await navigationStore.blankNavigation();
    if (!error.value) {
      local.menuList =
        (data.value as MenuItemType[])?.sort(
          (a, b) => Number(a.display_order) - Number(b.display_order),
        ) || [];
    }
  } catch (error) {
    console.warn(error);
  }
};

loadMenuList();
</script>

<style scoped></style>
