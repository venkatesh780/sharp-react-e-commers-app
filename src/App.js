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
import ProductDetailsPage from "./components/ProductDetailsPage";
import SignUp from "./components/SignUp";
import TokenProvider from "./utils/TokenProvider";

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
      <TokenProvider>
        <Header onShowCart={showCartHandler} />
        {isCartOpen && <Cart onHideCart={hideCartHandler} />}
        <Outlet />
        <Footer />
      </TokenProvider>
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
        element: <SignUp />,
      },
      {
        path: "/home",
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
      {
        path: "/store/:id",
        element: <ProductDetailsPage />,
      },
    ],
  },
]);

export default App;
