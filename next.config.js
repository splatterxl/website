/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/en/home',
        destination: '/',
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
