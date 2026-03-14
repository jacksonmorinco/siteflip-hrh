/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hrheli.com',
        pathname: '/wp-content/uploads/**',
      },
    ],
  },
  async redirects() {
    return [
      // Match their existing URL patterns
      { source: '/flying/helicopter-charter', destination: '/charter',  permanent: true },
      { source: '/flying/helicopter-charter/', destination: '/charter', permanent: true },
      { source: '/flying/tours',               destination: '/tours',   permanent: true },
      { source: '/flying/tours/',              destination: '/tours',   permanent: true },
      { source: '/flight-training',            destination: '/training', permanent: true },
      { source: '/flight-training/',           destination: '/training', permanent: true },
      // Sales links to HRCS
      { source: '/sales', destination: 'https://www.hrcharterservice.com', permanent: false },
    ]
  },
}
module.exports = nextConfig
