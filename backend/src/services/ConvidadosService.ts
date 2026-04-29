import { Like } from "typeorm";
import { AppDataSource } from "../config/data-source";
import { Convidados } from "../models/Convidados";


export class ConvidadosService{
    private repo = AppDataSource.getRepository(Convidados)
    async list(name?:string){
        if(name){
            const exist = await this.repo.find({where: Like[`%${(name)}%`]})
            return exist
        }
        return await this.repo.find()
    }
    async create(data:any){
        const exist = await this.repo.findOneBy({email:data.email})
        if(exist) throw new Error("convidado ja existe")
        const user =  this.repo.create(data)
        return this.repo.save(user)
    }
    async update(id:any, data:any){
        const exist = await this.repo.findOneBy({email: data.email})
        if(!exist) throw new Error("user não encontrado ou não existe")
        const user = this.repo.update(id,data)
        return user
    }
    async delete(id:number){
        const user = this.repo.findOneBy({id:id})
        if(!user) throw new Error("User não encontrado")
        return this.repo.delete(id)
    }
}