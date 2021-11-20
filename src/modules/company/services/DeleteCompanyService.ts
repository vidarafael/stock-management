import {inject, injectable} from "tsyringe";
import CompanyRepository from "../infra/typeorm/repositories/CompanyRepository";
import ICompanyRepository from "../repositories/ICompanyRepository";

@injectable()
class DeleteCompanyService {
    constructor(
        @inject(CompanyRepository)
        private exampleRepository: ICompanyRepository,
    ) {}

    public async execute(id: number) {
        return await this.exampleRepository.softDelete(id)
    }
}

export default DeleteCompanyService