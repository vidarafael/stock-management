import {Router} from 'express';
import ExampleController from "../../../../company/infra/http/controllers/ExampleController";
import {CreateProductController} from "../../../../product/infra/http/controllers/CreateProductController";
import {FindProductController} from "../controllers/FindProductController";

const product = Router();

const createProductController = new CreateProductController();
const findProductController = new FindProductController();

product.post('', createProductController.handle);
product.get('/:id', findProductController.find);



export default product;