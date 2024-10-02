import { logger } from "@futbiz/logger"
import { createClient } from "@futbiz/supabase/server"

export async function getUser() {
  const supabase = createClient()

  try {
    const { data, error } = await supabase.auth.getUser()
    return {
      user: data.user,
      error,
    }
  } catch (error) {
    logger.error(error)

    throw error
  }
}

export async function getUsers() {
  const supabase = createClient()

  try {
    const result = await supabase.from("Deal").select("*")

    return result
  } catch (error) {
    logger.error(error)

    throw error
  }
}
