import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import vueDevTools from "vite-plugin-vue-devtools";
import Components from "unplugin-vue-components/vite";
import { PrimeVueResolver } from "@primevue/auto-import-resolver";

const primevue = () => {
  return Components({
    resolvers: [PrimeVueResolver()],
    dts: "src/types/components.d.ts",
  });
};

export default defineConfig({
  plugins: [vue(), vueJsx(), vueDevTools(), primevue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
