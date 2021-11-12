import {Router} from 'express';
import ExampleController from "../controllers/ExampleController";
import {CreateProductController} from "../controllers/CreateProductController";

const exampleModule = Router();
//const exampleController = new ExampleController();

const createProductController = new CreateProductController();
console.log("teste rota Create Product");
//exampleModule.get('', exampleController.listExample)
exampleModule.post('', createProductController.handle);
export default exampleModule;
