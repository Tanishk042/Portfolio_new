import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // GitHub Pages serves this repo from a subpath, so built asset URLs
  // must be prefixed with the repo name or they resolve to 404.
  base: '/Portfolio_new/',
  plugins: [react()],
  server: {
    port: 5173,
    open: true,
  },
  build: {
    outDir: 'dist',
  },
})
