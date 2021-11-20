import IDefaultDTO from "../../../shared/dtos/IDefaultDTO";

export default interface ICompanyDTO extends IDefaultDTO{
    companyName: string;
    companyCode: number;
    description?: string;
}