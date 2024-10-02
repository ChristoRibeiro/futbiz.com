import { env } from "@/env.mjs"

const getBaseURL = () => {
  let url =
    env.NEXT_PUBLIC_SITE_URL ?? // Set this to your site URL in production env.
    env.NEXT_PUBLIC_VERCEL_URL ?? // Automatically set by Vercel.
    `http://localhost:${env.PORT}`

  // Make sure to include `https://` when not localhost.
  url = url.startsWith("http") ? url : `https://${url}`

  return url
}

export const clientConfig = {
  baseUrl: getBaseURL,
  env: env.NEXT_PUBLIC_VERCEL_ENV ?? env.NODE_ENV,
  openPanel: {
    clientId: env.NEXT_PUBLIC_OPENPANEL_CLIENT_ID,
  },
  supabase: {
    url: env.NEXT_PUBLIC_SUPABASE_URL,
    anonKey: env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  },
  vercel: {
    branchUrl: env.NEXT_PUBLIC_VERCEL_BRANCH_URL,
    env: env.NEXT_PUBLIC_VERCEL_ENV,
    url: env.NEXT_PUBLIC_VERCEL_URL,
  },
}
