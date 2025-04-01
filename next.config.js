/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: ['static.toss.im'],
  },
};

module.exports = nextConfig;
