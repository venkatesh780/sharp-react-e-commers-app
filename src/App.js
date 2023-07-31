import Body from "./components/Body";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import { useState } from "react";

const App = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const showCartHandler = () => {
    setIsCartOpen(true);
  };
  const hideCartHandler = () => {
    setIsCartOpen(false);
  };

  return (
    <>
      <Header onShowCart={showCartHandler} />
      {isCartOpen && <Cart onHideCart={hideCartHandler} />}
      <Body />
      <Footer />
    </>
  );
};

export default App;
