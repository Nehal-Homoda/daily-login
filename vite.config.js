import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  base: process.env.NODE_ENV === "production" ? "./" : "./",
  server: {
    host: true,
    port: 8080
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
              @use "@/assets/style/sass/abstracts" as *;
        `,
      },
    },
  },
})
