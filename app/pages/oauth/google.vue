<template>
  <div>OAuth</div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default',
});
const route = useRoute();
const query = route.query;

if (query) {
  window.opener.postMessage(query);
  window.close();
}
</script>
