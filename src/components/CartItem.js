import classes from "./CartItem.module.css";

import { useContext } from "react";
import CartContext from "../utils/CartContext";

const CartItem = (props) => {
  const cartCtx = useContext(CartContext);

  const removItemFromCartHandler = () => {
    cartCtx.removeItem(props.id);
  };

  return (
    <>
      <div className={classes.cart_item}>
        <div className={classes.cart_img_container}>
          <img src={props.imgURL} />
          <h4>{props.title}</h4>
        </div>
        <div>
          <h3>${props.price}</h3>
        </div>

        <div className={classes.quantity}>{1}</div>
        <button onClick={removItemFromCartHandler}>Remove</button>
      </div>
      <hr />
    </>
  );
};

export default CartItem;
