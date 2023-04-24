/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      transitionProperty: {
        'nav': 'left, opacity',
        'bg-color': 'backgroundColor',
      },
    }
  },
  darkMode: 'class',
  plugins: [],
}

