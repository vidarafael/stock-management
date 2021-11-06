import {inject, injectable} from 'tsyringe';
import ExampleRepository from "../infra/typeorm/repositories/ExampleRepository";
import IExampleRepository from "../repositories/IExampleRepository";
import IExampleDTO from "../dtos/IExampleDTO";
import ExampleEntity from "../infra/typeorm/entities/ExampleEntity";


@injectable()
export default class ListExampleService {
    constructor(
    @inject(ExampleRepository)
    private exampleRepository: IExampleRepository,
    ) {}

    public async execute(): Promise<IExampleDTO[] | []> {
        return await this.exampleRepository.find();
    }

}