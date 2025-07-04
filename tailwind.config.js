/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF5252',
        secondary: '#4ECDC4',
    },
    backgroundColor: {
      primary:"#FF5252",
    }
  },
  },
  plugins: [],
}

