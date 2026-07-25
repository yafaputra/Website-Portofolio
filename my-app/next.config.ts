import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "duws858oznvmq.cloudfront.net",
      },
    ],
  },
};

export default nextConfig;