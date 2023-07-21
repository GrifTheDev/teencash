/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      fontFamily: {
        "mulish-bold": ["Mulish-Bold", "sans-serif"],
        "mulish-semibold": ["Mulish-SemiBold", "sans-serif"],
        "mulish-regular": ["Mulish-Regular", "sans-serif"],
        "mulish-light": ["Mulish-Light", "sans-serif"],
        sans: ["Mulish-Regular", "sans-serif"],
      },
      screens: {
        'xxs': '320px',
        'xs': '480px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        '3xl': '1920px',
      },
      colors: {
        href: "#008CDA",
        inputBorder: "#979797",
        buttonRed: "#FF5876",
        buttonShadowRed: "#FEC5CF",
        pinkish: "#FFC6C6",
        white: "#FFFFFF",
      },
      boxShadow: {
        "button1-idle": "0px 4px 0px 0px rgba(254, 197, 207, 1)",
        "button1-hover": "0px 7px 0px 0px rgba(254, 197, 207, 1)",
        "button1-acitve": "0px 0px 0px 0px rgba(254, 197, 207, 1)",
      },
    },
  },
  plugins: [],
};
