import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Robots-Tag",
            value:
              process.env.VERCEL_ENV === "production" &&
              process.env.VERCEL_URL?.includes("vercel.app")
                ? "noindex, nofollow"
                : "all",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
