/** @type {import('tailwindcss').Config} */

var primaryColor = process.env.NEXT_PUBLIC_PRIMARYCOLOR ?? "#C59648";
var secondaryColor = process.env.NEXT_PUBLIC_SECONDARYCOLOR ?? "#FFFFFF";


module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: { 
        primaryColor:primaryColor,
        secondaryColor:secondaryColor
      }
    },
  },
  plugins: [],
}

