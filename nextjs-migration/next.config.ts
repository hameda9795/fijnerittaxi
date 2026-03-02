import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  compress: true,
  output: 'export',
  trailingSlash: true,
};

export default nextConfig;
