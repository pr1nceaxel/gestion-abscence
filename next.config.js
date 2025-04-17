/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  webpack: (config) => {
    config.externals = [...(config.externals || []), 'pg', 'pg-native'];
    return config;
  },
  experimental: {
    serverComponentsExternalPackages: ['pg', 'pg-native'],
    appDir: true,  // Obligatoire si vous utilisez l'App Router

  }
}

module.exports = nextConfig