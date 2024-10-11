<!-- ~/layouts/default.vue -->
<template>
  <div>
    <Navbar />
    <NuxtPage />
    <!-- This renders the current page component based on the route -->
  </div>
</template>

<script setup lang="ts">
import Navbar from "~/components/Navbar.vue";

<style scoped>
</style>
