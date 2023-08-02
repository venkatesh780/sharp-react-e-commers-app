import classes from "./Home.module.css";

const toursList = [
  {
    id: "t1",
    date: "JUL 16",
    singer: "DETROIT, MI",
    venue: "DTE ENERGY MUSIC THEATRE",
  },
  {
    id: "t2",
    date: "JUL 16",
    singer: "DETROIT, MI",
    venue: "DTE ENERGY MUSIC THEATRE",
  },
  {
    id: "t3",
    date: "JUL 16",
    singer: "DETROIT, MI",
    venue: "DTE ENERGY MUSIC THEATRE",
  },
  {
    id: "t4",
    date: "JUL 16",
    singer: "DETROIT, MI",
    venue: "DTE ENERGY MUSIC THEATRE",
  },
  {
    id: "t5",
    date: "JUL 16",
    singer: "DETROIT, MI",
    venue: "DTE ENERGY MUSIC THEATRE",
  },
];
const Home = () => {
  const tourListItems = (
    <ul className={classes.list}>
      {toursList.map((item) => {
        return (
          <li key={item.id}>
            <span>{item.date}</span>
            <span>{item.singer}</span>
            <span>{item.venue}</span>
            <button>BUY TICKETS</button>
          </li>
        );
      })}
    </ul>
  );
  return (
    <div>
      <h1>Tours</h1>
      {tourListItems}
    </div>
  );
};

export default Home;
