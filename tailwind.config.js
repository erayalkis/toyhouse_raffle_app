/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "toyhouse-main-dark": "#212529",
        "toyhouse-text-secondary": "#adb1b6",
      },
    },
  },
  plugins: [],
};
