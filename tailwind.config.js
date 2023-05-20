/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./shared/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      md: '768px', // { min: 768, max: 1023 }
      lg: '1025px', // { min: 1024, max: 1799 }
      xl: '1801px', // { min: 1800 }
    },
    extend: {
    },
    container: () => ({
      center: true,
    }),
    fontFamily: {
      montserrat: ['Montserrat', 'Helvetica', 'Arial', 'sans-serif'],
    },
    colors: {
      red: '#FF5AAA',
      primary: '#000',
      gray: '#BBBBBB',
      graylight: '#EFEFEF',
      white: '#FFFFFF',
      black: '#000000',
      transparent: 'transparent',
      green: '#BDEF76'  
    },
  },
  plugins: [],
}

