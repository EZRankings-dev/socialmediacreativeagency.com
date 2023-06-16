// /** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  // distDir: 'build',
  images:{
    domains:["https://smca.ezrankings.in/"]
    // unoptimized:true
  },
    // Set assetPrefix to the root path of your website
    assetPrefix: process.env.NODE_ENV === 'production' ? '/': '',
    // Set basePath to the root path of your website
    basePath: process.env.NODE_ENV === 'production' ? '' : '',
};

// module.exports = nextConfig
