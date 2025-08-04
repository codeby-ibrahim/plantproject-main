 /** @type {import('tailwindcss').Config} */
 export default {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      sm: "340px",
      md: "540px",
      lg: "768px",
      Xl: "1024px"
    },

    extend:{},
    fontFamily:{
    jost:[ "Lobster", "sans-serif"],
    Lobster: ["Lobster", "sans-serif"]

    },
    container: {
      center: true,
      padding: {
      Default: "12px",
      md: "32px",

      },
    },
  },
  plugins: [],
}

