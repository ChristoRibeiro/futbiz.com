import { getScopedI18n } from "@/locales/server"
import { MarketBadge } from "@/modules/market/components/market-badge"
import { getTransfertPeriods } from "@/modules/market/market.use-cases"
import { getStatus } from "@/modules/market/utils/get-status"
import { routes } from "@/navigation"
import { cn } from "@futbiz/ui/cn"
import { Icons } from "@futbiz/ui/icons"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@futbiz/ui/table"
import { differenceInDays, format } from "date-fns"
import Link from "next/link"
import { Country } from "../../../components/country"

const TODAY = new Date()

export async function TableTransfertPeriodsServer({
  searchParams,
}: {
  searchParams: ReturnType<typeof routes.market.$parseSearchParams>
}) {
  const t = await getScopedI18n("table-transfert-periods")
  const periods = await getTransfertPeriods({
    orderBy: {
      from: searchParams?.sort === "period-asc" ? "asc" : searchParams?.sort === "period-desc" ? "desc" : undefined,
      countryId: searchParams?.sort === "country-asc" ? "asc" : searchParams?.sort === "country-desc" ? "desc" : undefined,
    },
  })

  const rows = periods.map(({ id, countryId, from, to }) => {
    const status = getStatus(TODAY, [from, to])
    return {
      id,
      status,
      countryId,
      period: `${format(from, "dd MMM yy ")} → ${format(to, " dd MMM yy")}`,
      days: differenceInDays(to, from),
    }
  })

  return (
    <Table>
      <TableHeader className="sticky top-0">
        <TableRow>
          <TableHead>{t("status")}</TableHead>
          <TableHead>
            <Link
              className="inline-flex items-center gap-1 hover:cursor-pointer"
              href={routes.market({
                search: {
                  sort: searchParams?.sort === "country-asc" ? "country-desc" : "country-asc",
                },
              })}
            >
              {t("country")}
              {searchParams?.sort === "country-desc" && <Icons.SortTextDesc className="size-4" />}
              {searchParams?.sort === "country-asc" && <Icons.SortTextAsc className="size-4" />}
            </Link>
          </TableHead>
          <TableHead>
            <Link
              className="inline-flex items-center gap-1 hover:cursor-pointer"
              href={routes.market({
                search: {
                  sort: searchParams?.sort === "period-asc" ? "period-desc" : "period-asc",
                },
              })}
            >
              {t("period")}
              {searchParams?.sort === "period-desc" && <Icons.SortNumberDesc className="size-4" />}
              {searchParams?.sort === "period-asc" && <Icons.SortNumberAsc className="size-4" />}
            </Link>
          </TableHead>
          <TableHead>{t("days")}</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {rows.map(({ id, status, countryId, period, days }) => (
          <TableRow key={id}>
            <TableCell className="w-24">
              <MarketBadge status={status} />
            </TableCell>
            <TableCell>
              <Country id={countryId} />
            </TableCell>
            <TableCell className={cn("w-56", status === "closed" && "opacity-50")}>{period}</TableCell>
            <TableCell className={cn("w-20", status === "closed" && "opacity-50")}>{days}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
