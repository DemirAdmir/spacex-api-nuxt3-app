import { defineNuxtConfig } from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@pinia/nuxt"],
  typescript: {
    strict: true,
  },
  runtimeConfig: {
    mongoUri: process.env.MONGODB_URI,
  },
});
