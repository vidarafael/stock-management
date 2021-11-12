import { Router } from "express";
import exampleModule from "../../../../modules/exampleModule/infra/http/routes/example.routes";

const mainRouter = Router();

console.log("Teste rota")
mainRouter.use('/product', exampleModule);

export default mainRouter;
