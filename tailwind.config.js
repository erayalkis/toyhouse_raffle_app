/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        "toyhouse-main-dark": "#212529",
        "toyhouse-text-secondary": "#adb1b6",
        "toyhouse-bg-primary": "#f7f7f7",
        "toyhouse-bg-secondary": "#ebebeb",
        "toyhouse-border-primary": "#e8e8e8",
        "toyhouse-text-primary": "#212529",
        "toyhouse-blue-primary": "#008cba",
        "toyhouse-blue-secondary": "#006688",
      },
    },
  },
  plugins: [],
};
