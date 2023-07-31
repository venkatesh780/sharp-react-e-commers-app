import classes from "./Item.module.css";

const Item = (props) => {
  console.log("item ");
  return (
    <div>
      <h5>Album</h5>
      <img
        src="https://prasadyash2411.github.io/ecom-website/img/Album%201.png"
        alt="album"
      />
      <div>
        <span>$ 12.9</span>
        <span>
          <button>ADD TO CART</button>
        </span>
      </div>
    </div>
  );
};

export default Item;
