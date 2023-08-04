import classes from "./Item.module.css";
import { Button } from "react-bootstrap";
import { useContext } from "react";
import CartContext from "../utils/CartContext";

const Item = (props) => {
  const cartCtx = useContext(CartContext);

  const addItemToCartHandler = () => {
    cartCtx.addItem({
      id: props.id,
      title: props.title,
      imgURL: props.imgURL,
      price: props.price,
    });
  };

  return (
    <div className={classes.item} key={props.id}>
      <h2>{props.title}</h2>
      <img src={props.imgURL} alt="album" />
      <div className={classes.actions}>
        <span className={classes.price}>$ {props.price}</span>
        <Button className="bg-info" onClick={addItemToCartHandler}>
          ADD TO CART
        </Button>
      </div>
    </div>
  );
};

export default Item;
