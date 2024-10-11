<!-- ~/app.vue -->
<template>
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
</template>

<script setup>
import Navbar from "~/components/Navbar.vue";
import Footer from "~/components/Footer.vue";
</script>

<style scoped></style>
