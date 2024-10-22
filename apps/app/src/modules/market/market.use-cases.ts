import * as dataAccess from "./market.data-access"

/** Get the transfert periods data */
export function getTransfertPeriods({
  orderBy,
}: {
  orderBy: {
    from: "asc" | "desc" | undefined
    countryId: "asc" | "desc" | undefined
  }
}) {
  return dataAccess.readTransfertPeriods({ orderBy })
}
