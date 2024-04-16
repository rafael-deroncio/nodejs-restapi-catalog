import { Router } from "express";
import controller from "../controllers/product.controller";

const product: Router = Router();

product.get('/products', controller.product.paged);
product.post('/product', controller.product.post);
product.get('/product/:id', controller.product.get);
product.put('/product/:id', controller.product.put);
product.delete('/product/:id', controller.product.delete);

export default product;
