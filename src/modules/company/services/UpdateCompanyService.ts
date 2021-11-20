import {inject, injectable} from "tsyringe";
import CompanyRepository from "../infra/typeorm/repositories/CompanyRepository";
import ICompanyRepository from "../repositories/ICompanyRepository";
import ICompanyDTO from "../dtos/ICompanyDTO";
import Company from "../infra/typeorm/entities/Company";

@injectable()
class UpdateCompanyService {
    constructor(
        @inject(CompanyRepository)
        private companyRepository: ICompanyRepository,
    ) {}

    public async execute(id: number, data: ICompanyDTO): Promise<Company> {
        const company = await this.companyRepository.findById(id)

        if(!company) {
            throw new Error(`Company with ID: ${id} was not found`)
        }

        await this.companyRepository.update(id, data)

        return company;
    }
}

export default UpdateCompanyService