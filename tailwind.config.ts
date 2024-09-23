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
        common: "#171717",
        darkest: "#232323",
        dark: "#292929",
        "pure-yellow": "#ffff00",
      },
      flex: {
        "2": "2 2 0%",
      },
    },
  },
  plugins: [],
};
export default config;
