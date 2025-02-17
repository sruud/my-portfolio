const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Export Next.js as a static site
  assetPrefix: isProd ? "/my-portfolio/" : "",
  basePath: isProd ? "/my-portfolio" : "",
  images: {
    unoptimized: true, // Disable Next.js image optimization for GitHub Pages - just preventing build errors
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
