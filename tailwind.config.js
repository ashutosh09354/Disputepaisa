/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        brand: {
          50: "#eff8ff",
          100: "#dff0ff",
          200: "#b8d9f8",
          300: "#8cc4f6",
          500: "#1477e8",
          600: "#0968d7",
          700: "#0755b5",
          900: "#08294f"
        },
        accent: {
          400: "#39d98a",
          500: "#12b76a",
          600: "#079455"
        }
      },
      boxShadow: {
        soft: "0 16px 50px rgba(8, 41, 79, 0.08)",
        card: "0 10px 30px rgba(8, 41, 79, 0.07)"
      }
    }
  },
  plugins: []
};