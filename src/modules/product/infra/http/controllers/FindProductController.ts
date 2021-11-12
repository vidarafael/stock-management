import {NextFunction, Request, Response} from "express";
import {Product} from "../../typeorm/entities/Product";
import {container, injectable} from "tsyringe";
import {FindProductService} from "../../../services/FindProductService";

@injectable()
export class FindProductController {

    async find(
        request: Request,
        response: Response,
        next: NextFunction
    ): Promise <Product[] | void>{
        const { id } = request.params
        try{
            const findProductService = container.resolve(FindProductService)
            response.json(await findProductService.execute(Number(id)))
        } catch (error){
            next(error)
        }


    }


}