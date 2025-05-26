/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#0A1128',
          light: '#132043',
          dark: '#060C1D',
        },
        accent: {
          DEFAULT: '#C0C0C0',
          light: '#D9D9D9',
          dark: '#A7A7A7',
        },
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
      },
    },
  },
  plugins: [],
};