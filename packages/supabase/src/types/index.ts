import type { SupabaseClient } from "@supabase/supabase-js"
import type { Database } from "./db"

export type Client = SupabaseClient<Database>

export type { User } from "@supabase/supabase-js"

export * from "./db"
