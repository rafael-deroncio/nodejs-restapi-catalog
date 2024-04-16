import CategoryDTO from "./category.dto";
import PatternDTO from "./pattern.dto";

class ProductDTO extends PatternDTO {
    name!: string;

    description!: string;

    price!: number;
    
    stock!: number

    category!: CategoryDTO
}

export default ProductDTO;