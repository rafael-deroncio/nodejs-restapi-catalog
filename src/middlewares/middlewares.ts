import product from "./product.middleware";
import category from "./category.middleware";
import pagination from "./pagination.middleware";

const middleware = {
    product,
    category,
    pagination
}

export default middleware;
