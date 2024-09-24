/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/static.heygen.ai/static/streaming.proto",
        destination: "https://static.heygen.ai/static/streaming.proto", // Rewrite it correctly
      },
    ];
  },
};

module.exports = nextConfig;
