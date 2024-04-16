import PaginationRequest from "../../requests/pagination.request"
import ProductRequest from "../../requests/product.request"
import ProductResponse from "../../responses/product.response"

interface IProductService {
    paged(request: PaginationRequest): Promise<Array<ProductResponse>>
    get(id: number): Promise<ProductResponse>
    create(request: ProductRequest): Promise<ProductResponse>
    update(id: number, request: ProductRequest): Promise<ProductResponse>
    delete(id: number): Promise<boolean>
    
    getTotalProducts(): Promise<number>
}

export default IProductService;
