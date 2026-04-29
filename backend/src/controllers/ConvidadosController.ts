import { Request, Response } from "express";
import { ConvidadosService } from "../services/ConvidadosService";


const service = new ConvidadosService()

export class ConvidadosController{
    async list(req:Request, res:Response){
        try{
        // const {nome} = req.query
        const user = service.list()

        return res.status(200).json(user)
        }catch(e:any){
            return res.status(400).json({message: e.message})
        }

    }
    async create(req:Request, res:Response){
        try{
            const data = req.body
            const user = await service.create(data)
            return res.status(201).json(user)
        }catch(e:any){
            return res.status(400).json({message:e.message})
        }
    }
    async update(req:Request, res:Response){
        try{
            const {id} = req.params
            const data = req.body
           
            const user = service.update(id,data)
            return res.status(200).json(user)

        }catch(e:any){
            return res.status(400).json({message:e.message})
        }
    }
    async delete(req:Request, res:Response){
        try{
            const {id} = req.params
            const user = service.delete(id)
            return res.status(200).json(user)
        }catch(e:any){
            return res.status(400).json({message:e.message})
        }
    }
}