<template>
  <div>OAuth</div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'clear',
});
const route = useRoute();
const query = route.query;

if (query) {
  window.opener.postMessage(query);
  window.close();
}
</script>
