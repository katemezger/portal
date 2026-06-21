import { PrismaClient } from '@prisma/client';
import { PrismaNeon } from '@prisma/adapter-neon';

// Function to create a fresh Prisma Client instance with the Neon Driver Adapter
const prismaClientSingleton = () => {
  const adapter = new PrismaNeon({
    connectionString: process.env.DATABASE_URL!,
  });
  
  return new PrismaClient({ adapter });
};

// Ensure TS reads our global token registry cleanly
declare const myGlobal: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof globalThis;

// Use the existing global instance if available, or initialize a new one
export const prisma = myGlobal.prismaGlobal ?? prismaClientSingleton();

// In development mode, attach the client to globalThis to survive Hot Module Replacement (HMR) reloads
if (process.env.NODE_ENV !== 'production') {
  myGlobal.prismaGlobal = prisma;
}