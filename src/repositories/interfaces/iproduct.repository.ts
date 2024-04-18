import PaginationArgument from "../../arguments/pagination.argument"
import ProductArgument from "../../arguments/product.argument"
import ProductModel from "../../models/product.model"

interface IProductRepository {
    paged(argument: PaginationArgument): Promise<Array<ProductModel>>
    get(id: number): Promise<ProductModel>
    create(argument: ProductArgument): Promise<ProductModel>
    update(id: number, argument: ProductArgument): Promise<ProductModel>
    delete(id: number): Promise<boolean>
    total(): Promise<number>
}

export default IProductRepository;
