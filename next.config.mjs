/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "images.unsplash.com",
      "plus.unsplash.com",
      "res.cloudinary.com", // 👈 add Cloudinary
    ],
  },
};

export default nextConfig;
