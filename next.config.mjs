/** @type {import('next').NextConfig} */
const nextConfig = {
  // If you use Hostinger's Node.js selector, keep this as is.
  // If you want a static site, uncomment the line below:
  // output: 'export',

  images: {
    unoptimized: true, // Needed for static export or some shared hosting
  },
  // Stealth: Disable x-powered-by header
  poweredByHeader: false,
};

export default nextConfig;
