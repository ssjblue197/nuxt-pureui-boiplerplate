<template>
  <div class="w-full flex flex-col mt-10">
    <span
      ref="currentSelect"
      class="w-full relative after:block after:absolute after:w-full after:top-[calc(100%)] after:left-0 after:z-[1] after:h-4"
    >
      <p-input
        variant="primary"
        placeholder="I am looking for..."
        class="!h-[48px] bg-background-base-light rounded-full border-border-base w-full select-none"
        pills
        hasPrepend
        hasAppend
        @focus="local.show = true"
        v-model="local.keyword"
        @keyup.enter="handleSearch"
        @input="handleSuggestSearch(false)"
        @click.stop="
          () => {
            local.show = true;
            handleSuggestSearch();
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
                handleSuggestSearch(false);
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
      <transition name="fade" appear>
        <div
          v-if="local.show"
          class="bg-white w-full absolute top-[calc(100%+16px)] left-0 rounded-[20px] flex flex-row border border-background-base overflow-hidden max-h-[700px] h-[80vh] shadow-[0_1px_2px_0_rgba(0,0,0,0.06), 0_1px_3px_0_rgba(0,0,0,0.1)] z-20"
        >
          <div
            class="basis-2/5 flex flex-col gap-2 bg-background-base-light p-6"
          >
            <div class="w-full flex items-center justify-between">
              <span
                class="text-base md:text-2xl leading-8 font-bold text-text-primary"
              >
                Recent <span class="hidden md:inline">search</span>
              </span>
              <span
                class="text-sm leading-5 font-semibold text-gray-iron-950 select-none cursor-pointer hover:underline active:opacity-80"
                @click="
                  () => {
                    searchStore.history = [];
                  }
                "
                >Clear <span class="hidden md:inline">all</span></span
              >
            </div>
            <div
              class="flex flex-col divide-y divide-border-base flex-1 overflow-y-auto"
            >
              <div
                class="w-full flex items-center gap-2 py-3 cursor-pointer hover:bg-gray-200"
                v-for="(i, idx) in searchStore.history"
                :key="idx"
                @click="
                  () => {
                    local.keyword = i;
                    handleSearch();
                  }
                "
              >
                <p-icon name="search" width="24px" height="24px"></p-icon>
                <span
                  class="text-sm leading-5 font-normal text-icon-secondary"
                  >{{ i }}</span
                >
                <p-icon
                  width="24px"
                  height="24px"
                  class="!text-icon-default svg-line hover:!text-primary cursor-pointer ml-auto"
                  name="close"
                  @click.stop="
                    () => {
                      searchStore.history.splice(idx, 1);
                    }
                  "
                />
              </div>
            </div>
          </div>
          <div
            class="flex-1 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 p-6 gap-6 bg-white h-full overflow-x-hidden overflow-y-auto"
            v-if="!local.searching"
          >
            <ProductItem
              v-for="item in local.items"
              :key="item?.id"
              :data="item"
            />
          </div>
          <div
            class="flex-1 grid grid-cols-2 xl:grid-cols-3 p-6 gap-6 bg-white h-full overflow-x-hidden overflow-y-auto"
            v-else
          >
            <div
              class="flex flex-col gap2 border rounded-3xl border-border-base"
              v-for="k in 4"
              :key="k"
            >
              <div
                class="w-full aspect-square rounded-t-3xl bg-gray-100 animate-pulse"
              ></div>
              <div class="w-full flex flex-col gap-2 p-4">
                <div
                  class="h-6 w-[80%] rounded-lg bg-gray-100 animate-pulse"
                ></div>
                <div
                  class="h-6 w-[50%] rounded-lg bg-gray-100 animate-pulse"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </span>
  </div>
</template>

<script setup lang="ts">
import { useNavigationStore } from '~/store/navigation';
import { useSearchStore } from '~/store/search';

const searchStore = useSearchStore();
const emit = defineEmits(['search']);

interface MetaInfo {
  name?: string;
  description?: string;
}
interface ProductCollection {
  data?: ResponsePaginate<Product>;
  attributes?: Array<AttributeOption>;
  meta?: MetaInfo;
}
interface Local {
  show: boolean;
  loading: boolean;
  keyword: string;
  items?: Array<Product>;
  filter: { filter?: ProductFilter } & Paginate;
  searching: boolean;
}

const local: Local = reactive({
  show: false,
  loading: false,
  keyword: '',
  items: [],
  filter: {
    page: 1,
    limit: 6,
    search: '',
  },
  searching: false,
});

interface Props {
  hideBrand?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  hideBrand: false,
});

const inputSearch = ref();
const currentSelect = ref();
const handleClickOutside = (event: Event) => {
  if (!currentSelect.value) return;
  const isClickInsideModal = currentSelect.value.contains(event.target);
  if (!isClickInsideModal) {
    local.show = false;
  }
};

const handleSearch = () => {
  if (local.keyword) {
    emit('search', local.keyword);
    local.show = false;
    if (searchStore.history.includes(local.keyword)) {
      searchStore.history.splice(searchStore.history.indexOf(local.keyword), 1);
    }
    searchStore.history.unshift(local.keyword);
  }
};

const handleSuggestSearch = debounce(async (initial: boolean = true) => {
  //TODO: handle suggest search
  if (!local.keyword) {
    if (!initial) {
      emit('search', local.keyword);
      local.show = false;
    }
  } else {
    try {
      local.searching = true;
      local.filter = {
        ...local.filter,
        search: local.keyword,
      };

      const { data, error } = await searchStore.all(local.filter as any);

      if (!error.value) {
        const items = (data.value as ProductCollection)?.products?.data;
        if (Array.isArray(items) && items.length > 0) {
          local.items = [...items];
        }
      }
    } catch (error) {
      console.warn(error);
    } finally {
      local.searching = false;
    }
  }
}, 500);

onMounted(() => {
  window.addEventListener('click', handleClickOutside);
});

onBeforeMount(() => {
  window.removeEventListener('click', handleClickOutside);
});
</script>

<style scoped></style>
