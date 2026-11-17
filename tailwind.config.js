/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        deep: '#10052D',
        violet: '#190844',
        cyan: { neon: '#00D9E9' },
        turq: '#00E6B8',
        muted: '#A9A4BD',
      },
      fontFamily: {
        heading: ['Poppins', 'system-ui', 'sans-serif'],
        body: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        gradientShift: {
          '0%,100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        blink: { '0%,50%': { opacity: 1 }, '51%,100%': { opacity: 0 } },
        twinkle: {
          '0%,100%': { opacity: 0.25, transform: 'scale(1)' },
          '50%': { opacity: 0.9, transform: 'scale(1.6)' },
        },
        glowPulse: {
          '0%,100%': { opacity: 0.55 },
          '50%': { opacity: 0.95 },
        },
      },
      animation: {
        float: 'float 7s ease-in-out infinite',
        'float-slow': 'float 11s ease-in-out infinite',
        gradient: 'gradientShift 6s ease infinite',
        blink: 'blink 1s step-end infinite',
        twinkle: 'twinkle 4s ease-in-out infinite',
        'glow-pulse': 'glowPulse 5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
