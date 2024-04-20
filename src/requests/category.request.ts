import { Expose } from "class-transformer";
import CategoryDTO from "../configurations/dtos/category.dto";

class CategoryRequest implements Omit<CategoryDTO, 'active' | 'created' | 'updated'> {
    @Expose()
    name!: string;

    @Expose()
    description!: string;

    @Expose()
    id!: number;
}
export default CategoryRequest;


