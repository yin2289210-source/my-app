/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',   // 开启静态导出模式
  images: {
    unoptimized: true, // 静态导出必须关闭图片优化
  },
};

export default nextConfig;