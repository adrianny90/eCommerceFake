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
    <div className="grid lg:grid-cols-1 gap-4 p-4 w-full max-w-7xl mx-auto">
      {shop.length === 0 ? (
        <div className="text-center text-xl font-bold">Your cart is empty</div>
      ) : (
        <>
          {shop.map((product) => (
            <div
              key={product.id}
              className="flex items-center bg-blue-800 rounded-md p-4 shadow-xl hover:shadow-2xl hover:cursor-pointer"
            >
              <div className="flex-shrink-0 w-40 h-40 rounded-full overflow-hidden mr-4">
                <img
                  src={product.image}
                  alt="Image missing"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 flex justify-between items-center">
                <div className="flex-1">
                  <h2 className="text-xl text-white font-semibold mb-1 truncate">
                    {product.title}
                  </h2>
                  <p className="text-sm text-white mb-2">
                    {product.description}
                  </p>
                  <p className="text-lg text-white font-bold">
                    Unit price: {product.price} €
                  </p>
                  <div className="flex justify-center items-center space-x-2">
                    <Button product={product} shop={shop} setShop={setShop} />
                    <button
                      onClick={() =>
                        removeFromCart({ shop, setShop }, product.id)
                      }
                      className="btn btn-ghost"
                    >
                      Remove
                    </button>
                  </div>

                  <p className="text-lg text-white font-bold">
                    {product.price} €
                  </p>
                </div>
              </div>
            </div>
          ))}

          <div className="text-center text-xl font-bold text-black mt-4">
            Total Price: {price.toFixed(2)} €
          </div>
        </>
      )}
    </div>
  );
};

export default CartProducts;
