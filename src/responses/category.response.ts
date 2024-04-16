import CategoryDTO from "../configurations/dtos/category.dto";

type CategoryResponse = Omit<CategoryDTO, 'active' | 'created' | 'updated'>
export default CategoryResponse;
