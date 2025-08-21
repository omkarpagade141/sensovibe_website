import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,      // ← Change this to your desired open port
    host: '0.0.0.0', // ← Needed to allow external access
  },
});
