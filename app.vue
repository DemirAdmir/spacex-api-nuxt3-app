<!-- ~/app.vue -->
<template>
  <Navbar aria-label="Main navigation" />

  <!-- Main layout wrapper for page content -->
  <NuxtLayout aria-label="Page layout">
    <!-- Main content area  -->
    <main id="main-content" aria-label="Main content" role="main">
      <NuxtPage />
    </main>
  </NuxtLayout>
</template>

<script setup>
import Navbar from "~/components/Navbar.vue";
</script>

<style scoped></style>
