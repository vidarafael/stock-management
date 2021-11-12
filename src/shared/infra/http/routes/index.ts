import { Router } from "express";
import exampleModule from "../../../../modules/exampleModule/infra/http/routes/example.routes";
import product from "../../../../modules/product/infra/http/routes/product.routes";

const mainRouter = Router();

mainRouter.use('/product', product);

export default mainRouter;
