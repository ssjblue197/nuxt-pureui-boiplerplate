<template>
  <NuxtLayout>
    <NuxtLoadingIndicator color="#2d64ae" :height="2" />
    <NuxtPage />
    <transition name="slide-fade-up" appear>
      <CookiePolicy v-if="showCookies" @close="showCookies = false" />
    </transition>
  </NuxtLayout>
  <!-- <Accessibility /> -->
</template>

<script setup lang="ts">
import { useSystemStore } from '@/store/system';
const systemStore = useSystemStore();
useSeoMeta({
  title: 'PureUI Nuxt Template',
  ogTitle: 'PureUI Nuxt Template',
  description: 'PureUI Nuxt Template',
  ogDescription: 'PureUI Nuxt Template',
  ogImage: 'https://swiftpod.com/preview_image.webp',
  twitterCard: 'summary_large_image',
});
useHead({
  htmlAttrs: {
    lang: 'vi',
    class: 'p-theme-light',
  },
  script: [
    {
      children: `
            /* Want to customize your button? visit our documentation page: https://login.equalweb.com/custom-button.taf */ window.interdeal = { "sitekey": "ae857c324b0786b3a5353897c0e1acdd", "Position": "Left", "domains": { "js": "https://cdn.equalweb.com/", "acc": "https://access.equalweb.com/" }, "Menulang": "EN", "btnStyle": { "vPosition": [ "80%", "80%" ], "scale": [ "0.5", "0.5" ], "color": { "main": "#000000", "second": "#ffffff" }, "icon": { "outline": false, "type": 4, "shape": "circle" } } }; (function(doc, head, body){ var coreCall = doc.createElement('script'); coreCall.src = interdeal.domains.js + 'core/5.0.9/accessibility.js'; coreCall.defer = true; coreCall.integrity = 'sha512-dxjHZQgpVIG70EQus4+1KR3oj2KGyrtwR/nr4lY+tcMjrQ1Yb9V1SCKNVLGhD3CcPMgANKAqOk4ldI8WWNnQTw=='; coreCall.crossOrigin = 'anonymous'; coreCall.setAttribute('data-cfasync', true ); body? body.appendChild(coreCall) : head.appendChild(coreCall); })(document, document.head, document.body);
          `,
    },
  ],
});

const nuxtApp = useNuxtApp();

const showCookies = ref(false);

nuxtApp.hook('page:finish', () => {
  if (typeof window !== 'undefined') {
    const element = document.getElementById('main-layout');
    if (element) {
      element.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  }
});

onMounted(() => {
  const consent = getCookie('cookieConsent');
  console.log(consent);
  if (!consent) {
    setTimeout(() => {
      showCookies.value = true;
    }, 1000);
  }
});
</script>
<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.2 s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0.8;
  filter: blur(1rem);
}

.layout-enter-active,
.layout-leave-active {
  transition: all 0.2s;
}
.layout-enter-from,
.layout-leave-to {
  opacity: 0.6;
  filter: blur(1rem);
}
</style>
