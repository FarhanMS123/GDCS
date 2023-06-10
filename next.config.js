/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  experimental: {
    serverActions: true,
  },
  // webpack: (config) => {
  //   config.resolve.fallback = { fs: false, path:false, "crypto": false  };
  //   return config;
  // }
}

module.exports = nextConfig
