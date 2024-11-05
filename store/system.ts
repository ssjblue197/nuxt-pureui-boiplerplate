import { defineStore } from 'pinia';

export const useSystemStore = defineStore({
  id: 'system-store',
  state: () => {
    return {
      acceptCookies: false as boolean,
      showCookies: true as boolean,
      accessibility: false as boolean,
    };
  },
  actions: {},
  getters: {},
  persist: {
    key: 'magictransfer-client-system-store',
    storage: persistedState.localStorage,
    paths: ['acceptCookies'],
  },
});
