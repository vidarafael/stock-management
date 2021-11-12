import {inject, injectable} from "tsyringe";
import ProductRepository from "../infra/typeorm/repositories/ProductRepository";
import IProductRepository from "../repositories/IProductRepository";
import IProductDTO from "../dtos/IProductDTO";
import {Product} from "../infra/typeorm/entities/Product";


@injectable()
export class UpdateProductService {

    constructor(
        @inject(ProductRepository)
        private productRepository:IProductRepository
    ){}

    // public async execute(id: number): Promise <Product>{
    //     return await this.productRepository.update(id)
    // }
}