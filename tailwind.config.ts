/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Playfair Display'", "serif"],
        body: ["'DM Sans'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      colors: {
        navy: {
          950: "#020818",
          900: "#050f2a",
          800: "#0a1f4e",
          700: "#0d2b6b",
          600: "#1a3f8a",
        },
        ocean: {
          400: "#38bdf8",
          300: "#7dd3fc",
          200: "#bae6fd",
        },
        gold: {
          400: "#fbbf24",
          300: "#fcd34d",
          200: "#fde68a",
        },
        coral: "#ff6b6b",
      },
      animation: {
        "wave": "wave 8s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
        "slide-up": "slideUp 0.6s ease forwards",
        "fade-in": "fadeIn 0.8s ease forwards",
      },
      keyframes: {
        wave: {
          "0%, 100%": { transform: "translateX(0) translateY(0)" },
          "25%": { transform: "translateX(-2%) translateY(1%)" },
          "75%": { transform: "translateX(2%) translateY(-1%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        glow: {
          from: { textShadow: "0 0 10px #38bdf8, 0 0 20px #38bdf8" },
          to: { textShadow: "0 0 20px #38bdf8, 0 0 40px #38bdf8, 0 0 60px #38bdf8" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
