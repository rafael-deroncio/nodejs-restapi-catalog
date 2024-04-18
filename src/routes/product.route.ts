import { Router } from "express";
import controller from "../controllers/product.controller";
import middleware from "../middlewares/middlewares";

const product: Router = Router();

product.get('/catalog/products', middleware.pagination, controller.product.paged);
product.post('/catalog/product', middleware.product, controller.product.post);
product.get('/catalog/product/:id', controller.product.get);
product.put('/catalog/product/:id', middleware.product, controller.product.put);
product.delete('/catalog/product/:id', controller.product.delete);

export default product;
