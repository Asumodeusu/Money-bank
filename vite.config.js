import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import { VitePWA } from 'vite-plugin-pwa';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})

// ПЛАГИН ДЛЯ МОБИЛКИ?
// export default {
//   plugins: [
//     VitePWA({
//       registerType: 'autoUpdate',
//       workbox: {
//         globPatterns: ['**/*.{js,css,html,ico,png,svg}']
//       }
//     })
//   ]
// }