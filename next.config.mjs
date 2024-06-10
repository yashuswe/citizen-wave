/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  assetPrefix: isProd ? '/citizen-wave/' : '',
  images: {
    loader: 'akamai',
    path: '',
  },
  basePath: isProd ? '/citizen-wave' : '',
  trailingSlash: true,
};

module.exports = nextConfig;
