import CreateProductService from "../../../services/CreateProductService";
import { NextFunction, Request, Response } from "express";
import { container, injectable } from "tsyringe";
import ExampleEntity from "../../../../exampleModule/infra/typeorm/entities/ExampleEntity";
import { Product } from "../../typeorm/entities/Product";
import ProductRepository from "../../typeorm/repositories/ProductRepository";
import {FindProductService} from "../../../services/FindProductService";
import {UpdateProductService} from "../../../services/UpdateProductService";
import {DeleteProductService} from "../../../services/DeleteProductService";

@injectable()
export class ProductController {

    async createProduct(
        request: Request,
        response: Response,
        next: NextFunction
    ): Promise<Product | void> {
        const {body} = request;
        try {
            const createProductService = container.resolve(CreateProductService)
            response.json(await createProductService.execute(body))
        } catch (error) {
            next(error);
        }

    }

    async findProduct(
        request: Request,
        response: Response,
        next: NextFunction
    ): Promise<Product[] | void> {
        const {id} = request.params
        try {
            const findProductService = container.resolve(FindProductService)
            response.json(await findProductService.execute(Number(id)))
        } catch (error) {
            next(error)
        }

    }

    async updateProduct(
        request: Request,
        response: Response,
        next: NextFunction
    ): Promise <Product | void> {
        const { id } = request.params
        const { body } = request
        try {
            const updateProductService = container.resolve(UpdateProductService)
            response.json(await updateProductService.execute(Number(id), body))

        } catch (error){
            next(error)
        }
    }

    async deleteProduct(
        request: Request,
        response: Response,
        next: NextFunction
    ): Promise <Product | void> {
        const { id } = request.params
        try {
            const deleteProductService = container.resolve(DeleteProductService)
            response.json(await deleteProductService.execute(Number(id)))

        } catch (error){
            next(error)
        }
    }



}