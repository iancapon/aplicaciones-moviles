import { Router, Request, Response } from "express";
import prisma from "../prisma"

const router = Router()

router.get("/:nombre", async (req: Request, res: Response) => {
    try {
        const userFound = await prisma.user.findFirst({
            where: { nombre: req.params.nombre }
        })
        if (userFound) {
            res.status(300).json({ mensaje: "Ya hay un usuario con el nombre " + userFound.nombre })

        }
        if (!userFound) {
            const userNew = await prisma.user.create({
                data: { nombre: req.params.nombre }
            })
            if (userNew) {
                res.status(200).json({ mensaje: `Nuevo usuario guardado!! Nombre: ${userNew.nombre}!!` })
            }
            if (!userNew) {
                res.status(400).json({ mensaje: "No se pudo crear el usuario" })
            }
        }
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ mensaje: "No se pudo conectar con prisma" })
    }
})

export default router 