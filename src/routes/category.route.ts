import { Router } from "express";
import controller from "../controllers/category.controller";

const category: Router = Router();

category.get('/categories', controller.category.paged);
category.post('/category', controller.category.post);
category.get('/category/:id', controller.category.get);
category.put('/category/:id', controller.category.put);
category.delete('/category/:id', controller.category.delete);

export default category;
