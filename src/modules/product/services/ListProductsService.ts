import {inject, injectable} from "tsyringe";
import ExampleRepository from "../../exampleModule/infra/typeorm/repositories/ExampleRepository";
import IExampleRepository from "../../exampleModule/repositories/IExampleRepository";
import IExampleDTO from "../../exampleModule/dtos/IExampleDTO";
import IProductRepository from "../repositories/IProductRepository";
import ProductRepository from "../infra/typeorm/repositories/ProductRepository";
import IProductDTO from "../dtos/IProductDTO";

@injectable()
export default class ListProductsService {
    constructor(
        @inject(ProductRepository)
        private productRepository: IProductRepository,
    ) {}

    public async execute(): Promise<IProductDTO[] | []> {
        return await this.productRepository.find();
    }

}