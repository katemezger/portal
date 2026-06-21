import { PrismaClient } from '@prisma/client';
import { PrismaNeon } from '@prisma/adapter-neon';

const prismaClientSingleton = () => {
  const adapter = new PrismaNeon({
    connectionString: process.env.DATABASE_URL!,
  });
  
  return new PrismaClient({ adapter });
};

declare global {
  // allow storing the Prisma client on the global object in dev to prevent
  // exhausting database connections during hot-reloads
  var prismaGlobal: ReturnType<typeof prismaClientSingleton> | undefined;
}

export const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

if (process.env.NODE_ENV !== 'production') {
  globalThis.prismaGlobal = prisma;
}