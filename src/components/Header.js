import { Nav } from "react-bootstrap";
import classes from "./Header.module.css";
import HeaderTitle from "./HeaderTitle";
import CartContext from "../utils/CartContext";
import { useContext } from "react";

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
        <a>
          <h4>ABOUT</h4>
        </a>
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
