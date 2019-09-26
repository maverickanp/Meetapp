import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/sessionController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

// middleware global
routes.use(authMiddleware);

routes.put('/users', UserController.update);

export default routes;
