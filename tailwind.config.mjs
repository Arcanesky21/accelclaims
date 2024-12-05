/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/preline/preline.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': `linear-gradient(142deg, rgba(12, 12, 12, 0.63) 24%, rgba(12, 12, 12, 0) 77%), url('/assets/images/aci_hero_4.jpg')`,
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // Set Poppins as default sans font
      },
    },
  },
  plugins: [require("preline/plugin")],
};
