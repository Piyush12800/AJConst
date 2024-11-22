/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        sunny: '#FEE869', // Add a custom name like "sunny"
      },
    },
  },
  plugins: [ require('flowbite/plugin')],
};
