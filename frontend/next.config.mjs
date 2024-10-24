/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false, // Change to false from true
  trailingSlash: true,
  images: {
      domains: 
      [
          "s3.us-west-1.amazonaws.com"
      ],
    },
  output: 'export',
};

export default nextConfig;