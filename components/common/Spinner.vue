<template>
  <div class="spinner"></div>
</template>

<script setup lang="ts"></script>

<style scoped>
.spinner {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: #131316;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
    transform-origin: center;
  }
  100% {
    transform: rotate(360deg);
    transform-origin: center;
  }
}
</style>
