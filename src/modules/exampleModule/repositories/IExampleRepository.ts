import IExampleDTO from "../dtos/IExampleDTO";

export default interface IExampleRepository {
    create(data: IExampleDTO): Promise<IExampleDTO>;
    find(): Promise<IExampleDTO[]>;
}