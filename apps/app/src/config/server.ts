import { env } from "@/env.mjs";

export const serverConfig = {
  openPanel: {
    secretKey: env.OPENPANEL_SECRET_KEY,
  },
  resend: {
    apiKey: env.RESEND_API_KEY,
  },
  supabase: {
    serviceKey: env.SUPABASE_SERVICE_KEY,
  },
  upstash: {
    redisRestToken: env.UPSTASH_REDIS_REST_TOKEN,
    redisRestUrl: env.UPSTASH_REDIS_REST_URL,
  },
};
