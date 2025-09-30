import react from '@vitejs/plugin-react';

import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  build: {
    target: 'esnext', // allows top-level await
  },
  optimizeDeps: {
    esbuildOptions: {
      target: 'esnext', // ensures deps also compile with ESNext
    },
  },
});
