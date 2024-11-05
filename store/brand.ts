import { defineStore } from 'pinia';

export const useBrandStore = defineStore({
  id: 'brandStore',
  state: () => ({}),
  actions: {
    async all() {
      const { data, error, execute, refresh } = await useCustomFetch(
        `/public/brands`,
      );

      return { data, error, execute, refresh };
    },
  },
  getters: {},
  persist: {
    key: 'magictransfer-client-brand-store',
    storage: persistedState.localStorage,
    // paths: []
  },
});
