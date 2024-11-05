// store/filters.ts
import { defineStore } from 'pinia';
import { objectToQueryString } from '~/utils/helper';
/* eslint-disable @typescript-eslint/no-explicit-any */
// @ts-ignore

export const useContactStore = defineStore({
  id: 'contact-store',
  state: () => {
    return {};
  },
  actions: {
    async contact(payload: any) {
      const { data, error, execute, refresh } = await useCustomFetch(
        `/public/contact-us`,
        {
          method: 'POST',
          body: payload,
        },
      );
      return {
        isError: !!error?.value,
        response: error?.value ? error?.value : data.value,
      };
    },
  },
  getters: {},
  persist: {
    key: 'magictransfer-client-contact-store',
    storage: persistedState.localStorage,
    // paths: []
  },
});
