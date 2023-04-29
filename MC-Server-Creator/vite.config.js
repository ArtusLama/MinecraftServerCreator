import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require("path");

// https://vitejs.dev/config/
export default defineConfig({
  base: "",
  build: {
    outDir: "electron/build"
  },
  resolve:{
    alias:{
      "@" : path.resolve(__dirname, './src'),
      "@components" : path.resolve(__dirname, './src/components'),
      "@assets" : path.resolve(__dirname, './src/assets'),
      "@views" : path.resolve(__dirname, './src/views'),
      "@utils" : path.resolve(__dirname, './src/utils'),
      "@electronCode": path.resolve(__dirname, './electron')
    },
  },
  plugins: [vue()]
})
