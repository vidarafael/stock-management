import {Router} from 'express';
import CompanyController from "../controllers/CompanyController";
import {celebrate} from "celebrate";
import {companySchemaBody, companySchemaOptions, companySchemaParams} from "../../../schemas/company.schema";

const routes = Router();
const companyController = new CompanyController();

routes.get('/', companyController.list)
routes.post('/', celebrate({ ...companySchemaBody }, companySchemaOptions), companyController.create)
routes.delete('/:companyId', celebrate({ ...companySchemaParams }, companySchemaOptions),companyController.delete)
routes.put('/:companyId', celebrate({ ...companySchemaParams, ...companySchemaBody }, companySchemaOptions), companyController.update)


export default routes;
