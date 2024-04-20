import { Expose } from "class-transformer";
import ProductDTO from "../configurations/dtos/product.dto";
import CategoryResponse from "./category.response";

class ProductResponse implements Omit<ProductDTO, 'active' | 'created' | 'updated' | 'category'> {

    @Expose()
    id!: number;

    @Expose()
    name!: string;

    @Expose()
    description!: string;

    @Expose()
    price!: number;

    @Expose()
    stock!: number;

    @Expose()
    category!: CategoryResponse;
}

export default ProductResponse;
