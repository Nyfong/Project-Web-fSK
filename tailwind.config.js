/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      width: {
        '1200': '1200px',
        '290':'290px',
      },
    },
  },
  // plugins: [
  //   require('flowbite/plugin')({
  //     charts: true,
  // }),
  // ],
}

