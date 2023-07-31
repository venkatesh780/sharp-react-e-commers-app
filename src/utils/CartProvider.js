import CartContext from "./CartContext";
import { useState } from "react";

const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);

  let itemPresent = false;
  let exitingItem = {};
  const addItemToCart = (item) => {
    for (let itm of cartItems) {
      if (itm.id === item.id) {
        exitingItem = item;
        console.log("duplicate", exitingItem);
      }
    }
    setCartItems((prevState) => {
      return [...prevState, item];
    });
  };

  const removeItemFromCart = (id) => {
    const newCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems([...newCartItems]);
  };

  const cartCtx = {
    items: cartItems,
    totalQuantity: cartItems.length,
    addItem: addItemToCart,
    removeItem: removeItemFromCart,
  };

  return (
    <CartContext.Provider value={cartCtx}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
