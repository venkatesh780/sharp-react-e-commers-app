import Body from "./components/Body";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import { useState } from "react";
import CartProvider from "./utils/CartProvider";

const App = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const showCartHandler = () => {
    setIsCartOpen(true);
  };
  const hideCartHandler = () => {
    setIsCartOpen(false);
  };

  return (
    <CartProvider>
      <Header onShowCart={showCartHandler} />
      {isCartOpen && <Cart onHideCart={hideCartHandler} />}
      <Body />
      <Footer />
    </CartProvider>
  );
};

export default App;
