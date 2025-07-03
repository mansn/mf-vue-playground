import { federation } from "@module-federation/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  modules: ["@nuxt/eslint", "@nuxt/test-utils", "@nuxt/ui"],
  vite: {
    build: {
      target: "esnext",
    },
    plugins: [
      federation({
        name: "side-menu",
        filename: "remoteEntry.js",
        exposes: {
          "./SideMenu": "./components/SideMenu.vue",
        },
        shared: {
          vue: {
            singleton: true,
            requiredVersion: "^3.2.0",
          },
          "vue-router": {
            singleton: true,
            requiredVersion: "^4.0.0",
          },
        },
      }),
    ],
  },
});

