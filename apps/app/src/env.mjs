import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  shared: {
    // Node
    PORT: z.coerce.number().default(3000),
    NODE_ENV: z.enum(["development", "test", "production"]),
  },

  client: {
    // OpenPanel
    NEXT_PUBLIC_OPENPANEL_CLIENT_ID: z.string(),

    // Supabase
    NEXT_PUBLIC_SITE_URL: z.string().optional(),
    NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string(),
    NEXT_PUBLIC_SUPABASE_URL: z.string(),

    // Vercel
    NEXT_PUBLIC_VERCEL_BRANCH_URL: z
      .string()
      .optional()
      .transform((v) => (v ? `https://${v}` : undefined)),
    NEXT_PUBLIC_VERCEL_ENV: z
      .enum(["development", "preview", "production"])
      .optional(),
    NEXT_PUBLIC_VERCEL_URL: z
      .string()
      .optional()
      .transform((v) => (v ? `https://${v}` : undefined)),
  },

  server: {
    // OpenPanel
    OPENPANEL_SECRET_KEY: z.string(),

    // Resend
    RESEND_API_KEY: z.string(),

    // Supabase
    SUPABASE_SERVICE_KEY: z.string(),

    // Upstash
    UPSTASH_REDIS_REST_TOKEN: z.string(),
    UPSTASH_REDIS_REST_URL: z.string(),
  },

  runtimeEnv: {
    // Node
    PORT: process.env.PORT,
    NODE_ENV: process.env.NODE_ENV,

    // OpenPanel
    NEXT_PUBLIC_OPENPANEL_CLIENT_ID:
      process.env.NEXT_PUBLIC_OPENPANEL_CLIENT_ID,
    OPENPANEL_SECRET_KEY: process.env.OPENPANEL_SECRET_KEY,

    // Sentry
    NEXT_PUBLIC_SENTRY_DSN: process.env.NEXT_PUBLIC_SENTRY_DSN,

    // Supabase
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    SUPABASE_SERVICE_KEY: process.env.SUPABASE_SERVICE_KEY,

    // Resend
    RESEND_API_KEY: process.env.RESEND_API_KEY,

    // Upstash
    UPSTASH_REDIS_REST_TOKEN: process.env.UPSTASH_REDIS_REST_TOKEN,
    UPSTASH_REDIS_REST_URL: process.env.UPSTASH_REDIS_REST_URL,

    // Vercel
    NEXT_PUBLIC_VERCEL_BRANCH_URL: process.env.NEXT_PUBLIC_VERCEL_BRANCH_URL,
    NEXT_PUBLIC_VERCEL_ENV: process.env.NEXT_PUBLIC_VERCEL_ENV,
    NEXT_PUBLIC_VERCEL_URL: process.env.NEXT_PUBLIC_VERCEL_URL,
  },
  skipValidation: !!process.env.CI || !!process.env.SKIP_ENV_VALIDATION,
});
