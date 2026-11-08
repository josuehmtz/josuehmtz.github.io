import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// El sitio se publica en GitHub Pages desde la carpeta /docs del repositorio.
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: '../docs',
    emptyOutDir: true,
    chunkSizeWarningLimit: 800,
    rollupOptions: {
      output: {
        // antd en su propio archivo: cambia poco y el navegador lo cachea
        manualChunks: { antd: ['antd', '@ant-design/icons'] },
      },
    },
  },
})
