import classes from "./Header.module.css";
import HeaderTitle from "./HeaderTitle";
import CartContext from "../utils/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Header = (props) => {
  const cartCtx = useContext(CartContext);

  return (
    <>
      <header className={classes.header}>
        <Link to="/home">
          <h4>HOME</h4>
        </Link>

        <Link to="/store">
          <h4>STORE</h4>
        </Link>
        <Link to="/aboutus">
          <h4>ABOUT</h4>
        </Link>
        <Link to="/contactus">
          <h4>CONTACT US</h4>
        </Link>
        <Link to="/">
          <h4> Sign Up</h4>
        </Link>

        <a>
          <button onClick={props.onShowCart}>
            CART-{cartCtx.totalQuantity}
          </button>
        </a>
      </header>
      <HeaderTitle />
    </>
  );
};

export default Header;
