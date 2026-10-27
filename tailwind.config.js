/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          50: '#FDFDFB',
          100: '#FDFBF7', // Primary Canvas
          200: '#F8F3ED', // Surface Elevated
          300: '#EFE7DD',
        },
        gold: {
          300: '#DFCCA6',
          400: '#D4AF37', // Metallic Gold
          500: '#C5A880', // Primary Champagne Gold
          600: '#A3835B', // Deep Gold
        },
        sage: {
          100: '#F0F3EF',
          400: '#9EB097',
          500: '#7D8D76', // Botanical Sage
          700: '#4D5849',
        },
        charcoal: {
          700: '#4A453E',
          800: '#36332E',
          900: '#2D2A26', // Primary Text
          muted: '#736B63',
        },
        blush: {
          100: '#FAF4F2',
          300: '#F3E2DE',
          500: '#E8C2BA',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Playfair Display', 'serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        cursive: ['Alex Brush', 'cursive'],
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite',
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
}

