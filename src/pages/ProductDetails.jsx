import { useAllProducts } from "./AllProductsContext";
import Product from "./Product";

const ProductDetails = () => {
  const context = useAllProducts();

  return <Product products={context} />;
};

export default ProductDetails;
