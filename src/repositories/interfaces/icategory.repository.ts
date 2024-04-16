import CategoryArgument from "../../arguments/category.argument"
import PaginationArgument from "../../arguments/pagination.request"
import CategoryModel from "../../models/category.model"

interface ICategoryRepository {
    paged(request: PaginationArgument): Promise<Array<CategoryModel>>
    get(): Promise<CategoryModel>
    create(request: CategoryArgument): Promise<CategoryModel>
    update(id: number, request: CategoryArgument): Promise<CategoryModel>
    request(id: number): Promise<boolean>
}

export default ICategoryRepository;
