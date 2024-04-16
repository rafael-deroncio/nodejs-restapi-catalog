import CategoryDTO from "../configurations/dtos/category.dto";

type CategoryResquest = Omit<CategoryDTO, 'active' | 'created' | 'updated'>
export default CategoryResquest;
