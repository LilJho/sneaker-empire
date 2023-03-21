/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["static.nike.com", "cdn.shopify.com", "converse.ca"],
  },
};

module.exports = nextConfig;
