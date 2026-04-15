/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./app/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: "rgb(15 23 42 / 0.72)",
          raised: "rgb(30 41 59 / 0.85)",
        },
        brand: {
          DEFAULT: "#22d3ee",
          muted: "rgb(34 211 238 / 0.12)",
          glow: "rgb(34 211 238 / 0.35)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: [
          "var(--font-outfit)",
          "var(--font-inter)",
          "system-ui",
          "sans-serif",
        ],
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to bottom, transparent 0%, rgb(2 6 23) 100%), linear-gradient(rgb(15 23 42 / 0.4) 1px, transparent 1px), linear-gradient(90deg, rgb(15 23 42 / 0.4) 1px, transparent 1px)",
        "hero-vignette":
          "radial-gradient(ellipse 120% 80% at 70% 20%, rgb(34 211 238 / 0.08), transparent 50%), radial-gradient(ellipse 80% 60% at 0% 100%, rgb(20 184 166 / 0.06), transparent 45%)",
      },
      backgroundSize: {
        grid: "100% 100%, 48px 48px, 48px 48px",
      },
      boxShadow: {
        card: "0 0 0 1px rgb(255 255 255 / 0.06), 0 24px 48px -12px rgb(0 0 0 / 0.45)",
        "card-hover":
          "0 0 0 1px rgb(34 211 238 / 0.25), 0 28px 56px -12px rgb(0 0 0 / 0.5), 0 0 40px -8px rgb(34 211 238 / 0.15)",
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
