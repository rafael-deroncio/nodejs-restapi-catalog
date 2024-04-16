import CategoryResquest from "../../requests/category.request"
import PaginationRequest from "../../requests/pagination.request"
import CategoryResponse from "../../responses/category.response"

interface ICategoryService {
    paged(request: PaginationRequest): Promise<Array<CategoryResponse>>
    get(): Promise<CategoryResponse>
    create(request: CategoryResquest): Promise<CategoryResponse>
    update(id: number, request: CategoryResquest): Promise<CategoryResponse>
    request(id: number): Promise<boolean>
}

export default ICategoryService;
