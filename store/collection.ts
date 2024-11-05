import { defineStore } from 'pinia';
import type { Collection, Filter } from '~/types/collection';
import type { CustomFetchOptions } from '~/composables/useCustomFetch';

export const useCollectionStore = defineStore({
  id: 'collection-store',
  state: () => {
    return {};
  },
  actions: {
    async blank() {
      const { data, error, execute, refresh } = await useCustomFetch(
        `/public/blank`,
      );

      return { data, error, execute, refresh };
    },
    async all(params: Filter) {
      const { data, error, execute, refresh } = await useCustomFetch(
        `/public/collections`,
        {
          query: params,
        },
      );

      return { data, error, execute, refresh };
    },
    async detail(slug: string, options?: CustomFetchOptions) {
      const { data, error, execute, refresh } = await useCustomFetch(
        `/public/collections/${slug}`,
        {
          ...options,
          query: transformObject(options?.query),
        },
      );

      return { data, error, execute, refresh };
    },
  },
  getters: {},
  persist: {
    key: 'magictransfer-client-collection-store',
    storage: persistedState.localStorage,
    // paths: []
  },
});
