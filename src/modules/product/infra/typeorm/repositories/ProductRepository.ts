import { injectable } from "tsyringe";
import { getRepository, Repository } from "typeorm";
import IProductDTO from "../../../dtos/IProductDTO";
import IProductRepository from "../../../repositories/IProductRepository";
import { Product } from "../entities/Product";
import {error} from "util";

@injectable()
export default class ProductRepository implements IProductRepository {
    private repository: Repository<Product>
    constructor(){
        this.repository = getRepository(Product);
    }

    findById(id: number): Promise<Product | undefined>{
        return this.repository.findOne(id);
    }

    find(){
        return this.repository.find();
    }

    create(data: Product): Promise<Product>{
        return this.repository.save(data);
    }


    async update(id: number, data: Partial<Product>): Promise<Product | undefined>{

        await this.repository.update(id, data);
        return this.repository.findOne(id);
    }

    async delete(id: number): Promise<Product | undefined> {
        await this.repository.delete(id)
        return this.repository.findOne()
    }
}