import {inject, injectable} from 'tsyringe';
import Company from "../infra/typeorm/entities/Company";
import CompanyRepository from "../infra/typeorm/repositories/CompanyRepository";


@injectable()
export default class ListCompanyService {
    constructor(
    @inject(CompanyRepository)
    private companyRepository?: CompanyRepository,
    ) {}

    public async execute(): Promise<Company[] | []> {
        return this.companyRepository.find();
    }

}