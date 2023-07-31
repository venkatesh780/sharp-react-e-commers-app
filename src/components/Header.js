import { Nav } from "react-bootstrap";
import classes from "./Header.module.css";
import HeaderTitle from "./HeaderTitle";

const Header = (props) => {
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
          <button onClick={props.onShowCart}>CART</button>
        </a>
      </header>
      <HeaderTitle />
    </>
  );
};

export default Header;
