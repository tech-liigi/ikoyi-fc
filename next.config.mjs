/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  env: {
    NEXT_PUBLIC_SANITY_PROJECT_ID: "iwt2174v",
    NEXT_PUBLIC_SANITY_DATASET: "production",
    SANITY_SECRET_TOKEN: "skBymCMhWNUImI5OgGdqW3lPRiXuEamFPXEHe0Oo0LHskERYc2e2J9AggDy5VC6WiE04RBJJbNvkARd60tyx4rSIAeQBd9TARl5QTR3dJTbhf43g127wOsfOByqfSEHGtLFfqONGzLpspJGXJaE4DX3FHcrFP44dsFVQH0bQXq6DWlFCFIPl",
  },
};

export default nextConfig;
