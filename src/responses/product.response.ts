import ProductDTO from "../configurations/dtos/product.dto";

type ProductResponse = Omit<ProductDTO, 'active' | 'created' | 'updated'>
export default ProductResponse;
