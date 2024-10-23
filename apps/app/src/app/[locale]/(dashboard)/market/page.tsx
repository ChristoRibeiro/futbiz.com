import { getScopedI18n } from "@/locales/server"
import { TableTransfertPeriodsLoading } from "@/modules/market/components/table-transfert-periods.loading"
import { TableTransfertPeriodsServer } from "@/modules/market/components/table-transfert-periods.server"
import { routes } from "@/navigation"
import { Suspense } from "react"

export async function generateMetadata() {
  const t = await getScopedI18n("market")
  return {
    title: t("title"),
  }
}

export default async function Page({ searchParams }: { searchParams: unknown }) {
  const params = routes.market.$parseSearchParams(searchParams)
  const t = await getScopedI18n("market")

  return (
    <>
      <h1 className="text-2xl font-bold pt-8 pb-6">{t("title")}</h1>
      <Suspense fallback={<TableTransfertPeriodsLoading />}>
        <TableTransfertPeriodsServer searchParams={params} />
      </Suspense>
    </>
  )
}
