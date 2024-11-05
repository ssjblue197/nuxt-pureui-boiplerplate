import { defineStore } from 'pinia';

export const useNavigationStore = defineStore({
  id: 'navigation-store',
  state: () => {
    return {};
  },
  actions: {
    async blankNavigation() {
      const { data, error, execute, refresh } = await useCustomFetch(
        `/public/navigations`,
        {
          query: {
            type: 'apperal',
          },
        },
      );

      return { data, error, execute, refresh };
    },
  },
  getters: {},
  persist: {
    key: 'magictransfer-client-navigation-store',
    storage: persistedState.localStorage,
    // paths: []
  },
});
