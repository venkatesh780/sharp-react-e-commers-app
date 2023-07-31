import classes from "./CartItem.module.css";

const CartItem = (props) => {
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

        <div className={classes.quantity}>{props.quantity}</div>
        <button>Remove</button>
      </div>
      <hr />
    </>
  );
};

export default CartItem;
