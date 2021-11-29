import {NextFunction, Request, Response} from "express";
import {container} from "tsyringe";
import CreateCompanyService from "../../../services/CreateCompanyService";
import ListCompanyService from "../../../services/ListCompanyService";
import DeleteCompanyService from "../../../services/DeleteCompanyService";
import UpdateCompanyService from "../../../services/UpdateCompanyService";

export default class CompanyController {
    public async create(request: Request, response: Response, next: NextFunction): Promise<void> {
        const {
            companyName,
            companyCode,
            description
        } = request.body

        try {
            const createService = container.resolve(CreateCompanyService);

            const company = await createService.execute({
                companyName,
                companyCode,
                description
            });

            response.json(company)
        } catch (error) {
            next(error)
        }

    }

    public async update(request: Request, response: Response, next: NextFunction): Promise<Response | void> {
        const { id } = request.params

        const {
            companyName,
            companyCode,
            description
        } = request.body

        try {
            const updatedService = container.resolve(UpdateCompanyService)

            const updated = updatedService.execute(Number(id), {
                companyName,
                companyCode,
                description })

            response.json(updated)
        } catch (error) {
            next(error)
        }
    }

    public async delete(request: Request, response: Response, next: NextFunction): Promise<void> {
        const { id } = request.params

        try {
            const deleteService = container.resolve(DeleteCompanyService)

            await deleteService.execute(Number(id))

            response.json()
        } catch (error) {
            next(error)
        }
    }

    public async list(request: Request, response: Response, next: NextFunction): Promise<Response | void> {
        try {
            const listService = container.resolve(ListCompanyService);

            const companys = await listService.execute()

            response.json(companys)
        } catch (error) {
            next(error)
        }
    }
}