import { getScopedI18n } from "@/locales/server"
import { routes } from "@/navigation"
import Link from "next/link"

export default async function Page() {
  const t = await getScopedI18n("deals")

  return <Link href={routes.deals()}>{t("title")} →</Link>
}
