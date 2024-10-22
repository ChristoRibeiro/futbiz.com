import { addDays } from "date-fns"
import { describe, expect, test } from "vitest"
import { getStatus } from "./get-status"

describe("getStatus", () => {
  const TODAY = new Date("2024-03-01T00:00:00Z")

  test("should return LATER when date is 31+ days before the start of the period", () => {
    const resultNok = getStatus(TODAY, [addDays(TODAY, 30), addDays(TODAY, 60)])
    const resultOk1 = getStatus(TODAY, [addDays(TODAY, 31), addDays(TODAY, 60)])
    const resultOk2 = getStatus(TODAY, [addDays(TODAY, 32), addDays(TODAY, 60)])
    expect(resultNok).toBe("OPEN SOON")
    expect(resultOk1).toBe("LATER")
    expect(resultOk2).toBe("LATER")
  })

  test("should return OPEN SOON when date is between 1-30 days before the start of the period", () => {
    const resultNok1 = getStatus(TODAY, [addDays(TODAY, 31), addDays(TODAY, 60)])
    const resultOk1 = getStatus(TODAY, [addDays(TODAY, 30), addDays(TODAY, 60)])
    const resultOk2 = getStatus(TODAY, [addDays(TODAY, 1), addDays(TODAY, 60)])
    expect(resultNok1).toBe("LATER")
    expect(resultOk1).toBe("OPEN SOON")
    expect(resultOk2).toBe("OPEN SOON")
  })

  test("should return OPEN when date is during the period", () => {
    const resultNok1 = getStatus(TODAY, [addDays(TODAY, 1), addDays(TODAY, 60)])
    const resultOk1 = getStatus(TODAY, [addDays(TODAY, 0), addDays(TODAY, 60)])
    const resultOk2 = getStatus(TODAY, [addDays(TODAY, -1), addDays(TODAY, 60)])
    expect(resultNok1).toBe("OPEN SOON")
    expect(resultOk1).toBe("OPEN")
    expect(resultOk2).toBe("OPEN")
  })

  test("should return CLOSE SOON when date is 0-14 days before the end of the period", () => {
    const resultNok1 = getStatus(TODAY, [addDays(TODAY, 0), addDays(TODAY, 15)])
    const resultOk1 = getStatus(TODAY, [addDays(TODAY, 0), addDays(TODAY, 14)])
    const resultOk2 = getStatus(TODAY, [addDays(TODAY, -20), addDays(TODAY, 0)])
    expect(resultNok1).toBe("OPEN")
    expect(resultOk1).toBe("CLOSE SOON")
    expect(resultOk2).toBe("CLOSE SOON")
  })

  test("should return CLOSED when date is the end of the period or later", () => {
    const resultNok = getStatus(TODAY, [addDays(TODAY, -20), addDays(TODAY, 0)])
    const resultOk = getStatus(TODAY, [addDays(TODAY, -20), addDays(TODAY, -1)])
    expect(resultNok).toBe("CLOSE SOON")
    expect(resultOk).toBe("CLOSED")
  })

  // const testCases: Array<[MarketStatus, number, number, string]> = [
  //   // LATER
  //   ["LATER", 31, 61, "exactly 31 days after the start"],
  //   ["LATER", 32, 62, "32 days after the start"],
  //   ["LATER", 40, 70, "40 days after the start"],

  //   // OPEN SOON
  //   ["OPEN SOON", 30, 60, "exactly 30 days before the start"],
  //   ["OPEN SOON", 29, 59, "29 days before the start"],
  //   ["OPEN SOON", 1, 31, "1 day before the start"],

  //   // OPEN
  //   ["OPEN", -7, 21, "first day of the open period"],
  //   ["OPEN", 0, 28, "middle of the open period"],
  //   ["OPEN", 7, 35, "last day of the open period"],

  //   // CLOSE SOON
  //   ["CLOSE SOON", -31, 14, "14 days before the end"],
  //   ["CLOSE SOON", -30, 13, "13 days before the end"],
  //   ["CLOSE SOON", -18, 1, "1 day before the end"],

  //   // CLOSED
  //   ["CLOSED", -31, -1, "1 day after the end"],
  //   ["CLOSED", -32, -2, "2 days after the end"],
  //   ["CLOSED", -40, -10, "10 days after the end"],
  // ]

  // test.each(testCases)("%s: %s", (expectedStatus, fromDays, toDays, description) => {
  //   const from = addDays(TODAY, fromDays)
  //   const to = addDays(TODAY, toDays)
  //   const result = getStatus(TODAY, from, to)
  //   expect(result).toBe(expectedStatus)
  // })
})
