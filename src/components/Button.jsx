import { useState, useEffect } from "react";
const Button = ({ product, shop, setShop }) => {
  const [count, setCount] = useState(0);
  console.log("cart in button element", shop);

  useEffect(() => {
    const productInCart = shop.find((item) => item.id === product.id);

    setCount(productInCart ? productInCart.quantity : 0);
  }, [shop, product.id]);

  const updateCart = (newCount) => {
    let updatedShop = [...shop];
    const existingProductIndex = updatedShop.findIndex(
      (item) => item.id === product.id
    );

    if (newCount > 0) {
      if (existingProductIndex > -1) {
        updatedShop[existingProductIndex].quantity = newCount;
      } else {
        updatedShop.push({ ...product, quantity: newCount });
      }
    } else {
      if (existingProductIndex > -1) {
        updatedShop.splice(existingProductIndex, 1);
      }
    }

    setShop(updatedShop);
    localStorage.setItem("cart", JSON.stringify(updatedShop));
  };

  const handleRemove = () => {
    setCount((prev) => {
      const newCount = prev > 0 ? prev - 1 : 0;
      updateCart(newCount);

      return newCount;
    });
  };

  const handleAdd = () => {
    setCount((prev) => {
      const newCount = prev + 1;
      updateCart(newCount);

      return newCount;
    });
  };

  if (count === 0) {
    return (
      <button
        className="content-center my-1   bg-blue-400 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200"
        onClick={() => handleAdd()}
      >
        Add to cart
      </button>
    );
  } else {
    return (
      <>
        <button
          className="content-center btn btn-error"
          onClick={() => handleRemove()}
        >
          -
        </button>
        <span className="content-center p-1 my-1 text-red-400 font-semibold text-sm">
          {count}
        </span>
        <button
          className="content-center btn btn-success"
          onClick={() => handleAdd()}
        >
          +
        </button>
      </>
    );
  }
};
export default Button;
