import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-black': '#000000',
        'charcoal-grey-1': '#0A0A0A',
        'charcoal-grey-2': '#111111',
        'charcoal-grey-3': '#161616',
        'sub-panel-1': '#161616',
        'sub-panel-2': '#1D1D1D',
        'neon-red-1': '#FF3300',
        'neon-red-2': '#FF3B20',
        'neon-red-3': '#FF2400',
        'text-main': '#FFFFFF',
        'text-dimmed': '#BFBFBF',
        'glow-layer': 'rgba(255, 60, 0, 0.6)',
      },
      fontFamily: {
        sans: ['Inter', 'Space Grotesk', 'Neue Montreal', 'sans-serif'],
      },
      boxShadow: {
        'neon': '0 0 10px rgba(255, 60, 0, 0.6), 0 0 20px rgba(255, 60, 0, 0.4), 0 0 30px rgba(255, 60, 0, 0.2)',
        'glass-card-deep': '0 10px 30px rgba(0, 0, 0, 0.5), 0 0 20px rgba(255, 60, 0, 0.3)',
        'inner-lg': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.6)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      transitionDelay: {
        '200': '200ms',
        '400': '400ms',
        '600': '600ms',
        '1000': '1000ms',
        '2000': '2000ms',
        '4000': '4000ms',
        '6000': '6000ms',
      },
      keyframes: {
        'neon-pulse': {
          '0%, 100%': { 'box-shadow': '0 0 5px rgba(255, 60, 0, 0.4), 0 0 10px rgba(255, 60, 0, 0.2)' },
          '50%': { 'box-shadow': '0 0 15px rgba(255, 60, 0, 0.8), 0 0 25px rgba(255, 60, 0, 0.6)' },
        },
        'glow-border': {
          '0%, 100%': { 'border-color': 'rgba(255, 60, 0, 0.4)' },
          '50%': { 'border-color': 'rgba(255, 60, 0, 0.8)' },
        },
        'glow-border-slow': {
          '0%, 100%': { 'border-color': 'rgba(255, 60, 0, 0.2)' },
          '50%': { 'border-color': 'rgba(255, 60, 0, 0.6)' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'blob': {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
        },
        'spin-slow': {
          'from': { transform: 'rotate(0deg)' },
          'to': { transform: 'rotate(360deg)' },
        },
        'pulse-slow': {
          '0%, 100%': { opacity: '0.7', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
        'pulse-fast': {
          '0%, 100%': { opacity: '0.5', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.03)' },
        },
        'pulse-line': {
          '0%, 100%': { opacity: '0.2' },
          '50%': { opacity: '0.6' },
        },
        'pulse-line-slow': {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '0.7' },
        },
      },
      animation: {
        'neon-pulse': 'neon-pulse 2s infinite ease-in-out',
        'glow-border': 'glow-border 2s infinite ease-in-out',
        'glow-border-slow': 'glow-border-slow 4s infinite ease-in-out',
        'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
        'blob': 'blob 7s infinite ease-in-out',
        'spin-slow': 'spin-slow 10s linear infinite',
        'pulse-slow': 'pulse-slow 4s infinite ease-in-out',
        'pulse-fast': 'pulse-fast 2s infinite ease-in-out',
        'pulse-line': 'pulse-line 3s infinite ease-in-out',
        'pulse-line-slow': 'pulse-line-slow 5s infinite ease-in-out',
      },
    },
  },
  plugins: [],
};

export default config;
