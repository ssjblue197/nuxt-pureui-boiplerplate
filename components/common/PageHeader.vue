<template>
  <div
    id="header"
    class="w-screen z-[9998] bg-transparent absolute top-0 h-[72px] items-center flex justify-center transition will-change-auto"
  >
    <div
      v-auto-animate
      class="main-content items-center flex justify-between mt-8 py-3 2xl:py-4 px-6 2xl:px-8 gap-2 rounded-xl border border-gray-iron-700 bg-gray-iron-900 relative"
      ref="currentSelect"
    >
      <nuxt-link id="page-logo" to="/" class="text-center" name="logo">
        <TextLogo />
      </nuxt-link>
      <div class="flex-1 justify-end hidden lg:flex">
        <div
          class="flex items-center justify-start gap-4 text-xs md:text-sm 2xl:text-base leading-6 font-semibold tracking-wide text-gray-iron-100"
        >
          <nuxt-link to="/">
            <div
              class="px-4 py-2 bg-transparent hover:bg-gray-iron-700 cursor-pointer rounded-md active:opacity-90 select-none"
              :class="{
                '!bg-gray-iron-700 access:after:block access:after:w-1 access:after:aspect-square access:after:bg-gray-iron-300 access:after:rounded-full access:after:absolute  access:after:left-[50%] access:after:translate-x-[-50%] relative':
                  router.currentRoute.value.name === 'index',
              }"
            >
              Home
            </div>
          </nuxt-link>
          <nuxt-link to="/catalog">
            <div
              class="px-4 py-2 bg-transparent hover:bg-gray-iron-700 cursor-pointer rounded-md active:opacity-90 select-none"
              :class="{
                '!bg-gray-iron-700 access:after:block access:after:w-1 access:after:aspect-square access:after:bg-gray-iron-300 access:after:rounded-full access:after:absolute  access:after:left-[50%] access:after:translate-x-[-50%] relative':
                  router.currentRoute.value.name === 'catalog' ||
                  router.currentRoute.value.name === 'catalog-slug' ||
                  router.currentRoute.value.name === 'product-slug' ||
                  router.currentRoute.value.name === 'brand-slug',
              }"
            >
              Catalog
            </div>
          </nuxt-link>
          <nuxt-link to="/services">
            <div
              class="px-4 py-2 bg-transparent hover:bg-gray-iron-700 cursor-pointer rounded-md active:opacity-90 select-none"
              :class="{
                '!bg-gray-iron-700 access:after:block access:after:w-1 access:after:aspect-square access:after:bg-gray-iron-300 access:after:rounded-full access:after:absolute  access:after:left-[50%] access:after:translate-x-[-50%] relative':
                  router.currentRoute.value.name == 'services',
              }"
            >
              Services
            </div> </nuxt-link
          ><nuxt-link to="/facilities">
            <div
              class="px-4 py-2 bg-transparent hover:bg-gray-iron-700 cursor-pointer rounded-md active:opacity-90 select-none"
              :class="{
                '!bg-gray-iron-700 access:after:block access:after:w-1 access:after:aspect-square access:after:bg-gray-iron-300 access:after:rounded-full access:after:absolute  access:after:left-[50%] access:after:translate-x-[-50%] relative':
                  router.currentRoute.value.name === 'facilities',
              }"
            >
              Facilities
            </div>
          </nuxt-link>
          <nuxt-link to="/contact">
            <div
              class="px-4 py-2 bg-transparent hover:bg-gray-iron-700 cursor-pointer rounded-md active:opacity-90 select-none"
              :class="{
                '!bg-gray-iron-700 access:after:block access:after:w-1 access:after:aspect-square access:after:bg-gray-iron-300 access:after:rounded-full access:after:absolute  access:after:left-[50%] access:after:translate-x-[-50%] relative':
                  router.currentRoute.value.name === 'contact',
              }"
            >
              Contact us
            </div>
          </nuxt-link>
          <nuxt-link to="/integrations">
            <div
              class="px-4 py-2 bg-transparent hover:bg-gray-iron-700 cursor-pointer rounded-md active:opacity-90 select-none"
              :class="{
                '!bg-gray-iron-700 access:after:block access:after:w-1 access:after:aspect-square access:after:bg-gray-iron-300 access:after:rounded-full access:after:absolute  access:after:left-[50%] access:after:translate-x-[-50%] relative':
                  router.currentRoute.value.name === 'integrations',
              }"
            >
              Integrations
            </div>
          </nuxt-link>
        </div>
        <span
          class="p-2 text-gray-iron-300 cursor-pointer"
          @click="
            () => {
              if (router.currentRoute.value.name !== 'search') {
                local.showSearch = true;
              }
            }
          "
          @keyup.enter="
            () => {
              if (router.currentRoute.value.name !== 'search') {
                local.showSearch = true;
              }
            }
          "
          tabindex="0"
        >
          <p-icon name="search" width="20px" height="20px"></p-icon>
        </span>
      </div>
      <div
        class="drawer-handler lg:hidden cursor-pointer w-[30px] flex flex-col gap-2 items-end group shrink-0"
        @click="
          () => {
            mobileSidebarKey = makeid(24);
            local.showMenu = true;
          }
        "
      >
        <span class="w-full h-[2px] bg-gray-iron-200" />
        <span class="w-full h-[2px] bg-gray-iron-200" />
        <span
          class="w-full h-[2px] bg-gray-iron-200 group-hover:w-full will-change-auto transition-all"
        />
      </div>
      <div
        class="w-full h-auto flex justify-center items-center p-4 md:p-6 absolute top-[calc(100%+16px)] left-0 z-10 rounded-xl border border-gray-iron-700 bg-gray-iron-950"
        v-if="local.showSearch"
      >
        <p-input
          variant="primary"
          placeholder="Search for products, brands etc."
          class="!h-[56px] bg-background-base-light !rounded-lg border-border-base w-full select-none"
          pills
          hasPrepend
          hasAppend
          @focus="local.showSearch = true"
          v-model="local.keyword"
          @keyup.enter="handleSearch"
          @click.stop="
            () => {
              local.showSearch = true;
            }
          "
          ref="inputSearch"
        >
          <template #prepend>
            <p-icon
              name="search"
              width="20px"
              height="20px"
              class="ml-1"
            ></p-icon>
          </template>
          <template #append v-if="local.keyword">
            <span
              class="cursor-pointer flex items-center"
              @click="
                () => {
                  local.keyword = '';
                }
              "
            >
              <p-icon
                name="close"
                width="20px"
                height="20px"
                class="ml-1"
              ></p-icon>
            </span>
          </template>
        </p-input>
      </div>
    </div>
    <Teleport to="body">
      <div
        v-if="local.showMenu"
        class="fixed w-screen h-screen bg-[rgba(12,13,14,0.3)] !z-[9999] backdrop-blur-[4px] top-0 right-0"
        @click="local.showMenu = false"
        :key="mobileSidebarKey"
      >
        <transition name="slide-fade-right" appear>
          <MobileMenu>
            <div
              class="w-full h-screen flex flex-col gap-4 p-4 px-6 bg-gray-iron-700/60 text-white"
            >
              <div class="w-full py-4">
                <nuxt-link to="/" class="text-center" @click="scrollToTop">
                  <TextLogo />
                </nuxt-link>
              </div>
              <nuxt-link to="/" class="hover:opacity-80" @click="scrollToTop">
                Home
              </nuxt-link>
              <nuxt-link
                to="/catalog"
                class="hover:opacity-80"
                @click="scrollToTop"
              >
                Catalogs
              </nuxt-link>
              <nuxt-link
                to="/services"
                class="hover:opacity-80"
                @click="scrollToTop"
              >
                Services
              </nuxt-link>
              <nuxt-link
                to="/facilities"
                class="hover:opacity-80"
                @click="scrollToTop"
              >
                Facilities
              </nuxt-link>
              <nuxt-link
                to="/contact"
                class="hover:opacity-80"
                @click="scrollToTop"
              >
                Contact us
              </nuxt-link>
              <nuxt-link
                to="/integrations"
                class="hover:opacity-80"
                @click="scrollToTop"
              >
                Integrations
              </nuxt-link>
            </div>
          </MobileMenu>
        </transition>
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { vAutoAnimate } from '@formkit/auto-animate';
import { useAuthStore } from '@/store/auth';
import { useCartStore } from '@/store/cart';

const cartStore = useCartStore();

const authStore = useAuthStore();
const currentSelect = ref();

interface Local {
  showMenu: boolean;
  showSelectLanguage: boolean;
  logoutModal: boolean;
  keyword: string;
  showSearch: boolean;
}

const router = useRouter();
const route = useRoute();

const mobileSidebarKey = ref(makeid(24));

const local = reactive<Local>({
  showMenu: false,
  showSelectLanguage: false,
  logoutModal: false,
  keyword: '',
  showSearch: false,
});

const openShoppingCart = () => {
  router.push({
    name: 'shopping-cart',
  });
};

const handleSearch = () => {
  if (!local.keyword) return;
  setTimeout(() => {
    router.push({
      name: 'search',
      query: { search: local.keyword },
    });
  }, 100);
  local.showSearch = false;
};

const handleClickOutside = (event: Event) => {
  if (!currentSelect.value) return;
  const isClickInsideModal = currentSelect.value.contains(event.target);
  if (!isClickInsideModal) {
    local.showSearch = false;
  }
};

onMounted(() => {
  window.addEventListener('click', handleClickOutside);
});

onBeforeMount(() => {
  window.removeEventListener('click', handleClickOutside);
});
</script>

<style scoped lang="scss">
.transition {
  transition: height 0.5s ease;
}
#cart {
  &.shake {
    animation: shakeCart 0.4s ease-in-out forwards;
  }
}

@keyframes shakeCart {
  25% {
    transform: translateX(6px);
  }
  50% {
    transform: translateX(-4px);
  }
  75% {
    transform: translateX(2px);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
