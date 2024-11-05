<template>
  <div v-auto-animate>
    <img
      :src="`${(nuxtApp.$environment as any)?.assetsCdn}/images/dark-logo.svg`"
      alt="logo"
      class="h-10 w-auto"
      loading="lazy"
    />
  </div>
</template>

<script setup lang="ts">
import { vAutoAnimate } from '@formkit/auto-animate';
const nuxtApp = useNuxtApp();
</script>

<style scoped></style>
