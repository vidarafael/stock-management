import {inject, injectable} from "tsyringe";
import ProductRepository from "../infra/typeorm/repositories/ProductRepository";
import IProductRepository from "../repositories/IProductRepository";

@injectable()
export class DeleteProductService{
    constructor(
        @inject(ProductRepository)
        private productRepository:IProductRepository
    ){}

    public async execute(id: number): Promise<void>{
        return this.productRepository.delete(id)
    }

}
