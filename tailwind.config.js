/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{html,js,jsx}',
    './components/**/*.{html,js,jsx}',
    './pages/**/*.{html,js,jsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat'],
        aclonica: ['Aclonica']
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1440px',
      },
      colors: {
        primary: "#91B8E0",
        secondary: "#9BA1C5",
      }
    },
  },
  plugins: [],
}

