import { getScopedI18n } from "@/locales/server"
import { Skeleton } from "@futbiz/ui/skeleton"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@futbiz/ui/table"

const ROWS = Array.from({ length: 5 }, (_, index) => index)

export async function TableTransfertPeriodsLoading() {
  const t = await getScopedI18n("market")
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>{t("league")}</TableHead>
          <TableHead>{t("country")}</TableHead>
          <TableHead>{t("period")}</TableHead>
          <TableHead>{t("days")}</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {ROWS.map((index) => (
          <TableRow key={index}>
            <TableCell className="w-10">
              <Skeleton className="h-6" />
            </TableCell>
            <TableCell className="w-2/3">
              <Skeleton className="h-6" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-6" />
            </TableCell>
            <TableCell>
              <Skeleton className="h-6" />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
