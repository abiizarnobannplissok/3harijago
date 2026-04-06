/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Link',
            value: '<https://fonts.gstatic.com>; rel=preconnect',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
