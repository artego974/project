import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity("convidados")
export class Convidados {
    @PrimaryGeneratedColumn()
    id:Number

    @Column({nullable: false, length: 100})
    nome: string

    @Column({nullable: false, unique:true, length: 100})
    email:string

    @Column({nullable: false, unique:true, length:11})
    cpf: string

    @Column({nullable: false, unique:true})
    telefone:string

    @CreateDateColumn()
    criado: Date

}