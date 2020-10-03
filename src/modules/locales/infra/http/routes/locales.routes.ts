import { Router } from 'express';

import ensureAuthenticated from '@modules/clients/infra/http/middlewares/ensureAuth';

import LocalesController from '../controllers/LocalesController';

const localesRouter = Router();
const localesController = new LocalesController();

localesRouter.use(ensureAuthenticated);

localesRouter.post('/', localesController.create);
// productsRouter.get("/", productsController.index);
// productsRouter.delete("/", productsController.delete);

export default localesRouter;
