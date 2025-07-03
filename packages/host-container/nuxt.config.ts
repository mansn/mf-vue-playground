import { federation } from "@module-federation/vite";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    entry: "./app/entry.async.ts",
  },
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  modules: ["@nuxt/eslint", "@nuxt/test-utils"],
  // experimental: {
  //   asyncEntry: true,
  // }, // Optional: explicitly set the entry if needed
  srcDir: "src",
  vite: {
    build: {
      target: "esnext",
    },
    plugins: [
      federation({
        name: "host-container",
        remotes: {
          remoteApp: "http://localhost:5001/remoteEntry.js",
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
