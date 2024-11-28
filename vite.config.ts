import childProcess from "node:child_process";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  // 这个 base 是 github workflow 需要的，实际开发时可以为空
  // 特别注意，base 还影响到路由构建，需要要给 BrowserRouter 组件增加 basename props
  base: "/space/",
  define: {
    __APP_COMMIT_HASH__: JSON.stringify(childProcess.execSync('git log --pretty=format:"%h" -1').toString()),
    __APP_COMMIT_DATE__: JSON.stringify(childProcess.execSync('git log --pretty=format:"%ai" -1').toString()),
  },
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
  server: {
    open: true,
    host: true,
    port: 2077,
    strictPort: true,
  },
  build: {
    assetsDir: ".",
  },
});
