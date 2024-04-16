import IMapper from "../configurations/interfaces/imapper";
import Mapper from "../configurations/mapper";
import PaginationRequest from "../requests/pagination.request";
import CategoryRequest from "../requests/category.request";
import CategoryResponse from "../responses/category.response";
import ICategoryService from "./interfaces/icategory.service";

class CategoryService implements ICategoryService {

    private static _instance: ICategoryService;
    private _mapper: IMapper;

    static instance(): ICategoryService {
        if (!this._instance) this._instance = new CategoryService();
        return this._instance
    }

    private constructor() {
        this._mapper = Mapper.instance();
    }
    paged(request: PaginationRequest): Promise<CategoryResponse[]> {
        throw new Error("Method not implemented.");
    }
    get(): Promise<CategoryResponse> {
        throw new Error("Method not implemented.");
    }
    create(request: CategoryRequest): Promise<CategoryResponse> {
        throw new Error("Method not implemented.");
    }
    update(id: number, request: CategoryRequest): Promise<CategoryResponse> {
        throw new Error("Method not implemented.");
    }
    request(id: number): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
}

export default CategoryService;