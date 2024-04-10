/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      color: {
        "back": "red"
      },
      fontFamily: {
        "Poppins": ["Poppins", "sans-serif"],
        "Inter": ["Inter", "sans-serif"],
        "red-hat": ['"Red Hat Display"', '"Source Serif Pro"']
      }
    },
  },
  plugins: [],
}

