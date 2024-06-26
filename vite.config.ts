import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'
import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: "/portfolio--/",
  resolve: {
    alias: {
      // '@': fileURLToPath(new URL('@/src', import.meta.url)),
      "@": path.resolve(__dirname, "./src"),
    }
  }
})
