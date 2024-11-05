// store/filters.ts
import { defineStore } from 'pinia';
/* eslint-disable @typescript-eslint/no-explicit-any */
// @ts-ignore

import type { AuthPayload, UserProfile } from '@/types/auth';

export const useAuthStore = defineStore({
  id: 'auth-store',
  state: () => {
    return {
      profile: {} as UserProfile,
    };
  },
  getters: {
    isLogin: (state) => {
      return !!state.profile?.token;
    },
    displayName: (state) => {
      return (
        state.profile?.user?.name ?? state.profile?.user?.email?.split('@')?.[0]
      );
    },
  },
  actions: {
    async signin(payload: AuthPayload) {
      const { $toast } = useNuxtApp();
      const { data, error, execute, refresh } = await useCustomFetch(`/login`, {
        method: 'POST',
        body: payload,
      });

      if (data.value) {
        const router = useRouter();
        this.profile = data.value;
        await this.myInfo();

        router.push({
          name: 'index',
        });
        ($toast as any).success('Login successfully');
      }

      return { data, error, execute, refresh };
    },
    async signup(payload: AuthPayload) {
      const { $toast } = useNuxtApp();
      const { data, error, execute, refresh } = await useCustomFetch(
        `/register`,
        {
          method: 'POST',
          body: payload,
        },
      );
      if (data.value) {
        const router = useRouter();
        this.profile = data.value;
        router.push({
          name: 'index',
        });
        ($toast as any).success('Register successfully');
      }
      return { data, error, execute, refresh };
    },
    async forgotPassword(payload: Partial<AuthPayload>) {
      const { $toast } = useNuxtApp();
      const { data, error, execute, refresh } = await useCustomFetch(
        `/forgot-password`,
        {
          method: 'POST',
          body: payload,
        },
      );
      if (data.value) {
        ($toast as any).success('Send email successfully');
      }
      return { data, error, execute, refresh };
    },
    async resetPassword(payload: Partial<AuthPayload>) {
      const { $toast } = useNuxtApp();
      const { data, error, execute, refresh } = await useCustomFetch(
        `/reset-password`,
        {
          method: 'POST',
          body: payload,
        },
      );
      if (data.value) {
        const router = useRouter();
        router.push({
          name: 'index',
        });
        ($toast as any).success('Change password successfully');
      }
      return { data, error, execute, refresh };
    },
    async myInfo() {
      const { data, error, execute, refresh } = await useCustomFetch(`/me`, {
        method: 'GET',
      });
      if (isObject(data.value)) {
        this.profile = {
          ...this.profile,
          user: data.value,
        };
      }

      return { data, error, execute, refresh };
    },
    async logout() {
      const router = useRouter();
      const route = useRoute();
      this.profile = {};
      if (
        route.name &&
        !['auth-signin', 'auth-forgot-password'].includes(String(route.name))
      ) {
        router.push({
          name: 'index',
        });
      }
    },
    setToken(token: string) {
      this.profile = {
        ...this.profile,
        token,
      };
    },
  },
  persist: {
    key: 'magictransfer-client-auth-store',
    storage: persistedState.localStorage,
    // paths: []
  },
});
