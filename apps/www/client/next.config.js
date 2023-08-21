/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      // Proxy API requests to the backend server
      {
        source: "/api/:path*",
        destination: `${process.env.API_URL}:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
