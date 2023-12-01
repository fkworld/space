/* eslint-disable import/no-default-export */
import { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.tsx'],
  theme: {
    spacing: {
      1: '1px',
      2: '2px',
      4: '4px',
      8: '8px',
      16: '16px',
      32: '32px',
      64: '64px',
      128: '128px',
      256: '256px',
    },
    extend: {
      colors: {
        split: '#0000001A',
      },
    },
  },
  plugins: [],
} satisfies Config;
