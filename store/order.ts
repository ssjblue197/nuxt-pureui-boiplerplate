import { defineStore } from 'pinia';

export const useOrderStore = defineStore({
  id: 'order-store',
  state: () => {
    return {
      progressList: [
        {
          name: 'confirmed',
          title: 'Confirmed',
          description: 'Confirmed',
          createdAt: Date.now(),
          step: 1,
          status: 'done',
        },
        {
          name: 'preparing',
          title: 'Preparing items',
          description: 'Preparing items',
          createdAt: Date.now(),
          step: 2,
          status: 'doing',
        },
        {
          name: 'shipped',
          title: 'Shipped',
          description: 'Shipped',
          createdAt: '',
          step: 3,
          status: 'todo',
        },
        {
          name: 'delivered',
          title: 'Delivered',
          description: 'Delivered',
          createdAt: '',
          step: 4,
          status: 'todo',
        },
      ] as OrderProgress[],
    };
  },
  actions: {
    // async checkout(token: string) {
    //   const { data, error, execute, refresh } = await useCustomFetch(
    //     `/public/carts/${token}/checkout`,
    //   );
    //   return { data, error, execute, refresh };
    // },
  },
  getters: {},
  persist: {
    key: 'magictransfer-client-order-store',
    storage: persistedState.localStorage,
  },
});
