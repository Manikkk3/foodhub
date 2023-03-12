/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,sx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: "1250px",
      xxl: '1440px',
    },
  },
  plugins: [],
}
