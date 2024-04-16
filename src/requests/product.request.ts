import ProductDTO from "../configurations/dtos/product.dto";

type ProductRequest = Omit<ProductDTO, 'active' | 'created' | 'updated'>
export default ProductRequest;
