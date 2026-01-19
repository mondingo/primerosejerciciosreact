export default defineConfig({
  base: '/Ejercicios-variados-con-React/', 
  build: {
    outDir: 'docs', // Ahora Vite escribirá en /docs en lugar de /dist
  },
  plugins: [react()],
})