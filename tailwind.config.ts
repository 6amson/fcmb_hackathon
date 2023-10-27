import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        lightGray: "#F5F5F5",
        headerGray: "#1F1F1F",
        headerTextGray: "#828282",
        primaryPurple: "#A84CF1",
        darkerHomeGray: "#EBEBEB",
        statusGreen: "#4BE75B",
        statusRed: "#E65741",
        homeGrayText: "#4E4D4D",
        portDarkGray: "#D8D8D8",
      },
      fontFamily: {
        robotoCon: ["robotoCon", "serif"],
        poppins: ["poppins", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
