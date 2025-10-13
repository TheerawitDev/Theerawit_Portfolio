import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Theerawit_Resume/',
  build: { outDir: 'docs' },    
  plugins: [react()],
})
