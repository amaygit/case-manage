/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https', // Or 'http' if placeimg.com served over http (unlikely now)
        hostname: 'placeimg.com',
        port: '', // Leave empty for default ports (80 for http, 443 for https)
        pathname: '/**', // Allows all paths under this hostname
      },
    ],
  },
};

module.exports = nextConfig;