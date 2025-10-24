import { PrismaClient } from "./generated/prisma/client";
import "dotenv/config"; // carga automáticamente las variables de .env

export default new PrismaClient()