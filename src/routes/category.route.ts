import { Router } from "express";
import controller from "../controllers/category.controller";
import middleware from "../middlewares/middlewares";

const category: Router = Router();

category.get('catalog/categories', middleware.pagination, controller.category.paged);
category.post('catalog/category', middleware.category, controller.category.post);
category.get('catalog/category/:id', controller.category.get);
category.put('catalog/category/:id', middleware.category, controller.category.put);
category.delete('catalog/category/:id', controller.category.delete);

export default category;
