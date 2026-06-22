import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optimize images for Vercel
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // Strict mode for better React error catching
  reactStrictMode: true,
  // Enable compression
  compress: true,
  // Power header for better performance indication
  poweredByHeader: false,
};

export default nextConfig;
