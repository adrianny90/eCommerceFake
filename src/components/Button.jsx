import { useState, useEffect } from "react";
const Button = ({ product }) => {
  const [count, setCount] = useState(0);

  const updateCart = (newCount) => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]"); // Pobierz istniejący koszyk lub pustą tablicę
    const existingProductIndex = cart.findIndex(
      (item) => item.id === product.id
    );

    if (newCount > 0) {
      if (existingProductIndex > -1) {
        // Produkt już istnieje w koszyku, aktualizuj ilość
        cart[existingProductIndex].quantity = newCount;
      } else {
        // Dodaj nowy produkt do koszyka
        cart.push({ ...product, quantity: newCount });
      }
    } else {
      // Usuń produkt z koszyka, jeśli count = 0
      if (existingProductIndex > -1) {
        cart.splice(existingProductIndex, 1);
      }
    }

    // Zapisz zaktualizowany koszyk do localStorage
    localStorage.setItem("cart", JSON.stringify(cart));
  };
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const productInCart = cart.find((item) => item.id === product.id);
    if (productInCart) {
      setCount(productInCart.quantity);
    }
  }, [product.id]);

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
        <span className="content-center p-1 my-1 text-white font-semibold text-sm">
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
