<!-- ~/layouts/default.vue -->
<template>
  <div>
    <!-- Main navigation -->
    <Navbar aria-label="Main navigation" />

    <!-- Main content area -->
    <main id="main-content" aria-label="Main content">
      <NuxtPage />
      <!-- This renders the current page component based on the route -->
    </main>
  </div>
</template>

<script setup lang="ts">
import Navbar from "~/components/Navbar.vue";
</script>

<style scoped></style>
