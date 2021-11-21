import {inject, injectable} from "tsyringe";
import ProductRepository from "../infra/typeorm/repositories/ProductRepository";
import IProductRepository from "../repositories/IProductRepository";
import IProductDTO from "../dtos/IProductDTO";
import {Product} from "../infra/typeorm/entities/Product";
import {error} from "util";


@injectable()
export class UpdateProductService {

    constructor(
        @inject(ProductRepository)
        private productRepository:IProductRepository
    ){}

    public async execute(id: number, data: Partial<Product>): Promise <Product | undefined>{
        const product = await this.productRepository.findById(id);

        if(!product){
            throw new Error(`Product with id:${id} not found`)
        }

        return this.productRepository.update(id, data)
    }


}