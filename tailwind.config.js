/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
       colors:{
        myblack:"#615f5e",
        gray:"#b3b0a4",
        purple:"#400649"
       }
    },
    screens:{
      xm:'',
       sm:'350px',
       md:'640px',
       lg:'768px',
       xl:'1024px',
       xxl:'1280px'
    }
  },
  darkMode:'class',
  plugins: [],

  
};
