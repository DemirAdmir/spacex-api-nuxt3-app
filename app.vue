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

<style scoped></style>
