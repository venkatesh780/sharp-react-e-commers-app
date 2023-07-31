import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const cartElements = [
  {
    title: "Colors",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",

    quantity: 2,
  },

  {
    title: "Black and white Colors",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",

    quantity: 3,
  },

  {
    title: "Yellow and Black Colors",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",

    quantity: 1,
  },
];

const Cart = (props) => {
  return (
    <div className={classes.cart}>
      <div className={classes.cart_header}>
        <h1>Your Cart</h1>
        <button onClick={props.onHideCart} className={classes.close_btn}>
          {" "}
          X{" "}
        </button>
      </div>

      <div className={classes.cart_titles}>
        <h3>ITEM</h3>
        <h3>PRICE</h3>
        <h3>QUANTITY</h3>
      </div>
      <div>
        <ul>
          {cartElements.map((item) => {
            return (
              <CartItem
                key={Math.random()}
                title={item.title}
                price={item.price}
                quantity={item.quantity}
                imgURL={item.imageUrl}
              />
            );
          })}
        </ul>
      </div>
      <div className={classes.cart_actions}>
        <h4>Total Price ${129}</h4>
        <button>PURCHASE</button>
      </div>
    </div>
  );
};

export default Cart;
