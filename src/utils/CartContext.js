import { createContext } from "react";

const CartContext = createContext({
  items: [],
  totalQuanitity: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default CartContext;
