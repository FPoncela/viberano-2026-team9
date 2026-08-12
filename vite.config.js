import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    // Permite acceder al servidor de desarrollo a traves del tunel de
    // Cloudflare (trycloudflare.com) para probarlo en movil sin cambios de firewall.
    allowedHosts: ['.trycloudflare.com'],
  },
})
