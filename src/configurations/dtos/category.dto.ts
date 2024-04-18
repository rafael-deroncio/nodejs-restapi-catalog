import { Expose } from "class-transformer";
import PatternDTO from "./pattern.dto";

class CategoryDTO extends PatternDTO {
    @Expose()
    name!: string;

    @Expose()
    description!: string;
}

export default CategoryDTO;