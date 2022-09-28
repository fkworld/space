import react from '@vitejs/plugin-react'
import { execSync } from 'child_process'
import { resolve } from 'path'
import { defineConfig } from 'vite'

import { version } from './package.json'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src/'),
    },
  },
  define: {
    __APP_VERSION__: JSON.stringify(version),
    __APP_COMMIT_HASH__: JSON.stringify(execSync('git log --pretty=format:"%h" -1').toString()),
    __APP_COMMIT_DATE__: JSON.stringify(execSync('git log --pretty=format:"%ai" -1').toString()),
  },
  server: {
    open: true,
    host: true,
    port: 2077,
  },
})
