export const removeFromCart = ({ shop, setShop }, productId) => {
  const updatedShop = shop.filter((item) => item.id !== productId);
  setShop(updatedShop);
  localStorage.setItem("cart", JSON.stringify(updatedShop));
};
