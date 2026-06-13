import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        pearl: {
          50: '#FAFAF8',
          100: '#F7F2EA',
          200: '#F0E8D8',
          300: '#E5D9C4',
          400: '#D4C4A8',
          500: '#C9A96E',
          600: '#B8924E',
          700: '#9A7840',
          800: '#7D6135',
          900: '#2D2520',
          950: '#1C1714',
        },
        cream: '#F5EFE6',
        beige: '#E8DDD0',
        gold: {
          DEFAULT: '#C9A96E',
          light: '#DFC99A',
          dark: '#A88A52',
        },
      },
      fontFamily: {
        display: ['var(--font-cormorant)', 'Georgia', 'serif'],
        body: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '2xs': '0.625rem',
        '7xl': '4.5rem',
        '8xl': '6rem',
        '9xl': '8rem',
        '10xl': '10rem',
      },
      letterSpacing: {
        widest: '0.3em',
        'ultra-wide': '0.5em',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'shimmer': 'shimmer 2s infinite',
        'float': 'float 6s ease-in-out infinite',
        'grain': 'grain 8s steps(10) infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        grain: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '10%': { transform: 'translate(-5%, -10%)' },
          '20%': { transform: 'translate(-15%, 5%)' },
          '30%': { transform: 'translate(7%, -25%)' },
          '40%': { transform: 'translate(-5%, 25%)' },
          '50%': { transform: 'translate(-15%, 10%)' },
          '60%': { transform: 'translate(15%, 0%)' },
          '70%': { transform: 'translate(0%, 15%)' },
          '80%': { transform: 'translate(3%, 35%)' },
          '90%': { transform: 'translate(-10%, 10%)' },
        },
      },
      backgroundImage: {
        'pearl-gradient': 'linear-gradient(135deg, #F7F2EA 0%, #EDE3D4 50%, #E0D0B8 100%)',
        'gold-gradient': 'linear-gradient(135deg, #DFC99A 0%, #C9A96E 50%, #A88A52 100%)',
        'dark-gradient': 'linear-gradient(135deg, #2D2520 0%, #1C1714 100%)',
      },
      boxShadow: {
        'pearl': '0 4px 30px rgba(201, 169, 110, 0.15)',
        'pearl-lg': '0 10px 60px rgba(201, 169, 110, 0.2)',
        'glass': '0 8px 32px rgba(44, 37, 32, 0.1)',
        'premium': '0 25px 80px rgba(44, 37, 32, 0.12)',
      },
      backdropBlur: {
        xs: '2px',
      },
      transitionTimingFunction: {
        'expo-out': 'cubic-bezier(0.19, 1, 0.22, 1)',
        'expo-in-out': 'cubic-bezier(0.87, 0, 0.13, 1)',
      },
      screens: {
        xs: '480px',
      },
    },
  },
  plugins: [],
};

export default config;
