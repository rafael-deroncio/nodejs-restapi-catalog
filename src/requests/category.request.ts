import CategoryDTO from "../configurations/dtos/category.dto";

type CategoryRequest = Omit<CategoryDTO, 'active' | 'created' | 'updated'>
export default CategoryRequest;
