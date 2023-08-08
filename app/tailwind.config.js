/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.tsx",
    "./utils/**/*.ts",
    "./components/**/*.tsx",
    "./ui/**/*.tsx",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunitoSans: ["var(--font-nunito-sans)"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        "opacity-switch-animation": {
          from: {
            opacity: 0,
            transform: "scale(0.5)",
          },
          to: {
            opacity: 1,
            transform: "scale(1)",
          },
        },
      },
      animation: {
        splash: "opacity-switch-animation 2s ease-in-out infinite",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["corporate", "forest"],
  },
};
