import ICompanyDTO from "../../../dtos/ICompanyDTO";
import {Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn} from "typeorm";

@Entity('company')
export default class Company implements ICompanyDTO {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @CreateDateColumn({
        name: "created_at",
    })
    createdAt: Date;

    @UpdateDateColumn({
        name: "updated_at",
    })
    updatedAt: Date;

    @DeleteDateColumn({
        name: "deleted_at",
    })
    deletedAt: Date;
}