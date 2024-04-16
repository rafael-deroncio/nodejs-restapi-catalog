import { Router } from "express";
import controller from "./controllers/index.controller";

const routes: Router = Router();

routes.get('/', controller.index);

routes.get('/products');
routes.post('/product', );
routes.get('/product/:id');
routes.put('/product/:id');
routes.delete('/product/:id');

routes.post('/category');
routes.get('/categories');
routes.get('/category/:id');
routes.put('/category/:id');
routes.delete('/category/:id');

export default routes;
