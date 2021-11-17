import {inject, injectable} from "tsyringe";
import ProductRepository from "../infra/typeorm/repositories/ProductRepository";
import IProductDTO from "../dtos/IProductDTO";
import {Product} from "../infra/typeorm/entities/Product";

@injectable()
export class FindProductService {

    constructor(
       @inject(ProductRepository)
       private productRepository:ProductRepository,
    ) {}

    public async execute(id: number): Promise<Product | undefined>{
        return await this.productRepository.findById(id)
    }

}