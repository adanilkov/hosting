/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [
      // "dracula"
      {
        saasstartertheme: {
          primary: "#fefbf6",
          "primary-content": "#180042", 
          secondary: "#4CAF50", // Green
          neutral: "#121212", // Dark Gray
          "neutral-content": "#FFFFFF", // White
          accent: "#66BB6A", 
          "accent-content": "#fefbf6",
          "base-content": "#fefbf6",
          "base-100": "#1c1c1c", 
          "base-200": "#232323", //161617
          success: "#37d399",
          error: "#f77272",
        },        
      },
    ],
  },
}
