/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: '**', // Allows all domains
          },
          {
            protocol: 'http',
            hostname: '**', // Allows all domains (non-secure)
          },
        ],
      },
};

export default nextConfig;
