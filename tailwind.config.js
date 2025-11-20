/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#211E61',
        white: '#FFFFFF',
        transparent: 'transparent',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        elevation: '0 10px 35px rgba(33, 30, 97, 0.15)',
      },
      backgroundImage: {
        'hero-overlay': 'linear-gradient(135deg, rgba(33,30,97,0.95), rgba(33,30,97,0.75))',
      },
    },
  },
  plugins: [],
}

