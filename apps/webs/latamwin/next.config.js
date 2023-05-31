/** @type {import('next').NextConfig} */
const path = require("path");

module.exports = {
  swcMinify: true,
  reactStrictMode: true,
  transpilePackages: ["ui-latamwin"],
  sassOptions: {
    additionalData: `@import "./scss/styles.scss";`,
  },
};
