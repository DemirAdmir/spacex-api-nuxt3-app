<template>
  <NuxtErrorBoundary>
    <div class="skeleton-loader">
      <div class="skeleton-text" v-for="index in 3" :key="index"></div>
    </div>
  </NuxtErrorBoundary>
</template>

<script setup lang="ts">
"use strict";
</script>

<style scoped>
.skeleton-loader {
  margin-top: 20px;
}

.skeleton-text {
  background: var(
    --skeleton-background
  ); /* Light gray background for light mode */
  border-radius: 4px;
  height: 20px;
  margin: 10px 0;
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}

/* Light mode skeleton style */
:root {
  --skeleton-background: #e0e0e0; /* Light gray background */
}

/* Dark mode skeleton style */
[data-theme="dark"] {
  --skeleton-background: #4a4a4a; /* Dark gray background for skeleton */
}
</style>
