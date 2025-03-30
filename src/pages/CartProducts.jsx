import Button from "../components/Button";
import { useState, useEffect } from "react";
import { removeFromCart } from "../utils/helpers";

const CartProducts = ({ shop, setShop }) => {
  const [price, setPrice] = useState(0);
  console.log("cartProducts", shop);

  useEffect(() => {
    const totalPrice = shop.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
    setPrice(totalPrice);
  }, [shop]);

  return (
    <div className="grid grid-cols-1 gap-4 p-4 w-full max-w-7xl mx-auto md:p-6 lg:p-8">
      {shop.length === 0 ? (
        <div className="text-center text-lg font-bold md:text-xl">
          Your cart is empty
        </div>
      ) : (
        <>
          {shop.map((product) => (
            <div
              key={product.id}
              className="flex flex-col sm:flex-row items-center bg-blue-800 rounded-md p-4 shadow-xl hover:shadow-2xl hover:cursor-pointer transition-shadow duration-200"
            >
              <div className="flex-shrink-0 w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden mb-4 sm:mb-0 sm:mr-4">
                <img
                  src={product.image}
                  alt="Image missing"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 flex flex-col sm:flex-row sm:justify-between sm:items-center w-full">
                <div className="flex-1 text-center sm:text-left">
                  <h2 className="text-lg text-white font-semibold mb-1 truncate md:text-xl">
                    {product.title}
                  </h2>
                  <p className="text-sm text-white mb-2 line-clamp-2">
                    {product.description}
                  </p>
                  <p className="text-md text-white font-bold md:text-lg">
                    Unit price: {product.price} €
                  </p>
                  <div className="flex justify-center sm:justify-start items-center space-x-2 mt-2">
                    <Button product={product} shop={shop} setShop={setShop} />
                    <button
                      onClick={() =>
                        removeFromCart({ shop, setShop }, product.id)
                      }
                      className="btn btn-ghost text-white hover:bg-blue-700 px-3 py-1 rounded-md"
                    >
                      Remove
                    </button>
                  </div>
                  <p className="hidden md:block text-md text-white font-bold mt-2 md:text-lg">
                    {product.price} €
                  </p>
                </div>
              </div>
            </div>
          ))}

          <div className="text-center text-lg font-bold text-black mt-4 md:text-xl">
            Total Price: {price.toFixed(2)} €
          </div>
        </>
      )}
    </div>
  );
};

export default CartProducts;
