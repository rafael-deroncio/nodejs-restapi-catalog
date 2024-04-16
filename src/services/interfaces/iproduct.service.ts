import PaginationRequest from "../../requests/pagination.request"
import ProductResquest from "../../requests/product.request"
import ProductResponse from "../../responses/product.response"

interface IProductService {
    paged(request: PaginationRequest): Promise<Array<ProductResponse>>
    get(): Promise<ProductResponse>
    create(request: ProductResquest): Promise<ProductResponse>
    update(id: number, request: ProductResquest): Promise<ProductResponse>
    request(id: number): Promise<boolean>
}

export default IProductService;
