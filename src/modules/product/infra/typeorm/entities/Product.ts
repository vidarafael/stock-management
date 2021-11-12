import IProductDTO from "../../../dtos/IProductDTO";
import {Entity, PrimaryColumn, Column, OneToOne, OneToMany, ManyToOne, JoinColumn} from "typeorm";
import { EquipmentType } from "../../../../equipmentType/infra/typeorm/entities/EquipmentType";
import { Company } from "../../../../company/infra/typeorm/entities/Company";

@Entity('general_product')
export class Product implements IProductDTO {

    @PrimaryColumn({name:"id_general_product"})
    id: number;

    @Column({name: "serial_number"})
    serialNumber?: number;

    @ManyToOne(() => Company)
    @JoinColumn({referencedColumnName: 'id', name: 'id_general_company'})    
    company: Company;

    @Column()
    description: string;

    @OneToOne(() => EquipmentType)
    @JoinColumn({referencedColumnName: 'id', name: 'id_equipment_type'})
    equipmentType: EquipmentType;

    @Column()
    quantity?: number;



}
