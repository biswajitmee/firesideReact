import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { writeFileSync, mkdirSync } from 'fs';

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'netlify-redirect-plugin',
      closeBundle: () => {
        try {
          mkdirSync('dist', { recursive: true });
          writeFileSync('dist/_redirects', '/* /index.html 200');
          console.log('✅ Netlify _redirects file generated');
        } catch (error) {
          console.error('❌ Error writing _redirects:', error);
        }
      }
    }
  ]
});
