import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, DeleteDateColumn} from "typeorm";
import ICompanyDTO from "../../../dtos/ICompanyDTO";

@Entity('general_company')
class Company implements ICompanyDTO {
    @PrimaryGeneratedColumn({ name: 'id_general_company' })
    id?: number;

    @Column({ name: 'company_name' })
    companyName!: string;

    @Column({ name: 'company_code' })
    companyCode!: number;

    @Column({ name: 'description'})
    description?: string;

    @CreateDateColumn({ name: 'created_at' })
    createdAt?: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt?: Date;

    @DeleteDateColumn({ name: 'deleted_at' })
    deletedAt?: Date;

}

export default Company;