/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        primary: "#1677ff", // Ant Design primary color match
        dark: "#0f172a",
        light: "#f8fafc",
      },

      boxShadow: {
        soft: "0 2px 10px rgba(0,0,0,0.08)",
      },

      borderRadius: {
        xl: "12px",
      },
    },
  },

  plugins: [],
};
