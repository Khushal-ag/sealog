import { fileURLToPath } from "url";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import eslint from "vite-plugin-eslint";
import vitePluginPrettier from "vite-plugin-prettier";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint(), vitePluginPrettier()],
  resolve: {
    alias: {
      // for TypeScript path alias import like : @/x/y/z
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
