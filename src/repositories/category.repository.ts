import { CategoryEntity } from "../configurations/entities/category.entity";
import BaseRepository from "./base.repository";
import ICategoryRepository from "./interfaces/icategory.repository";
import PaginationArgument from "../arguments/pagination.argument";
import CategoryArgument from "../arguments/category.argument";
import CategoryModel from "../models/category.model";
import IMapper from "../configurations/interfaces/imapper";
import Mapper from "../configurations/mapper";
import DatabaseException from "../exceptions/database.exception";

class CategoryRepository extends BaseRepository<CategoryEntity> implements ICategoryRepository {

    private static _instance: ICategoryRepository;
    private _mapper: IMapper;

    static instance(): ICategoryRepository {
        if (!this._instance) this._instance = new CategoryRepository();
        return this._instance
    }

    private constructor() {
        super(CategoryEntity);
        this._mapper = Mapper.instance();
    }
    async paged(argument: PaginationArgument): Promise<Array<CategoryModel>> {
        try {
            const categories: Array<CategoryEntity> = await this.connection()
                .createQueryBuilder('category')
                .orderBy('category.id', 'ASC')
                .skip((argument.page - 1) * argument.size)
                .take(argument.size)
                .getMany();
            return categories.map(category => this._mapper.map(category, CategoryModel));
        } catch (error) {
            console.log(error);
            throw new DatabaseException('Erro ao listar categorias.');
        }
    }

    async get(id: number): Promise<CategoryModel> {
        try {
            return this._mapper.map(
                await this.connection().findOne({ where: { id } }),
                CategoryModel);
        } catch (error) {
            console.log(error);
            throw new DatabaseException('Erro ao obter categoria.');
        }
    }

    async create(argument: CategoryArgument): Promise<CategoryModel> {
        try {
            await this.start();
            const category: CategoryEntity = await this.connection().save({ ...argument });
            await this.commit();
            return this._mapper.map(category, CategoryModel);
        } catch (error) {
            console.log(error);
            this.rollback();
            throw new DatabaseException('Erro ao criar categoria.');
        }
    }

    async update(id: number, argument: CategoryArgument): Promise<CategoryModel> {
        try {
            await this.start();
            const result: boolean = (await this.connection().update(id, { ...argument })).affected! > 0;
            if (result) {
                this.commit();
                return this.get(id);
            }
            throw new DatabaseException('Erro ao atualizar categoria.');
        } catch (error) {
            this.rollback();
            console.log(error);
            throw error;
        }
    }

    async delete(id: number): Promise<boolean> {
        try {
            await this.start();
            const result: boolean = (await this.connection().delete({ id })).affected! > 0
            this.commit();
            return result;
        } catch (error) {
            this.rollback();
            console.log(error);
            throw new DatabaseException('Erro ao deletar produto.');
        }
    }

    override async total(): Promise<number> {
        return await this.connection().count();
    }
}

export default CategoryRepository;
