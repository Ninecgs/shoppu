"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testConnection = testConnection;
exports.disconnectDatabase = disconnectDatabase;
const client_1 = require("@prisma/client");
const prisma = global.prisma || new client_1.PrismaClient({
    log: ['query', 'info', 'warn', 'error'],
});
if (process.env.NODE_ENV !== 'production') {
    global.prisma = prisma;
}
async function testConnection() {
    try {
        await prisma.$connect();
        console.log('Database connected successfully!');
        return true;
    }
    catch (error) {
        console.error('Database connection failed:', error);
        return false;
    }
}
async function disconnectDatabase() {
    await prisma.$disconnect();
    console.log(' Database disconnected');
}
exports.default = prisma;
