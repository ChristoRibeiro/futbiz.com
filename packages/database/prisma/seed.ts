import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Réinitialisation de la base de données
  await prisma.event.deleteMany();
  await prisma.note.deleteMany();
  await prisma.deal.deleteMany();
  await prisma.contact.deleteMany();
  await prisma.company.deleteMany();

  console.log("La base de données a été réinitialisée.");
  // Création d'une entreprise
  const company = await prisma.company.create({
    data: {
      name: "FC Barcelona",
      country: "Spain",
    },
  });

  // Création d'un contact
  const contact = await prisma.contact.create({
    data: {
      name: "Lionel Messi",
      email: "messi@fcbarcelona.com",
      phone: "+34123456789",
      type: "PLAYER",
      companyId: company.id,
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
      contactId: contact.id,
      companyId: company.id,
    },
  });

  // Création d'une note
  await prisma.note.create({
    data: {
      content: "Première réunion très positive avec l'agent de Messi",
      contactId: contact.id,
      dealId: deal.id,
    },
  });

  // Création d'un événement
  await prisma.event.create({
    data: {
      type: "PLAYER_TRANSFER",
      description: "Signature officielle du contrat de Messi avec le PSG",
      contactId: contact.id,
      companyId: company.id,
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
