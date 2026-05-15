import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#ecfdf5",
          100: "#d1fae5",
          200: "#a7f3d0",
          600: "#059669",
          700: "#047857",
          800: "#065f46",
          900: "#064e3b",
          950: "#022c22",
        },
        accent: {
          100: "#fef3c7",
          500: "#d97706",
          700: "#92400e",
        },
        whatsapp: "#22c55e",
      },
      boxShadow: {
        soft: "0 18px 45px rgba(6, 78, 59, 0.14)",
      },
    },
  },
  plugins: [],
};

export default config;
