<template>
  <div
    v-if="local.isLoadContent"
    class="w-full flex-1 flex flex-col gap-2 text-gray-500 justify-center items-center min-h-[600px]"
  >
    <div class="loading" />
  </div>
  <div v-else class="w-full flex justify-center py-[100px]">
    <div class="main-content flex flex-col gap-4 rounded-lg p-10 bg-gray-100">
      <span class="text-3xl font-semibold text-neutral-900">{{
        local.pageContent?.title
      }}</span>
      <div
        class="w-full quill-data"
        v-html="transformHTMLQuill(local.pageContent?.content)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { usePageStore } from '@/store/page';
const pageStore = usePageStore();

const route = useRoute();
interface Local {
  pageContent: any;
  isLoadContent: boolean;
}

const local = reactive<Local>({
  pageContent: null,
  isLoadContent: false,
});

const loadPageContent = async (slug: string) => {
  local.isLoadContent = true;
  const { response, isError } = await pageStore.details(String(slug));
  const pageContent = response as any;
  local.pageContent = pageContent ?? null;
  route.query.page = slug;
  local.isLoadContent = false;
};

watch(
  () => route.params?.page,
  () => {
    loadPageContent(String(route.params?.page));
    setTimeout(() => {
      if (document) {
        const mainlayout = document.querySelector('#main-layout');
        mainlayout &&
          mainlayout.scrollTo({
            top: 0,
            behavior: 'smooth',
          });
      }
    }, 100);
  },
  {
    deep: true,
    immediate: true,
  },
);
</script>

<style scoped>
.loading {
  display: inline-block;
  width: 80px;
  height: 80px;
}

.loading:after {
  content: ' ';
  display: block;
  width: 64px;
  height: 64px;
  margin: 8px;
  border-radius: 50%;
  border: 4px solid rgba(0, 0, 0, 0.8);
  border-color: rgba(0, 0, 0, 0.8) transparent rgba(0, 0, 0, 0.8) transparent;
  animation: loading 1.2s linear infinite;
}

@keyframes loading {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
