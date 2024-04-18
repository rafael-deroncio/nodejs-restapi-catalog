import IMapper from "../configurations/interfaces/imapper";
import Mapper from "../configurations/mapper";
import PaginationRequest from "../requests/pagination.request";
import CategoryRequest from "../requests/category.request";
import CategoryResponse from "../responses/category.response";
import ICategoryService from "./interfaces/icategory.service";
import ICategoryRepository from "../repositories/interfaces/icategory.repository";
import CategoryRepository from "../repositories/category.repository";
import PaginationArgument from "../arguments/pagination.argument";
import CategoryModel from "../models/category.model";
import CategoryException from "../exceptions/category.exception";
import { StatusCodes } from "http-status-codes";
import CategoryArgument from "../arguments/category.argument";
import { string } from '../helpers/string.helper';

class CategoryService implements ICategoryService {

    private static _instance: ICategoryService;
    private _repository: ICategoryRepository;
    private _mapper: IMapper;

    static instance(): ICategoryService {
        if (!this._instance) this._instance = new CategoryService();
        return this._instance
    }

    private constructor() {
        this._repository = CategoryRepository.instance();
        this._mapper = Mapper.instance();
    }

    async paged(request: PaginationRequest): Promise<CategoryResponse[]> {
        try {
            const pagination: PaginationArgument = this._mapper.map(request, PaginationArgument);
            const categories: Array<CategoryModel> = await this._repository.paged(pagination);
            return categories.map(model => this._mapper.map(model, CategoryResponse));
        } catch (error) {
            console.error(error);
            throw new CategoryException();
        }
    }

    async get(id: number): Promise<CategoryResponse> {
        if (isNaN(id) || !id)
            throw new CategoryException(
                'id inválido!',
                ['ID informado na rota é inválido!'],
                StatusCodes.BAD_REQUEST);

        const category: CategoryModel = await this._repository.get(id);

        if (!category)
            throw new CategoryException(
                'Categoria não encontrado',
                [`Categoria não encontrado para o ID ${id}`],
                StatusCodes.NOT_FOUND);

        return this._mapper.map(category, CategoryResponse);;
    }

    async create(request: CategoryRequest): Promise<CategoryResponse> {

        const argument: CategoryArgument = new CategoryArgument();
        argument.name = string.titleFormatter(request.name);
        argument.description = string.titleFormatter(request.description);

        const category = await this._repository.create(argument);

        return this._mapper.map(category, CategoryResponse);
    }
    async update(id: number, request: CategoryRequest): Promise<CategoryResponse> {
        if (isNaN(id) || !id)
            throw new CategoryException(
                'id inválido!',
                ['ID informado na rota é inválido!'],
                StatusCodes.BAD_REQUEST);

        const argument: CategoryArgument = new CategoryArgument();
        argument.name = string.titleFormatter(request.name);
        argument.description = string.titleFormatter(request.description);

        const category = await this._repository.update(id, argument);

        return this._mapper.map(category, CategoryResponse);
    }
    async delete(id: number): Promise<boolean> {
        if (isNaN(id) || !id)
            throw new CategoryException(
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

    async getTotalCategories(): Promise<number> {
        return await this._repository.total()
    }
}

export default CategoryService;