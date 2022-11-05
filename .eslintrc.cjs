/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  env: {
    node: true,
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'prettier',
  ],
  plugins: ['@typescript-eslint', 'simple-import-sort', 'import', 'react'],
  rules: {
    // import/export 排序，参考 https://github.com/lydell/eslint-plugin-simple-import-sort#example-configuration
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    // 禁用 export default
    'import/no-default-export': 'error',
    // react 组件自闭合
    'react/self-closing-comp': 'error',
  },
  overrides: [
    {
      files: ['./vite.config.js', './src/pages/*/index.ts'],
      rules: { 'import/no-default-export': 'off' },
    },
  ],
}
