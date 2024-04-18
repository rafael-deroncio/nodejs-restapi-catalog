import CategoryArgument from "../../arguments/category.argument"
import PaginationArgument from "../../arguments/pagination.argument"
import CategoryModel from "../../models/category.model"

interface ICategoryRepository {
    paged(request: PaginationArgument): Promise<Array<CategoryModel>>
    get(id: number): Promise<CategoryModel>
    create(request: CategoryArgument): Promise<CategoryModel>
    update(id: number, request: CategoryArgument): Promise<CategoryModel>
    delete(id: number): Promise<boolean>
    total(): Promise<number>
}

export default ICategoryRepository;
