import {inject, injectable} from "tsyringe";
import ICompanyRepository from "../repositories/ICompanyRepository";
import ICompanyDTO from "../dtos/ICompanyDTO";
import CompanyRepository from "../infra/typeorm/repositories/CompanyRepository";

@injectable()
class ListCompanyService {
    constructor(
        @inject(CompanyRepository)
        private exampleRepository: ICompanyRepository,
    ) {}

    public async execute(): Promise<ICompanyDTO[] | []> {
        return await this.exampleRepository.find()
    }
}

export default ListCompanyService