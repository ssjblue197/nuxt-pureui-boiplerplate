import { defineStore } from 'pinia';
export const usePageStore = defineStore({
  id: 'page',
  state: () => {
    return {};
  },
  getters: {},
  actions: {
    async all(params: any) {
      const { data, error, execute, refresh } = await useCustomFetch(
        `/public/pages?${objectToQueryString(params)}`,
      );
      return {
        isError: !!error?.value,
        response: error?.value ? error?.value : data.value,
      };
    },
    async details(id: string) {
      const { data, error, execute, refresh } = await useCustomFetch(
        `/public/pages/${id}`,
      );
      return {
        isError: !!error?.value,
        response: error?.value ? error?.value : data.value,
      };
    },
  },
  persist: {
    key: 'magictransfer-client-page-store',
    storage: persistedState.localStorage,
  },
});
