import { Expose } from "class-transformer";
import CategoryDTO from "./category.dto";
import PatternDTO from "./pattern.dto";

class ProductDTO extends PatternDTO {
    
    @Expose()
    name!: string;

    @Expose()
    description!: string;

    @Expose()
    price!: number;
    
    @Expose()
    stock!: number

    @Expose()
    category!: CategoryDTO
}

export default ProductDTO;