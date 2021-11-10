import {Router} from 'express';
import ExampleController from "../controllers/ExampleController";
import {CreateProductController} from "@modules/exampleModule/infra/http/controllers/CreateProductController";

const router = Router();
// const exampleController = new ExampleController();
// router.get('', exampleController.listExample)

const createProductController = new CreateProductController()

router.post("/product", createProductController.handle)

export default router;
