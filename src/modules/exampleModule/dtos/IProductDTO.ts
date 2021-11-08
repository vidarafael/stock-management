import ICompanyDTO from "./ICompanyDTO";
import IEquipmentTypeDTO from "./IEquipmentTypeDTO";


export default interface IProductDTO {
    id?: number;
    serialNumber: number;
    description: string;
    quantity: number;
    company: ICompanyDTO;
    equipmentType: IEquipmentTypeDTO;
}