import { getScopedI18n } from "@/locales/server"
import type { MarketStatus } from "@/modules/market/market.types"
import { Badge, type BadgeProps } from "@futbiz/ui/badge"

// biome-ignore format: expected
const statusToVariant: Record<MarketStatus, BadgeProps["variant"]> = {
  later:        "outline",
  "open-soon":  "outline",
  open:         "default",
  "close-soon": "default",
  closed:       "destructive",
}

export async function MarketBadge({ status }: { status: MarketStatus }) {
  const t = await getScopedI18n("market-badge")
  return <Badge variant={statusToVariant[status]}>{t(status)}</Badge>
}
