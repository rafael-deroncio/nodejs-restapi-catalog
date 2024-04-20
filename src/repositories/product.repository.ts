import { ProductEntity } from "../configurations/entities/product.entity";
import BaseRepository from "./base.repository";
import IProductRepository from "./interfaces/iproduct.repository";
import PaginationArgument from "../arguments/pagination.argument";
import ProductArgument from "../arguments/product.argument";
import ProductModel from "../models/product.model";
import IMapper from "../configurations/interfaces/imapper";
import Mapper from "../configurations/mapper";
import DatabaseException from "../exceptions/database.exception";

class ProductRepository extends BaseRepository<ProductEntity> implements IProductRepository {

    private static _instance: IProductRepository;
    private _mapper: IMapper;

    static instance(): IProductRepository {
        if (!this._instance) this._instance = new ProductRepository();
        return this._instance
    }

    private constructor() {
        super(ProductEntity);
        this._mapper = Mapper.instance();
    }

    async paged(argument: PaginationArgument): Promise<Array<ProductModel>> {
        try {
            const products: Array<ProductEntity> = await this.connection()
                .createQueryBuilder('product')
                .leftJoinAndSelect('product.category', 'category')
                .orderBy('product.id', 'ASC')
                .skip((argument.page - 1) * argument.size)
                .take(argument.size)
                .getMany();
            return products.map(product => this._mapper.map(product, ProductModel));
        } catch (error) {
            console.log(error);
            throw new DatabaseException('Erro ao listar produtos.');
        }
    }

    async get(id: number): Promise<ProductModel> {
        try {
            const product: ProductEntity | null = await this.connection()
                .createQueryBuilder('product')
                .leftJoinAndSelect('product.category', 'category')
                .where('product.id = :id', { id })
                .getOne();

            return this._mapper.map(product, ProductModel);
        } catch (error) {
            console.log(error);
            throw new DatabaseException('Erro ao obter produto.');
        }
    }

    async create(argument: ProductArgument): Promise<ProductModel> {
        try {
            await this.start();
            const product: ProductEntity = await this.connection().save({ ...argument });
            await this.commit();
            return this._mapper.map(product, ProductModel);
        } catch (error) {
            console.log(error);
            this.rollback();
            throw new DatabaseException('Erro ao criar produto.');
        }
    }

    async update(id: number, argument: ProductArgument): Promise<ProductModel> {
        try {
            await this.start();
            const result: boolean = (await this.connection().update(id, { ...argument })).affected! > 0;
            if (result) {
                this.commit();
                return this.get(id);
            }
            throw new DatabaseException('Erro ao atualizar produto.');
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

export default ProductRepository;
