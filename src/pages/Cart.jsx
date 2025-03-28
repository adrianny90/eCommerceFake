import { useEffect, useState } from "react";
import CartProducts from "./CartProducts";

const Cart = () => {
  const [shop, setShop] = useState(
    JSON.parse(localStorage.getItem("cart") || "[]")
  );
  // const { cart, setCart } = useOutletContext();
  useEffect(() => {
    // Funkcja do aktualizacji stanu na podstawie localStorage
    const handleStorageChange = () => {
      const updatedCart = JSON.parse(localStorage.getItem("cart") || "[]");
      setShop(updatedCart);
    };

    // Dodaj listener dla zdarzenia 'storage'
    window.addEventListener("storage", handleStorageChange);

    // Opcjonalnie: Wywołaj raz przy montowaniu, aby upewnić się, że stan jest aktualny
    handleStorageChange();

    // Usuń listener przy odmontowaniu komponentu
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []); // Pusta tablica zależności, aby useEffect wykonał się tylko raz przy montowaniu

  return (
    <>
      <h1 className="text-4xl font-bold mb-4 text-black text-center">
        Products in your cart
      </h1>
      <CartProducts shop={shop} setShop={setShop} /> {/* Przekaż setShop */}
    </>
  );
};

export default Cart;
