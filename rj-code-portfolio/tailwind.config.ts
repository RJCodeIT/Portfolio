import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/containers/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: '#8a2be2',
          light: '#9d4edd',
          dark: '#6a0dad',
        },
        secondary: {
          DEFAULT: '#4b0082',
          light: '#5a189a',
          dark: '#3c096c',
        },
        accent: {
          DEFAULT: '#191970',
          light: '#240090',
          dark: '#10002b',
        },
      },
      boxShadow: {
        'glow-primary': '0 0 20px rgba(138, 43, 226, 0.5), 0 0 40px rgba(138, 43, 226, 0.3)',
        'glow-secondary': '0 0 20px rgba(75, 0, 130, 0.5), 0 0 40px rgba(75, 0, 130, 0.3)',
        'glow-accent': '0 0 15px rgba(25, 25, 112, 0.4)',
        'inner-glow': 'inset 0 0 30px rgba(138, 43, 226, 0.2)',
        'card-hover': '0 20px 60px -10px rgba(138, 43, 226, 0.4)',
        'card-3d': '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 30px rgba(138, 43, 226, 0.3)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-primary': 'linear-gradient(135deg, #8a2be2 0%, #4b0082 50%, #191970 100%)',
        'gradient-primary-vertical': 'linear-gradient(180deg, #8a2be2 0%, #4b0082 50%, #191970 100%)',
        'shimmer': 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        cardSlideUp: {
          '0%': { opacity: '0', transform: 'translateY(50px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(138, 43, 226, 0.5)' },
          '50%': { boxShadow: '0 0 40px rgba(138, 43, 226, 0.8)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-out forwards',
        fadeInUp: 'fadeInUp 0.5s ease-out forwards',
        slideDown: 'slideDown 0.6s ease-out forwards',
        cardSlideUp: 'cardSlideUp 0.5s ease-out forwards',
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-fast': 'float 4s ease-in-out infinite',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        shimmer: 'shimmer 2s infinite',
        glow: 'glow 3s ease-in-out infinite',
        slideInLeft: 'slideInLeft 0.6s ease-out forwards',
        slideInRight: 'slideInRight 0.6s ease-out forwards',
        scaleIn: 'scaleIn 0.5s ease-out forwards',
        gradient: 'gradient 8s ease infinite',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
} satisfies Config;
