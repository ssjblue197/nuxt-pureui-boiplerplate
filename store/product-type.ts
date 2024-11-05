import { defineStore } from 'pinia';

export const useProductTypeStore = defineStore({
  id: 'product-type-store',
  state: () => {
    return {};
  },
  actions: {
    async all() {
      const { data, error, execute, refresh } = await useCustomFetch(
        `/public/product-types`,
      );

      return { data, error, execute, refresh };
    },
  },
  getters: {},
  persist: {
    key: 'magictransfer-client-product-types-store',
    storage: persistedState.localStorage,
    // paths: []
  },
});
