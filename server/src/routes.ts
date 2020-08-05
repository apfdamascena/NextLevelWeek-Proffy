import express from 'express';
import ClassControler from './controllers/classesController';

const routes = express.Router();
const classesControllers = new ClassControler();



routes.post('/classes', classesControllers.create);

export default routes;