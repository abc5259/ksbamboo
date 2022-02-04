/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: {
    esmExternals: false,
  },
};
const intercept = require("intercept-stdout");

intercept(text => (text.includes("Duplicate atom key") ? "" : text));
