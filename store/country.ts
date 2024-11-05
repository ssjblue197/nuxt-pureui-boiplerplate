// store/filters.ts
import { defineStore } from 'pinia';
import { objectToQueryString } from '~/utils/helper';
/* eslint-disable @typescript-eslint/no-explicit-any */
// @ts-ignore
import type { Country } from '@/types/common';

export const useCountryStore = defineStore({
  id: 'country-store',
  state: () => {
    return {
      countryList: [] as Country[],
      stateList: [] as CountryState[],
    };
  },
  actions: {
    async getAll() {
      const { data, error, execute, refresh } = await useCustomFetch(
        `/public/countries`,
        {},
        true,
      );
      if (!error.value) {
        console.log(data.value);
        this.countryList =
          (
            data.value as {
              data: Country[];
            }
          )?.data ?? [];
      }
      return {
        isError: !!error?.value,
        response: error?.value ? error?.value : data.value,
      };
    },
    async getStateList(country: string) {
      const { data, error, execute, refresh } = await useCustomFetch(
        `/public/states?country=${country}`,
        {},
        true,
      );
      if (!error.value) {
        this.stateList =
          (
            data.value as {
              data: CountryState[];
            }
          )?.data ?? [];
      }
      return {
        isError: !!error?.value,
        response: error?.value ? error?.value : data.value,
      };
    },
  },
  getters: {},
  persist: {
    key: 'magictransfer-client-country-store',
    storage: persistedState.localStorage,
    // paths: []
  },
});
