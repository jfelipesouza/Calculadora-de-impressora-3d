/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#FFFFFF',
        borderPurple: '#6750A4',
        borderGray: '#CAC4D0',
        text: '#000'
      },
      screens: {
        mobileSM: '350px'
      },
      fontSize: {
        formItemTitleMobileSM: '1.25rem',
        formItemLabelMobileSM: '1.1rem'
      },
      maxWidth: {
        inputItemMax: '5rem'
      }
    }
  },
  plugins: []
}
