import {Router} from 'express';
import CompanyController from "../controllers/CompanyController";

const exampleModule = Router();
const companyController = new CompanyController();

exampleModule.get('/company', companyController.listCompany)

export default exampleModule;
