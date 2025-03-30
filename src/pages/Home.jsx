import { Link, Outlet } from "react-router";
import ProductDetails from "./ProductDetails";
import { useAllProducts } from "./AllProductsContext";
import { useOutletContext } from "react-router";

const Home = () => {
  const context = useAllProducts();
  const { products, loading, error } = context;
  const { cart, setCart } = useOutletContext();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-2xl font-bold">Loading products...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-2xl font-bold text-red-500">Error: {error}</div>
      </div>
    );
  }

  if (!products || products.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-2xl font-bold">No products available</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className=" ">
        <div>
          <Link to="/jewelery">
            <button className="bg-blue-200 border-2 border-blue-500 text-blue-700 m-4 px-6 py-2 text-2xl font-bold rounded-lg shadow-md hover:bg-blue-300 hover:border-blue-600 transition duration-300">
              Jewelery
            </button>
          </Link>
          <Link to="/electronics">
            <button className="bg-blue-200 border-2 border-blue-500 text-blue-700 m-4 px-6 py-2 text-2xl font-bold rounded-lg shadow-md hover:bg-blue-300 hover:border-blue-600 transition duration-300">
              Electronics
            </button>
          </Link>
          <Link to="/mensclothing">
            <button className="bg-blue-200 border-2 border-blue-500 text-blue-700 m-4 px-6 py-2 text-2xl font-bold rounded-lg shadow-md hover:bg-blue-300 hover:border-blue-600 transition duration-300">
              Men's clothing
            </button>
          </Link>
          <Link to="/womensclothing">
            <button className="bg-blue-200 border-2 border-blue-500 text-blue-700 m-4 px-6 py-2 text-2xl font-bold rounded-lg shadow-md hover:bg-blue-300 hover:border-blue-600 transition duration-300">
              Women's clothing
            </button>
          </Link>
        </div>
        <h1 className="text-6xl my-6 font-bold mb-4 text-black text-center">
          Our Products
        </h1>{" "}
        <ProductDetails shop={cart} setShop={setCart} />
      </div>
      <Outlet />
    </div>
  );
};

export default Home;
