import {Router} from 'express';
import ExampleController from "../../../../company/infra/http/controllers/ExampleController";
import {ProductController} from "../../../../product/infra/http/controllers/ProductController";

const exampleModule = Router();
//const exampleController = new ExampleController();

const createProductController = new ProductController();
console.log("teste rota Create product");
//exampleModule.get('', exampleController.listExample)
exampleModule.post('', createProductController.createProduct);
export default exampleModule;
