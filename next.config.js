/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "static.nike.com",
      "cdn.shopify.com",
      "converse.ca",
      "nb.scene7.com",
    ],
  },
};

module.exports = nextConfig;
