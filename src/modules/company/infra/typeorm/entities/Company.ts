import ICompanyDTO from "../../../dtos/ICompanyDTO";
import {Column, Entity, PrimaryColumn} from "typeorm";


@Entity('general_company')
export class Company implements ICompanyDTO {
    @PrimaryColumn({name: 'id_general_company'})
    id: number;

    @Column()
    name: string;
}
