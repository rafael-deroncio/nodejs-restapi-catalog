import CategoryRequest from "../../requests/category.request"
import PaginationRequest from "../../requests/pagination.request"
import CategoryResponse from "../../responses/category.response"

interface ICategoryService {
    paged(request: PaginationRequest): Promise<Array<CategoryResponse>>
    get(): Promise<CategoryResponse>
    create(request: CategoryRequest): Promise<CategoryResponse>
    update(id: number, request: CategoryRequest): Promise<CategoryResponse>
    request(id: number): Promise<boolean>
}

export default ICategoryService;
