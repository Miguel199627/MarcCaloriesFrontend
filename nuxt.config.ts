import tailwindcss from "@tailwindcss/vite";
import Aura from "@primevue/themes/aura";

export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  ssr: false,
  srcDir: "src/",
  modules: ["@primevue/nuxt-module"],
  css: ["~/assets/css/main.css", "~/assets/css/prime-sakai/styles.scss"],
  vite: {
    plugins: [tailwindcss()],
  },
  primevue: {
    options: {
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: ".app-dark",
        },
      },
    },
  },
});
