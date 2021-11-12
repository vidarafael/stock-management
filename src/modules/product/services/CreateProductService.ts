import { inject, injectable } from "tsyringe";
import IProductDTO from "../dtos/IProductDTO";
import { Product } from "../infra/typeorm/entities/Product";
import ProductRepository from "../infra/typeorm/repositories/ProductRepository";
import IProductRepository from "../repositories/IProductRepository";


@injectable()
export default class CreateProductService{

    constructor(
        @inject(ProductRepository)
        private productRepository:IProductRepository,
    ){}

    public async execute(data: IProductDTO): Promise <Product>{
        return await this.productRepository.create(data)
    }

}