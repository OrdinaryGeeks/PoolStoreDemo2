import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  build:{
    outDir:'../PoolStoreAPI/PoolStoreApi/wwwroot'
  },
  plugins: [react()],
  server: {
    port: 3000,
  }
})
