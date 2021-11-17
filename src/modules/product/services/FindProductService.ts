import {inject, injectable} from "tsyringe";
import ProductRepository from "../infra/typeorm/repositories/ProductRepository";
import IProductDTO from "../dtos/IProductDTO";
import {Product} from "../infra/typeorm/entities/Product";
import {response} from "express";

@injectable()
export class FindProductService {

    constructor(
       @inject(ProductRepository)
       private productRepository:ProductRepository,
    ) {}

    public async execute(id: number): Promise<Product | undefined>{
        const product = await this.productRepository.findById(id);

        if(!product){
            throw new Error(`Cannot find product with id: ${id}`)
        }

        return this.productRepository.findById(id)

    }

}