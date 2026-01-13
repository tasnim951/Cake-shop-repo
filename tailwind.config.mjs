/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/app/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        olive: '#3F4A3C',
        wood: '#8B5A2B',
        woodDark: '#6F451F',
      },
    },
  },
  plugins: [],
}