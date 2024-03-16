/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "http",
        port: "5410",
        hostname: "localhost",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;
