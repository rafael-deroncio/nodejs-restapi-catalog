import CategoryRequest from "../../requests/category.request"
import PaginationRequest from "../../requests/pagination.request"
import CategoryResponse from "../../responses/category.response"

interface ICategoryService {
    paged(request: PaginationRequest): Promise<Array<CategoryResponse>>
    get(id: number): Promise<CategoryResponse>
    create(request: CategoryRequest): Promise<CategoryResponse>
    update(id: number, request: CategoryRequest): Promise<CategoryResponse>
    delete(id: number): Promise<boolean>

    getTotalCategories(): Promise<number>
}

export default ICategoryService;
