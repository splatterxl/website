/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['img.shields.io'],
  },
  generateEtags: true,
};

module.exports = nextConfig;
