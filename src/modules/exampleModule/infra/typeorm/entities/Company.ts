import ICompanyDTO from "../../../dtos/ICompanyDTO";
import {Column, Entity, PrimaryColumn} from "typeorm";


@Entity('general_company')
export class Company implements ICompanyDTO {
    
    @PrimaryColumn('id_general_company')
    id!: number;

    @Column()
    name!: string;
}
