import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        green: { 900: "#0A3A2D", 800: "#14604A" },
        gold: { 200: "#E8CF8F", 400: "#D9B35A", 600: "#A67C1F", 700: "#7F5E12" },
        ivory: { 50: "#FAF6EA" },
        sand: { 100: "#F3EFE3" },
        muted: "#3D5A50",
      },
      fontFamily: {
        heading: ["var(--font-cormorant)", "Georgia", "serif"],
        body: ["var(--font-manrope)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 1px 2px rgba(10,58,45,0.06), 0 8px 24px -12px rgba(10,58,45,0.18)",
      },
    },
  },
  plugins: [],
};
export default config;
