import "./src/env.mjs"
import { withSentryConfig } from "@sentry/nextjs"

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@futbiz/supabase", "@futbiz/ui"],
  experimental: {
    instrumentationHook: process.env.NODE_ENV === "production",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
      },
    ],
  },
  redirects: async () => {
    return [
      {
        source: "/",
        destination: "/deals",
        permanent: true,
      },
    ]
  },
}

export default withSentryConfig(nextConfig, {
  silent: !process.env.CI,
  telemetry: false,
  widenClientFileUpload: true,
  hideSourceMaps: true,
  disableLogger: true,
  tunnelRoute: "/monitoring",
})
