/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{js,jsx,ts,tsx}', './src/components/**/*.{js,jsx,ts,tsx}'],
  safelist: ['opacity-100', 'opacity-0', 'top-0', 'top-14', 'top-24'],
  theme: {
    extend: {
      colors: {
        darker: {
          700: '#1d1d1d',
          800: '#171717',
          900: '#030303'
        }
      }
    }
  },
  plugins: []
};
