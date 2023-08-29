import classes from "./Header.module.css";
import HeaderTitle from "./HeaderTitle";
import CartContext from "../utils/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import TokenContext from "../utils/TokenContext";

const Header = (props) => {
  const cartCtx = useContext(CartContext);
  const tokenCtx = useContext(TokenContext);

  const logoutHandler = () => {
    tokenCtx.clearToken();
  };

  const isUserLogin = tokenCtx.loginStatus;

  return (
    <>
      <header className={classes.header}>
        {isUserLogin && (
          <Link to="/home">
            <h4>HOME</h4>
          </Link>
        )}

        {isUserLogin && (
          <Link to="/store">
            <h4>STORE</h4>
          </Link>
        )}
        <Link to="/aboutus">
          <h4>ABOUT</h4>
        </Link>
        <Link to="/contactus">
          <h4>CONTACT US</h4>
        </Link>
        {!isUserLogin && (
          <Link to="/">
            <h4> Sign Up</h4>
          </Link>
        )}
        {isUserLogin && (
          <Link to="">
            <h4 onClick={logoutHandler}> Logout</h4>
          </Link>
        )}

        {isUserLogin && (
          <button onClick={props.onShowCart}>
            CART-{cartCtx.totalQuantity}
          </button>
        )}
        {isUserLogin && (
          <Link to="/profile">
            <h4>Profile</h4>
          </Link>
        )}
      </header>
      <HeaderTitle />
    </>
  );
};

export default Header;
