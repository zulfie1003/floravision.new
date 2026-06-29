/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'fv-bg':     '#0f1c10',
        'fv-bg2':    '#122014',
        'fv-green':  '#2d5a27',
        'fv-accent': '#4a7c3f',
        'fv-light':  '#5e9e51',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      backdropBlur: {
        '18': '18px',
      },
    },
  },
  plugins: [],
}
