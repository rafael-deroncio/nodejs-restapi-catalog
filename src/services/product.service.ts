import { StatusCodes } from "http-status-codes";
import IMapper from "../configurations/interfaces/imapper";
import Mapper from "../configurations/mapper";
import ProductException from "../exceptions/product.exception";
import ProductModel from "../models/product.model";
import IProductRepository from "../repositories/interfaces/iproduct.repository";
import ProductRepository from "../repositories/product.repository";
import PaginationRequest from "../requests/pagination.request";
import ProductRequest from "../requests/product.request";
import ProductResponse from "../responses/product.response";
import IProductService from "./interfaces/iproduct.service";
import PaginationArgument from "../arguments/pagination.argument";
import CategoryResponse from "../responses/category.response";
import ICategoryService from "./interfaces/icategory.service";
import CategoryService from "./category.service";
import CategoryException from "../exceptions/category.exception";
import ProductArgument from "../arguments/product.argument";
import { string } from "../helpers/string.helper";
import CategoryArgument from "../arguments/category.argument";

class ProductService implements IProductService {

    private static _instance: IProductService;
    private _repository: IProductRepository
    private _service: ICategoryService;
    private _mapper: IMapper;

    static instance(): IProductService {
        if (!this._instance) this._instance = new ProductService();
        return this._instance
    }

    private constructor() {
        this._repository = ProductRepository.instance();
        this._service = CategoryService.instance();
        this._mapper = Mapper.instance();
    }

    async paged(request: PaginationRequest): Promise<Array<ProductResponse>> {
        try {
            const pagination: PaginationArgument = this._mapper.map(request, PaginationArgument);
            const products: Array<ProductModel> = await this._repository.paged(pagination);
            return products.map(model => {
                const product: ProductResponse = this._mapper.map(model, ProductResponse);
                product.category = this._mapper.map(model.category, CategoryResponse);
                return product
            });
        } catch (error) {
            console.error(error);
            throw new ProductException();
        }
    }

    async get(id: number): Promise<ProductResponse> {
        if (isNaN(id) || !id)
            throw new ProductException(
                'id inválido!',
                ['ID informado na rota é inválido!'],
                StatusCodes.BAD_REQUEST);

        const product: ProductModel = await this._repository.get(id);

        if (!product)
            throw new ProductException(
                'Produto não encontrado',
                [`Produto não encontrado para o ID ${id}`],
                StatusCodes.NOT_FOUND);

        const response: ProductResponse = this._mapper.map(product, ProductResponse);
        response.category = this._mapper.map(product.category, CategoryResponse);
        return response;
    }

    async create(request: ProductRequest): Promise<ProductResponse> {
        const category: CategoryResponse = await this._service.get(request.category.id);
        if (!category)
            throw new CategoryException(
                'Erro Categoria',
                [`Categoria não encontrada para o ID ${request.category.id}`],
                StatusCodes.NOT_FOUND);

        const argument: ProductArgument = this._mapper.map(request, ProductArgument);
        argument.name = string.titleFormatter(request.name);
        argument.description = string.textFormatter(request.description);
        argument.category = this._mapper.map(category, CategoryArgument);

        const product: ProductModel = await this._repository.create(argument);

        const response: ProductResponse = this._mapper.map(product, ProductResponse);
        response.category = this._mapper.map(product.category, CategoryResponse);

        return response
    }

    async update(id: number, request: ProductRequest): Promise<ProductResponse> {
        if (isNaN(id) || !id)
            throw new ProductException(
                'id inválido!',
                ['ID informado na rota é inválido!'],
                StatusCodes.BAD_REQUEST);

        const category: CategoryResponse = await this._service.get(request.category.id);
        if (!category)
            throw new CategoryException(
                'Erro Categoria',
                [`Categoria não encontrada para o ID ${request.category.id}`],
                StatusCodes.NOT_FOUND);

        const argument: ProductArgument = this._mapper.map(request, ProductArgument);
        argument.name = string.titleFormatter(request.name);
        argument.description = string.textFormatter(request.description);
        argument.category = this._mapper.map(category, CategoryArgument);

        const product: ProductModel = await this._repository.update(id, argument);

        const response: ProductResponse = this._mapper.map(product, ProductResponse);
        response.category = this._mapper.map(product.category, CategoryResponse);

        return response
    }

    async delete(id: number): Promise<boolean> {
        if (isNaN(id) || !id)
            throw new ProductException(
                'id inválido!',
                ['ID informado na rota é inválido!'],
                StatusCodes.BAD_REQUEST);

        if (!(await this._repository.get(id)))
            throw new CategoryException(
                'Erro Categoria',
                [`Categoria não encontrada para o ID ${id}`],
                StatusCodes.NOT_FOUND);

        return await this._repository.delete(id)
    }

    async getTotalProducts(): Promise<number> {
        return await this._repository.total(); 
    }
}

export default ProductService;