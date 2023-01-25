/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'hero-btn-primary': '#6366f1',
        'hero-btn-secondary': '#4044ee',
        'fundoColors': '#eeeeee',
        'footerColor': '#0b0f19',
      }
    },
  },
  plugins: [
  
  ],
}