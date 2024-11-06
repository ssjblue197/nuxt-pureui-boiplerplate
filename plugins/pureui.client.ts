// plugins/shoelace.ts

export default defineNuxtPlugin(async () => {
  if (import.meta.client) {
    const { setBasePath } = await import(
      'pure-uikit/dist/utilities/base-path.js'
    );
    const { registerIconLibrary } = await import(
      'pure-uikit/dist/utilities/icon-library.js'
    );
    setBasePath('/public');

    registerIconLibrary('custom', {
      resolver: (name: string) => `icons/${name}.svg`, //Public folder after bundle
      mutator: (svg: SVGElement) => {
        svg.setAttribute('fill', 'none');
        svg.setAttribute('stroke', 'currentColor');
      },
    });

    import('pure-uikit/dist/components/alert/alert.js');
    import('pure-uikit/dist/components/animated-image/animated-image.js');
    import('pure-uikit/dist/components/animation/animation.js');
    import('pure-uikit/dist/components/avatar/avatar.js');
    import('pure-uikit/dist/components/badge/badge.js');
    import('pure-uikit/dist/components/breadcrumb/breadcrumb.js');
    import('pure-uikit/dist/components/breadcrumb-item/breadcrumb-item.js');
    import('pure-uikit/dist/components/button/button.js');
    import('pure-uikit/dist/components/button-group/button-group.js');
    import('pure-uikit/dist/components/calendar/calendar.js');
    import('pure-uikit/dist/components/card/card.js');
    import('pure-uikit/dist/components/carousel/carousel.js');
    import('pure-uikit/dist/components/carousel-item/carousel-item.js');
    import('pure-uikit/dist/components/checkbox/checkbox.js');
    import('pure-uikit/dist/components/color-picker/color-picker.js');
    import('pure-uikit/dist/components/details/details.js');
    import('pure-uikit/dist/components/dialog/dialog.js');
    import('pure-uikit/dist/components/divider/divider.js');
    import('pure-uikit/dist/components/drawer/drawer.js');
    import('pure-uikit/dist/components/dropdown/dropdown.js');
    import('pure-uikit/dist/components/file-upload/file-upload.js');
    import('pure-uikit/dist/components/file-upload-item/file-upload-item.js');
    import('pure-uikit/dist/components/format-bytes/format-bytes.js');
    import('pure-uikit/dist/components/format-date/format-date.js');
    import('pure-uikit/dist/components/format-number/format-number.js');
    import('pure-uikit/dist/components/icon/icon.js');
    import('pure-uikit/dist/components/icon-button/icon-button.js');
    import('pure-uikit/dist/components/image-comparer/image-comparer.js');
    import('pure-uikit/dist/components/include/include.js');
    import('pure-uikit/dist/components/input/input.js');
    import('pure-uikit/dist/components/menu/menu.js');
    import('pure-uikit/dist/components/menu-item/menu-item.js');
    import('pure-uikit/dist/components/menu-label/menu-label.js');
    import('pure-uikit/dist/components/mutation-observer/mutation-observer.js');
    import('pure-uikit/dist/components/option/option.js');
    import('pure-uikit/dist/components/paginate/paginate.js');
    import('pure-uikit/dist/components/popup/popup.js');
    import('pure-uikit/dist/components/progress-bar/progress-bar.js');
    import('pure-uikit/dist/components/progress-ring/progress-ring.js');
    import('pure-uikit/dist/components/qr-code/qr-code.js');
    import('pure-uikit/dist/components/radio/radio.js');
    import('pure-uikit/dist/components/radio-button/radio-button.js');
    import('pure-uikit/dist/components/radio-group/radio-group.js');
    import('pure-uikit/dist/components/range/range.js');
    import('pure-uikit/dist/components/rating/rating.js');
    import('pure-uikit/dist/components/relative-time/relative-time.js');
    import('pure-uikit/dist/components/resize-observer/resize-observer.js');
    import('pure-uikit/dist/components/select/select.js');
    import('pure-uikit/dist/components/skeleton/skeleton.js');
    import('pure-uikit/dist/components/smart-container/smart-container.js');
    import('pure-uikit/dist/components/spinner/spinner.js');
    import('pure-uikit/dist/components/split-panel/split-panel.js');
    import('pure-uikit/dist/components/switch/switch.js');
    import('pure-uikit/dist/components/tab/tab.js');
    import('pure-uikit/dist/components/tab-group/tab-group.js');
    import('pure-uikit/dist/components/tab-panel/tab-panel.js');
    import('pure-uikit/dist/components/table/table.js');
    import('pure-uikit/dist/components/tag/tag.js');
    import('pure-uikit/dist/components/textarea/textarea.js');
    import('pure-uikit/dist/components/tooltip/tooltip.js');
    import('pure-uikit/dist/components/tree/tree.js');
    import('pure-uikit/dist/components/tree-item/tree-item.js');
    import('pure-uikit/dist/components/visually-hidden/visually-hidden.js');
  }
});
