/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        InterTight: ['InterTight', 'sans-serif'],
        InterTight2: ['InterTight2', 'serif'],
        IvyOraheadline: ['IvyOraheadline', 'sans-serif'],
        IvyOraheadline2: ['IvyOraheadline2', 'sans-serif'],
        IvyOraheadline3: ['IvyOraheadline3', 'sans-serif'],

      },
    },
  },
  plugins: [],
}

