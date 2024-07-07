/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'container': '1600px',
      },
      fontFamily: {
        'dmSans': ['DM Sans', "sans-serif"],
      },
      colors: {
        white : '#FFFFFF',
        black : '#262626',
        lightAsh : '#767676',
        ash : '#6D6D6D',
        headerBg: '#F5F5F3',

      },
    },
  },
  plugins: [],
}

