import {NextFunction, Request, Response} from "express";
import {container, injectable} from "tsyringe";
import {Product} from "../../typeorm/entities/Product";
import {create} from "domain";
import {UpdateProductService} from "../../../services/UpdateProductService";

@injectable()
export class UpdateProductController {

    async update(
        request: Request,
        response: Response,
        next: NextFunction
    ): Promise <Product | void> {
        const { id } = request.params
        try {
            const updateProductService = container.resolve(UpdateProductService)
            response.json(await updateProductService.execute(Number(id)))

        } catch (error){
            next(error)
        }
    }


}