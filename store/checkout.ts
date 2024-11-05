import { defineStore } from 'pinia';
import EventBus from '~/utils/eventbus';

export const useCheckoutStore = defineStore({
  id: 'checkout-store',
  state: () => {
    return {
      stepList: [
        {
          name: 'cart',
          title: 'Cart',
          description: 'Cart',
          icon: 'mdi-cart',
          step: 1,
          router: '/shopping-cart',
        },
        {
          name: 'information',
          title: 'Information',
          description: 'Information',
          icon: 'mdi-information',
          step: 2,
        },
        {
          name: 'shipping',
          title: 'Shipping',
          description: 'Shipping',
          icon: 'mdi-truck',
          step: 3,
        },
        {
          name: 'payment',
          title: 'Payment',
          description: 'Payment',
          icon: 'mdi-credit-card',
          step: 4,
        },
      ] as CheckoutStep[],
      currentStep: {
        name: 'information',
        title: 'Information',
        description: 'Information',
        icon: 'mdi-information',
        step: 2,
      } as CheckoutStep,
      purchasedCart: {} as Cart,
      processing: false as boolean,
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
    resetStep() {
      this.currentStep = this.stepList[1];
    },
    nextStep() {
      if (!this.currentStep.step) return;
      if (this.currentStep.step < this.stepList.length) {
        this.currentStep = this.stepList[this.currentStep.step];
      }
    },
    previousStep() {
      if (!this.currentStep.step) return;
      if (this.currentStep.step > 2) {
        this.currentStep = this.stepList[this.currentStep.step - 2];
      } else {
        const router = useRouter();
        router.push({
          name: 'shopping-cart',
        });
      }
    },
    placeOrder() {
      EventBus.$emit('place-order');
    },
    async checkout(token: string) {
      const { data, error, execute, refresh } = await useCustomFetch(
        `/public/carts/${token}/checkout`,
      );
      return { data, error, execute, refresh };
    },
  },
  getters: {},
  persist: {
    key: 'magictransfer-client-checkout-store',
    storage: persistedState.localStorage,
    paths: ['stepList', 'currentStep', 'purchasedCart'],
  },
});
