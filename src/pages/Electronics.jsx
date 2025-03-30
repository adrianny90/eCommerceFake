import Button from "../components/Button";
import { useAllProducts } from "./AllProductsContext";
import { useOutletContext } from "react-router";

const Electronics = () => {
  const context = useAllProducts();
  const { products } = context;
  const { cart, setCart } = useOutletContext();
  const filteredProducts = products.filter(
    (item) => item.category === "electronics"
  );
  return (
    <div className="p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 w-full max-w-7xl mx-auto">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="shadow-xl hover:shadow-2xl hover:cursor-pointer rounded-md w-full h-full flex flex-col bg-white"
          >
            <figure className="rounded-t-md overflow-hidden w-full h-64">
              <div className="w-full h-full">
                <img src={product.image} alt="Image missing" />{" "}
              </div>
            </figure>
            <h2 className="text-xl text-black bg-blue-200 text-center font-semi bold border-b border-gray-400 pb-2 mb-2 truncate">
              {product.title}
            </h2>
            <p className="text-lg text-black bg-blue-200 text-center font-bold mb-4">
              ${product.price}
            </p>
            <div className="flex justify-center items-center ">
              <Button product={product} shop={cart} setShop={setCart} />{" "}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Electronics;
