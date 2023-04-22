import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require("path");

// https://vitejs.dev/config/
export default defineConfig({
  base: "",
  build: {
    outDir: "electron"
  },
  resolve:{
    alias:{
      "@" : path.resolve(__dirname, './src'),
      "@components" : path.resolve(__dirname, './src/components'),
      "@assets" : path.resolve(__dirname, './src/assets'),
      "@views" : path.resolve(__dirname, './src/views'),
    },
  },
  plugins: [vue()],
})
