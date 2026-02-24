import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  return {
    plugins: [react(), tailwindcss(), {
      name: 'html-transform',
      transformIndexHtml(html) {
        // Only inject the script if the command is 'build' (production)
        if (command === 'build') {
          return html.replace(
            '</head>',
            `<script defer src="/stats.js" data-website-id="d3efc1f6-4929-4b1d-90c9-c51bae19b01a"></script></head>`
          )
        }
        return html
      },
    },],
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            'react-vendor': ['react', 'react-dom'],
            'pdf-vendor': ['@react-pdf/renderer'],
          },
        },
      },
    },
  }
})
