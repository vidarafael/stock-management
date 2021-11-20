import {injectable} from "tsyringe";
import {getRepository, Repository, UpdateResult} from "typeorm";
import Company from "../entities/Company";
import ICompanyRepository from "../../../repositories/ICompanyRepository";
import ICompanyDTO from "../../../dtos/ICompanyDTO";

@injectable()
class CompanyRepository implements ICompanyRepository{
    private repository: Repository<Company>
    constructor() {
        this.repository = getRepository(Company);
    }

    public async find() {
        return await this.repository.find();
    }

    public async findById(id: number): Promise<Company | undefined> {
        return this.repository.findOne(id)
    }

    public async create(data: ICompanyDTO): Promise<ICompanyDTO> {
        return await this.repository.save(data);
    }

    public async softDelete(id: number) {
        await this.repository.softDelete(id)
    }

    public async update(id: number, data: ICompanyDTO): Promise<UpdateResult> {
        return this.repository.update(id, data)
    }
}

export default CompanyRepository