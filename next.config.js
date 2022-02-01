/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
};
const intercept = require("intercept-stdout");

intercept(text => (text.includes("Duplicate atom key") ? "" : text));
