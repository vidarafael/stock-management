import {injectable} from "tsyringe";
import {EntityRepository, Repository} from "typeorm";
import Company from "../entities/Company";

@EntityRepository()
@injectable()
export default class CompanyRepository extends Repository<Company> {
}