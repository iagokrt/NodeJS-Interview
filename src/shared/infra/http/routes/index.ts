import { Router } from 'express';

import clientsRouter from '@modules/clients/infra/http/routes/clients.routes';
import localesRouter from '@modules/locales/infra/http/routes/locales.routes';

const routes = Router();

routes.use('/clients', clientsRouter);
routes.use('/locales', localesRouter);

export default routes;
