import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "custom-gray": "#999797",
        "yellow-w-gray": "#fcd34d",
      },
      flex: {
        "2": "2 2 0%",
      },
      screens: {
        mobile: "425px",
      },
      gridTemplateColumns: {
        "auto-fill-100": "repeat(auto-fill, minmax(9rem, 1fr))",
        "auto-fit-100": "repeat(auto-fit, minmax(9rem, 1fr))",
      },
      aspectRatio: {
        "16/12": "16 / 12",
      },
    },
  },
  plugins: [],
};
export default config;
