import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(),react()],
   server: {
    host: '0.0.0.0', // allow access from any device on the network
    port: 5173       // or change to 3000 if you prefer
  }
})
