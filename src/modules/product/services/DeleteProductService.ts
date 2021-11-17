import {inject, injectable} from "tsyringe";
import ProductRepository from "../infra/typeorm/repositories/ProductRepository";
import IProductRepository from "../repositories/IProductRepository";
import {Product} from "../infra/typeorm/entities/Product";
import product from "../infra/http/routes/product.routes";

@injectable()
export class DeleteProductService{
    constructor(
        @inject(ProductRepository)
        private productRepository:IProductRepository
    ){}

    public async execute(id: number): Promise<Product | undefined>{
        return this.productRepository.delete(id)
    }

}
