import Body from "./components/Body";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import { useState } from "react";
import CartProvider from "./utils/CartProvider";
import AboutUs from "./components/AboutUs";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./components/Home";
import Contactus from "./components/Contactus";

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
      <Outlet />
      <Footer />
    </CartProvider>
  );
};

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <p>Somthing went wrong</p>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/store",
        element: <Body />,
      },
      {
        path: "/aboutus",
        element: <AboutUs />,
      },
      {
        path: "/contactus",
        element: <Contactus />,
      },
    ],
  },
]);

export default App;
