import { differenceInDays, isAfter, isBefore } from "date-fns"
import type { MarketPeriod, MarketStatus } from "../market.types"

/**
 * Get the status of a market period with a given date.
 *
 * - LATER:      31 days before the start of the period
 * - OPEN-SOON:  1-30 days before the start of the period
 * - OPEN:       during the period
 * - CLOSE-SOON: 14 days before the end of the period
 * - CLOSED:     1 day after the end of the period
 *
 * @param date - The date to check
 * @param from - The start date of the period
 * @param to - The end date of the period
 * @returns The status of the period
 */
export function getStatus(date: Date, period: MarketPeriod): MarketStatus {
  const start = period[0]
  const end = period[1]
  if (isAfter(date, end)) return "closed"
  if (isBefore(date, start)) {
    return differenceInDays(start, date) <= 30 ? "open-soon" : "later"
  }
  if (differenceInDays(end, date) <= 14) return "close-soon"
  return "open"
}
