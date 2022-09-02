import { defineConfig } from "vite";
import legacy from "@vitejs/plugin-legacy";
import { resolve } from "path";


export default defineConfig({
  plugins: [legacy()],
  server: {
    port: 5173,
  },
  resolve: {
    alias: {
      "@": resolve("./src"),
    },
  },
  build: {
    outDir: "dist",
    sourceMap: true,
    manifest: true,
    rollupOptions: {
      input: "/src/client/main.ts",
    },
  },
});
