import { Router, Request, Response } from "express";

const router = Router()

router.get("/:nombre", (req: Request, res: Response) => {
    res.status(200).json({ mensaje: `hola ${req.params.nombre}!!` })
})

export default router 