import { Nav } from "react-bootstrap";
import classes from "./Header.module.css";
import HeaderTitle from "./HeaderTitle";

const Header = () => {
  return (
    <>
      <header className={classes.header}>
        <h4>HOME</h4>

        <h4>STORE</h4>
        <h4>ABOUT</h4>
        <h4>CART</h4>
      </header>
      <HeaderTitle />
    </>
  );
};

export default Header;
