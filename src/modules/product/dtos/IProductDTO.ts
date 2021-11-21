import ICompanyDTO from "../../company/dtos/ICompanyDTO";
import IEquipmentTypeDTO from "../../equipmentType/dtos/IEquipmentTypeDTO";


export default interface IProductDTO {
    id: number;
    serialNumber?: number;
    description: string;
    quantity?: number;
    company: ICompanyDTO;
    equipmentType: IEquipmentTypeDTO;
}