import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import http from 'http';


// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:3000', // 实际请求地址 xxx/api/xxx  => xxx/xxx
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
        // agent: new http.Agent({ keepAlive: true, keepAliveMsecs: 20000 })
      },
    },
  },
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
