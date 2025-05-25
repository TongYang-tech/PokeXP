import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  base: '/pokex',
  build: {
    outDir: 'build'
  },
  server: {
    port: 3000,
    proxy: {
      '^.*/api/': {
        target: 'http://localhost:8080/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    },
    open: true
  },
  preview: {
    port: 3000,
    proxy: {
      '^.*/api/': {
        target: 'http://localhost:8080/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  plugins: [react(), tsconfigPaths()]
})
