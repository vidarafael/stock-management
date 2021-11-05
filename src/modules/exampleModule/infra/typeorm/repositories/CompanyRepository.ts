import {injectable} from "tsyringe";
import {EntityRepository, getRepository, Repository} from "typeorm";
import Company from "../entities/Company";

@EntityRepository()
@injectable()
export default class CompanyRepository {
    private repository: Repository<Company>
    constructor() {
        this.repository = getRepository(Company);
    }

    find() {
        return this.repository.find();
    }
}