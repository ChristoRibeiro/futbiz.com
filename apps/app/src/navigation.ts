import { createNavigationConfig } from "next-safe-navigation"
import { z } from "zod"

export const { routes, useSafeParams, useSafeSearchParams } = createNavigationConfig((defineRoute) => ({
  // Public
  login: defineRoute("/login"),

  // Dashboard
  deals: defineRoute("/"),
  clubs: defineRoute("/clubs"),
  players: defineRoute("/players"),
  market: defineRoute("/market", {
    search: z
      .object({
        sort: z.enum(["country-asc", "country-desc", "period-asc", "period-desc"]).default("period-asc"),
      })
      .optional(),
  }),
  settings: defineRoute("/settings"),
}))
