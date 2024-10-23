import { addDays } from "date-fns"
import { describe, expect, test } from "vitest"
import { getStatus } from "./get-status"

describe("getStatus", () => {
  const TODAY = new Date("2024-03-01T00:00:00Z")

  test("should return LATER when date is 31+ days before the start of the period", () => {
    const resultOk1 = getStatus(TODAY, [addDays(TODAY, 32), addDays(TODAY, 60)])
    const resultOk2 = getStatus(TODAY, [addDays(TODAY, 31), addDays(TODAY, 60)])
    const resultNok = getStatus(TODAY, [addDays(TODAY, 30), addDays(TODAY, 60)])
    expect(resultOk1).toBe("later")
    expect(resultOk2).toBe("later")
    expect(resultNok).toBe("open-soon")
  })

  test("should return OPEN SOON when date is between 1-30 days before the start of the period", () => {
    const resultNok1 = getStatus(TODAY, [addDays(TODAY, 31), addDays(TODAY, 60)])
    const resultOk1 = getStatus(TODAY, [addDays(TODAY, 30), addDays(TODAY, 60)])
    const resultOk2 = getStatus(TODAY, [addDays(TODAY, 1), addDays(TODAY, 60)])
    const resultNok2 = getStatus(TODAY, [addDays(TODAY, 0), addDays(TODAY, 60)])
    expect(resultNok1).toBe("later")
    expect(resultOk1).toBe("open-soon")
    expect(resultOk2).toBe("open-soon")
    expect(resultNok2).toBe("open")
  })

  test("should return OPEN when date is during the period", () => {
    const resultNok1 = getStatus(TODAY, [addDays(TODAY, 1), addDays(TODAY, 60)])
    const resultOk1 = getStatus(TODAY, [addDays(TODAY, 0), addDays(TODAY, 60)])
    const resultOk2 = getStatus(TODAY, [addDays(TODAY, -1), addDays(TODAY, 60)])
    expect(resultNok1).toBe("open-soon")
    expect(resultOk1).toBe("open")
    expect(resultOk2).toBe("open")
  })

  test("should return CLOSE SOON when date is 0-14 days before the end of the period", () => {
    const resultNok1 = getStatus(TODAY, [addDays(TODAY, -60), addDays(TODAY, 15)])
    const resultOk1 = getStatus(TODAY, [addDays(TODAY, -60), addDays(TODAY, 14)])
    const resultOk2 = getStatus(TODAY, [addDays(TODAY, -60), addDays(TODAY, 0)])
    const resultNok2 = getStatus(TODAY, [addDays(TODAY, -60), addDays(TODAY, -1)])
    expect(resultNok1).toBe("open")
    expect(resultOk1).toBe("close-soon")
    expect(resultOk2).toBe("close-soon")
    expect(resultNok2).toBe("closed")
  })

  test("should return CLOSED when date is the end of the period or later", () => {
    const resultNok = getStatus(TODAY, [addDays(TODAY, -20), addDays(TODAY, 0)])
    const resultOk = getStatus(TODAY, [addDays(TODAY, -20), addDays(TODAY, -1)])
    expect(resultNok).toBe("close-soon")
    expect(resultOk).toBe("closed")
  })
})
