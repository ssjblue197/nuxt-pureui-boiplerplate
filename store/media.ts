import { defineStore } from 'pinia';

export const useMediaStore = defineStore({
  id: 'media-store',
  state: () => {
    return {};
  },
  actions: {
    async upload(payload: UploadMedia) {
      const { $toast } = useNuxtApp();
      const { data, error, execute, refresh } = await useCustomFetch(
        `/public/files`,
        {
          method: 'POST',
          body: payload,
        },
      );
      return { data, error, execute, refresh };
    },
  },
  getters: {},
  persist: {
    key: 'magictransfer-client-media-store',
    storage: persistedState.localStorage,
  },
});
