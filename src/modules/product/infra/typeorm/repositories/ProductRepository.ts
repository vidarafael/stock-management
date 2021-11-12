import { injectable } from "tsyringe";
import { getRepository, Repository } from "typeorm";
import IProductDTO from "../../../dtos/IProductDTO";
import IProductRepository from "../../../repositories/IProductRepository";
import { Product } from "../entities/Product";

@injectable()
export default class ProductRepository implements IProductRepository {
    private repository: Repository<Product>
    constructor(){
        this.repository = getRepository(Product);
    }

    findById(id: number){
        return this.repository.find({ where: { id }});
    }

    find(){
        return this.repository.find();
    }

    create(data: Product): Promise<Product>{
        return this.repository.save(data);
    }


    // update(data: Product): Promise<Product>{
    //     return this.repository.update()
    // }
}