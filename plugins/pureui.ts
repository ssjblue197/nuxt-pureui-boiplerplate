import { setBasePath } from 'pure-uikit/dist/utilities/base-path.js';
import { registerIconLibrary } from 'pure-uikit/dist/utilities/icon-library.js';
import 'pure-uikit/dist/pure-ui.js';
import 'pure-uikit/dist/themes/light.css';
import 'pure-uikit/dist/themes/dark.css';

// plugins/pureui.ts
export default defineNuxtPlugin(async () => {
  if (import.meta.client) {
    await setBasePath('/public');
    await registerIconLibrary('custom', {
      resolver: (name: string) => `icons/${name}.svg`, //Public folder after bundle
      mutator: (svg: SVGElement) => {
        svg.setAttribute('fill', 'none');
        svg.setAttribute('stroke', 'currentColor');
      },
    });
  }
});
