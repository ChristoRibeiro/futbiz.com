import { addDays, subDays } from "date-fns"
import { describe, expect, test } from "vitest"
import { type MarketStatus, getStatus } from "./get-status"

describe("getStatus", () => {
  const TODAY = new Date("2024-03-01T00:00:00Z")

  // biome-ignore format: expected
  const CASES: Record<MarketStatus, [Date, Date]> = {
    LATER:        [addDays(TODAY, 31), addDays(TODAY, 61)], // 31 days after the start of the period
    "OPEN SOON":  [addDays(TODAY, 30), addDays(TODAY, 60)], // 30 days before the start of the period
    OPEN:         [subDays(TODAY, 7),  addDays(TODAY, 21)], // 
    "CLOSE SOON": [subDays(TODAY, 31), addDays(TODAY, 14)], // 14 days before the end of the period
    CLOSED:       [subDays(TODAY, 31), subDays(TODAY, 1)],  // 1 day after the end of the period
  }

  test.each(Object.entries(CASES))("%s", (status, [from, to]) => {
    const result = getStatus(TODAY, from, to)
    expect(result).toBe(status)
  })
})
