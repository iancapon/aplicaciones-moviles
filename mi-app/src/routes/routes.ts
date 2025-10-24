import { Router, Request, Response } from "express";
import userRoute from "./user"

const router = Router()
router.use("/user", userRoute)

export default router