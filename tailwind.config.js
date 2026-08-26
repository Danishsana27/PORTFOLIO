/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: '#0A0E14',
          soft: '#0D1219'
        },
        surface: {
          DEFAULT: '#10151F',
          raised: '#161C29'
        },
        border: {
          DEFAULT: '#232B3A',
          soft: '#1A2130'
        },
        ink: {
          DEFAULT: '#E6E9F0',
          muted: '#8B93A7',
          faint: '#5A6377'
        },
        violet: {
          DEFAULT: '#7C6FF0',
          dim: '#5D52C4'
        },
        cyan: {
          DEFAULT: '#43D9C8',
          dim: '#2FA99C'
        }
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace']
      },
      backgroundImage: {
        'grad-primary': 'linear-gradient(135deg, #7C6FF0 0%, #43D9C8 100%)',
        'grad-soft': 'linear-gradient(135deg, rgba(124,111,240,0.12) 0%, rgba(67,217,200,0.08) 100%)',
        'grid-pattern': 'linear-gradient(rgba(230,233,240,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(230,233,240,0.035) 1px, transparent 1px)'
      },
      boxShadow: {
        glow: '0 0 40px rgba(124,111,240,0.25)',
        card: '0 4px 24px rgba(0,0,0,0.35)'
      },
      animation: {
        blink: 'blink 1.1s step-end infinite',
        float: 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3.5s cubic-bezier(0.4,0,0.6,1) infinite'
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' }
        }
      }
    }
  },
  plugins: []
};
