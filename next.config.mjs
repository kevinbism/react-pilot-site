/** @type {import('next').NextConfig} */

const nextConfig = {
  sassOptions: {},
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
    ],
  },
};

export default nextConfig;
