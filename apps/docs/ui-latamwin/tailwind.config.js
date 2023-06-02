/** @type {import('tailwindcss').Config} */
import sharedConfig from "tailwind-config/tailwind.config";
module.exports = {
    content: [
        "./stories/**/*.{js,jsx,ts,tsx}",
        "../../../packages/ui/**/*.{js,ts,jsx,tsx}",
    ],
    plugins: [],
    presets: [sharedConfig],
};
