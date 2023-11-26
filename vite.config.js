import react from '@vitejs/plugin-react'
import { rollupNodePolyFill } from 'rollup-plugin-node-polyfills'
import { fileURLToPath } from 'url'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    global: {},
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      './runtimeConfig': './runtimeConfig.browser',
    },
  },
  build: {
    outDir: 'build',
    rollupOptions: {
      plugins: [rollupNodePolyFill()],
    },
  },
})
