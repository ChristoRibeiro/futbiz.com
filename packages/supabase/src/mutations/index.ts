import { logger } from "@futbiz/logger";
import { createClient } from "@futbiz/supabase/server";

export async function updateUser(userId: string, data: unknown) {
  const supabase = createClient();

  try {
    const result = await supabase.from("users").update(data).eq("id", userId);

    return result;
  } catch (error) {
    logger.error(error);

    throw error;
  }
}
