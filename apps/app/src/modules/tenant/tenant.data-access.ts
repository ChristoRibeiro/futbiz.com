import { db } from "@futbiz/database/db"
import { unstable_cache as cache } from "next/cache"
import { UserNotFoundError } from "../errors"
import { TAG } from "../tags"

/** Find the tenant by the user.authId (copy of supabase auth.users.id) */
export const getTenantByAuthId = cache(
  async (authId: string) => {
    const user = await db.user.findFirst({
      where: { authId },
      select: { tenant: true },
    })

    if (!user) {
      throw new UserNotFoundError()
    }

    return user.tenant
  },
  [TAG.CURRENT_USER_TENANT],
)
