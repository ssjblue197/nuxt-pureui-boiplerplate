import { defineStore } from 'pinia';
export const useMenuStore = defineStore({
  id: 'menu',
  state: () => {
    return {};
  },
  getters: {},
  actions: {
    async all(params: any) {
      const { data, error, execute, refresh } = await useCustomFetch(
        `/public/navigations?${objectToQueryString(params)}`,
      );
      return {
        isError: !!error?.value,
        response: error?.value ? error?.value : data.value,
      };
    },
    async details(id: number) {
      const { data, error, execute, refresh } = await useCustomFetch(
        `/public/navigations/${id}`,
      );
      return {
        isError: !!error?.value,
        response: error?.value ? error?.value : data.value,
      };
    },
  },
  persist: {
    key: 'magictransfer-client-menu-store',
    storage: persistedState.localStorage,
  },
});
