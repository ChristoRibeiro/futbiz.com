import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Réinitialisation de la base de données
  await prisma.event.deleteMany();
  await prisma.note.deleteMany();
  await prisma.deal.deleteMany();
  await prisma.contact.deleteMany();
  await prisma.club.deleteMany();
  await prisma.league.deleteMany();
  await prisma.period.deleteMany();
  await prisma.country.deleteMany();

  console.log("La base de données a été réinitialisée.");

  // Création d'un pays
  const spain = await prisma.country.create({
    data: {
      name: "Spain",
    },
  });

  // Création d'une ligue
  const laLiga = await prisma.league.create({
    data: {
      name: "La Liga",
      countryId: spain.id,
    },
  });

  // Création d'un club
  const barcelona = await prisma.club.create({
    data: {
      name: "FC Barcelona",
      leagueId: laLiga.id,
    },
  });

  // Création d'une fenêtre de transfert
  await prisma.period.create({
    data: {
      start: new Date("2023-07-01"),
      end: new Date("2023-08-31"),
      countryId: spain.id,
    },
  });

  // Création d'un contact
  const messi = await prisma.contact.create({
    data: {
      name: "Lionel Messi",
      email: "messi@fcbarcelona.com",
      phone: "+34123456789",
      type: "PLAYER",
      clubId: barcelona.id,
    },
  });

  // Création d'un deal
  const deal = await prisma.deal.create({
    data: {
      title: "Transfert de Messi",
      description: "Négociation pour le transfert de Messi au PSG",
      value: 1000000.0,
      currency: "EUR",
      status: "NEGOTIATION",
      clubId: barcelona.id,
      contactId: messi.id,
    },
  });

  // Création d'une note
  await prisma.note.create({
    data: {
      content: "Première réunion très positive avec l'agent de Messi",
      contactId: messi.id,
      dealId: deal.id,
    },
  });

  // Création d'un événement
  await prisma.event.create({
    data: {
      type: "PLAYER_TRANSFER",
      description: "Signature officielle du contrat de Messi avec le PSG",
      clubId: barcelona.id,
      contactId: messi.id,
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
