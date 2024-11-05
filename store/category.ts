// store/filters.ts
import { defineStore } from 'pinia';
import { objectToQueryString } from '~/utils/helper';
/* eslint-disable @typescript-eslint/no-explicit-any */
// @ts-ignore
import { clone } from 'ramda';

export interface CategoryPayload {
  name?: string;
  display_order?: number;
  slug?: string;
  id?: number;
}

export const useCategoryStore = defineStore({
  id: 'category-store',
  state: () => {
    return {};
  },
  actions: {
    async getAll() {
      const { data, error, execute, refresh } = await useCustomFetch(
        `/public/categories`,
      );
      return {
        isError: !!error?.value,
        response: error?.value ? error?.value : data.value,
      };
    },
  },
  getters: {},
  persist: {
    key: 'magictransfer-client-category-store',
    storage: persistedState.localStorage,
    // paths: []
  },
});
