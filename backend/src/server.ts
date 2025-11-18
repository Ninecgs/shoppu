// to run = npx ts-node src/server.ts
import express, { Express, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import prisma, { testConnection, disconnectDatabase } from "./config/database";

dotenv.config();

const app: Express = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/api/health", (req: Request, res: Response) => {
  res.json({
    status: "ok",
    message: "Shoppu API is running",
    timestamp: new Date().toISOString(),
  });
});

app.get("/api/health/db", async (req: Request, res: Response) => {
  try {
    const [userCount, categoryCount, productCount] = await Promise.all([
      prisma.user.count(),
      prisma.category.count(),
      prisma.product.count(),
    ]);

    res.json({
      status: "healthy",
      message: "Database connected",
      timestamp: new Date().toISOString(),
      data: {
        users: userCount,
        categories: categoryCount,
        products: productCount,
      },
    });
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    res.status(503).json({
      status: "unhealthy",
      message: "Database connection failed",
      error: errorMessage,
    });
  }
});

async function startServer() {
  try {
    const isConnected = await testConnection();

    if (!isConnected) {
      console.error("Failed to connect to database. Exiting...");
      process.exit(1);
    }
    app.listen(PORT, () => {
      console.log("\n Server started successfully!");
      console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
      console.log(` Server:     http://localhost:${PORT}`);
      console.log(` Health:     http://localhost:${PORT}/api/health`);
      console.log(` DB Health:  http://localhost:${PORT}/api/health/db`);
      console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n");
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
}

process.on("SIGINT", async () => {
  console.log("\n Shutting down gracefully...");
  await disconnectDatabase();
  console.log("Server stopped. Goodbye!");
  process.exit(0);
});

process.on("SIGTERM", async () => {
  console.log("\n Shutting down gracefully...");
  await disconnectDatabase();
  process.exit(0);
});

startServer();
