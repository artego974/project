import { Equal, Like } from "typeorm";
import { AppDataSource } from "../config/data-source";
import { Convidados } from "../models/Convidados";


export class ConvidadosService {
    private repo = AppDataSource.getRepository(Convidados)
    async list() {
        
        const user = await this.repo.find()
        return user
    }

    async listByName(nome:string){
        const user = await this.repo.findBy({nome: Like(`%${nome}%`)})
        return user
    }

    async create(data: any) {
        const exist = await this.repo.findOneBy({ email: data.email })
        if (exist) throw new Error("convidado ja existe")
        const user = this.repo.create(data)
        return this.repo.save(user)
    }
    async update(id: any, data: any) {
        const exist = await this.repo.findOneBy({ id: data.id })
        if (!exist) throw new Error("user não encontrado ou não existe")
        this.repo.update(id, data)
        return exist
    }
    async delete(id: any) {
        const user = this.repo.findOneBy({ id: id })
        if (!user) throw new Error("User não encontrado")
        return this.repo.delete(id)
    }
}