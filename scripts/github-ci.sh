npm install -g pnpm
pnpm install --prod
pnpm build
# 为了解决 react-router 在 github pages 中的刷新后 404 问题，所以需要 copy 出一个 404.html 文件
cp dist/index.html dist/404.html