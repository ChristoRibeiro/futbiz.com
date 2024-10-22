import { db } from "@futbiz/database/db"
import { unstable_cache as cache } from "next/cache"
import { TAG } from "../tags"

/** Find the market countries with leagues and transfert periods */
export const readTransfertPeriods = cache(
  async ({
    orderBy: { from = undefined, countryId = undefined },
  }: {
    orderBy: {
      from: "asc" | "desc" | undefined
      countryId: "asc" | "desc" | undefined
    }
  }) => {
    const market = await db.transfertPeriod.findMany({
      include: {
        country: {
          include: {
            league: true,
          },
        },
      },
      orderBy: { from, countryId },
    })

    return market
  },
  [TAG.TRANSFERT_PERIODS],
)
