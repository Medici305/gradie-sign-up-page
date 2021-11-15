const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "sign-up": "url('/src/Assets/Background.png')",
        "sign-up-2": "url('/src/Assets/duotone.png')",
        "sign-up-3": "url('/src/Assets/sunset.jpg')",
        "sign-up-4": "url('/src/Assets/pexel-1.jpg')",
        "sign-up-5": "url('/src/Assets/nipsey.jpg')",
      },
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    textColor: {
      primary: "#3490dc",
      secondary: "#ffed4a",
      danger: "#e3342f",
    },
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
