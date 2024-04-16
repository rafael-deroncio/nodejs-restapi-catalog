import { Router } from "express";
import controller from "../controllers/product.controller";

const product: Router = Router();

product.get('catalog/products', controller.product.paged);
product.post('catalog/product', controller.product.post);
product.get('catalog/product/:id', controller.product.get);
product.put('catalog/product/:id', controller.product.put);
product.delete('catalog/product/:id', controller.product.delete);

export default product;
