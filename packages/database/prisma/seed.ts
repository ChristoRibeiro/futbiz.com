import { PrismaClient } from "@prisma/client"
import { COUNTRY, ContactType, DealStatus, LEAGUE } from "../src/data"
import * as fake from "./fake"

const prisma = new PrismaClient()

async function main() {
  // =====================
  // MARKET
  // =====================

  await prisma.transfertPeriod.deleteMany()
  await prisma.country.deleteMany()
  await prisma.league.deleteMany()

  // all leagues
  await prisma.league.createMany({
    skipDuplicates: true,
    data: [
      { id: LEAGUE.AFC },
      { id: LEAGUE.CAF },
      { id: LEAGUE.CONMEBOL },
      { id: LEAGUE.CONCACAF },
      { id: LEAGUE.OFC },
      { id: LEAGUE.UEFA },
    ],
  })

  // all UEFA countries
  await prisma.country.createMany({
    skipDuplicates: true,
    data: [
      // UEFA
      { id: COUNTRY.ALBANIA, leagueId: LEAGUE.UEFA },
      { id: COUNTRY.ANDORRA, leagueId: LEAGUE.UEFA },
      { id: COUNTRY.ARMENIA, leagueId: LEAGUE.UEFA },
      { id: COUNTRY.AUSTRIA, leagueId: LEAGUE.UEFA },
      { id: COUNTRY.AZERBAIJAN, leagueId: LEAGUE.UEFA },
      { id: COUNTRY.BELARUS, leagueId: LEAGUE.UEFA },
      { id: COUNTRY.BELGIUM, leagueId: LEAGUE.UEFA },
      { id: COUNTRY.BOSNIA_AND_HERZEGOVINA, leagueId: LEAGUE.UEFA },
      { id: COUNTRY.BULGARIA, leagueId: LEAGUE.UEFA },
      { id: COUNTRY.CROATIA, leagueId: LEAGUE.UEFA },
      { id: COUNTRY.CYPRUS, leagueId: LEAGUE.UEFA },
      { id: COUNTRY.CZECH_REPUBLIC, leagueId: LEAGUE.UEFA },
      { id: COUNTRY.DENMARK, leagueId: LEAGUE.UEFA },
      { id: COUNTRY.ENGLAND, leagueId: LEAGUE.UEFA },
      { id: COUNTRY.ESTONIA, leagueId: LEAGUE.UEFA },
      { id: COUNTRY.FAROE_ISLANDS, leagueId: LEAGUE.UEFA },
      { id: COUNTRY.FINLAND, leagueId: LEAGUE.UEFA },
      { id: COUNTRY.FRANCE, leagueId: LEAGUE.UEFA },
      { id: COUNTRY.GEORGIA, leagueId: LEAGUE.UEFA },
      { id: COUNTRY.GERMANY, leagueId: LEAGUE.UEFA },
      { id: COUNTRY.GIBRALTAR, leagueId: LEAGUE.UEFA },
      { id: COUNTRY.GREECE, leagueId: LEAGUE.UEFA },
      { id: COUNTRY.HUNGARY, leagueId: LEAGUE.UEFA },
      { id: COUNTRY.ICELAND, leagueId: LEAGUE.UEFA },
      { id: COUNTRY.ISRAEL, leagueId: LEAGUE.UEFA },
      { id: COUNTRY.ITALY, leagueId: LEAGUE.UEFA },
      { id: COUNTRY.KAZAKHSTAN, leagueId: LEAGUE.UEFA },
      { id: COUNTRY.KOSOVO, leagueId: LEAGUE.UEFA },
      { id: COUNTRY.LATVIA, leagueId: LEAGUE.UEFA },
      { id: COUNTRY.LIECHTENSTEIN, leagueId: LEAGUE.UEFA },
      { id: COUNTRY.LITHUANIA, leagueId: LEAGUE.UEFA },
      { id: COUNTRY.LUXEMBOURG, leagueId: LEAGUE.UEFA },
      { id: COUNTRY.MALTA, leagueId: LEAGUE.UEFA },
      { id: COUNTRY.MOLDOVA, leagueId: LEAGUE.UEFA },
      { id: COUNTRY.MONACO, leagueId: LEAGUE.UEFA },
      { id: COUNTRY.MONTENEGRO, leagueId: LEAGUE.UEFA },
      { id: COUNTRY.NETHERLANDS, leagueId: LEAGUE.UEFA },
      { id: COUNTRY.NORTHERN_IRELAND, leagueId: LEAGUE.UEFA },
      { id: COUNTRY.NORTH_MACEDONIA, leagueId: LEAGUE.UEFA },
      { id: COUNTRY.NORWAY, leagueId: LEAGUE.UEFA },
      { id: COUNTRY.POLAND, leagueId: LEAGUE.UEFA },
      { id: COUNTRY.PORTUGAL, leagueId: LEAGUE.UEFA },
      { id: COUNTRY.REPUBLIC_OF_IRELAND, leagueId: LEAGUE.UEFA },
      { id: COUNTRY.ROMANIA, leagueId: LEAGUE.UEFA },
      { id: COUNTRY.RUSSIA, leagueId: LEAGUE.UEFA },
      { id: COUNTRY.SAN_MARINO, leagueId: LEAGUE.UEFA },
      { id: COUNTRY.SCOTLAND, leagueId: LEAGUE.UEFA },
      { id: COUNTRY.SERBIA, leagueId: LEAGUE.UEFA },
      { id: COUNTRY.SLOVAKIA, leagueId: LEAGUE.UEFA },
      { id: COUNTRY.SLOVENIA, leagueId: LEAGUE.UEFA },
      { id: COUNTRY.SPAIN, leagueId: LEAGUE.UEFA },
      { id: COUNTRY.SWEDEN, leagueId: LEAGUE.UEFA },
      { id: COUNTRY.SWITZERLAND, leagueId: LEAGUE.UEFA },
      { id: COUNTRY.TURKEY, leagueId: LEAGUE.UEFA },
      { id: COUNTRY.UKRAINE, leagueId: LEAGUE.UEFA },
      { id: COUNTRY.WALES, leagueId: LEAGUE.UEFA },
    ],
  })

  // all UEFA 2025 winter transfert periods
  await prisma.transfertPeriod.createMany({
    skipDuplicates: true,
    // biome-ignore format: expected
    data: [
      { id: `2025_WINTER_${COUNTRY.ALBANIA}`, from: new Date("2025-01-01"), to: new Date("2025-01-31"), countryId: COUNTRY.ALBANIA },
      { id: `2025_WINTER_${COUNTRY.DENMARK}`,from: new Date("2025-01-01"), to: new Date("2025-01-31"), countryId: COUNTRY.DENMARK },
      { id: `2025_WINTER_${COUNTRY.GERMANY}`,from: new Date("2025-01-01"), to: new Date("2025-02-03"), countryId: COUNTRY.GERMANY },
      { id: `2025_WINTER_${COUNTRY.FRANCE}`,from: new Date("2025-01-01"), to: new Date("2025-02-03"), countryId: COUNTRY.FRANCE },
      { id: `2025_WINTER_${COUNTRY.GREECE}`,from: new Date("2025-01-01"), to: new Date("2025-02-03"), countryId: COUNTRY.GREECE },
      { id: `2025_WINTER_${COUNTRY.AUSTRIA}`,from: new Date("2025-01-01"), to: new Date("2025-02-06"), countryId: COUNTRY.AUSTRIA },
      { id: `2025_WINTER_${COUNTRY.CYPRUS}`,from: new Date("2025-01-01"), to: new Date("2025-02-03"), countryId: COUNTRY.CYPRUS },
      { id: `2025_WINTER_${COUNTRY.ENGLAND}`,from: new Date("2025-01-01"), to: new Date("2025-02-03"), countryId: COUNTRY.ENGLAND },
      { id: `2025_WINTER_${COUNTRY.SCOTLAND}`,from: new Date("2025-01-01"), to: new Date("2025-02-03"), countryId: COUNTRY.SCOTLAND },
      { id: `2025_WINTER_${COUNTRY.WALES}`,from: new Date("2025-01-01"), to: new Date("2025-02-03"), countryId: COUNTRY.WALES },
      { id: `2025_WINTER_${COUNTRY.NORTHERN_IRELAND}`,from: new Date("2025-01-01"), to: new Date("2025-02-03"), countryId: COUNTRY.NORTHERN_IRELAND },
      { id: `2025_WINTER_${COUNTRY.KOSOVO}`,from: new Date("2025-01-01"), to: new Date("2025-01-31"), countryId: COUNTRY.KOSOVO },
      { id: `2025_WINTER_${COUNTRY.ANDORRA}`,from: new Date("2025-01-02"), to: new Date("2025-01-31"), countryId: COUNTRY.ANDORRA },
      { id: `2025_WINTER_${COUNTRY.ITALY}`,from: new Date("2025-01-02"), to: new Date("2025-02-04"), countryId: COUNTRY.ITALY },
      { id: `2025_WINTER_${COUNTRY.MALTA}`,from: new Date("2025-01-02"), to: new Date("2025-01-31"), countryId: COUNTRY.MALTA },
      { id: `2025_WINTER_${COUNTRY.NETHERLANDS}`,from: new Date("2025-01-02"), to: new Date("2025-02-04"), countryId: COUNTRY.NETHERLANDS },
      { id: `2025_WINTER_${COUNTRY.PORTUGAL}`,from: new Date("2025-01-02"), to: new Date("2025-02-04"), countryId: COUNTRY.PORTUGAL },
      { id: `2025_WINTER_${COUNTRY.SPAIN}`,from: new Date("2025-01-02"), to: new Date("2025-02-04"), countryId: COUNTRY.SPAIN },
      { id: `2025_WINTER_${COUNTRY.LUXEMBOURG}`,from: new Date("2025-01-03"), to: new Date("2025-01-31"), countryId: COUNTRY.LUXEMBOURG },
      { id: `2025_WINTER_${COUNTRY.GIBRALTAR}`,from: new Date("2025-01-04"), to: new Date("2025-01-31"), countryId: COUNTRY.GIBRALTAR },
      { id: `2025_WINTER_${COUNTRY.LATVIA}`,from: new Date("2025-01-07"), to: new Date("2025-03-04"), countryId: COUNTRY.LATVIA },
      { id: `2025_WINTER_${COUNTRY.BELGIUM}`,from: new Date("2025-01-07"), to: new Date("2025-02-03"), countryId: COUNTRY.BELGIUM },
      { id: `2025_WINTER_${COUNTRY.SAN_MARINO}`,from: new Date("2025-01-09"), to: new Date("2025-02-05"), countryId: COUNTRY.SAN_MARINO },
      { id: `2025_WINTER_${COUNTRY.ISRAEL}`,from: new Date("2025-01-09"), to: new Date("2025-02-05"), countryId: COUNTRY.ISRAEL },
      { id: `2025_WINTER_${COUNTRY.CROATIA}`,from: new Date("2025-01-10"), to: new Date("2025-02-17"), countryId: COUNTRY.CROATIA },
      { id: `2025_WINTER_${COUNTRY.BULGARIA}`,from: new Date("2025-01-13"), to: new Date("2025-02-24"), countryId: COUNTRY.BULGARIA },
      { id: `2025_WINTER_${COUNTRY.TURKEY}`,from: new Date("2025-01-13"), to: new Date("2025-02-11"), countryId: COUNTRY.TURKEY },
      { id: `2025_WINTER_${COUNTRY.AZERBAIJAN}`,from: new Date("2025-01-14"), to: new Date("2025-02-10"), countryId: COUNTRY.AZERBAIJAN },
      { id: `2025_WINTER_${COUNTRY.ROMANIA}`,from: new Date("2025-01-14"), to: new Date("2025-02-10"), countryId: COUNTRY.ROMANIA },
      { id: `2025_WINTER_${COUNTRY.LIECHTENSTEIN}`,from: new Date("2025-01-15"), to: new Date("2025-02-17"), countryId: COUNTRY.LIECHTENSTEIN },
      { id: `2025_WINTER_${COUNTRY.NORTH_MACEDONIA}`,from: new Date("2025-01-15"), to: new Date("2025-02-11"), countryId: COUNTRY.NORTH_MACEDONIA },
      { id: `2025_WINTER_${COUNTRY.SWITZERLAND}`,from: new Date("2025-01-15"), to: new Date("2025-02-15"), countryId: COUNTRY.SWITZERLAND },
      { id: `2025_WINTER_${COUNTRY.HUNGARY}`,from: new Date("2025-01-15"), to: new Date("2025-02-14"), countryId: COUNTRY.HUNGARY },
      { id: `2025_WINTER_${COUNTRY.MONTENEGRO}`,from: new Date("2025-01-15"), to: new Date("2025-02-15"), countryId: COUNTRY.MONTENEGRO },
      { id: `2025_WINTER_${COUNTRY.SLOVENIA}`,from: new Date("2025-01-16"), to: new Date("2025-02-15"), countryId: COUNTRY.SLOVENIA },
      { id: `2025_WINTER_${COUNTRY.BOSNIA_AND_HERZEGOVINA}`,from: new Date("2025-01-18"), to: new Date("2025-02-14"), countryId: COUNTRY.BOSNIA_AND_HERZEGOVINA },
      { id: `2025_WINTER_${COUNTRY.SERBIA}`,from: new Date("2025-01-18"), to: new Date("2025-02-14"), countryId: COUNTRY.SERBIA },
      { id: `2025_WINTER_${COUNTRY.POLAND}`,from: new Date("2025-01-23"), to: new Date("2025-02-22"), countryId: COUNTRY.POLAND },
      { id: `2025_WINTER_${COUNTRY.RUSSIA}`,from: new Date("2025-01-23"), to: new Date("2025-02-20"), countryId: COUNTRY.RUSSIA },
      { id: `2025_WINTER_${COUNTRY.SLOVAKIA}`,from: new Date("2025-01-24"), to: new Date("2025-02-21"), countryId: COUNTRY.SLOVAKIA },
      { id: `2025_WINTER_${COUNTRY.CZECH_REPUBLIC}`,from: new Date("2025-01-26"), to: new Date("2025-02-22"), countryId: COUNTRY.CZECH_REPUBLIC },
      { id: `2025_WINTER_${COUNTRY.UKRAINE}`,from: new Date("2025-01-27"), to: new Date("2025-03-11"), countryId: COUNTRY.UKRAINE },
      { id: `2025_WINTER_${COUNTRY.ARMENIA}`,from: new Date("2025-02-01"), to: new Date("2025-02-28"), countryId: COUNTRY.ARMENIA },
      { id: `2025_WINTER_${COUNTRY.MOLDOVA}`,from: new Date("2025-02-03"), to: new Date("2025-03-14"), countryId: COUNTRY.MOLDOVA },
      { id: `2024_WINTER_${COUNTRY.ICELAND}`,from: new Date("2024-02-01"), to: new Date("2024-04-24"), countryId: COUNTRY.ICELAND },
      { id: `2024_WINTER_${COUNTRY.KAZAKHSTAN}`,from: new Date("2024-01-21"), to: new Date("2024-04-05"), countryId: COUNTRY.KAZAKHSTAN },
      { id: `2024_WINTER_${COUNTRY.FINLAND}`,from: new Date("2024-02-08"), to: new Date("2024-03-03"), countryId: COUNTRY.FINLAND },
      { id: `2024_WINTER_${COUNTRY.NORWAY}`,from: new Date("2024-01-31"), to: new Date("2024-03-04"), countryId: COUNTRY.NORWAY },
      { id: `2024_WINTER_${COUNTRY.BELARUS}`,from: new Date("2024-02-08"), to: new Date("2024-03-28"), countryId: COUNTRY.BELARUS },
      { id: `2024_WINTER_${COUNTRY.SWEDEN}`,from: new Date("2024-02-01"), to: new Date("2024-03-27"), countryId: COUNTRY.SWEDEN },
      { id: `2024_WINTER_${COUNTRY.GEORGIA}`,from: new Date("2024-01-01"), to: new Date("2024-03-24"), countryId: COUNTRY.GEORGIA },
      { id: `2024_WINTER_${COUNTRY.LITHUANIA}`,from: new Date("2024-01-07"), to: new Date("2024-03-18"), countryId: COUNTRY.LITHUANIA },
      { id: `2024_WINTER_${COUNTRY.FAROE_ISLANDS}`,from: new Date("2024-01-08"), to: new Date("2024-03-15"), countryId: COUNTRY.FAROE_ISLANDS },
      { id: `2024_WINTER_${COUNTRY.ESTONIA}`,from: new Date("2024-01-01"), to: new Date("2024-03-01"), countryId: COUNTRY.ESTONIA },
      { id: `2024_WINTER_${COUNTRY.REPUBLIC_OF_IRELAND}`,from: new Date("2023-12-01"), to: new Date("2024-02-22"), countryId: COUNTRY.REPUBLIC_OF_IRELAND },
    ],
  })

  // =====================
  // TENANT with USERS
  // =====================
  // no reset, only upsert.

  const demo = await prisma.tenant.upsert({
    where: { id: fake.tenant.id },
    create: fake.tenant,
    update: fake.tenant,
  })

  const user1 = await prisma.user.upsert({
    where: { id: fake.user1.id },
    create: fake.user1,
    update: fake.user1,
  })

  // =====================
  // CRM
  // =====================

  await prisma.deal.deleteMany()
  await prisma.contact.deleteMany()
  await prisma.club.deleteMany()

  const barcelona = await prisma.club.create({
    data: {
      name: "FC Barcelona",
      countryId: COUNTRY.SPAIN,
      tenantId: demo.id,
    },
  })

  const messi = await prisma.contact.create({
    data: {
      type: ContactType.PLAYER,
      name: "Lionel Messi",
      clubId: barcelona.id,
      tenantId: demo.id,
    },
  })

  await prisma.deal.create({
    data: {
      name: "Messi opportunity",
      description: "FC Barcelona is interested in acquiring Messi.",
      value: 1_000_000,
      currency: "EUR",
      status: DealStatus.NEGOTIATION,
      clubId: barcelona.id,
      contactId: messi.id,
      tenantId: demo.id,
      createdByUserId: user1.id,
    },
  })

  // // Création d'une note
  // await prisma.note.create({
  //   data: {
  //     content: "Première réunion très positive avec l'agent de Messi",
  //     contactId: messi.id,
  //     dealId: deal.id,
  //   },
  // })

  // // Création d'un événement
  // await prisma.event.create({
  //   data: {
  //     type: "PLAYER_TRANSFER",
  //     description: "Signature officielle du contrat de Messi avec le PSG",
  //     clubId: barcelona.id,
  //     contactId: messi.id,
  //   },
  // })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
