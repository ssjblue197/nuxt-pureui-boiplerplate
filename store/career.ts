import { defineStore } from 'pinia';
import type { Country } from '@/types/common';

export const useCareerStore = defineStore({
  id: 'careers',
  state: () => {
    return {
      stepList: [
        {
          id: 1,
          name: 'Candidate info',
          status: 0,
          data: {} as any,
          icon: 'user-01',
        },
        {
          id: 2,
          name: 'Education info',
          status: 0,
          data: {} as any,
          icon: 'graduation-hat-02',
        },
        {
          id: 3,
          name: 'Previous employment',
          status: 0,
          data: {} as any,
          icon: 'luggage-03',
        },
        {
          id: 4,
          name: 'References',
          status: 0,
          data: {} as any,
          icon: 'users-check',
        },
        {
          id: 5,
          name: 'Military service',
          status: 0,
          data: {} as any,
          icon: 'award-03',
        },
      ],
      currentStep: 1 as number,
      selectedCountry: {
        name: 'United States',
        iso3: 'USA',
        iso2: 'US',
        phonecode: '1',
        capital: 'Washington',
        currency: 'USD',
        native: 'United States',
        region: 'Americas',
        subregion: 'Northern America',
        emoji: '🇺🇸',
        emojiU: 'U+1F1FA U+1F1F8',
        date_created: '2018-07-20 09:11:03',
        date_modified: '2020-10-25 03:35:15',
        flag: 1,
        wikiDataId: 'Q30',
        is_origin: 1,
        code: null,
      } as any,
    };
  },
  getters: {},
  actions: {
    async all(params: any) {
      const { data, error, execute, refresh } = await useCustomFetch(
        `/public/works?${objectToQueryString(params)}`,
        {},
        true,
      );
      return {
        isError: !!error?.value,
        response: error?.value ? error?.value : data.value,
      };
    },
    async count() {
      const { data, error, execute, refresh } = await useCustomFetch(
        `/public/count-works`,
        {},
        true,
      );
      return {
        isError: !!error?.value,
        response: error?.value ? error?.value : data.value,
      };
    },
    async details(id: number, previewToken?: string) {
      const url = previewToken
        ? `/public/works/${id}?token=${previewToken}`
        : `/public/works/${id}`;
      const { data, error, execute, refresh } = await useCustomFetch(
        url,
        {},
        true,
      );
      return {
        isError: !!error?.value,
        response: error?.value ? error?.value : data.value,
      };
    },
    async apply(id: number, payload: any) {
      const { data, error, execute, refresh } = await useCustomFetch(
        `/public/works/${id}/apply`,
        {
          method: 'POST',
          body: payload,
          headers: { accept: 'application/json' },
        },
        true,
      );
      return {
        isError: !!error?.value,
        response: error?.value ? error?.value : data.value,
      };
    },
    resetStep() {
      this.currentStep = 1;
    },
    nextStep() {
      if (this.currentStep < this.stepList.length) {
        this.currentStep = this.currentStep + 1;
        scrollToTop();
      }
    },
    previousStep() {
      if (this.currentStep > 1) {
        this.currentStep = this.currentStep - 1;
        scrollToTop();
      }
    },
    resetStepList() {
      this.stepList = [
        {
          id: 1,
          name: 'Candidate info',
          status: 0,
          data: {} as any,
          icon: 'user-01',
        },
        {
          id: 2,
          name: 'Education info',
          status: 0,
          data: {} as any,
          icon: 'graduation-hat-02',
        },
        {
          id: 3,
          name: 'Previous employment',
          status: 0,
          data: {} as any,
          icon: 'luggage-03',
        },
        {
          id: 4,
          name: 'References',
          status: 0,
          data: {} as any,
          icon: 'users-check',
        },
        {
          id: 5,
          name: 'Military service',
          status: 0,
          data: {} as any,
          icon: 'award-03',
        },
      ];
      this.currentStep = 1;
    },
  },
  persist: {
    key: 'magictransfer-client-careers-store',
    storage: persistedState.localStorage,
    paths: ['stepList'],
  },
});
