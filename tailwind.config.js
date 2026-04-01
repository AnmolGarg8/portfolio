/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: '#0A0A0F',
          card: 'rgba(20, 20, 30, 0.4)',
          border: 'rgba(255, 255, 255, 0.05)',
        },
        cyan: {
          glow: '#00F5FF',
          DEFAULT: '#00F5FF',
        },
        violet: {
          neon: '#9B59FF',
          DEFAULT: '#9B59FF',
        },
        gold: {
          pulse: '#FFD700',
          DEFAULT: '#FFD700',
        }
      },
      fontFamily: {
        heading: ['Syne', 'sans-serif'],
        body: ['Space Grotesk', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'dark-grad': 'linear-gradient(to bottom right, #0A0A0F, #050508)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
