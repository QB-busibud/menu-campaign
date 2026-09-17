/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        poppins: ['Poppins', 'Inter', 'sans-serif'],
      },
      colors: {
        brand: {
          blue: '#0066FF',
          'blue-dark': '#1877F2',
          'blue-light': '#EFF6FF',
          'blue-border': '#DBEAFE',
          'blue-text': '#1D4ED8',
          green: '#10B981',
          'green-dark': '#00C853',
          'green-light': '#ECFDF5',
          'green-text': '#065F46',
          canvas: '#F8F9FA',
          border: '#E5E7EB',
          text: '#111827',
          muted: '#6B7280',
          placeholder: '#9CA3AF',
        }
      }
    },
  },
  plugins: [],
}
