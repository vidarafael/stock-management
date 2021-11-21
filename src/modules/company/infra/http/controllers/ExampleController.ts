import ExampleEntity from "../../../../exampleModule/infra/typeorm/entities/ExampleEntity";
import {NextFunction, Request, Response} from "express";
import {container, inject, injectable} from "tsyringe";
import ListExampleService from "../../../../exampleModule/services/ListExampleService";

@injectable()
export default class ExampleController {
    async listExample(
        request: Request,
        response: Response,
        next: NextFunction,
    ): Promise<ExampleEntity[] | void> {
        try {
            const listExampleService = container.resolve(ListExampleService)
            response.json(await listExampleService.execute());
        } catch (error) {
            next(error);
        }
    }
}