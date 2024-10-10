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
        'new-green': '#9DA00826',
        'dark': '#1F1F1F',
        'weird-grey': '#CCCCCC80',
        'weird-white': '#F6F8FA'
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