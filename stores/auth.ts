// store/filters.ts
import { defineStore } from 'pinia';
/* eslint-disable @typescript-eslint/no-explicit-any */
// @ts-ignore

import type { User, AuthPayload } from '@/types/auth';

export const useAuthStore = defineStore({
  id: 'auth-store',
  state: () => {
    return {
      user: null as User | null,
      token: null as string | null,
    };
  },
  getters: {
    isSupportLogin: (state) => {
      return !!state.user?.is_support;
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
        this.user = data.value;
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
        this.user = data.value;
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
        this.user = {
          ...this.user,
        };
      }

      return { data, error, execute, refresh };
    },
    async logout() {
      const router = useRouter();
      const route = useRoute();
      this.user = {};
      if (
        route.name &&
        !['auth-signin', 'auth-forgot-password'].includes(String(route.name))
      ) {
        router.push({
          name: 'index',
        });
      }
    },
    setToken(token: string) {},
  },
  persist: {
    key: 'nuxt-pureui-auth-store',
    storage: persistedState.localStorage,
    // paths: []
  },
});
