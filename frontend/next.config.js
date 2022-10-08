/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig

module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        // With docker
        // destination: 'http://api:49535/:path*' // Proxy to Backend
        destination: 'http://localhost:49535/:path*'
      }
    ]
  }
}