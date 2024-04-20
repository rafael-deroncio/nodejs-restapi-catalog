import { Expose } from "class-transformer";
import CategoryDTO from "../configurations/dtos/category.dto";

class CategoryResponse implements Omit<CategoryDTO, 'active' | 'created' | 'updated'> {
    @Expose()
    id!: number;
    
    @Expose()
    name!: string;

    @Expose()
    description!: string;


}

export default CategoryResponse;