import { Router } from 'express';

import ensureAuthenticated from '@modules/clients/infra/http/middlewares/ensureAuth';

import LocalesController from '../controllers/LocalesController';

const localesRouter = Router();
const localesController = new LocalesController();

// localesRouter.use(ensureAuthenticated);

localesRouter.post('/', localesController.create);
localesRouter.get('/', localesController.index);
localesRouter.put('/:id', localesController.update);
localesRouter.delete('/', localesController.delete);

export default localesRouter;
