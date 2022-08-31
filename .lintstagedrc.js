module.exports = {
  '**/*.{js,jsx,ts,tsx,cjs,mjs}': ['eslint --fix', 'prettier --write'],
  '**/*.{md,json,html,css,less,scss,yaml,yml}': ['prettier --write'],
}
