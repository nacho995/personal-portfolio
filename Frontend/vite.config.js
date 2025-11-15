import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    historyApiFallback: {
      rewrites: [
        { from: /^\/proyectos/, to: '/index.html' },
        { from: /./, to: '/index.html' }
      ]
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
    outDir: 'dist',
  },
  preview: {
    port: 5173,
    historyApiFallback: {
      rewrites: [
        { from: /^\/proyectos/, to: '/index.html' },
        { from: /./, to: '/index.html' }
      ]
    }
  },
  base: '/',
  publicDir: 'public',
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.js'
  }
})
