/** @type {import('tailwindcss').Config} */
import shareConfig from "tailwind-config/tailwind.config";

module.exports = {
  presets: [shareConfig],
  content: ["./src/**/*.{tsx,jsx}"],
  plugins: [],
};
