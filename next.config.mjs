/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'
const repoName = 'samsungwe'

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  images: {
    unoptimized: true
  },
  basePath: isProd ? `/${repoName}` : '',
  assetPrefix: isProd ? `/${repoName}/` : '',
  distDir: 'out',
  // GitHub Pages에서 Jekyll 처리를 비활성화
  // 이는 _next 폴더가 무시되는 것을 방지합니다
  experimental: {
    // 없음
  }
}

export default nextConfig
