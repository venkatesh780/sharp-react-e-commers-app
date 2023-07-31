import classes from "./Body.module.css";
import Item from "./Item";

const productsArr = [
  {
    title: "Colors",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    title: "Black and white Colors",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {
    title: "Yellow and Black Colors",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    title: "Blue Color",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const Body = () => {
  const itemsList = (
    <ul className={classes.item_list}>
      {productsArr.map((item) => {
        return (
          <Item
            key={Math.random() * 10}
            title={item.title}
            price={item.price}
            imgURL={item.imageUrl}
          />
        );
      })}
    </ul>
  );
  return (
    <div className={classes.body}>
      <h3>Music</h3>
      {itemsList}
    </div>
  );
};

export default Body;
