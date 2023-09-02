/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        bodyFont: ["Poppins", "sans-serif"],
        titleFont: ["Montserrat", "sans-serif"],
      },
      colors: {
        bodyColor: "#212428",        // Dark background color
        lightText: "#c4cfde",        // Light text color
        boxBg: "linear-gradient(145deg, #1e2024, #23272b)", // Gradient box background
        designColor: "#0077b6",      // Nice blue for design
        accentColor: "#00a3e0",      // Complementary accent color
        primaryBlue: "#0077b6",      // Primary blue color
        secondaryBlue: "#00a3e0",    // Secondary blue color
      },
      boxShadow: {
        shadowOne: "10px 10px 19px #1c1e22, -10px -10px 19px #262a2e",
      },
    },
  },
  plugins: [],
};
