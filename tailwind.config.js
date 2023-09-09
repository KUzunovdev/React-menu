/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      borderColor: ['responsive', 'hover', 'focus', 'active'],
      boxShadow: ['responsive', 'hover', 'focus', 'active'],
    },
  },
  plugins: [],
}
