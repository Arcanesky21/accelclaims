/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/preline/preline.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero: `linear-gradient(142deg, rgba(12, 12, 12, 0.63) 24%, rgba(12, 12, 12, 0) 77%), url('/assets/images/aci_hero_4.jpg')`,
        about: `linear-gradient(142deg, rgba(12, 12, 12, 0.49) 0%, rgba(12, 12, 12, 0) 94%), url(https://accelclaims.com/wp-content/uploads/2019/07/about_hero.jpg) !important;`,
        aboutBg: `linear-gradient(90deg,#ffffff 30%,rgba(255,255,255,0) 66%),url(https://accelclaims.com/wp-content/uploads/2019/07/shutterstock_317554604-e1563894515993.jpg)!important`,
        motor: `linear-gradient(142deg,rgba(0,0,0,0.74) 0%,rgba(12,12,12,0) 76%),url(https://accelclaims.com/wp-content/uploads/2019/07/mva_hero-2.jpg)!important`,
        worker: `linear-gradient(153deg,rgba(12,12,12,0.83) 15%,rgba(12,12,12,0) 100%),url(https://accelclaims.com/wp-content/uploads/2019/07/workers_hero_1.jpg)!important`,
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"], // Set Poppins as default sans font
      },
    },
  },
  plugins: [require("preline/plugin")],
};
