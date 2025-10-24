import express from "express";
import { Request, Response, NextFunction } from "express";
import defaultRoutes from "./routes/routes"

const app = express()
const port = 4000

app.use(express.json())

app.use((req: Request, res: Response, next: NextFunction) => {
  console.log("\n -- Llegó un mensaje -- ")
  console.log(`🗓️ Fecha: [${new Date().toISOString()}] 🤨 Tipo: ${req.method} 📬 Ruta: ${req.url}`);
  if (req.body && Object.keys(req.body).length > 0) {
    console.log("💪 Body:", req.body);
  }
  if (req.query && Object.keys(req.query).length > 0) {
    console.log("🧀 Query:", req.query);
  }
  next();
});

app.use("/api", defaultRoutes)

app.get("/", (req: Request, res: Response) => {
  res.status(200).send("Hola ✌️ desde el server de ian 😁")
})

app.listen(port, () => {
  console.log(`🔭 Servidor corriendo y <escuchando> en el puerto ${port} 🚀`)
})

