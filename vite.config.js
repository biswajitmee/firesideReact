// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'netlify-redirects',
      closeBundle() {
        const outDir = 'dist'
        const redirectsPath = path.join(outDir, '_redirects')
        const content = '/*    /index.html   200\n'

        fs.writeFileSync(redirectsPath, content)
        console.log('✅ Netlify _redirects file written')
      }
    }
  ]
})
