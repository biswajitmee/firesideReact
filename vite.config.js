// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
// vite.config.js


// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import fs from 'fs'
// import path from 'path'

// export default defineConfig({
//   base: '/', // <--- VERY IMPORTANT
//   plugins: [
//     react(),
//     {
//       name: 'netlify-redirects',
//       closeBundle() {
//         const outDir = 'dist'
//         const redirectsPath = path.join(outDir, '_redirects')
//         const content = '/*    /index.html   200\n'

//         fs.writeFileSync(redirectsPath, content)
//         console.log('✅ Netlify _redirects file written')
//       }
//     }
//   ]
// })



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
