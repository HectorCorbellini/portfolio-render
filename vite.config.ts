import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
      },
    },
  },
  build: {
    // Increase the warning limit for chunk size
    chunkSizeWarningLimit: 1000, // in kBs (default is 500)
    
    rollupOptions: {
      output: {
        // Customize manual chunks to better organize your code
        manualChunks: {
          // Group React and related packages
          react: ['react', 'react-dom', 'react-toastify'],
          // Group UI components
          ui: ['lucide-react'],
          // You can add more groups as needed
        },
      },
    },
  },
});
