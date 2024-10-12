// nuxt.config.ts

import { defineNuxtConfig } from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@pinia/nuxt", "@nuxtjs/sitemap"],
  sitemap: {
    hostname: "https://yourdomain.com", // Replace with your actual domain
    gzip: true, // Optional: to enable gzip compression
    routes: [
      "/launches",
      "/saved-launches",
      // Additional dynamic routes can be added here
    ],
    defaults: {
      changefreq: "daily", // Change frequency for each URL
      priority: 1, // Priority of each URL
      lastmod: new Date().toISOString(), // Last modified date
    },
  },
  typescript: {
    strict: true,
  },
  runtimeConfig: {
    mongoUri: process.env.MONGODB_URI,
  },
  css: ["~/assets/styles/main.scss"],
  plugins: ["~/plugins/vue-toastification.ts", "~/plugins/vue-scrollto.ts"],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          implementation: require("sass"), // Use Dart Sass explicitly
        },
      },
    },
  },
  head: {
    meta: [
      {
        "http-equiv": "Content-Security-Policy",
        content:
          "default-src 'self'; img-src 'self' data:; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline';",
      },
    ],
  },
});
