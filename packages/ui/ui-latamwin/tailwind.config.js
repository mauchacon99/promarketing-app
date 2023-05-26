/** @type {import('tailwindcss').Config} */
import sharedConfig from "tailwind-config/tailwind.config";

module.exports = {
  presets: [sharedConfig],
  content: ["./src/**/*.{tsx,jsx}"],
  plugins: [],
};
