/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens : {
        /*adding custom breakpoints to fit the charik website responivity */
        'breakpoint-1' : '1139px',
      }
    },
  },
  plugins: [],
}

