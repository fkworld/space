/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        around: '0 0 12px 0 rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
}
