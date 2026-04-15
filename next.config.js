/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  // Static export (GitHub Pages) cannot use the Image Optimization API.
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
