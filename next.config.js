/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  compiler: {
    styledComponents: {
      displayName: true,
      ssr: true
    }
  }
};

module.exports = nextConfig;
