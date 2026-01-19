import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/primerosejerciciosreact/', 
  plugins: [react()],
  build: {
    outDir: 'docs', // Asegúrate de que coincida con la carpeta que lee GitHub Pages
  }
})