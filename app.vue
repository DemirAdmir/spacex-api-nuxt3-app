<!-- ~/app.vue -->
<template>
  <NuxtErrorBoundary>
    <div class="app-container">
      <Navbar aria-label="Main navigation" />

      <!-- Main layout wrapper for page content -->
      <main id="main-content" aria-label="Main content" role="main">
        <NuxtLayout aria-label="Page layout">
          <NuxtPage />
        </NuxtLayout>
      </main>

      <Footer />
    </div>
  </NuxtErrorBoundary>
</template>

<script setup>
"use strict";
import Navbar from "~/components/Navbar.vue";
import Footer from "~/components/Footer.vue";
</script>

<style lang="scss" scoped>
@import "../assets/styles/main.scss"; // Import your main styles

main {
  flex: 1; /* Allow this area to grow and take up available space */
}

/* Footer styles */
footer {
  padding: 20px; /* Add some padding for visual appeal */
  background-color: var(--navbar-background-color);
  color: var(--navbar-item-color);
  width: 100%; /* Full width */
  text-align: center; /* Center footer text */
}
</style>
