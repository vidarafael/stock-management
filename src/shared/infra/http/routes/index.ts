import { Router } from "express";
import companyRoutes from '../../../../modules/company/infra/http/routes/company.routes'

const mainRouter = Router();

mainRouter.use('/company', companyRoutes)

export default mainRouter;
