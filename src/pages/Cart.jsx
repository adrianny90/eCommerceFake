import CartProducts from "./CartProducts";
import { useOutletContext } from "react-router";

const Cart = () => {
  const { cart, setCart } = useOutletContext();
  if (!cart.length)
    return (
      <div className="mt-5">
        <p>Basket is empty</p>
      </div>
    );
  return (
    <>
      <h1 className="text-4xl font-bold mb-4 text-black text-center">
        Products in your cart
      </h1>
      <CartProducts shop={cart} setShop={setCart} />
    </>
  );
};

export default Cart;
