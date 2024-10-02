import { getScopedI18n } from "@/locales/server"

export async function generateMetadata() {
  const t = await getScopedI18n("players")
  return {
    title: t("title"),
  }
}

export default async function Page() {
  return (
    <div>
      <h1>Players</h1>
    </div>
  )
}
