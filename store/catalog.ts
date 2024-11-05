// store/filters.ts
import { defineStore } from 'pinia';
import { objectToQueryString } from '~/utils/helper';

export const useCatalogStore = defineStore({
  id: 'catalog-store',
  state: () => {
    return {
      catalogInfo: [] as Array<any>,
      catalogSelected: null as any,
      policies: [] as Array<any>,
    };
  },
  actions: {
    async getCatalogInfo() {
      try {
        const { data, error, execute, refresh } = await useCustomFetch(
          `/list-catalog-config.json`,
          {
            key: 'catalog-info',
            server: true,
          },
        );
        const tmp = data as any;
        this.catalogInfo = tmp.value?.data || [];
        return tmp.value?.data;
      } catch (error) {
        /* empty */
      }
    },
    async getCatalogItem(params: any) {
      try {
        const { data, error, execute, refresh } = await useCustomFetch(
          `/find-catalog-by-parent-id.json?${objectToQueryString(params)}`,
        );
        const tmp = data as any;
        this.catalogSelected = tmp.value?.data;
        return tmp.value?.data;
      } catch (error) {
        /* empty */
      }
    },
    async getVariantInfo(payload: any) {
      try {
        const { data, error, execute, refresh } = await useCustomFetch(
          `/find-catalog-detail.json`,
          {
            method: 'post',
            body: payload,
          },
        );
        const tmp = data as any;
        return tmp.value?.data || null;
      } catch (error) {
        /* empty */
      }
    },
    async getPolicies() {
      try {
        const { data, error, execute, refresh } = await useCustomFetch(
          '/policies.json',
        );
        const tmp = data as any;
        this.policies = tmp.value;
        return tmp.value || [];
      } catch (error) {
        /* empty */
      }
    },
  },
  getters: {},
  persist: {
    key: 'geargag-app-store',
    storage: persistedState.localStorage,
    paths: ['catalogInfo', 'policies'],
  },
});
