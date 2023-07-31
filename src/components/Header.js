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
        <a>
          <h4>HOME</h4>
        </a>

        <a>
          <h4>STORE</h4>
        </a>
        <Link to="/aboutus">
          <a>
            <h4>ABOUT</h4>
          </a>
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
