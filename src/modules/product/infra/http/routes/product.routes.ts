import {Router} from 'express';
import ExampleController from "../../../../company/infra/http/controllers/ExampleController";
import {ProductController} from "../controllers/ProductController";

const product = Router();

const productController = new ProductController();

product.post('', productController.createProduct);
product.get('/:id', productController.findProduct);
product.put('/:id', productController.updateProduct);
product.delete('/:id', productController.deleteProduct);



export default product;