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

// Declaração global para evitar múltiplas instâncias em dev (hot reload)
declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

// Se já existe instância (hot reload), reutiliza
// Senão, cria nova
const prisma = global.prisma || new PrismaClient({
  log: ['query', 'info', 'warn', 'error'], // Logs para debug
});

// Em desenvolvimento, salva na global para sobreviver hot reloads
if (process.env.NODE_ENV !== 'production') {
  global.prisma = prisma;
}

/**
 * Testa a conexão com o banco
 * Útil para health checks e startup
 */
export async function testConnection(): Promise<boolean> {
  try {
    await prisma.$connect();
    console.log('✅ Database connected successfully!');
    return true;
  } catch (error) {
    console.error('❌ Database connection failed:', error);
    return false;
  }
}

/**
 * Desconecta do banco
 * Importante chamar no shutdown graceful
 */
export async function disconnectDatabase(): Promise<void> {
  await prisma.$disconnect();
  console.log('🔌 Database disconnected');
}

export default prisma;