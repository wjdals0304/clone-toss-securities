/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: [
      'static.toss.im',
      'static.tossinvestcdn.com',
      'thumb.tossinvest.com',
    ],
  },
};

module.exports = nextConfig;
