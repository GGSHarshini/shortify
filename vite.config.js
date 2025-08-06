import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,       // force port 3000
    strictPort: true  // throw error if 3000 is busy (won’t auto-switch)
  }
})

