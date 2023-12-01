/** @type {import('next').NextConfig} */
const nextConfig = {
     // images:{
  //   domains:["https://api.o-g-hashemi.com/"]
  // }
  // output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.o-g-hashemi.com',
        port: '',
        // pathname: '/account123/**',
      },
    ],
  },
}

module.exports = nextConfig
