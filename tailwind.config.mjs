/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'boda-black': '#050505',
        'boda-primary': '#d4a154',
        'boda-secondary': '#f3c2a5',
        'boda-accent': '#f8c97c',
        'boda-warm': '#f1b66a',
        'boda-gold': '#e5a55d',
        'boda-vanilla': '#FFF9F0',
        'boda-border': '#e5a55d', // Para bordes brillantes
      },
      fontFamily: {
        'cine': ['"Cinzel"', 'serif'],
        'hand': ['"Great Vibes"', 'cursive'],
        'body': ['"Montserrat"', 'sans-serif'],
      },
      animation: {
        'heartbeat': 'heartbeat 2s infinite',
        'spin-slow': 'spin 15s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 3s infinite',
        'pulse-glow': 'pulse-glow 2s infinite',
        'bounce-soft': 'bounce-soft 2s infinite',
        'slide-in-right': 'slideInRight 0.8s ease-out',
        'slide-in-left': 'slideInLeft 0.8s ease-out',
        'zoom-in': 'zoomIn 0.6s ease-out',
        'fade-in-up': 'fadeInUp 0.8s ease-out',
      },
      keyframes: {
        heartbeat: {
          '0%, 100%': { transform: 'scale(1)', filter: 'drop-shadow(0 0 10px rgba(212, 161, 84, 0.7))' },
          '50%': { transform: 'scale(1.15)', filter: 'drop-shadow(0 0 25px rgba(212, 161, 84, 0.9))' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-25px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200px 0' },
          '100%': { backgroundPosition: '200px 0' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 5px rgba(212, 161, 84, 0.5)' },
          '50%': { boxShadow: '0 0 20px rgba(212, 161, 84, 0.8)' },
        },
        'bounce-soft': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100px)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-100px)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        zoomIn: {
          '0%': { transform: 'scale(0.8)', opacity: 0 },
          '100%': { transform: 'scale(1)', opacity: 1 },
        },
        fadeInUp: {
          '0%': { transform: 'translateY(30px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
      },
      boxShadow: {
        'gold': '0 0 30px rgba(212, 161, 84, 0.4)',
        'gold-lg': '0 0 50px rgba(212, 161, 84, 0.6)',
        'inner-gold': 'inset 0 0 20px rgba(212, 161, 84, 0.3)',
      },
    },
  },
  plugins: [],
}