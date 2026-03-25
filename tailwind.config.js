/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pure-white': '#FFFFFF',
        'off-white': '#F9F9F7',
        'electric-indigo': '#5C6BC0',
        'soft-gold': '#F4B942',
      },
      fontFamily: {
        heading: ['Clash Display', 'Cabinet Grotesk', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
      }
    },
  },
  plugins: [],
}
