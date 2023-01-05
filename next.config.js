/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  compiler: {
    styledComponents: {
      displayName: true
    }
  }
};

module.exports = nextConfig;
