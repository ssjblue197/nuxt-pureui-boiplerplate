<template>
  <div class="loading-screen">
    <p>Loading, please wait...</p>
  </div>
</template>

<script setup>
// You can add props or emit events if needed.
</script>

<style scoped>
.loading-screen {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 1.5rem;
  background: #f8f9fa;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 9999;
  transition: opacity 0.3s ease;
}
</style>
