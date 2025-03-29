import { useAllProducts } from "./AllProductsContext";
import Product from "./Product";

const ProductDetails = ({ shop, setShop }) => {
  const context = useAllProducts();

  return <Product products={context} shop={shop} setShop={setShop} />;
};

export default ProductDetails;
