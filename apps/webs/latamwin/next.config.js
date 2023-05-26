/** @type {import('next').NextConfig} */
const path = require('path');

module.exports = {
  swcMinify: true,
  reactStrictMode: true,
  transpilePackages: ["ui-latamwin"],
  sassOptions: {
		includePaths: [
			'ui-latamwin/src/**/*',
			path.join(__dirname, 'scss'),
		],
		additionalData: `@import "./scss/styles.scss";`,
	},
};
