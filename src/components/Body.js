import classes from "./Body.module.css";
import Item from "./Item";

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
            id={item.id}
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
