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
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'bubble': 'bubble 3s ease-in-out infinite',
        'pulse-slow': 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'border-wave': 'border-wave 8s ease-in-out infinite',
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
        }
      },
      backgroundImage: {
        'grid-white': 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)'
      },
      backdropBlur: {
        'xl': '20px',
      }
    },
  },
  plugins: [],
}

