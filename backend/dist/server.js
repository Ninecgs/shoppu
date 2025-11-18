"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// to run = npx ts-node src/server.ts
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const database_1 = __importStar(require("./config/database"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get("/api/health", (req, res) => {
    res.json({
        status: "ok",
        message: "Shoppu API is running",
        timestamp: new Date().toISOString(),
    });
});
app.get("/api/health/db", async (req, res) => {
    try {
        const [userCount, categoryCount, productCount] = await Promise.all([
            database_1.default.user.count(),
            database_1.default.category.count(),
            database_1.default.product.count(),
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
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        res.status(503).json({
            status: "unhealthy",
            message: "Database connection failed",
            error: errorMessage,
        });
    }
});
async function startServer() {
    try {
        const isConnected = await (0, database_1.testConnection)();
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
    }
    catch (error) {
        console.error("Failed to start server:", error);
        process.exit(1);
    }
}
process.on("SIGINT", async () => {
    console.log("\n Shutting down gracefully...");
    await (0, database_1.disconnectDatabase)();
    console.log("Server stopped. Goodbye!");
    process.exit(0);
});
process.on("SIGTERM", async () => {
    console.log("\n Shutting down gracefully...");
    await (0, database_1.disconnectDatabase)();
    process.exit(0);
});
startServer();
