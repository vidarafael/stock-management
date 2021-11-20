import ICompanyDTO from "../dtos/ICompanyDTO";
import {UpdateResult} from "typeorm";

export default interface ICompanyRepository {
    create(data: ICompanyDTO): Promise<ICompanyDTO>;
    find(): Promise<ICompanyDTO[]>;
    findById(id: number): Promise<ICompanyDTO | undefined>;
    softDelete(id: number): Promise<void>;
    update(id: number, data: ICompanyDTO): Promise<UpdateResult>;
}