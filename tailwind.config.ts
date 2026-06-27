import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#070612",
        foreground: "#ffffff",
        muted: "rgba(255,255,255,0.6)",
        border: "rgba(255,255,255,0.12)",
        accent: "#6c6af6",
        "accent-light": "#9e9cf8",
        cyan: "#34d3e0",
        "cyan-light": "#7ce6ef",
        violet: "#a855f7",
        "violet-light": "#c891fb",
        amber: "#f5a524",
        "amber-light": "#f9c25e",
        card: "rgba(255,255,255,0.04)",
        "card-border": "rgba(255,255,255,0.08)",
      },
      fontFamily: {
        serif: ["Playfair Display", "Georgia", "serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
