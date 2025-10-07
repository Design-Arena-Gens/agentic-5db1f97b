/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        neutral: {
          950: '#090909'
        },
        apple: {
          50: '#f9f9fb',
          100: '#f5f5f7',
          200: '#ebebf0',
          800: '#1c1c1e'
        }
      },
      fontFamily: {
        sf: ['"SF Pro Text"', '"SF Pro Display"', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        card: '0 20px 45px -30px rgba(15, 15, 15, 0.5)'
      }
    }
  },
  plugins: []
};
