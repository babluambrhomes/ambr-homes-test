import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "ambrhomes.com" },
      { protocol: "https", hostname: "www.ambrhomes.com" },
    ],
  },
};

export default nextConfig;
