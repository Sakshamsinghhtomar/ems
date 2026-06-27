/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        slate: {
          50: '#0D1117', // Background
          100: '#161B22', // Card background
          200: '#30363D', // Border
          300: '#8B949E', // Secondary text
          400: '#8B949E',
          500: '#8B949E',
          600: '#8B949E',
          700: '#8B949E',
          800: '#F0F6FC', // Primary text
          900: '#F0F6FC',
        },
        indigo: {
          50: 'rgba(88, 166, 255, 0.15)', // Light blue badge bg
          100: '#30363D',
          200: 'rgba(88, 166, 255, 0.3)', // Light blue badge border
          500: '#58A6FF',
          600: '#58A6FF', // Accent
          700: '#1F6FEB', // Button Hover
        },
        emerald: {
          50: 'rgba(46, 160, 67, 0.15)',
          100: 'rgba(46, 160, 67, 0.25)',
          200: 'rgba(46, 160, 67, 0.3)',
          600: '#3FB950',
          700: '#3FB950',
        },
        amber: {
          50: 'rgba(210, 153, 34, 0.15)',
          100: 'rgba(210, 153, 34, 0.25)',
          200: 'rgba(210, 153, 34, 0.3)',
          600: '#D29922',
          700: '#D29922',
        },
        rose: {
          50: 'rgba(248, 81, 73, 0.15)',
          100: 'rgba(248, 81, 73, 0.25)',
          200: 'rgba(248, 81, 73, 0.3)',
          600: '#F85149',
          700: '#F85149',
        },
        blue: {
          50: 'rgba(56, 139, 253, 0.15)',
          100: 'rgba(56, 139, 253, 0.25)',
          200: 'rgba(56, 139, 253, 0.3)',
          600: '#58A6FF',
          700: '#58A6FF',
        },
      }
    },
  },
  plugins: [],
}

