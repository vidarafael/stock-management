import {injectable} from "tsyringe";
import {EntityRepository, getRepository, Repository} from "typeorm";
import ExampleEntity from "../entities/ExampleEntity";

@EntityRepository()
@injectable()
export default class ExampleRepository {
    private repository: Repository<ExampleEntity>
    constructor() {
        this.repository = getRepository(ExampleEntity);
    }

    find() {
        return this.repository.find();
    }
}