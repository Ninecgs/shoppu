import { PrismaClient } from '../../generated/prisma/index.js';

declare global {
  var prisma: PrismaClient | undefined;
}

const prisma = global.prisma || new PrismaClient({
  log: ['query', 'info', 'warn', 'error'],
});

if (process.env.NODE_ENV !== 'production') {
  global.prisma = prisma;
}

export async function testConnection(): Promise<boolean> {
  try {
    await prisma.$connect();
    console.log('Database connected successfully!');
    return true;
  } catch (error) {
    console.error('Database connection failed:', error);
    return false;
  }
}

export async function disconnectDatabase(): Promise<void> {
  await prisma.$disconnect();
  console.log(' Database disconnected');
}
export default prisma;