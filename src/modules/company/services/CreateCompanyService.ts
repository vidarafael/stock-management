import {inject, injectable} from "tsyringe";
import ICompanyRepository from "../repositories/ICompanyRepository";
import ICompanyDTO from "../dtos/ICompanyDTO";
import CompanyRepository from "../infra/typeorm/repositories/CompanyRepository";

@injectable()
class CreateCompanyService {
    constructor(
        @inject(CompanyRepository)
        private companyRepository: ICompanyRepository,
        ) {}

    public async execute({companyName, companyCode, description}: ICompanyDTO) {
        return this.companyRepository.create({companyName, companyCode, description})
    }
}

export default CreateCompanyService