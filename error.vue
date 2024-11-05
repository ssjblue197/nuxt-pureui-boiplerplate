<template>
  <div class="w-screen h-screen bg-white flex justify-center items-center">
    <div class="flex flex-col gap-8 justify-center items-center">
      <span class="font-bold text-4xl"> 404 </span>
      <div class="flex flex-col justify-center items-center gap-4">
        <span class="text-center">OOPS! PAGE NOT BE FOUND</span>
        <span class="text-[#787878] text-center max-w-lg"
          >Sorry but the page you are looking for does not exist, have been
          removed. name changed or is temporarily unavailable</span
        >
        <nuxt-link to="/" class="text-center">
          <p-button variant="primary" pills class="bg-gray-iron-900 text-white">
            Back to homepage
          </p-button>
        </nuxt-link>
      </div>
    </div>
    <slot />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: '404',
});
</script>

<style lang="scss" scoped></style>
