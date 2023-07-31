import classes from "./Item.module.css";
import { Button } from "react-bootstrap";

const Item = (props) => {
  return (
    <div className={classes.item}>
      <h2>{props.title}</h2>
      <img src={props.imgURL} alt="album" />
      <div className={classes.actions}>
        <span className={classes.price}>$ {props.price}</span>
        <Button className="bg-info">ADD TO CART</Button>
      </div>
    </div>
  );
};

export default Item;
