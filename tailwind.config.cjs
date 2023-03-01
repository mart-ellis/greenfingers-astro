/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#E3FFED",
        "custom-black": "#0F0F0F",
        "dark-green": "#1b4529",
      },
    },
  },
  plugins: [],
};
