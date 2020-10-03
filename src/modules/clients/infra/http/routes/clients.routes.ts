import { Router } from 'express';

import ClientsController from '../controllers/ClientsController';

// import ensureAuthenticated from "../middlewares/ensureAuth";

const clientsRouter = Router();
const clientsController = new ClientsController();

clientsRouter.post('/', clientsController.create);
clientsRouter.get('/', clientsController.index);
clientsRouter.delete('/', clientsController.delete);

export default clientsRouter;
