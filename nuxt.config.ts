// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";
export default defineNuxtConfig({
  devtools: { enabled: true },
  build: { transpile: ["vuetify"] },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
  ],
  vite: { vue: { template: { transformAssetUrls } } },
  runtimeConfig: {
    public: {
      API_KEY: process.env.API_KEY,
      API_HOST: process.env.API_HOST,
      IMDB_HOST: process.env.IMDB_HOST,
    },
  },
});
