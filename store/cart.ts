import { defineStore } from 'pinia';
import { clone } from 'ramda';

export const useCartStore = defineStore({
  id: 'cart-store',
  state: () => {
    return {
      cart: {
        token: '',
        items: [],
      } as Cart,
      shippingMethodList: [] as ShippingMethod[],
    };
  },
  actions: {
    async add(payload: Cart) {
      const { $toast } = useNuxtApp();
      const { data, error, execute, refresh } = await useCustomFetch(
        `/public/carts`,
        {
          method: 'POST',
          body: payload,
        },
      );
      return { data, error, execute, refresh };
    },
    async getCart(token: string) {
      const { data, error, execute, refresh } = await useCustomFetch(
        `/public/carts/${token}`,
      );
      if (!error.value) {
        this.cart = clone(data.value as Cart);
      }
      return { data, error, execute, refresh };
    },
    async deleteCart(token: string) {
      const { data, error, execute, refresh } = await useCustomFetch(
        `/public/carts/${token}`,
        {
          method: 'DELETE',
        },
      );
      return { data, error, execute, refresh };
    },
    async getShippingMethods(token: string) {
      const { data, error, execute, refresh } = await useCustomFetch(
        `/public/carts/${token}/shipping`,
      );
      this.shippingMethodList = (data.value as ShippingMethod[]) || [];
      return { data, error, execute, refresh };
    },
    async calculateTax(token?: string) {
      if (!token) return;
      const { data, error, execute, refresh } = await useCustomFetch(
        `/public/carts/${token}/tax`,
      );
      if (!error.value) {
        this.cart = clone(data.value as Cart);
      }
      return { data, error, execute, refresh };
    },
    async suggestAddress(token?: string) {
      if (!token) return;
      const { data, error, execute, refresh } = await useCustomFetch(
        `/public/carts/${token}/suggestion-address`,
      );
      return { data, error, execute, refresh };
    },
    async verifyAddress(token?: string) {
      if (!token) return;
      const { data, error, execute, refresh } = await useCustomFetch(
        `/public/carts/${token}/verify-address`,
      );
      return { data, error, execute, refresh };
    },
    resetCart() {
      this.cart = {
        token: '',
        items: [],
      };
    },
  },
  getters: {},
  persist: {
    key: 'magictransfer-client-cart-store',
    storage: persistedState.localStorage,
    paths: ['cart', 'shippingMethodList'],
  },
});
