/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: "#490848",
        'js-yellow': '#F7DF1E',
        'js-gold': '#FDB813',
        'js-light': '#FFE55C',
        'node-green': '#83CD29',
        'node-dark': '#339933',
        'node-light': '#90C53F',
        'neon-cyan': '#00F5FF',
        'neon-green': '#39FF14',
        'neon-purple': '#B026FF',
        'neon-orange': '#FF6B35',
        'tech-dark': '#0a0a0f',
        'tech-darker': '#050507',
        'tech-gray': '#1a1a1f',
      },
      fontFamily: {
        'code': ['Fira Code', 'JetBrains Mono', 'monospace'],
        'tech': ['JetBrains Mono', 'Fira Code', 'monospace'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'bubble': 'bubble 3s ease-in-out infinite',
        'pulse-slow': 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'border-wave': 'border-wave 8s ease-in-out infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'fade-in-down': 'fadeInDown 0.6s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
        'slide-in-right': 'slideInRight 0.5s ease-out',
        'slide-in-left': 'slideInLeft 0.5s ease-out',
        'shimmer': 'shimmer 2s linear infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'gradient-shift': 'gradient-shift 3s ease-in-out infinite',
        'scan': 'scan 3s ease-in-out infinite',
        'glitch': 'glitch 0.3s ease-in-out',
        'neon-pulse': 'neon-pulse 2s ease-in-out infinite',
        'holographic': 'holographic-shift 6s ease infinite',
        'blink': 'blink 1s step-end infinite',
        'code-fall': 'code-fall 10s linear infinite',
        'circuit-glow': 'circuit-glow 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        bubble: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
        'border-wave': {
          '0%, 100%': { 
            'border-radius': '60% 40% 30% 70%/60% 30% 70% 40%',
          },
          '50%': { 
            'border-radius': '30% 60% 70% 40%/50% 60% 30% 60%',
          }
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { 
            opacity: '0',
            transform: 'translateY(20px)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        fadeInDown: {
          '0%': { 
            opacity: '0',
            transform: 'translateY(-20px)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        scaleIn: {
          '0%': { 
            opacity: '0',
            transform: 'scale(0.9)'
          },
          '100%': { 
            opacity: '1',
            transform: 'scale(1)'
          },
        },
        slideInRight: {
          '0%': { 
            opacity: '0',
            transform: 'translateX(30px)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateX(0)'
          },
        },
        slideInLeft: {
          '0%': { 
            opacity: '0',
            transform: 'translateX(-30px)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateX(0)'
          },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        glow: {
          '0%': { 
            boxShadow: '0 0 5px rgba(168, 85, 247, 0.5), 0 0 10px rgba(168, 85, 247, 0.3)'
          },
          '100%': { 
            boxShadow: '0 0 20px rgba(168, 85, 247, 0.8), 0 0 30px rgba(168, 85, 247, 0.5)'
          },
        },
      },
      backgroundImage: {
        'grid-white': 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backdropBlur: {
        'xl': '20px',
        '3xl': '64px',
      },
      transitionTimingFunction: {
        'bounce-in': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      screens: {
        'xs': '475px',
        '3xl': '1920px',
      },
    },
  },
  plugins: [],
}

