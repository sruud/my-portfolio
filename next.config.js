/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Export Next.js as a static site
  // distDir: "docs", // Save the exported site in the "docs" folder
  basePath: "/my-portfolio",
  assetPrefix: "/my-portfolio",
  images: {
    unoptimized: true, // Disable Next.js image optimization for GitHub Pages - just preventing build errors
  },
  trailingSlash: true, // - good for static sites
  reactStrictMode: true,
};

module.exports = nextConfig;
