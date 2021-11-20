import {injectable} from "tsyringe";
import {getRepository, Repository} from "typeorm";
import ExampleEntity from "../entities/ExampleEntity";
import IExampleRepository from "../../../repositories/IExampleRepository";

@injectable()
export default class ExampleRepository implements IExampleRepository {
    private repository: Repository<ExampleEntity>
    constructor() {
        this.repository = getRepository(ExampleEntity);
    }

    public async find() {
        return this.repository.find();
    }

    public async create(data: ExampleEntity): Promise<ExampleEntity> {
        return this.repository.save(data);
    }
}