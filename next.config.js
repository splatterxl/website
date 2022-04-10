/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['github.com'],  // allow images from this domain
  },
  generateEtags: true,
};

module.exports = nextConfig;
