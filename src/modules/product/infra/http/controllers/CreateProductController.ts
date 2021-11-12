import CreateProductService from "../../../services/CreateProductService";
import { NextFunction, Request, Response } from "express";
import { container, injectable } from "tsyringe";
import ExampleEntity from "../../../../exampleModule/infra/typeorm/entities/ExampleEntity";
import { Product } from "../../typeorm/entities/Product";
import ProductRepository from "../../typeorm/repositories/ProductRepository";

@injectable()
export class CreateProductController {

        async handle(
            request: Request,
            response: Response,
            next: NextFunction
        ): Promise<Product | void> {
            const { body } = request;
            try{
                const createProductService = container.resolve(CreateProductService)
                response.json(await createProductService.execute(body))
            }catch(error){
                next(error);
            }

        }

}