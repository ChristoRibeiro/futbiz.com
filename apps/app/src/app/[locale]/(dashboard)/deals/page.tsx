import { getScopedI18n } from "@/locales/server"

export async function generateMetadata() {
  const t = await getScopedI18n("deals")
  return {
    title: t("title"),
  }
}

export default async function Page() {
  return (
    <div>
      <h1>Deals</h1>
    </div>
  )
}