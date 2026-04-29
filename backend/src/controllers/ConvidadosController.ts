import { Request, Response } from "express";
import { ConvidadosService } from "../services/ConvidadosService";
import convidadosSchema from "../validators/ConvidadosSchema";

const service = new ConvidadosService()

export class ConvidadosController {
    async list(req: Request, res: Response) {
        try {

            const user = await service.list()

            return res.status(200).json(user)
        } catch (e: any) {
            return res.status(400).json({ message: e.message })
        }

    }
    async listByName(req: Request, res: Response) {
        try {
            const nome =  req.query.nome
            const user = await service.listByName((nome as string))
            return res.status(200).json(user)
        } catch (e: any) {
            return res.status(400).json({ message: e.message })
        }
    }
    async create(req: Request, res: Response) {
        try {

            const data = convidadosSchema.parse(req.body)
            const user = await service.create(data)
            return res.status(201).json(user)
        } catch (e: any) {
            return res.status(400).json({ message: e.message })
        }
    }
    async update(req: Request, res: Response) {
        try {
            const { id } = req.params
            const data = req.body

            const user = await service.update(id, data)
            return res.status(200).json(user)

        } catch (e: any) {
            return res.status(400).json({ message: e.message })
        }
    }
    async delete(req: Request, res: Response) {
        try {
            const { id } = req.params
            const user = await service.delete(id)
            return res.status(200).json(user)
        } catch (e: any) {
            return res.status(400).json({ message: e.message })
        }
    }
}