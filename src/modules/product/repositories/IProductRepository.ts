import IProductDTO from "../dtos/IProductDTO";
import {Product} from "../infra/typeorm/entities/Product";



export default interface IProductRepository {
    create(data: IProductDTO): Promise<IProductDTO>;
    update(id: number, data: Partial<Product>): Promise<Product | undefined>;
    find(): Promise<IProductDTO[]>
    findById(id:number): Promise<Product | undefined>
    delete(id:number): Promise<void>
}