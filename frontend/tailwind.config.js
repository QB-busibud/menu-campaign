/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        brand: {
          blue: '#0B68BB',
          'blue-light': '#EBF4FF',
          'blue-card': '#F0F7FF',
          pink: '#FF8499',
          'pink-light': '#FFE8EC',
          green: '#22C55E',
          'green-light': '#DCFCE7',
          gray: '#707070',
          'gray-light': '#F5F5F5',
          'gray-border': '#E5E7EB',
          dark: '#1E293B',
        }
      }
    },
  },
  plugins: [],
}
