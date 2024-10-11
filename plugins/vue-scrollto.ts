import { defineNuxtPlugin } from "#app";
import VueScrollTo from "vue-scrollto";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueScrollTo, {
    duration: 500, // Duration of the scroll
    easing: "ease-in-out", // Easing function
    offset: -100, // Offset from the target
  });
});
