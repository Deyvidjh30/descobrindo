/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        diacin: '#22c55e',
        diatinf: '#3b82f6',
        diacon: '#a855f7',
        diaren: '#ef4444',
      },
    },
  },
  plugins: [],
};
