<!-- ~/layouts/default.vue -->
<template>
  <div class="app-container">
    <!-- Main navigation -->
    <Navbar aria-label="Main navigation" />

    <!-- Main content area -->
    <div class="content" id="main-content" aria-label="Main content">
      <NuxtPage />
      <!-- This renders the current page component based on the route -->
    </div>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
import Navbar from "~/components/Navbar.vue";
import Footer from "~/components/Footer.vue";
</script>

<style scoped>
/* You can add global styles here if needed */
</style>

<script setup lang="ts">
import Navbar from "~/components/Navbar.vue";
import Footer from "~/components/Footer.vue";
</script>

<style scoped></style>

<script setup lang="ts">
import Navbar from "~/components/Navbar.vue";
import Footer from "~/components/Footer.vue";
</script>

<style scoped></style>
