import IProductDTO from "../../../dtos/IProductDTO";
import {Entity, PrimaryColumn, Column} from "typeorm";
import { EquipmentType } from "./EquipmentType";
import { Company } from "./Company";

@Entity('general_product')
export class Product implements IProductDTO {

    @PrimaryColumn("id_general_product")
    id!: number;

    @Column()
    serialNumber!: number;

    @Column()
    company!: Company;

    @Column()
    description!: string;

    @Column()
    equipmentType!: EquipmentType;

    @Column()
    quantity!: number;



}
