import { Router } from "express";
import controller from "./controllers/index.controller";
import product from "./routes/product.route";
import category from "./routes/category.route";

const routes: Router = Router();

routes.get('/', controller.index);

routes.use(product);
routes.use(category);

export default routes;
