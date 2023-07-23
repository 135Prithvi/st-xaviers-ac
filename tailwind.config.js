/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkslategray: {
          100: "#0f3446",
          200: "rgba(15, 52, 70, 0.55)",
        },
        gainsboro: {
          100: "#d6dee7",
          200: "#d9d9d9",
        },
        darkgray: {
          100: "#9a9da0",
          200: "#969a9d",
        },
        "primary-50": "#edeff6",
        silver: "#c5c9cd",
        "primary-500": "#4a60a1",
      },
      fontFamily: {
        barlow: "Barlow",
        "body-regular-400": "'Public Sans'",
        inter: "Inter",
      },
      borderRadius: {
        "45xl": "64px",
        "55xl": "74px",
        "21xl": "40px",
        "31xl": "50px",
        "34xl": "53px",
      },
      animation: {
        tilt: "tilt 10s infinite linear",
      },
      keyframes: {
        tilt: {
          "0%, 50%, 100%": {
            transform: "rotate(0deg)",
          },
          "25%": {
            transform: "rotate(0.5deg)",
          },
          "75%": {
            transform: "rotate(-0.5deg)",
          },
        },
      },
    },
  },
};
