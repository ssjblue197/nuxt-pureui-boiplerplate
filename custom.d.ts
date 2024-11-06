// custom.d.ts
declare module '*.svg' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent;
  export default component;
}

declare module 'pure-uikit/dist/pure-ui.js';
