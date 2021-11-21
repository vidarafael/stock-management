import {Entity, PrimaryColumn} from "typeorm";
import IEquipmentTypeDTO from "../../../dtos/IEquipmentTypeDTO";

@Entity('equipment_type')
export class EquipmentType implements IEquipmentTypeDTO{

    @PrimaryColumn({name: 'id_equipment_type'})
    id: number;
}
