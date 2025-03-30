import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true,
  },
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: ['static.toss.im'],
  },
};

export default nextConfig;
