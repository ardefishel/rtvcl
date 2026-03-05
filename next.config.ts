import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  rewrites: async () => {
    return [
      {
        source: '/laughtrack',
        destination: 'https://laughtrack-web.rtvcl.com',
      },
      {
        source: '/laughtrack/:path*',
        destination: 'https://laughtrack-web.rtvcl.com/:path*',
      },
    ];
  },
};

export default nextConfig;
