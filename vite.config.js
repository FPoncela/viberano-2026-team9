import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // Se publica como preview en GitHub Pages bajo /viberano-2026-team9/app/,
  // junto a la landing de demo/. La publicacion "oficial" es del Sprint 4.
  base: '/viberano-2026-team9/app/',
  plugins: [react(), tailwindcss()],
  server: {
    // Permite acceder al servidor de desarrollo a traves del tunel de
    // Cloudflare (trycloudflare.com) para probarlo en movil sin cambios de firewall.
    allowedHosts: ['.trycloudflare.com'],
  },
})
