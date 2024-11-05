import { defineStore } from 'pinia';
import type { Paginate } from '~/types/common';
import type { ProductFilter, GangSheetCreate } from '~/types/product';

export const useProductStore = defineStore({
  id: 'product-store',
  state: () => {
    return {
      gangSheetCreate: {} as GangSheetCreate,
      attributesExpand: [] as Array<string>,
    };
  },
  actions: {
    async all(params: ProductFilter & Paginate) {
      const { data, error, execute, refresh } = await useCustomFetch(
        `/products`,
        {
          query: params,
        },
      );

      return { data, error, execute, refresh };
    },
    async detail(slug: string) {
      const { data, error, execute, refresh } = await useCustomFetch(
        `/public/products/${slug}?client=true`,
      );

      return { data, error, execute, refresh };
    },
    async dtf() {
      const { data, error, execute, refresh } = await useCustomFetch(
        `/public/product-dtf`,
      );

      return { data, error, execute, refresh };
    },
    async breadcrumb(slug: string) {
      const { data, error, execute, refresh } = await useCustomFetch(
        `/public/products/${slug}/breadcrumbs`,
      );

      return { data, error, execute, refresh };
    },
    async attributes() {
      const { data, error, execute, refresh } = await useCustomFetch(
        `/public/attributes`,
      );

      return { data, error, execute, refresh };
    },
  },
  getters: {},
  persist: {
    key: 'magictransfer-client-product-store',
    storage: persistedState.localStorage,
    // paths: []
  },
});
