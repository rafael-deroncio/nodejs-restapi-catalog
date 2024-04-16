import { Router } from "express";
import controller from "../controllers/category.controller";

const category: Router = Router();

category.get('catalog/categories', controller.category.paged);
category.post('catalog/category', controller.category.post);
category.get('catalog/category/:id', controller.category.get);
category.put('catalog/category/:id', controller.category.put);
category.delete('catalog/category/:id', controller.category.delete);

export default category;
