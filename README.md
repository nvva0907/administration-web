# React + Vite

- Install vite : npm create vite@latest
- Install tail win : npm install tailwindcss@latest
- Tailwin CSS
- STEP 1 : npm install -D tailwindcss postcss autoprefixer
  npx tailwindcss init -p
  npm i @material-tailwind/react
- STEP 2: set up tailwind.config.js
  /** @type {import('tailwindcss').Config} */
  export default {
  content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  extend: {},
  },
  plugins: [],
  }
- STEP 3 : set up index.css
  @tailwind base;
  @tailwind components;
  @tailwind utilities;