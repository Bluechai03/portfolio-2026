import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    viewTransition: true,
  },
  // The old design system page became the build notes.
  async redirects() {
    return [{ source: "/system", destination: "/how-its-built", permanent: true }];
  },
};

export default nextConfig;
