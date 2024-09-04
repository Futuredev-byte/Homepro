/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // Specify the paths to all of your template files
    './src/**/*.{html,js,ts,jsx,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        'custom-light': '#f8f3dd', // Add your custom color here
        'custom-green': '#9DA008',
        'pale-green' : '#FFFEF9',
        'color-text': '#9DA008',
        'new-green': '#9DA00826',
        'dark': '#1F1F1F'
      },
      fontFamily: {
        pacifico: ['Pacifico', 'cursive'],
        sans: ['Roboto', 'sans-serif'],
      },
      height:{
        'custom': '30rem'
      }
    },
  },
  plugins: [],
}