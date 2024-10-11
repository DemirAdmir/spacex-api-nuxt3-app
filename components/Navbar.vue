<!-- ~/components/Navbar.vue -->
<template>
  <NuxtErrorBoundary>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="container">
        <div class="navbar-brand">
          <!-- Hamburger menu icon for mobile -->
          <a
            role="button"
            class="navbar-burger"
            :class="{ 'is-active': isActive }"
            aria-label="menu"
            aria-expanded="false"
            @click="toggleNavbar"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <!-- Navbar menu items -->
        <div class="navbar-menu" :class="{ 'is-active': isActive }">
          <NuxtLink
            to="/"
            class="navbar-item"
            :class="{ 'is-active': $route.path === '/' }"
            @click="closeNavbar"
          >
            Home
          </NuxtLink>
          <NuxtLink
            to="/savedLaunches"
            class="navbar-item"
            :class="{ 'is-active': $route.path === '/savedLaunches' }"
            @click="closeNavbar"
          >
            Saved Launches
          </NuxtLink>
          <!-- Dark mode toggle button -->
          <button class="button is-light ml-auto" @click="toggleDarkMode">
            {{ isDarkMode ? "Light Mode" : "Dark Mode" }}
          </button>
        </div>
      </div>
    </nav>
  </NuxtErrorBoundary>
</template>

<script setup lang="ts">
"use strict";
import { ref, onMounted } from "vue";

const isActive = ref(false);
const isDarkMode = ref(false);

const toggleNavbar = () => {
  isActive.value = !isActive.value;
};

const closeNavbar = () => {
  isActive.value = false;
};

const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
  const theme = isDarkMode.value ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
};

onMounted(() => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    isDarkMode.value = savedTheme === "dark";
    document.documentElement.setAttribute("data-theme", savedTheme);
  } else {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    if (prefersDark) {
      isDarkMode.value = true;
      document.documentElement.setAttribute("data-theme", "dark");
    }
  }
});
</script>

<style scoped>
/* Navbar base styles */
.navbar {
  background-color: var(--navbar-background-color);
}

/* Navbar item styles */
.navbar-item {
  color: var(--navbar-text-color);
}

.navbar-item.is-active {
  background-color: var(--primary-color);
  color: var(--button-primary-color);
}

/* Hamburger menu icon visibility for mobile */
.navbar-burger {
  display: none;
}

@media (max-width: 768px) {
  .navbar-burger {
    display: block; /* Show hamburger icon on mobile */
  }

  .navbar-menu {
    display: none; /* Hide menu by default */
  }

  .navbar-menu.is-active {
    display: flex; /* Show when active */
    flex-direction: column;
  }
}

/* Light and dark mode styles */
:root {
  --primary-color: #00d1b2;
  --navbar-text-color: #4a4a4a;
  --navbar-background-color: #f5f5f5;
}

[data-theme="dark"] {
  --primary-color: #00d1b2;
  --navbar-text-color: #ffffff;
  --navbar-background-color: #363636;
}
</style>
