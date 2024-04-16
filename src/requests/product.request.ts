import ProductDTO from "../configurations/dtos/product.dto";

type ProductResquest = Omit<ProductDTO, 'active' | 'created' | 'updated'>
export default ProductResquest;
