/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white_color: "var(--white_color)",
        black_363738: "var(--black_363738)",
        white_F5F5F5: "var( --white_F5F5F5)",
        white_FEFAF1: "var(--white_FEFAF1)",
        white_FFFFFF: "var(--white_FFFFFF)",
        text_whiteFAFAFA: "var(--text_whiteFAFAFA)",
        text_black7D8184: "var(--text_black7D8184)",
        text_black000000: "var(--text_black000000)",
        redDB4444: "var(--redDB4444)",
        button00FF66: "var(--button00FF66)",
        hoverE07575: "var(--hoverE07575)",
        hoverA0BCE0: "var(--hoverA0BCE0)",
      },
    },
    fontFamily: {
      popins: "var(--popins)",
      inter: "var(--inter)",
    },
    container: {
      center: true,
      padding: {
        // DEFAULT: "1rem",
        // sm: "1rem",
        // lg: "4rem",
        // xl: "5rem",
        // "2xl": "1rem",
      },
    },
  },
  plugins: [],
};
