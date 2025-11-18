import { PrismaClient } from "@prisma/client";

/**
 * Singleton do Prisma Client
 * 
 * Por que singleton?
 * - Evita múltiplas conexões ao banco
 * - Reutiliza a mesma instância em todo o app
 * - Previne memory leaks
 * 
 * Em produção, o Prisma gerencia um pool de conexões
 * automaticamente (padrão: 10 conexões)
 */

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