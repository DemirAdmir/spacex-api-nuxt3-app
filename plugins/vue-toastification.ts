// ~/plugins/vue-toastification.ts
import { defineNuxtPlugin } from "#app";
import Toast, { type PluginOptions, POSITION } from "vue-toastification"; // Import POSITION enum
import "vue-toastification/dist/index.css";

export default defineNuxtPlugin((nuxtApp) => {
  const options: PluginOptions = {
    // Use POSITION enum for the position value
    position: POSITION.TOP_RIGHT,
    timeout: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
  };

  nuxtApp.vueApp.use(Toast, options);
});
