import { PrismaClient } from "@prisma/client";

const PrismaClientSingleton = () => {
  return new PrismaClient();
};

declare global {
  var _prisma: ReturnType<typeof PrismaClientSingleton> | undefined;
}

export const db = globalThis._prisma ?? PrismaClientSingleton();

if (process.env.NODE_ENV !== "production") {
  globalThis._prisma = db;
}

export * from "@prisma/client";
