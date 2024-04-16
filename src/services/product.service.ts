import IMapper from "../configurations/interfaces/imapper";
import Mapper from "../configurations/mapper";
import PaginationRequest from "../requests/pagination.request";
import ProductRequest from "../requests/product.request";
import ProductResponse from "../responses/product.response";
import IProductService from "./interfaces/iproduct.service";

class ProductService implements IProductService {

    private static _instance: IProductService;
    private _mapper: IMapper;

    static instance(): IProductService {
        if (!this._instance) this._instance = new ProductService();
        return this._instance
    }

    private constructor() {
        this._mapper = Mapper.instance();
    }
    paged(request: PaginationRequest): Promise<ProductResponse[]> {
        throw new Error("Method not implemented.");
    }
    get(): Promise<ProductResponse> {
        throw new Error("Method not implemented.");
    }
    create(request: ProductRequest): Promise<ProductResponse> {
        throw new Error("Method not implemented.");
    }
    update(id: number, request: ProductRequest): Promise<ProductResponse> {
        throw new Error("Method not implemented.");
    }
    request(id: number): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
}

export default ProductService;