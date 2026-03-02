import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Image optimization settings
  images: {
    unoptimized: true,
  },
  
  // Enable gzip compression
  compress: true,
  
  // Static export for deployment
  output: 'export',
  distDir: 'dist',
};

export default nextConfig;
