import { blackA, grass } from '@radix-ui/colors';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ...blackA,
        ...grass,
      },
    },
  },
  plugins: [],
};
