/** @type {import('tailwindcss').Config} */
const sharedConfig = require('tailwind-config/tailwind.config.js');
module.exports = {
	content: [
		'../../../packages/ui/**/*.{js,ts,jsx,tsx}',
		'./**/*.{js,ts,jsx,tsx}',
		'./app/**/*.{js,ts,jsx,tsx}',
	],
	plugins: [],
	presets: [sharedConfig],
};
