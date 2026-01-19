import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Esta línea le dice a Vite que tu web vive en esa subcarpeta de GitHub
  base: '/primerosejerciciosreact/', 
  plugins: [react()],
  build: {
    outDir: 'docs', // Para que el build vaya a la carpeta que GitHub Pages está leyendo
  }
})