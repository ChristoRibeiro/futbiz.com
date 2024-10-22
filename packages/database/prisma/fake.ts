import type { Prisma } from "@prisma/client"
import { ContactType, DealStatus } from "../src/data"

export const tenant: Prisma.TenantCreateInput = {
  id: "demo",
  name: "Futbiz",
  address: "Av. João Paulo II 714, 4410-406 Arcozelo",
  country: "Portugal",
  website: "https://futbiz.com",
  email: "contact@futbiz.com",
  contactTypes: [ContactType.PLAYER],
  dealStatuses: [DealStatus.LEAD, DealStatus.NEGOTIATION, DealStatus.SIGNED, DealStatus.LOST],
}

export const user1: Prisma.UserCreateInput = {
  id: "demo_user_1",
  name: "Christophe Ribeiro",
  authId: "a7cefdb4-53e0-4988-89ed-e0d6dcad35bc", // from supabase auth.users
  tenant: {
    connect: { id: "demo" },
  },
}
