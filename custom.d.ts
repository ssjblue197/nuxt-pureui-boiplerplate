// custom.d.ts
declare module '*.svg' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent;
  export default component;
}

declare module 'vue-toastification/dist/index.mjs';
