import { defu } from 'defu';
import { useAuthStore } from '~/store/auth';

const progress = useProgress();

export type WatchSource<T = any> = Ref<T> | ComputedRef<T> | (() => T);
export type MultiWatchSources = (WatchSource<unknown> | object)[];

export interface CustomFetchOptions {
  method?:
    | 'GET'
    | 'HEAD'
    | 'PATCH'
    | 'POST'
    | 'PUT'
    | 'DELETE'
    | 'CONNECT'
    | 'OPTIONS'
    | 'TRACE'
    | 'get'
    | 'head'
    | 'patch'
    | 'post'
    | 'put'
    | 'delete'
    | 'connect'
    | 'options'
    | 'trace'
    | undefined;
  baseURL?: string;
  key?: string;
  headers?: { [key: string]: string };
  onResponse?: (ctx: any) => void;
  onResponseError?: (ctx: any) => void;
  onRequest?: (ctx: any) => void;
  onRequestError?: (ctx: any) => void;
  server?: boolean;
  body?: any;
  lazy?: boolean;
  immediate?: boolean;
  watch?: MultiWatchSources | false;
  query?: {
    [key: string]: string | number | boolean | Array<string | number>;
  } & Paginate;
  pick?: keyof unknown;
}

export function useCustomFetch(
  url: string,
  options: CustomFetchOptions = {},
  isHRM = false,
) {
  progress.start();
  setTimeout(() => {
    progress.stop();
  }, 3000);

  const { $toast } = useNuxtApp();
  const authStore = useAuthStore();
  const config = useRuntimeConfig();
  const route = useRoute();
  const router = useRouter();
  const defaults: CustomFetchOptions = {
    baseURL: isHRM ? config?.public?.apiHrmBase : config?.public?.apiBase,
    key: url,
    headers: authStore.profile?.token
      ? { Authorization: `Bearer ${authStore.profile?.token}` }
      : {},
    onResponse: (_ctx) => {
      progress.stop();
      // _ctx._ctx.response._data = new myBusinessResponse(_ctx.response._data)
    },
    onResponseError: (_ctx) => {
      progress.stop();
      // if (_ctx.response.status === 404) {
      //   throw showError({
      //     statusCode: 404,
      //     statusMessage: 'Page Not Found',
      //     fatal: true,
      //   });
      // }

      const errorMessage = getErrorMessage(_ctx.response?._data);
      if (Number(_ctx.response?.status) == 401) {
        authStore.logout();
        if (
          route.name &&
          !['auth-signin', 'auth-forgot-password'].includes(String(route.name))
        ) {
          router.push('/');
        }
      }
      ($toast as any).error(errorMessage);
      return;
      // throw new myBusinessError()
    },
    onRequestError: (_ctx) => {
      // throw new myBusinessError()
      progress.stop();
    },
    server: true,
  };
  // for nice deep defaults, please use unjs/defu
  const params: CustomFetchOptions = defu(options, defaults);
  return useFetch(url, params);
}
