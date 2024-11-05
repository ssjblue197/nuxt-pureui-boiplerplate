/* eslint-disable @typescript-eslint/no-explicit-any */
// @ts-ignore
// Import the CSS or use your own!

export default defineNuxtPlugin((nuxtApp) => {
  const runtime = useRuntimeConfig();

  nuxtApp.vueApp.config.globalProperties.$environment = runtime.public;

  return {
    provide: {
      environment: runtime.public,
    },
  };
});
