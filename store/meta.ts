import { defineStore } from 'pinia';

export const useMetaStore = defineStore({
  id: 'meta',
  state: () => {
    return {};
  },
  getters: {},
  actions: {
    async getBrandList() {
      const { data, error, execute, refresh } = await useCustomFetch(
        `/public/brands`,
      );
      return {
        isError: !!error?.value,
        response: error?.value ? error?.value : data.value,
      };
    },
    async getColorList() {
      const { data, error, execute, refresh } = await useCustomFetch(
        `/public/colors`,
      );
      return {
        isError: !!error?.value,
        response: error?.value ? error?.value : data.value,
      };
    },
  },
  persist: {
    key: 'magictransfer-client-meta-store',
  },
});
