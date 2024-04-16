import { Router } from "express";
import controller from "../controllers/index.controller";
import product from "./product.route";
import category from "./category.route";

const routes: Router = Router();

routes.get('/', controller.index);

routes.use(product);
routes.use(category);

export default routes;
