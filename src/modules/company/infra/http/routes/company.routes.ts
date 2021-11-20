import {Router} from 'express';
import CompanyController from "../controllers/CompanyController";

const routes = Router();
const companyController = new CompanyController();

routes.get('/', companyController.list)
routes.post('/', companyController.create)
routes.delete('/:id', companyController.delete)
routes.put('/:id', companyController.update)


export default routes;
