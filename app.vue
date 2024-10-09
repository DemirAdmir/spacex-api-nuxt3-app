<template>
  <NuxtLayout>
    <div>
      <header class="navbar is-primary">
        <div class="container">
          <div class="navbar-brand">
            <Navbar />
            <!-- Global navigation bar -->
          </div>
        </div>
      </header>

      <main class="section">
        <div class="container">
          <NuxtPage />
          <!-- This renders the current page based on the route -->
        </div>
      </main>

      <NuxtRouteAnnouncer />
    </div>
  </NuxtLayout>
</template>

<script setup>
import Navbar from "~/components/Navbar.vue";
</script>

<style scoped>
/* Custom styles can go here if needed */
</style>
