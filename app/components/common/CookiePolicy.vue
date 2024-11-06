<template>
  <div
    class="fixed bottom-8 left-[50%] translate-x-[-50%] flex flex-col md:flex-row items-center gap-6 bg-gray-iron-800 rounded-lg p-6 backdrop-blur-[10px] z-[99999] w-auto overflow-hidden"
  >
    <div class="flex items-start md:items-center gap-3">
      <p-icon name="cookies" width="40px" height="40px"></p-icon>
      <div class="flex flex-col gap-1 min-w-[300px]">
        <span class="text-gray-iron-100 text-ibm font-semibold">
          Can we eat your cookie to know your flavor?
        </span>
        <span class="text-gray-iron-100 text-ibm font-semibold">
          For more information please
          <nuxt-link to="/policy">
            <span class="font-semibold underline text-gray-iron-100"
              >Read our Cookie Policy</span
            >
          </nuxt-link>
        </span>
      </div>
    </div>
    <div class="flex items-center gap-3 w-full md:w-auto">
      <p-button
        variant="primary"
        outline
        class="!bg-gray-iron-25 !text-gray-iron-950 border border-gray-iron-300 text-sm md:text-base leading-6 !font-medium h-12 uppercase flex-1 md:flex-0 min-w-[180px]"
        @click="handleAcceptCookies"
      >
        <span class="flex items gap-1"> ACCEPT </span>
      </p-button>
      <p-button
        variant="primary"
        outline
        class="!bg-transparent border border-gray-iron-300 text-sm md:text-base leading-6 !font-medium h-12 uppercase min-w-[180px] !p-0"
        @click="handleDenyCookies"
      >
        DENY
      </p-button>
    </div>
  </div>
</template>

<script setup lang="ts">
const emits = defineEmits(['close']);

const loadGtm = () => {
  const script = document.createElement('script');
  script.innerHTML = `
    (function(w, d, s, l, i) {
        w[l] = w[l] || [];
        w[l].push({
            'gtm.start': new Date().getTime(),
            event: 'gtm.js'
        });
        var f = d.getElementsByTagName(s)[0],
            j = d.createElement(s),
            dl = l != 'dataLayer' ? '&l=' + l : '';
        j.async = true;
        j.src =
            'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
        f.parentNode.insertBefore(j, f);
    })(window, document, 'script', 'dataLayer', 'GTM-NQP9WCXN');
  `;
  document.head.appendChild(script);
};

const handleAcceptCookies = () => {
  setCookie('cookieConsent', 'accepted', 365);
  loadGtm();
  emits('close');
};

const handleDenyCookies = () => {
  setCookie('cookieConsent', 'declined', 30);
  emits('close');
};

const handleRejectAcceptCookies = () => {
  setCookie('cookieConsent', 'declined', 365); // Store decline for 1 year
  // No need to reload if not loading any scripts
  emits('close');
};
</script>

<style scoped></style>
~/stores/system~/utils/cookiesConsent
