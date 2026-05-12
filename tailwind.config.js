/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#FF7A00",
          glow: "#FF9A3D",
        },
        secondary: "#4B1FA7",
        pink: "#FF4FBF",
        lime: "#D6FF57",
        cream: "#FFF9F4",
        gray: {
          soft: "#E8E8E8",
        },
        dark: {
          bg: "#0E0E11",
          card: "#17171C",
        }
      },
      backgroundImage: {
        'gradient-festival': 'linear-gradient(to right, #FF7A00, #FF4FBF)',
        'gradient-purple-orange': 'linear-gradient(to right, #4B1FA7, #FF7A00)',
        'gradient-lime-orange': 'linear-gradient(to right, #D6FF57, #FF7A00)',
        'gradient-dark-glass': 'linear-gradient(to bottom, #17171C, #4B1FA7)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: 1, filter: 'brightness(1)' },
          '50%': { opacity: 0.8, filter: 'brightness(1.2)' },
        }
      }
    },
  },
  plugins: [],
}
