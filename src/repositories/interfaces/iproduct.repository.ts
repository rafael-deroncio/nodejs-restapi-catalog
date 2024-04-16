import PaginationArgument from "../../arguments/pagination.request"
import ProductArgument from "../../arguments/product.argument"
import ProductModel from "../../models/product.model"

interface IProductRepository {
    paged(Argument: PaginationArgument): Promise<Array<ProductModel>>
    get(): Promise<ProductModel>
    create(Argument: ProductArgument): Promise<ProductModel>
    update(id: number, Argument: ProductArgument): Promise<ProductModel>
    Argument(id: number): Promise<boolean>
}

export default IProductRepository;
