import { defineStore } from 'pinia';
import { getErrorMessage } from '~/utils/helper';
import { useAuthStore } from '@/modules/auth/store';
import type { User } from '@/modules/auth/types';

const toast = useToast();

export const useStoreStore = defineStore('store', {
  state: () => {
    return {
      storeList: [] as Store[],
      selectedStore: null as Store | null,
    };
  },
  actions: {
    reset() {
      this.storeList = [];
      this.selectedStore = null;
    },
  },
  persist: {
    storage: persistedState.localStorage,
    key: 'seller-dashboard-store-store',
    // paths: [] /*Define states can persisted*/
  },
});
