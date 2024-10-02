import { createNavigationConfig } from "next-safe-navigation"

export const { routes, useSafeParams, useSafeSearchParams } =
  createNavigationConfig((defineRoute) => ({
    // Public
    login: defineRoute("/login"),

    // Dashboard
    clubs: defineRoute("/clubs"),
    deals: defineRoute("/deals"),
    players: defineRoute("/players"),
    settings: defineRoute("/settings"),
  }))
