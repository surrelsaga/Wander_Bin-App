import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Wander_Bin-App/',
  server: {
    proxy: {
      '/api/esp32': {
        target: 'http://192.168.4.1',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/esp32/, '')
      }
    }
  }
})
