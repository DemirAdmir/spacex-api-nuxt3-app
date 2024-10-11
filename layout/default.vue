<!-- ~/layouts/default.vue -->

<template>
  <NuxtErrorBoundary>
    <NuxtLayout>
      <div class="app-container">
        <!-- Main navigation -->
        <Navbar aria-label="Main navigation" />

        <!-- Main content area -->
        <div class="content" id="main-content" aria-label="Main content">
          <NuxtPage />
        </div>

        <!-- Footer -->
        <Footer />
      </div>
    </NuxtLayout>
  </NuxtErrorBoundary>
</template>

<script setup lang="ts">
import Navbar from "~/components/Navbar.vue";
import Footer from "~/components/Footer.vue";
</script>

<style scoped></style>
