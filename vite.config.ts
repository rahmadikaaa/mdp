import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Output build ke folder 'dist'
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        // Kita jadikan index.tsx sebagai entry point utama
        main: './index.tsx', 
      },
      output: {
        // Memaksa nama file output menjadi tetap (tidak di-hash) agar mudah dipanggil di PHP
        entryFileNames: 'assets/index.js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name].[ext]'
      }
    }
  }
});