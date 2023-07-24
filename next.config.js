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
    async redirects() {
      return [
        {
          source: '/contact-us',
          destination: '/contact',
          permanent: true,
        },
        {
          source: '/how-to-promote-your-business-on-instagram-in-2023-10-ways-that-actually-work',
          destination: '/How-To-Promote-Your-Business-On-Instagram-In-2023-%E2%80%93-10-Ways-That-Actually-Work',
          permanent: true,
        },
        {
          source: '/7-social-media-hacks-to-double-your-brand-growth-in-2023',
          destination: '/Social-Media-Hacks-To-Double-Your-Brand-Growth-In-2023',
          permanent: true,
        },
        {
          source: '/7-Social-Media-Hacks-To-Double-Your-Brand-Growth-In-2023',
          destination: '/Social-Media-Hacks-To-Double-Your-Brand-Growth-In-2023',
          permanent: true,
        }                     
      ]
    },
  };

// module.exports = nextConfig
