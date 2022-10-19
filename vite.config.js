import react from '@vitejs/plugin-react'
import { execSync } from 'child_process'
import { resolve } from 'path'
import { defineConfig } from 'vite'

import { version } from './package.json'

export default defineConfig({
  plugins: [react()],
  // 这个 base 是 github workflow 需要的，实际开发时可以为空
  base: '/template-data-management/',
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
