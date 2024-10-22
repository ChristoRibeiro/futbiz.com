import { differenceInDays, isAfter, isBefore } from "date-fns"

export type MarketStatus = "LATER" | "OPEN SOON" | "OPEN" | "CLOSE SOON" | "CLOSED"

/**
 * Get the status of a market period:
 *
 * - LATER:      31 days after the start of the period
 * - OPEN SOON:  30 days before the start of the period
 * - OPEN:        7 days before the end of the period
 * - CLOSE SOON: 14 days before the end of the period
 * - CLOSED:      1 day after the end of the period
 *
 * @param date - The date to check
 * @param from - The start date of the period
 * @param to - The end date of the period
 * @returns The status of the period
 */
export function getStatus(date: Date, from: Date, to: Date): MarketStatus {
  if (isAfter(date, to)) return "CLOSED"
  if (isBefore(date, from)) {
    return differenceInDays(from, date) <= 30 ? "OPEN SOON" : "LATER"
  }
  if (differenceInDays(to, date) <= 14) return "CLOSE SOON"
  return "OPEN"
}
