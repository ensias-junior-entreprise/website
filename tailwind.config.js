/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: "#000000",
      blue: "#d80c0c",
      lightblue: "#FFD6D6",
      lightgrey: "#e4aeae",
      navyblue: "#340000",
      beach: "#c18e8e",
      circlebg: "rgba(77, 213, 143, 0.25)",
      darkblue: "#210000",
      offwhite: "rgba(255, 255, 255, 0.75);",
      bordertop: "rgba(196, 196, 196, 0.5);",
      "blue-500": "#cb0000",
      darkgray: "#b49090",
      babyblue: "#f9e2e2",
      grey500: "#ECECEC",
      bluegray: "#a17d7d",
      bluegrey: "#9e7c7c",
      midnightblue: "#891212",
      midblue: "#820101",
      bluebg: "rgba(227, 47, 47, 0.2)",
      border: "rgba(137, 128, 128, 0.35)",
      cinnabar: {
        50: "#fff1f1",
        100: "#ffdfdf",
        200: "#ffc5c5",
        300: "#ff9d9d",
        400: "#ff6665",
        500: "#ff3534",
        600: "#ee2827",
        700: "#c70f0e",
        800: "#a5100f",
        900: "#881514",
        950: "#4a0505",
      },
    },
    fontSize: {
      xs: ["0.75rem", { lineHeight: "1rem" }],
      sm: ["0.875rem", { lineHeight: "1.25rem" }],
      base: ["1rem", { lineHeight: "1.5rem" }],
      lg: ["1.125rem", { lineHeight: "1.75rem" }],
      xl: ["1.25rem", { lineHeight: "1.75rem" }],
      "2xl": ["1.5rem", { lineHeight: "2rem" }],
      "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
      "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
      "5xl": ["3rem", { lineHeight: "1" }],
      "6xl": ["3.75rem", { lineHeight: "1" }],
      "7xl": ["4.5rem", { lineHeight: "1" }],
      "8xl": ["6rem", { lineHeight: "1" }],
      "9xl": ["8rem", { lineHeight: "1" }],
      "65xl": ["65px", { lineHeight: "1" }],
      "80xl": ["80px", { lineHeight: "6rem" }],
    },
    extend: {},
  },
  plugins: [],
};
