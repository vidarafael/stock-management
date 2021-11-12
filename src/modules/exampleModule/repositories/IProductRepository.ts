import IProductDTO from "../dtos/IProductDTO";



export default interface IProductRepository {
    create(data: IProductDTO): Promise<IProductDTO>;
    find(): Promise<IProductDTO[]>
}