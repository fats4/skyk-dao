/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Black & White Primary Colors
        primary: {
          50: '#ffffff',
          100: '#f8fafc',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        // Grayscale Accent Colors
        accent: {
          50: '#ffffff',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        // Monochrome palette
        mono: {
          white: '#ffffff',
          light: '#f8fafc',
          gray: '#64748b',
          dark: '#1e293b',
          black: '#000000',
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'bounce-slow': 'bounce 2s infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'pulse-subtle': 'pulseSubtle 2s ease-in-out infinite',
        'slide-elegant': 'slideElegant 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        glow: {
          '0%': { 
            boxShadow: '0 0 20px rgba(255, 255, 255, 0.1)',
          },
          '100%': { 
            boxShadow: '0 0 40px rgba(255, 255, 255, 0.2)',
          },
        },
        pulseSubtle: {
          '0%, 100%': { 
            transform: 'scale(1)',
            opacity: '1',
          },
          '50%': { 
            transform: 'scale(1.02)',
            opacity: '0.9',
          },
        },
        slideElegant: {
          '0%': { 
            transform: 'translateX(-10px)',
            opacity: '0',
          },
          '100%': { 
            transform: 'translateX(0)',
            opacity: '1',
          },
        }
      },
      backgroundImage: {
        'mono-gradient': 'linear-gradient(135deg, #000000 0%, #1e293b 50%, #000000 100%)',
        'subtle-grid': 'linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
        'elegant-pattern': 'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)',
      },
      fontFamily: {
        'elegant': ['Inter', 'system-ui', 'sans-serif'],
        'mono': ['JetBrains Mono', 'Courier New', 'monospace'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
} 