import express from 'express';
import ClassControler from './controllers/classesController';
import ConnectionsController from './controllers/connectionsControler';

const routes = express.Router();
const classesControllers = new ClassControler();
const connectionsControllers = new ConnectionsController();


routes.get('/classes', classesControllers.index);
routes.post('/classes', classesControllers.create);

routes.post('/connections', connectionsControllers.create);
routes.get('/connections', connectionsControllers.index);

export default routes;