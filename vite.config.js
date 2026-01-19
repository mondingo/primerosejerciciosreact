export default defineConfig({
  base: '/primerosejerciciosreact/', 
  build: {
    outDir: 'docs', // Ahora Vite escribirá en /docs en lugar de /dist
  },
  plugins: [react()],
})