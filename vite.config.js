import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig( {
  plugins: [ react() ],

  // Removing the source map warnings in the browser
  css: {
    devSourcemap: true
  }

} );