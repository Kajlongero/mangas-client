import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      flex: {
        "2": "2 2 0%",
      },
      screens: {
        mobile: "375px",
      },
      gridTemplateColumns: {
        "auto-fill-100": "repeat(auto-fill, minmax(9rem, 1fr))",
        "auto-fit-100": "repeat(auto-fit, minmax(9rem, 1fr))",
      },
    },
  },
  plugins: [],
};
export default config;