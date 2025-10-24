import { defineConfig, env } from "prisma/config";
import "dotenv/config"; // carga automáticamente las variables de .env


export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  engine: "classic",
  datasource: {
    url: env("DATABASE_URL"),
  },
});
