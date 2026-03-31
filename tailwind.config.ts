import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          green: "#00FF87",
          pink: "#FF006E",
          purple: "#8338EC",
          yellow: "#FFBE0B",
          blue: "#3A86FF",
          orange: "#FB5607",
        },
        dark: {
          DEFAULT: "#0A0A0A",
          card: "#111111",
          border: "#1E1E1E",
        },
      },
      fontFamily: {
        grotesk: ["Space Grotesk", "sans-serif"],
        mono: ["Space Mono", "monospace"],
      },
      animation: {
        "glitch-1": "glitch1 2s infinite",
        "glitch-2": "glitch2 2s infinite",
        "float": "float 6s ease-in-out infinite",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
        "spin-slow": "spin 8s linear infinite",
        "marquee": "marquee 20s linear infinite",
      },
      keyframes: {
        glitch1: {
          "0%, 100%": { clipPath: "inset(0 0 95% 0)", transform: "translate(-2px, 0)" },
          "20%": { clipPath: "inset(30% 0 50% 0)", transform: "translate(2px, 0)" },
          "40%": { clipPath: "inset(70% 0 10% 0)", transform: "translate(-2px, 0)" },
          "60%": { clipPath: "inset(10% 0 80% 0)", transform: "translate(2px, 0)" },
          "80%": { clipPath: "inset(50% 0 30% 0)", transform: "translate(-2px, 0)" },
        },
        glitch2: {
          "0%, 100%": { clipPath: "inset(80% 0 5% 0)", transform: "translate(2px, 0)" },
          "20%": { clipPath: "inset(10% 0 70% 0)", transform: "translate(-2px, 0)" },
          "40%": { clipPath: "inset(40% 0 40% 0)", transform: "translate(2px, 0)" },
          "60%": { clipPath: "inset(60% 0 20% 0)", transform: "translate(-2px, 0)" },
          "80%": { clipPath: "inset(20% 0 65% 0)", transform: "translate(2px, 0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 5px #00FF87, 0 0 20px #00FF87, 0 0 40px #00FF8733" },
          "50%": { boxShadow: "0 0 10px #00FF87, 0 0 40px #00FF87, 0 0 80px #00FF8766" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
