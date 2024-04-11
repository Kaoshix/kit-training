/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        'bg-color': '#FAFBFF',
      },
      colors: {
        'card-text': "#0E215C",
        'card-sub-text': "#9AADE0",
        'card-border': '#EFF4FF',
        'sub-price': '#3679FF'
      }
    },
  },
  plugins: [],
};
