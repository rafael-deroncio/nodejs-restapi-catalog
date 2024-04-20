import { Expose } from "class-transformer";
import CategoryDTO from "../configurations/dtos/category.dto";
import ProductDTO from "../configurations/dtos/product.dto";

class ProductRequest implements Omit<ProductDTO, 'active' | 'created' | 'updated' | 'category'> {
    @Expose()
    name!: string;

    @Expose()
    description!: string;

    @Expose()
    price!: number;

    @Expose()
    stock!: number;

    @Expose()
    category!: Pick<CategoryDTO, 'id'>;

    @Expose()
    id!: number;
}

export default ProductRequest;
