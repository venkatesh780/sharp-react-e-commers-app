import { useParams } from "react-router-dom";
import classes from "./ProductDetailsPage.module.css";

const productsArr = [
  {
    id: "p1",
    title: "Colors",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    id: "p2",
    title: "Black and white Colors",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {
    id: "p3",
    title: "Yellow and Black Colors",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    id: "p4",
    title: "Blue Color",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const ProductDetailsPage = () => {
  const { id } = useParams();
  const product = productsArr.filter((item) => id === item.id);
  const item = product[0];
  return (
    <div className={classes.product_container}>
      <div>
        <h1>{item.title}</h1>
        <img src={item.imageUrl} />
      </div>

      <div className={classes.actions}>
        <span>$ {item.price}</span>
        <button>Add TO CART</button>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
