import {inject, injectable} from "tsyringe";
import ProductRepository from "../infra/typeorm/repositories/ProductRepository";
import IProductDTO from "../dtos/IProductDTO";

@injectable()
export class FindProductService {

    constructor(
       @inject(ProductRepository)
       private productRepository:ProductRepository,
    ) {}

    public async execute(id: number): Promise<IProductDTO[] | []>{
        return await this.productRepository.findById(id)
    }

}