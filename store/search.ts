import { defineStore } from 'pinia';
import type { SearchFilter } from '~/types/search';
import type { CustomFetchOptions } from '~/composables/useCustomFetch';
import { clone } from 'ramda';

export const useSearchStore = defineStore({
  id: 'search-store',
  state: () => {
    return {
      history: [] as string[],
    };
  },
  actions: {
    async all(params: SearchFilter) {
      const transformParams = {
        ...clone(params),
        ...transformParamsFilter(params.filter),
      };

      if (Object.prototype.hasOwnProperty.call(transformParams, 'filter')) {
        delete (transformParams as any).filter;
      }

      //TODO: handle recent search

      const { data, error, execute, refresh } = await useCustomFetch(
        `/public/search`,
        {
          query: transformParams,
        },
      );

      return { data, error, execute, refresh };
    },
  },
  getters: {},
  persist: {
    key: 'magictransfer-client-search-store',
    storage: persistedState.localStorage,
    // paths: []
  },
});
